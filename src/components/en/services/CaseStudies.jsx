import React from 'react';
import { motion } from 'framer-motion';

const CaseStudies = () => {
  const caseStudies = [
    {
      title: "Global E-commerce Brand",
      industry: "Retail",
      challenge: "Reduced customer support response time from 24 hours to under 2 minutes",
      solution: "Implemented Zakbot across website and WhatsApp channels",
      result: "60% reduction in support costs, 95% customer satisfaction rating"
    },
    {
      title: "Online Education Platform",
      industry: "EdTech",
      challenge: "Automated content creation for 50+ courses",
      solution: "Deployed Zakdeck for slide generation and Zakbot for student support",
      result: "80% faster content production, 40% increase in student engagement"
    },
    {
      title: "SaaS Startup",
      industry: "Technology",
      challenge: "Scaled lead qualification process without increasing team size",
      solution: "Integrated Marketing Automation with existing CRM",
      result: "3x lead conversion rate, 50% reduction in sales cycle"
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
          Real Results, Proven Impact
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-xl text-center max-w-3xl mx-auto mb-12 text-gray-700 dark:text-gray-300"
        >
          See how businesses like yours have transformed operations with our AI solutions.
        </motion.p>

        <div className="grid md:grid-cols-3 gap-8">
          {caseStudies.map((study, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
              className="bg-gray-50 dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden"
            >
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">{study.title}</h3>
                  <span className="bg-zakbot-blue text-white text-xs font-bold px-2 py-1 rounded">
                    {study.industry}
                  </span>
                </div>
                <div className="mb-4">
                  <h4 className="font-bold text-gray-900 dark:text-white mb-2">Challenge</h4>
                  <p className="text-gray-700 dark:text-gray-300">{study.challenge}</p>
                </div>
                <div className="mb-4">
                  <h4 className="font-bold text-gray-900 dark:text-white mb-2">Solution</h4>
                  <p className="text-gray-700 dark:text-gray-300">{study.solution}</p>
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 dark:text-white mb-2">Result</h4>
                  <p className="text-gray-700 dark:text-gray-300">{study.result}</p>
                </div>
              </div>
              <div className="bg-zakbot-blue bg-opacity-10 px-6 py-4">
                <button className="text-zakbot-blue font-bold hover:underline">
                  Read Full Case Study →
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="text-center mt-12"
        >
          <button className="bg-zakbot-blue text-white py-3 px-8 rounded-lg font-bold hover:bg-zakbot-dark-blue transition">
            View All Case Studies
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default CaseStudies;