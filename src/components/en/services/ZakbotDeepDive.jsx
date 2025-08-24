import React from 'react';
import { motion } from 'framer-motion';
import { FaDatabase, FaSearch, FaEdit, FaPlug, FaChartBar, FaGraduationCap, FaFileAlt, FaHeadset, FaUserCheck, FaUsers, FaLanguage } from 'react-icons/fa';
import ChatDemo from "../../specific/ChatDemo"

const ZakbotDeepDive = () => {
  const coreCapabilities = [
    {
      title: "Knowledge Ingestion",
      icon: <FaDatabase className="text-xl text-zakbot-teal mr-2" />,
      description: "Seamlessly import and organize your documents, FAQs, and knowledge base"
    },
    {
      title: "RAG + Retrieval",
      icon: <FaSearch className="text-xl text-zakbot-teal mr-2" />,
      description: "Advanced retrieval-augmented generation for accurate, context-aware responses"
    },
    {
      title: "Generation & Templates",
      icon: <FaEdit className="text-xl text-zakbot-teal mr-2" />,
      description: "Create consistent, branded responses with customizable templates"
    },
    {
      title: "Channels & Integrations",
      icon: <FaPlug className="text-xl text-zakbot-teal mr-2" />,
      description: "Deploy across website, WhatsApp, email, and CRM platforms"
    },
    {
      title: "Analytics & SLAs",
      icon: <FaChartBar className="text-xl text-zakbot-teal mr-2" />,
      description: "Track performance metrics and ensure response quality"
    }
  ];

  const useCases = [
    {
      title: "Educational Knowledge Bots",
      icon: <FaGraduationCap className="text-xl text-zakbot-teal mr-2" />,
      description: "Answer student queries about courses, schedules, and policies instantly"
    },
    {
      title: "Course Material Generator",
      icon: <FaFileAlt className="text-xl text-zakbot-teal mr-2" />,
      description: "Automatically create quizzes, summaries, and study guides"
    },
    {
      title: "Customer Support Automation",
      icon: <FaHeadset className="text-xl text-zakbot-teal mr-2" />,
      description: "Handle common support requests without human intervention"
    },
    {
      title: "Lead Qualification Bots",
      icon: <FaUserCheck className="text-xl text-zakbot-teal mr-2" />,
      description: "Pre-qualify leads and schedule demos automatically"
    },
    {
      title: "Internal Ops (HR/onboarding)",
      icon: <FaUsers className="text-xl text-zakbot-teal mr-2" />,
      description: "Assist new hires with onboarding and HR policies"
    },
    {
      title: "Multi-Language Delivery",
      icon: <FaLanguage className="text-xl text-zakbot-teal mr-2" />,
      description: "Communicate effectively with global audiences in their preferred language"
    }
  ];

  return (
    <section className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        

        {/* Live Showcase */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mb-16"
        >

          <ChatDemo />
        </motion.div>

        {/* Core Capabilities */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mb-16"
        >
          <h3 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">Core Capabilities</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {coreCapabilities.map((capability, index) => (
              <div key={index} className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
                <h4 className="text-lg font-bold mb-2 text-gray-900 dark:text-white flex items-center">
                  {capability.icon}
                  {capability.title}
                </h4>
                <p className="text-gray-700 dark:text-gray-300">{capability.description}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Packaged Use-Cases */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mb-16"
        >
          <h3 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">Packaged Use-Cases</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {useCases.map((useCase, index) => (
              <div key={index} className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
                <h4 className="text-lg font-bold mb-2 text-gray-900 dark:text-white flex items-center">
                  {useCase.icon}
                  {useCase.title}
                </h4>
                <p className="text-gray-700 dark:text-gray-300">{useCase.description}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Quick Technical Note */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-6"
        >
          <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">Technical Note</h3>
          <p className="text-gray-700 dark:text-gray-300">
            Zakbot is built on a secure, enterprise-grade infrastructure with end-to-end encryption, 
            GDPR-compliant data handling, and customizable privacy controls. All conversations are 
            securely stored and can be audited for compliance purposes.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default ZakbotDeepDive;