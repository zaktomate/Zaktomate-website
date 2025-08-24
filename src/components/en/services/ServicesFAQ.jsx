import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const ServicesFAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const navigate = useNavigate();

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs = [
    {
      category: "General",
      question: "What is Zaktomate?",
      answer: "Zaktomate is a Dhaka-based AI solutions provider helping Bangladeshi EdTechs, coaching centers, and SMEs automate content creation, customer support, and business workflows. We build AI tools like Zakbot (chatbots) and Zakdeck (AI-powered slides & notes) that save time and increase efficiency."
    },
    {
      category: "General",
      question: "Who is Zaktomate for?",
      answer: "We work with:\n\nEdTech companies & coaching centers needing automated lecture notes, quizzes, and student support.\n\nSmall & medium businesses (SMEs) looking to automate marketing, customer queries, and operations.\n\nInstitutions & training centers wanting to scale without adding more staff."
    },
    {
      category: "General",
      question: "Do I need coding knowledge to use Zaktomate?",
      answer: "Not at all. Our tools are designed for teachers, administrators, and business owners with no technical background. Everything is set up by our team, so you can focus on running your institution or business."
    },
    {
      category: "Chatbot Features",
      question: "What can Zakbot do?",
      answer: "Zakbot is highly flexible for Bangladeshi use cases. For example:\n\nEdTech: Answer admission queries, generate quizzes, support students 24/7.\n\nSMEs: Manage customer support, nurture leads, and track FAQs.\n\nGeneral: Automate internal workflows like HR questions or document lookups."
    },
    {
      category: "Chatbot Features",
      question: "Can I customize the chatbot responses?",
      answer: "Yes. Zakbot can be trained on your own documents, website, or policies. Responses can be bilingual (English & Bangla), and the tone can be adjusted to sound friendly, formal, or professional—based on your brand."
    },
    {
      category: "Service & Pricing",
      question: "Is Zaktomate free to use?",
      answer: "We provide free demo access so you can see Zakbot and Zakdeck in action. For regular use, we offer affordable monthly packages starting at BDT 10,000, as well as one-off services if you want to try us first."
    },
    {
      category: "Service & Pricing",
      question: "How do I upgrade to a premium plan?",
      answer: "Just click \"Request a Free Local Demo\" or contact our team. We'll recommend the right plan—whether it's Ignite, Accelerate, Transform, or Pinnacle—based on your institution's needs. You'll receive onboarding support to get started smoothly."
    }
  ];

  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900 dark:text-white"
        >
          Frequently Asked Questions
        </motion.h2>

        <div className="max-w-3xl mx-auto mb-16">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="mb-4 bg-white dark:bg-gray-900 rounded-lg shadow-md overflow-hidden"
            >
              <div className="px-6 pt-4">
                <span className="inline-block px-3 py-1 text-xs font-semibold text-zakbot-blue bg-gray-100 dark:bg-gray-100 rounded-full mb-2">
                  {faq.category}
                </span>
              </div>
              <button
                className="w-full p-6 text-left flex justify-between items-center"
                onClick={() => toggleFAQ(index)}
                aria-expanded={openIndex === index}
              >
                <h3 className="text-lg font-bold text-gray-900 dark:text-white">{faq.question}</h3>
                {openIndex === index ? (
                  <FaChevronUp className="text-zakbot-blue" />
                ) : (
                  <FaChevronDown className="text-zakbot-blue" />
                )}
              </button>
              {openIndex === index && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                  className="px-6 pb-6"
                >
                  <p className="text-gray-700 dark:text-gray-300 whitespace-pre-line">{faq.answer}</p>
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>

        {/* Footer CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="bg-gradient-to-r from-zakbot-blue to-zakbot-teal dark:from-zakbot-blue-light dark:to-zakbot-teal-light rounded-2xl p-8 md:p-12 text-center text-white"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to automate your operations?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Let's discuss how our AI solutions can transform your operations and drive measurable results.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button
              className="bg-white text-zakbot-blue py-3 px-8 rounded-lg font-bold hover:bg-gray-100 transition text-lg"
              onClick={() => navigate('/en/Contact')}
              type="button"
              aria-label="Request Demo"
            >
              Request Demo
            </button>
            <button
              className="bg-transparent border-2 border-white text-white py-3 px-8 rounded-lg font-bold hover:bg-white hover:text-zakbot-blue transition text-lg"
              onClick={() => navigate('/en/Contact')}
              type="button"
              aria-label="Contact Sales (Enterprise)"
            >
              Contact Sales (Enterprise)
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesFAQ;