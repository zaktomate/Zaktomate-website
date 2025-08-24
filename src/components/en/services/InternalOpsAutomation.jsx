import React from 'react';
import { motion } from 'framer-motion';
import { FaBook, FaQuestionCircle, FaCompass, FaFileAlt } from 'react-icons/fa';

const InternalOpsAutomation = () => {
  const features = [
    { text: "Policy lookup", icon: <FaBook className="text-xl" /> },
    { text: "Benefits Q&A", icon: <FaQuestionCircle className="text-xl" /> },
    { text: "Guided onboarding", icon: <FaCompass className="text-xl" /> },
    { text: "Auto-generated HR docs", icon: <FaFileAlt className="text-xl" /> }
  ];

  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl font-bold text-center mb-4 text-gray-900 dark:text-white"
        >
          Employee-facing Bots — Reduce interruptions, speed onboarding
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-xl text-center max-w-3xl mx-auto mb-12 text-gray-700 dark:text-gray-300"
        >
          Free up your HR team and empower employees with instant access to information and automated processes.
        </motion.p>

        <div className="flex flex-col md:flex-row gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="md:w-1/2"
          >
            <div className="bg-gray-200 dark:bg-gray-700 rounded-lg h-80 flex items-center justify-center relative">
              <p className="text-gray-700 dark:text-gray-300">Workflow diagram</p>
              {/* This would be replaced with an actual workflow diagram */}
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="md:w-1/2"
          >
            <ul className="space-y-6">
              {features.map((feature, index) => (
                <li key={index} className="flex items-start">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-zakbot-blue flex items-center justify-center text-white mr-4 mt-1">
                    {feature.icon}
                  </div>
                  <p className="text-gray-700 dark:text-gray-300 text-lg flex items-center">{feature.text}</p>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default InternalOpsAutomation;