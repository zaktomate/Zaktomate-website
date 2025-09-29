import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaPaperPlane, FaRobot, FaUser, FaCopy, FaThumbsUp, FaThumbsDown } from 'react-icons/fa';
import Card from '../common/Card';
import { getTextColor } from '../../utils/colorUtils';

// Enhanced markdown parser with improved text handling
const parseMarkdown = (text) => {
  if (!text) return text;
  
  // First, normalize line breaks and clean up the text
  let html = text
    .replace(/\r\n/g, '\n')  // Normalize line endings
    .replace(/\r/g, '\n')    // Handle old Mac line endings
    .trim();

  // Split into lines for processing
  const lines = html.split('\n');
  const processedLines = [];
  let i = 0;

  while (i < lines.length) {
    const line = lines[i].trim();
    
    // Skip empty lines but preserve spacing
    if (!line) {
      processedLines.push('');
      i++;
      continue;
    }

    // Handle headers (must be at start of line)
    if (line.startsWith('### ')) {
      processedLines.push(`<h3 class="text-lg font-semibold mt-4 mb-2">${line.substring(4)}</h3>`);
      i++;
      continue;
    }
    if (line.startsWith('## ')) {
      processedLines.push(`<h2 class="text-xl font-bold mt-6 mb-3">${line.substring(3)}</h2>`);
      i++;
      continue;
    }
    if (line.startsWith('# ')) {
      processedLines.push(`<h1 class="text-2xl font-bold mt-8 mb-4">${line.substring(2)}</h1>`);
      i++;
      continue;
    }

    // Handle horizontal rules
    if (line === '---' || line === '***' || line === '___') {
      processedLines.push('<hr class="border-gray-300 dark:border-gray-600 my-4" />');
      i++;
      continue;
    }

    // Handle bullet points (*, -, +) - including nested
    const bulletMatch = line.match(/^(\s*)[*\-+]\s+(.+)$/);
    if (bulletMatch) {
      const [, indent, content] = bulletMatch;
      const listItems = [`<li class="mb-1">${content}</li>`];
      i++;

      // Collect consecutive bullet points
      while (i < lines.length) {
        const nextLine = lines[i].trim();
        if (!nextLine) {
          i++;
          continue;
        }
        
        const nextBulletMatch = nextLine.match(/^(\s*)[*\-+]\s+(.+)$/);
        if (nextBulletMatch) {
          const [, nextIndent, nextContent] = nextBulletMatch;
          listItems.push(`<li class="mb-1">${nextContent}</li>`);
          i++;
        } else {
          break;
        }
      }

      processedLines.push(`<ul class="list-disc ml-6 space-y-1 my-3">${listItems.join('')}</ul>`);
      continue;
    }

    // Handle numbered lists
    const numberMatch = line.match(/^(\s*)(\d+)\.\s+(.+)$/);
    if (numberMatch) {
      const [, indent, num, content] = numberMatch;
      const listItems = [`<li class="mb-1">${content}</li>`];
      i++;

      // Collect consecutive numbered items
      while (i < lines.length) {
        const nextLine = lines[i].trim();
        if (!nextLine) {
          i++;
          continue;
        }
        
        const nextNumberMatch = nextLine.match(/^(\s*)(\d+)\.\s+(.+)$/);
        if (nextNumberMatch) {
          const [, nextIndent, nextNum, nextContent] = nextNumberMatch;
          listItems.push(`<li class="mb-1">${nextContent}</li>`);
          i++;
        } else {
          break;
        }
      }

      processedLines.push(`<ol class="list-decimal ml-6 space-y-1 my-3">${listItems.join('')}</ol>`);
      continue;
    }

    // Handle tables
    if (line.includes('|') && lines[i + 1] && lines[i + 1].includes('|') && lines[i + 1].includes('-')) {
      const tableLines = [line];
      i++;

      // Collect all table lines
      while (i < lines.length) {
        const tableLine = lines[i].trim();
        if (tableLine.includes('|')) {
          tableLines.push(tableLine);
          i++;
        } else {
          break;
        }
      }

      if (tableLines.length >= 3) {
        const processedTable = processTable(tableLines);
        processedLines.push(processedTable);
        continue;
      }
    }

    // Handle code blocks
    if (line.startsWith('```')) {
      const codeLines = [];
      i++; // Skip opening ```
      
      while (i < lines.length && !lines[i].trim().startsWith('```')) {
        codeLines.push(lines[i]);
        i++;
      }
      
      if (i < lines.length) i++; // Skip closing ```
      
      const codeContent = codeLines.join('\n');
      processedLines.push(`<pre class="bg-gray-100 dark:bg-gray-800 p-3 rounded text-sm overflow-x-auto my-3 border"><code>${escapeHtml(codeContent)}</code></pre>`);
      continue;
    }

    // Regular paragraph
    processedLines.push(line);
    i++;
  }

  // Join processed lines and apply inline formatting
  html = processedLines.join('\n');

  // Apply inline formatting
  html = html
    // Bold text **text** or __text__
    .replace(/\*\*(.*?)\*\*/g, '<strong class="font-semibold">$1</strong>')
    .replace(/__(.*?)__/g, '<strong class="font-semibold">$1</strong>')
    // Italic text *text* or _text_ (after bold to avoid conflicts)
    .replace(/(?<!\*)\*([^*\n]+)\*(?!\*)/g, '<em>$1</em>')
    .replace(/(?<!_)_([^_\n]+)_(?!_)/g, '<em>$1</em>')
    // Inline code `code`
    .replace(/`([^`]+)`/g, '<code class="bg-gray-100 dark:bg-gray-800 px-1 py-0.5 rounded text-sm font-mono">$1</code>')
    // Links [text](url)
    .replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2" target="_blank" rel="noopener noreferrer" class="text-zakbot-blue hover:underline font-medium">$1</a>');

  // Convert single newlines to <br /> and double newlines to paragraph breaks
  html = html
    .replace(/\n\n+/g, '</p><p class="mb-3">')  // Double+ newlines = paragraph break
    .replace(/\n/g, '<br />')  // Single newlines = line break
    .replace(/^/, '<p class="mb-3">')  // Wrap start
    .replace(/$/, '</p>');  // Wrap end

  // Clean up empty paragraphs and fix spacing
  html = html
    .replace(/<p class="mb-3"><\/p>/g, '')
    .replace(/<p class="mb-3">(<[hou][1-6r]|<ul|<ol|<pre|<hr)/g, '$1')  // Remove p tags before block elements
    .replace(/(<\/[hou][1-6r]>|<\/ul>|<\/ol>|<\/pre>|<\/hr>)<\/p>/g, '$1')  // Remove p tags after block elements
    .replace(/(<br \/>){3,}/g, '<br /><br />');  // Limit consecutive breaks

  return html;
};

// Helper function to process tables
const processTable = (tableLines) => {
  if (tableLines.length < 3) return tableLines.join('\n');
  
  const headerLine = tableLines[0];
  const separatorLine = tableLines[1];
  const dataLines = tableLines.slice(2);
  
  // Parse header
  const headers = headerLine.split('|')
    .map(h => h.trim())
    .filter(h => h);
  
  // Parse data rows
  const rows = dataLines
    .map(line => 
      line.split('|')
        .map(cell => cell.trim())
        .filter(cell => cell)
    )
    .filter(row => row.length > 0);
  
  // Generate HTML table
  let tableHTML = '<div class="overflow-x-auto my-4"><table class="min-w-full border border-gray-300 dark:border-gray-600 rounded-lg">';
  
  // Header
  tableHTML += '<thead class="bg-gray-50 dark:bg-gray-800">';
  tableHTML += '<tr>';
  headers.forEach(header => {
    tableHTML += `<th class="px-4 py-3 text-left text-sm font-semibold text-gray-900 dark:text-gray-100 border-b border-gray-300 dark:border-gray-600">${header}</th>`;
  });
  tableHTML += '</tr>';
  tableHTML += '</thead>';
  
  // Body
  tableHTML += '<tbody class="divide-y divide-gray-200 dark:divide-gray-700">';
  rows.forEach((row, index) => {
    const bgColor = index % 2 === 0 ? 'bg-white dark:bg-gray-900' : 'bg-gray-50 dark:bg-gray-800';
    tableHTML += `<tr class="${bgColor}">`;
    row.forEach(cell => {
      tableHTML += `<td class="px-4 py-3 text-sm text-gray-700 dark:text-gray-300">${cell}</td>`;
    });
    tableHTML += '</tr>';
  });
  tableHTML += '</tbody>';
  tableHTML += '</table></div>';
  
  return tableHTML;
};

// Helper function to escape HTML
const escapeHtml = (text) => {
  const div = document.createElement('div');
  div.textContent = text;
  return div.innerHTML;
};

// Markdown component to safely render HTML
const MarkdownText = ({ text }) => {
  const htmlContent = parseMarkdown(text);
  
  return (
    <div 
      className="markdown-content text-sm leading-relaxed"
      dangerouslySetInnerHTML={{ __html: htmlContent }}
    />
  );
};

// Helper function to manage session IDs
const getOrCreateSessionId = () => {
  let sessionId = localStorage.getItem('zakbot_session_id');
  if (!sessionId) {
    sessionId = `zakbot_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
    localStorage.setItem('zakbot_session_id', sessionId);
  }
  return sessionId;
};

