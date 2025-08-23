import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';

const ServicesFAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "How quickly can you implement a solution?",
      answer: "Most of our productized solutions can be deployed within 2-4 weeks. For custom projects, the timeline depends on complexity but we provide clear milestones and regular updates throughout the process."
    },
    {
      question: "Do you offer ongoing support after deployment?",
      answer: "Yes, all our solutions include comprehensive support packages. We offer different SLA tiers based on your needs, from basic support to 24/7 dedicated assistance for enterprise clients."
    },
    {
      question: "Can your AI solutions integrate with our existing systems?",
      answer: "Absolutely. Our platform is designed with extensive integration capabilities. We support APIs, webhooks, and direct integrations with popular CRM, LMS, and business tools. Our team will work with you to ensure seamless integration."
    },
    {
      question: "How do you ensure data security and privacy?",
      answer: "We follow enterprise-grade security practices including end-to-end encryption, GDPR-compliant data handling, and regular security audits. We also offer optional NDAs and can accommodate specific compliance requirements."
    },
    {
      question: "What kind of ROI can we expect?",
      answer: "ROI varies by use case, but our clients typically see 3-5x return on investment within the first year. Common benefits include reduced operational costs, increased productivity, and improved customer satisfaction. We provide detailed metrics and reporting to track your specific results."
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
                  <p className="text-gray-700 dark:text-gray-300">{faq.answer}</p>
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
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Automate Your Business with AI?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Let's discuss how our AI solutions can transform your operations and drive measurable results.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="bg-white text-zakbot-blue py-3 px-8 rounded-lg font-bold hover:bg-gray-100 transition text-lg">
              Get Free Consultation
            </button>
            <button className="bg-transparent border-2 border-white text-white py-3 px-8 rounded-lg font-bold hover:bg-white hover:text-zakbot-blue transition text-lg">
              Contact Us
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesFAQ;