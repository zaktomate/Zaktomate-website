import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaChevronDown, FaChevronUp, FaBook, FaGraduationCap, FaChalkboardTeacher, FaHandshake, FaCommentDots, FaFileAlt, FaDollarSign, FaChartLine } from 'react-icons/fa';
import Card from '../components/common/Card';
import SEO from '../components/common/SEO';


const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      category: "General",
      questions: [
        {
          icon: FaBook,
          question: "What is Zaktomate?",
          answer: "Zaktomate is an AI-powered platform offering solutions like custom chatbots, content automation, and lead generation to help businesses and educational institutions in Bangladesh streamline operations and boost growth."
        },
        {
          icon: FaGraduationCap,
          question: "Who is Zaktomate for?",
          answer: "Zaktomate is designed for Bangladeshi SMEs, EdTechs, and educational institutions looking to leverage AI for improved customer support, efficient content creation, and smarter lead generation."
        },
        {
          icon: FaChalkboardTeacher,
          question: "Do I need any coding knowledge to use Zaktomate?",
          answer: "No, our solutions are built for ease of use. Most of our tools and services are low-code or no-code, meaning you can integrate and manage them without any technical expertise."
        }
      ]
    },
    {
      category: "Chatbot Features",
      questions: [
        {
          icon: FaCommentDots,
          question: "What can the Zaktomate chatbot (Zakbot) do?",
          answer: "Zakbot can provide 24/7 customer support, answer FAQs, generate educational content, assist with lead qualification, and engage users in natural, multi-language conversations, all trained on your specific data."
        },
        {
          icon: FaHandshake,
          question: "Can I customize Zakbot's responses and knowledge base?",
          answer: "Yes, absolutely. Zakbot is fully customizable. You can train it using your own documents, website content, and data to ensure its responses are accurate, on-brand, and tailored to your specific needs."
        }
      ]
    },
    {
      category: "Service & Pricing",
      questions: [
        {
          icon: FaDollarSign,
          question: "How does Zaktomate's pricing work for Bangladeshi clients?",
          answer: "We offer flexible pricing plans tailored for the Bangladeshi market, including both comprehensive OpsMate plans for ongoing AI partnership and one-off services for specific project needs. All pricing is in BDT."
        },
        {
          icon: FaChartLine,
          question: "Are there different plans for businesses and educational institutions?",
          answer: "Our plans are designed to be adaptable for both businesses and educational institutions. While the core features remain consistent, we offer specialized configurations and support to meet the unique demands of each sector."
        }
      ]
    },
    {
      category: "Data & Privacy",
      questions: [
        {
          icon: FaFileAlt,
          question: "Is my data safe with Zaktomate?",
          answer: "Yes, your data is encrypted and never shared with third parties without consent."
        },
        {
          icon: FaFileAlt,
          question: "Can I delete my data anytime?",
          answer: "Yes. You can permanently delete your account and all associated data through your profile settings."
        }
      ]
    },
    {
      category: "Support",
      questions: [
        {
          icon: FaHandshake,
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
                  const Icon = faq.icon; // Get the icon component
                  
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
                        <div className="flex items-center">
                          {Icon && <Icon className="text-zakbot-blue text-xl mr-4 flex-shrink-0" />}
                          <h3 className="text-lg font-semibold text-zakbot-dark dark:text-white pr-4">
                            {faq.question}
                          </h3>
                        </div>
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
                          <p className="text-gray-600 dark:text-gray-300 mb-4">
                            {faq.answer}
                          </p>
                          {category.category === "Service & Pricing" && (
                            <div className="flex flex-col sm:flex-row gap-4 justify-start mt-4">
                              <a
                                href="/contact"
                                className="bg-zakbot-blue hover:bg-zakbot-blue-light text-white font-medium py-2 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 text-sm"
                              >
                                Request a Local Demo
                              </a>
                              <a
                                href="/pricing"
                                className="bg-transparent border-2 border-zakbot-blue text-zakbot-blue hover:bg-zakbot-blue hover:text-white font-medium py-2 px-6 rounded-lg transition-all duration-300 text-sm"
                              >
                                See Pricing Plans
                              </a>
                            </div>
                          )}
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
                href="/contact" 
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

export default FAQ;