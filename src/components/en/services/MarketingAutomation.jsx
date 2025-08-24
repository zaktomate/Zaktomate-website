import React from 'react';
import { motion } from 'framer-motion';
import { FaUserPlus, FaRoute, FaChartLine, FaUsers } from 'react-icons/fa';

const MarketingAutomation = () => {
  const capabilities = [
    { text: "Lead capture & qualification", icon: <FaUserPlus className="text-xl" /> },
    { text: "Personalized nurture flows", icon: <FaRoute className="text-xl" /> },
    { text: "Campaign scheduling & analytics", icon: <FaChartLine className="text-xl" /> },
    { text: "Persona presets for different customer segments", icon: <FaUsers className="text-xl" /> }
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
          Growth Automation — From Traffic to Qualified Pipeline
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-xl text-center max-w-3xl mx-auto mb-12 text-gray-700 dark:text-gray-300"
        >
          Turn website visitors into qualified leads with intelligent automation that understands your audience.
        </motion.p>

        <div className="flex flex-col md:flex-row gap-12 items-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="md:w-1/2"
          >
            <ul className="space-y-6">
              {capabilities.map((capability, index) => (
                <li key={index} className="flex items-start">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-zakbot-blue flex items-center justify-center text-white mr-4 mt-1">
                    {capability.icon}
                  </div>
                  <p className="text-gray-700 dark:text-gray-300 flex items-center">{capability.text}</p>
                </li>
              ))}
            </ul>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="md:w-1/2"
          >
            <div className="bg-gray-200 dark:bg-gray-700 rounded-lg h-80 flex items-center justify-center relative">
              <p className="text-gray-700 dark:text-gray-300">Funnel graphic with animated bot</p>
              {/* This would be replaced with an actual funnel diagram */}
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-6 max-w-3xl mx-auto"
        >
          <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">Prebuilt Templates</h3>
          <p className="text-gray-700 dark:text-gray-300">
            Get started quickly with our library of prebuilt templates for common industries including SaaS, 
            e-commerce, education, and professional services. Each template is optimized for maximum 
            conversion and can be customized to match your brand.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default MarketingAutomation;