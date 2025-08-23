import React from 'react';
import { motion } from 'framer-motion';
import { FaCheckCircle } from 'react-icons/fa';

const OnboardingSLA = () => {
  const timelineSteps = [
    "Discovery & Requirements Gathering (Week 1)",
    "Solution Design & Architecture (Week 2)",
    "Development & Integration (Weeks 3-4)",
    "Testing & Quality Assurance (Week 5)",
    "Deployment & Go-Live (Week 6)"
  ];

  const slaBullets = [
    "99.9% uptime guarantee",
    "24-hour response time for critical issues",
    "Monthly performance reports with optimization recommendations",
    "Dedicated account manager for enterprise clients"
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
          Deployments in 2–4 Weeks — Clear Milestones
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-xl text-center max-w-3xl mx-auto mb-12 text-gray-700 dark:text-gray-300"
        >
          Our streamlined onboarding process ensures fast, efficient deployment with clear expectations at every stage.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mb-16"
        >
          <h3 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white text-center">Implementation Timeline</h3>
          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-zakbot-blue transform translate-x-1/2"></div>
              
              {/* Timeline steps */}
              {timelineSteps.map((step, index) => (
                <div key={index} className="flex mb-8">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-zakbot-blue flex items-center justify-center text-white font-bold mr-6 relative z-10">
                    {index + 1}
                  </div>
                  <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-md flex-grow">
                    <p className="text-gray-900 dark:text-white font-medium">{step}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <h3 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white text-center">Service Level Agreements</h3>
          <div className="max-w-3xl mx-auto bg-white dark:bg-gray-900 rounded-lg shadow-lg p-8">
            <ul className="space-y-4">
              {slaBullets.map((bullet, index) => (
                <li key={index} className="flex items-start">
                  <FaCheckCircle className="text-zakbot-blue mt-1 mr-3 flex-shrink-0" />
                  <span className="text-gray-700 dark:text-gray-300">{bullet}</span>
                </li>
              ))}
            </ul>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default OnboardingSLA;