import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';
import Card from '../../components/common/Card';
import SEO from '../../components/common/SEO';


const FAQEN = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      category: "General",
      questions: [
        {
          question: "What is Zaktomate?",
          answer: "Zaktomate is an AI-powered digital assistant that offers tools like chatbots, smart slide generators, and task automation to boost your productivity and simplify workflows."
        },
        {
          question: "Who is Zaktomate for?",
          answer: "Zaktomate is built for businesses, entrepreneurs, and developers who want to save time by automating repetitive tasks and generating content effortlessly."
        },
        {
          question: "Do I need any coding knowledge to use Zaktomate?",
          answer: "No, Zaktomate is designed to be beginner-friendly. Most tools are no-code or low-code and easy to use with simple instructions."
        }
      ]
    },
    {
      category: "Chatbot Features",
      questions: [
        {
          question: "What can the Zaktomate chatbot do?",
          answer: "It can answer questions, provide personalized suggestions, explain topics, and even serve as a knowledge-based support assistant for your website."
        },
        {
          question: "Can I customize the chatbot responses?",
          answer: "Yes, you can train the chatbot using your own content or documents so it responds exactly how you want."
        },
        {
          question: "Is the chatbot available 24/7?",
          answer: "Yes, once deployed, the Zaktomate chatbot works round the clock without breaks."
        }
      ]
    },
    {
      category: "Slide Generator",
      questions: [
        {
          question: "How does the AI slide generator work?",
          answer: "Just input your topic or text, and Zaktomate automatically creates a presentation with well-structured slides using AI."
        },
        {
          question: "Can I edit the slides after generation?",
          answer: "Yes, all slides can be customized and downloaded in editable formats like PPTX or Google Slides."
        },
        {
          question: "Do the slides support multiple languages?",
          answer: "Absolutely. The slide generator supports multiple languages including English, Spanish, French, German, and more."
        }
      ]
    },
    {
      category: "Service & Pricing",
      questions: [
        {
          question: "Is Zaktomate free to use?",
          answer: "We offer both free and premium plans. The free plan covers basic features, while premium users unlock advanced tools and priority access."
        },
        {
          question: "How do I upgrade to a premium plan?",
          answer: "Just click on the 'Upgrade' button in your dashboard, select your preferred plan, and proceed with payment."
        },
        {
          question: "Is there a refund policy?",
          answer: "Yes, we offer a 14-day refund policy for premium users if you're unsatisfied with the service."
        }
      ]
    },
    {
      category: "Data & Privacy",
      questions: [
        {
          question: "Is my data safe with Zaktomate?",
          answer: "Yes, your data is encrypted and never shared with third parties without consent."
        },
        {
          question: "Can I delete my data anytime?",
          answer: "Yes. You can permanently delete your account and all associated data through your profile settings."
        }
      ]
    },
    {
      category: "Support",
      questions: [
        {
          question: "How can I contact support?",
          answer: "You can reach our support team via the 'Contact Us' page or email us directly at support@zaktomate.com. We usually respond within 24 hours."
        }
      ]
    }
  ];

  const toggleFAQ = (categoryIndex, questionIndex) => {
    const index = `${categoryIndex}-${questionIndex}`;
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-20">
        <SEO />
      <div className="container">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold font-heading text-zakbot-dark dark:text-white mb-6">
            Frequently Asked <span className="gradient-text">Questions</span>
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Find answers to common questions about Zaktomate's AI solutions, pricing, and services.
          </p>
        </motion.div>

        {/* FAQ Categories */}
        <div className="space-y-12">
          {faqs.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
            >
              <h2 className="text-2xl font-bold font-heading text-zakbot-dark dark:text-white mb-6">
                {category.category}
              </h2>
              
              <div className="space-y-4">
                {category.questions.map((faq, questionIndex) => {
                  const index = `${categoryIndex}-${questionIndex}`;
                  const isOpen = openIndex === index;
                  
                  return (
                    <Card
                      key={questionIndex}
                      className="overflow-hidden"
                      transition={{ duration: 0.3, delay: questionIndex * 0.05 }}
                    >
                      <button
                        onClick={() => toggleFAQ(categoryIndex, questionIndex)}
                        className="w-full flex justify-between items-center p-6 text-left hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors duration-200"
                      >
                        <h3 className="text-lg font-semibold text-zakbot-dark dark:text-white pr-4">
                          {faq.question}
                        </h3>
                        {isOpen ? (
                          <FaChevronUp className="text-zakbot-blue flex-shrink-0" />
                        ) : (
                          <FaChevronDown className="text-zakbot-blue flex-shrink-0" />
                        )}
                      </button>
                      
                      {isOpen && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.3 }}
                          className="px-6 pb-6"
                        >
                          <p className="text-gray-600 dark:text-gray-300">
                            {faq.answer}
                          </p>
                        </motion.div>
                      )}
                    </Card>
                  );
                })}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Help Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-20 text-center"
        >
          <Card
            className="max-w-2xl mx-auto"
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h2 className="text-2xl font-bold font-heading text-zakbot-dark dark:text-white mb-4">
              Still Have Questions?
            </h2>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              Can't find the answer you're looking for? Our support team is here to help.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/en/contact" 
                className="bg-zakbot-blue hover:bg-zakbot-blue-light text-white font-medium py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105"
              >
                Contact Support
              </a>
              <a 
                href="mailto:support@zaktomate.com" 
                className="bg-transparent border-2 border-zakbot-blue text-zakbot-blue hover:bg-zakbot-blue hover:text-white font-medium py-3 px-8 rounded-lg transition-all duration-300"
              >
                Email Us
              </a>
            </div>
          </Card>
        </motion.div>
      </div>
    </div>
  );
};

export default FAQEN;