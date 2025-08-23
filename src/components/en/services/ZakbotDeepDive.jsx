import React from 'react';
import { motion } from 'framer-motion';

const ZakbotDeepDive = () => {
  const coreCapabilities = [
    {
      title: "Knowledge Ingestion",
      description: "Seamlessly import and organize your documents, FAQs, and knowledge base"
    },
    {
      title: "RAG + Retrieval",
      description: "Advanced retrieval-augmented generation for accurate, context-aware responses"
    },
    {
      title: "Generation & Templates",
      description: "Create consistent, branded responses with customizable templates"
    },
    {
      title: "Channels & Integrations",
      description: "Deploy across website, WhatsApp, email, and CRM platforms"
    },
    {
      title: "Analytics & SLAs",
      description: "Track performance metrics and ensure response quality"
    }
  ];

  const useCases = [
    {
      title: "Educational Knowledge Bots",
      description: "Answer student queries about courses, schedules, and policies instantly"
    },
    {
      title: "Course Material Generator",
      description: "Automatically create quizzes, summaries, and study guides"
    },
    {
      title: "Customer Support Automation",
      description: "Handle common support requests without human intervention"
    },
    {
      title: "Lead Qualification Bots",
      description: "Pre-qualify leads and schedule demos automatically"
    },
    {
      title: "Internal Ops (HR/onboarding)",
      description: "Assist new hires with onboarding and HR policies"
    },
    {
      title: "Multi-Language Delivery",
      description: "Communicate effectively with global audiences in their preferred language"
    }
  ];

  return (
    <section className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl font-bold text-center mb-4 text-gray-900 dark:text-white"
        >
          Zakbot — Your Multi-purpose AI Assistant
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-xl text-center max-w-3xl mx-auto mb-12 text-gray-700 dark:text-gray-300"
        >
          Our flagship AI assistant that transforms how businesses interact with customers and automate operations.
        </motion.p>

        {/* Live Showcase */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mb-16"
        >
          <h3 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">Live Showcase</h3>
          <div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-8 flex items-center justify-center h-64">
            <p className="text-gray-700 dark:text-gray-300">Interactive demo of Zakbot in action</p>
          </div>
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
                <h4 className="text-lg font-bold mb-2 text-gray-900 dark:text-white">{capability.title}</h4>
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
                <h4 className="text-lg font-bold mb-2 text-gray-900 dark:text-white">{useCase.title}</h4>
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