import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaPaperPlane, FaRobot, FaUser, FaCopy, FaThumbsUp, FaThumbsDown } from 'react-icons/fa';
import Card from '../common/Card';
import { getTextColor } from '../../utils/colorUtils';

// Enhanced markdown parser with table support
const parseMarkdown = (text) => {
  if (!text) return text;
  
  // First handle tables before other processing
  let html = text;
  
  // Handle tables
  const tableRegex = /(\|[^|\r\n]*\|[^|\r\n]*\|[^\r\n]*\r?\n\|[-:\s|]*\|[-:\s|]*\|[^\r\n]*\r?\n(?:\|[^|\r\n]*\|[^|\r\n]*\|[^\r\n]*\r?\n?)*)/gm;
  html = html.replace(tableRegex, (match) => {
    const lines = match.trim().split('\n');
    if (lines.length < 3) return match; // Need at least header, separator, and one row
    
    const headerLine = lines[0];
    const separatorLine = lines[1];
    const dataLines = lines.slice(2);
    
    // Parse header
    const headers = headerLine.split('|').map(h => h.trim()).filter(h => h);
    
    // Parse data rows
    const rows = dataLines.map(line => 
      line.split('|').map(cell => cell.trim()).filter(cell => cell)
    ).filter(row => row.length > 0);
    
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
  });

  // Convert remaining markdown to HTML
  html = html
    // Headers
    .replace(/^### (.*$)/gim, '<h3 class="text-lg font-semibold mt-4 mb-2">$1</h3>')
    .replace(/^## (.*$)/gim, '<h2 class="text-xl font-bold mt-6 mb-3">$1</h2>')
    .replace(/^# (.*$)/gim, '<h1 class="text-2xl font-bold mt-8 mb-4">$1</h1>')
    // Horizontal rules
    .replace(/^---$/gim, '<hr class="border-gray-300 dark:border-gray-600 my-4" />')
    // Bold text **text** or __text__ (but not conflicting with bullet points)
    .replace(/\*\*(.*?)\*\*/g, '<strong class="font-semibold">$1</strong>')
    .replace(/__(.*?)__/g, '<strong class="font-semibold">$1</strong>')
    // Code blocks ```code```
    .replace(/```([\s\S]*?)```/g, '<pre class="bg-gray-100 dark:bg-gray-800 p-3 rounded text-sm overflow-x-auto my-2 border"><code>$1</code></pre>')
    // Inline code `code`
    .replace(/`([^`]+)`/g, '<code class="bg-gray-100 dark:bg-gray-800 px-1 py-0.5 rounded text-sm font-mono">$1</code>')
    // Links [text](url)
    .replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2" target="_blank" rel="noopener noreferrer" class="text-zakbot-blue hover:underline font-medium">$1</a>')
    // Italic text *text* or _text_ (after bold to avoid conflicts)
    .replace(/(?<!\*)\*([^*\n]+)\*(?!\*)/g, '<em>$1</em>')
    .replace(/(?<!_)_([^_\n]+)_(?!_)/g, '<em>$1</em>');

  // Handle bullet points more carefully
  const lines = html.split('<br />');
  let inList = false;
  let listItems = [];
  let processedLines = [];

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i].trim();
    const bulletMatch = line.match(/^[-*+]\s+(.+)$/);
    
    if (bulletMatch) {
      if (!inList) {
        inList = true;
        listItems = [];
      }
      listItems.push(`<li class="ml-4 mb-1">${bulletMatch[1]}</li>`);
    } else {
      if (inList) {
        processedLines.push(`<ul class="list-disc list-inside space-y-1 my-2 ml-2">${listItems.join('')}</ul>`);
        listItems = [];
        inList = false;
      }
      if (line) {
        processedLines.push(line);
      }
    }
  }
  
  // Handle any remaining list items
  if (inList && listItems.length > 0) {
    processedLines.push(`<ul class="list-disc list-inside space-y-1 my-2 ml-2">${listItems.join('')}</ul>`);
  }

  // Handle numbered lists
  let html2 = processedLines.join('<br />');
  const lines2 = html2.split('<br />');
  let inNumberedList = false;
  let numberedItems = [];
  let finalLines = [];

  for (let i = 0; i < lines2.length; i++) {
    const line = lines2[i].trim();
    const numberMatch = line.match(/^(\d+)\.\s+(.+)$/);
    
    if (numberMatch) {
      if (!inNumberedList) {
        inNumberedList = true;
        numberedItems = [];
      }
      numberedItems.push(`<li class="ml-4 mb-1">${numberMatch[2]}</li>`);
    } else {
      if (inNumberedList) {
        finalLines.push(`<ol class="list-decimal list-inside space-y-1 my-2 ml-2">${numberedItems.join('')}</ol>`);
        numberedItems = [];
        inNumberedList = false;
      }
      if (line) {
        finalLines.push(line);
      }
    }
  }

  // Handle any remaining numbered items
  if (inNumberedList && numberedItems.length > 0) {
    finalLines.push(`<ol class="list-decimal list-inside space-y-1 my-2 ml-2">${numberedItems.join('')}</ol>`);
  }

  return finalLines.join('<br />').replace(/(<br \/>){2,}/g, '<br /><br />');
};

// Markdown component to safely render HTML
const MarkdownText = ({ text }) => {
  const htmlContent = parseMarkdown(text);
  
  return (
    <div 
      className="markdown-content text-sm"
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
const sendMessageToN8N = async (message, clientId, hasSeenGreeting) => {
  try {
    const response = await fetch('https://fahimhsh.app.n8n.cloud/webhook/fe7b302d-7708-46e6-b4f3-15468a215394/chat', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        chatInput: message, // n8n Chat Trigger expects 'chatInput'
        sessionId: getOrCreateSessionId(),
        clientId: clientId,
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