// N8N Chat API function
const sendMessageToN8N = async (message, client_id, hasSeenGreeting) => {
  try {
    const response = await fetch('https://zakbot.zaktomate.com/api/chat', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        chatInput: message, // n8n Chat Trigger expects 'chatInput'
        sessionId: getOrCreateSessionId(),
        client_id: client_id,
        hasSeenGreeting: hasSeenGreeting,
      })
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    
    // Return in the format the component expects
    return {
      reply: data.output || data.response || data.text || data.reply || "I'm sorry, I couldn't process your request.",
    };
  } catch (error) {
    console.error('N8N Chat API Error:', error);
    throw error;
  }
};

const ChatDemo = ({ headline, microcopy, capabilities, cta1, cta2 }) => {
  // Check if user has seen the greeting before
  const getInitialMessage = () => {
    const hasSeenGreeting = localStorage.getItem('zakbot_greeting_seen');
    if (!hasSeenGreeting) {
      // First time user - show greeting
      localStorage.setItem('zakbot_greeting_seen', 'true');
      return {
        id: 1,
        text: "Hi there! I'm Zakbot, built by the Zaktomate team. I'm here on the website to help you out. What can I do for you today?",
        sender: 'bot',
        timestamp: new Date(),
      };
    } else {
      // Returning user - show normal welcome
      return {
        id: 1,
        text: "Welcome back! Ready to pick up where you left off, or do you need help with something new today?",
        sender: 'bot',
        timestamp: new Date(),
      };
    }
  };

  const [messages, setMessages] = useState([getInitialMessage()]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef(null);

  const suggestedPrompts = [
    "What can you help me with?",
    "Tell me about Zaktomate services",
    "How does Zakbot work?",
  ];

  const scrollToBottom = () => {
    if (messagesEndRef.current) {
      // Use instant scrolling to avoid conflicts with global smooth scrolling
      messagesEndRef.current.scrollIntoView({ behavior: 'instant' });
    }
  };

  // Use a ref to track if we should scroll, to avoid multiple rapid scrolls
  const shouldScrollRef = useRef(true);

  const handleSendMessage = async (messageText) => {
    if (!messageText.trim()) return;

    const userMessage = {
      id: messages.length + 1,
      text: messageText,
      sender: 'user',
      timestamp: new Date(),
    };

    // Temporarily disable auto-scroll to prevent multiple rapid scrolls
    shouldScrollRef.current = false;
    setMessages((prev) => [...prev, userMessage]);
    setInputValue('');
    setIsLoading(true);

    // Re-enable scrolling after a short delay
    setTimeout(() => {
      shouldScrollRef.current = true;
    }, 100);

    try {
      // Check if user has seen greeting to send appropriate flag
      const hasSeenGreeting = localStorage.getItem('zakbot_greeting_seen') === 'true';
      const response = await sendMessageToN8N(messageText, "client_zaktomate", hasSeenGreeting);

      const botMessage = {
        id: messages.length + 2,
        text: response.reply || "I'm sorry, I couldn't process your request at the moment.",
        sender: 'bot',
        timestamp: new Date(),
      };

      // Temporarily disable auto-scroll to prevent multiple rapid scrolls
      shouldScrollRef.current = false;
      setMessages((prev) => [...prev, botMessage]);

      // Re-enable scrolling after a short delay and scroll to bottom
      setTimeout(() => {
        shouldScrollRef.current = true;
      }, 100);
    } catch (error) {
      console.error('Error sending message:', error);

      const errorMessage = {
        id: messages.length + 2,
        text: "I'm experiencing some technical difficulties right now. Please try again later.",
        sender: 'bot',
        timestamp: new Date(),
      };

      // Temporarily disable auto-scroll to prevent multiple rapid scrolls
      shouldScrollRef.current = false;
      setMessages((prev) => [...prev, errorMessage]);

      // Re-enable scrolling after a short delay and scroll to bottom
      setTimeout(() => {
        shouldScrollRef.current = true;
      }, 100);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleSendMessage(inputValue);
  };

  const handleSuggestedPrompt = (prompt) => {
    handleSendMessage(prompt);
  };

  const formatTime = (date) => {
    return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text);
  };

  return (
    <section className="section-padding bg-white/70 dark:bg-gray-900 backdrop-blur-sm">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold font-heading text-zakbot-dark dark:text-white mb-4">
            {headline || `Try Zakbot in Action`}
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            {microcopy || `Experience the power of AI-driven conversations. Ask questions, get answers, and see how Zakbot can transform your customer interactions.`}
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto space-y-8">
          {/* Chat Interface Card */}
          <Card className="chat-card p-0" hover={false}>
            {/* Chat Header */}
            <div className="chat-header">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
                  <FaRobot className="text-xl" />
                </div>
                <div>
                  <h3 className="text-xl font-bold">Zakbot Demo</h3>
                  <p className="text-sm opacity-90">AI Assistant • Online</p>
                </div>
              </div>
            </div>

            {/* Chat Messages */}
            <div className="chat-messages">
              <div className="space-y-4">
                {messages.map((message) => (
                  <motion.div
                    key={message.id}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                    className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                  >
                    <div className={`flex items-start space-x-3 max-w-xs md:max-w-md ${
                      message.sender === 'user' ? 'flex-row-reverse space-x-reverse' : ''
                    }`}>
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${
                        message.sender === 'user' ? 'bg-zakbot-blue' : 'bg-zakbot-teal'
                      }`}>
                        {message.sender === 'user' ? (
                          <FaUser className="text-white text-sm" />
                        ) : (
                          <FaRobot className="text-white text-sm" />
                        )}
                      </div>
                      <div className="relative group">
                        <div className={`chat-message ${message.sender === 'user' ? 'chat-message-user' : 'chat-message-bot'}`}>
                          {message.sender === 'bot' ? (
                            <MarkdownText text={message.text} />
                          ) : (
                            <p className="text-sm">{message.text}</p>
                          )}
                          <p className="text-xs opacity-70 mt-1">
                            {formatTime(message.timestamp)}
                          </p>
                        </div>
                        <button
                          onClick={() => copyToClipboard(message.text)}
                          className="absolute -top-3 right-0 opacity-0 group-hover:opacity-100 transition-opacity duration-200 bg-gray-200 dark:bg-gray-600 hover:bg-gray-300 dark:hover:bg-gray-500 rounded-full p-1"
                        >
                          <FaCopy className="text-xs text-gray-600 dark:text-gray-300" />
                        </button>
                      </div>
                    </div>
                  </motion.div>
                ))}

                {isLoading && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="flex justify-start"
                  >
                    <div className="flex items-start space-x-3 max-w-xs md:max-w-md">
                      <div className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 bg-zakbot-teal">
                        <FaRobot className="text-white text-sm" />
                      </div>
                      <div className="chat-message chat-message-bot">
                        <div className="loading-dots flex space-x-1">
                          <span className="w-2 h-2 bg-gray-400 dark:bg-gray-300 rounded-full"></span>
                          <span className="w-2 h-2 bg-gray-400 dark:bg-gray-300 rounded-full"></span>
                          <span className="w-2 h-2 bg-gray-400 dark:bg-gray-300 rounded-full"></span>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}

                <div ref={messagesEndRef} />
              </div>
            </div>

            {/* Chat Input */}
            <div className="chat-input-container">
              <form onSubmit={handleSubmit} className="flex space-x-3">
                <input
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  placeholder="Type your message..."
                  className="flex-1 px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-zakbot-blue focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                  disabled={isLoading}
                />
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  type="submit"
                  disabled={isLoading || !inputValue.trim()}
                  className="btn-primary flex items-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
                >
                  <FaPaperPlane />
                  <span>Send</span>
                </motion.button>
              </form>
            </div>
          </Card>

          {/* Suggested Prompts Card */}
          {messages.length === 1 && (
            <Card className="prompts-card" transition={{ duration: 0.5, delay: 0.1 }}>
              <h4 className="font-semibold text-zakbot-dark dark:text-white mb-4">Try asking:</h4>
              <div className="flex flex-wrap gap-2">
                {suggestedPrompts.map((prompt, index) => (
                  <motion.button
                    key={index}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => handleSuggestedPrompt(prompt)}
                    className="text-sm bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 text-gray-700 dark:text-gray-300 px-3 py-1 rounded-full transition-colors duration-200 cursor-pointer"
                  >
                    {prompt}
                  </motion.button>
                ))}
              </div>
            </Card>
          )}
        </div>

        {capabilities && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-12 text-center"
          >
            <h3 className={`text-2xl font-bold mb-6 ${getTextColor('default')}`}>Key Capabilities</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
              {capabilities.map((cap, index) => (
                <div key={index} className="bg-white dark:bg-gray-900 p-4 rounded-lg shadow-md text-left">
                  <h4 className={`font-semibold mb-2 ${getTextColor('default')}`}>{cap.title}</h4>
                  <p className={`${getTextColor('secondary')} text-sm`}>{cap.description}</p>
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default ChatDemo;
