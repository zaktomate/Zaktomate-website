import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaChevronDown, FaChevronUp, FaGlobe, FaHeadset, FaTags, FaQuestionCircle, FaRobot, FaCogs } from 'react-icons/fa';
import Card from '../../components/common/Card';
import SEO from '../../components/common/SEO';


const FAQEN = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const [openCategory, setOpenCategory] = useState(null);

  const faqs = [
    {
      category: "General",
      questions: [
        {
          question: "What is Zaktomate?",
          answer: "Zaktomate is a business-focused AI automation platform that delivers tailored chatbot and content-generation solutions—like Zakbot and Zakdeck—built to streamline support, marketing, and operational workflows across industries worldwide."
        },
        {
          question: "Who is Zaktomate for?",
          answer: "Zaktomate serves organizations looking to automate repetitive tasks and scale smarter—ranging from e-commerce and SaaS businesses to educational institutions, SMEs, and enterprise teams seeking efficient, AI-driven solutions. Whether you require one-off automations or a full OpsMate-managed program, we adapt to your needs."
        },
        {
          question: "Do I need any coding skills to use Zaktomate?",
          answer: "No technical expertise is required. Our modular platform, demo-focused sandbox, and onboarding flows let non-technical users launch Zakbot and Zakdeck with minimal setup. Of course, technical teams can extend the experience via API, integration, or automation for deeper use cases."
        }
      ]
    },
    {
      category: "Chatbot Features",
      questions: [
        {
          question: "What can the Zaktomate chatbot (Zakbot) do?",
          answer: "Zakbot offers versatile use cases, including 24/7 customer support, lead qualification, internal knowledge base access, onboarding workflows, and multilingual content delivery. It's trained on your documents, integrated into your platforms, and customizable to match your branding and voice."
        },
        {
          question: "Can I customize the chatbot's responses?",
          answer: "Absolutely. You can define tone, response templates, fallback logic, and escalation paths. Zakbot also supports dynamic content such as quizzes, slides, or summaries based on your prompts and document library—making it both personal and scalable."
        }
      ]
    },
    {
      category: "Service & Pricing",
      questions: [
        {
          question: "Is Zaktomate free to use?",
          answer: (
            <>
              We offer limited-time{" "}
              <a href="/en/contact" className="text-zakbot-blue hover:underline">
                demo access
              </a>{" "}
              and one-off pilots to test the platform's capabilities. For production use, we offer transparent product tiers (
              <span className="font-semibold">Starter, Growth, Scale</span>), as well as managed{" "}
              <span className="font-semibold">OpsMate plans</span> (
              <span className="font-semibold">Ignite → Pinnacle</span>) customized to your organization's scale and support requirements.
            </>
          )
        },
        {
          question: "How do I upgrade to a premium or managed plan?",
          answer: (
            <>
              Simply reach out via{" "}
              <a href="/en/contact" className="text-zakbot-blue hover:underline">
                Contact Sales
              </a>{" "}
              or{" "}
              <a href="/en/contact" className="text-zakbot-blue hover:underline">
                Get Free Consultation
              </a>
              . We'll review your needs, propose the optimal product tier or{" "}
              <span className="font-semibold">OpsMate package</span>, and guide you through onboarding, deployment timeline, and integration—all custom-tailored to ensure impact and ROI.
            </>
          )
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
                        <h3 className="text-lg font-semibold text-zakbot-dark dark:text-white pr-4 flex items-center">
                          {category.category === "General" && <FaGlobe className="mr-3 text-zakbot-blue" />}
                          {category.category === "Chatbot Features" && <FaRobot className="mr-3 text-zakbot-blue" />}
                          {category.category === "Service & Pricing" && <FaTags className="mr-3 text-zakbot-blue" />}
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
                          <div className="text-gray-600 dark:text-gray-300">
                            {typeof faq.answer === 'string' ? faq.answer : faq.answer}
                          </div>
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