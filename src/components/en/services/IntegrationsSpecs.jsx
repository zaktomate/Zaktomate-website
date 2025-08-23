import React from 'react';
import { motion } from 'framer-motion';

const IntegrationsSpecs = () => {
  const integrations = [
    "CRM", "LMS", "Messaging", "Cloud", "Data stores", "Monitoring"
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
          Integrations, APIs & Architecture
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-xl text-center max-w-3xl mx-auto mb-12 text-gray-700 dark:text-gray-300"
        >
          Seamlessly connect with your existing tools and infrastructure through our robust integration framework.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mb-12"
        >
          <h3 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white text-center">Supported Integrations</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {integrations.map((integration, index) => (
              <div 
                key={index} 
                className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg text-center flex flex-col items-center justify-center h-32"
              >
                <div className="w-12 h-12 rounded-full bg-zakbot-blue flex items-center justify-center text-white font-bold mb-3">
                  {integration.charAt(0)}
                </div>
                <p className="text-gray-900 dark:text-white font-medium">{integration}</p>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="bg-gray-100 dark:bg-gray-800 rounded-lg p-8 mb-12"
        >
          <h3 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white text-center">Architecture Overview</h3>
          <div className="bg-gray-200 dark:bg-gray-700 rounded-lg h-64 flex items-center justify-center">
            <p className="text-gray-700 dark:text-gray-300">Simple architecture diagram</p>
            {/* This would be replaced with an actual architecture diagram */}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center"
        >
          <button className="bg-zakbot-blue text-white py-3 px-8 rounded-lg font-bold hover:bg-zakbot-dark-blue transition">
            View full integration guide
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default IntegrationsSpecs;