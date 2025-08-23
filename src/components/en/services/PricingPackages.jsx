import React from 'react';
import { motion } from 'framer-motion';

const PricingPackages = () => {
  const packages = [
    {
      title: "One-Off Projects",
      description: "Perfect for testing our expertise with a single project",
      features: [
        "Zakbot Setup",
        "Exam Formatter",
        "Custom Q&A Bot",
        "AI Summarization & Notes",
        "Lead Gen Script Automation"
      ],
      pricing: "Custom quotes"
    },
    {
      title: "Product Tiers",
      description: "Scalable AI solutions for growing businesses",
      features: [
        "Ignite - Starter Plan ($197/month)",
        "Accelerate - Most Popular ($347/month)",
        "Transform - Advanced Plan ($497/month)",
        "Pinnacle - Enterprise Plan (Custom Quote)"
      ],
      pricing: "Starting from $197/month"
    },
    {
      title: "OpsMate (Managed Program)",
      description: "Dedicated AI acquisition partner for sustained growth",
      features: [
        "End-to-end AI transformation",
        "Tailored workflows",
        "Dedicated team support",
        "Continuous optimization"
      ],
      pricing: "Custom pricing based on scope"
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
          Flexible Commercial Models — Productized or Managed
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-xl text-center max-w-3xl mx-auto mb-12 text-gray-700 dark:text-gray-300"
        >
          Choose the approach that best fits your business needs and budget.
        </motion.p>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {packages.map((pkg, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
              className="bg-gray-50 dark:bg-gray-800 rounded-lg shadow-lg p-8 flex flex-col h-full"
            >
              <h3 className="text-2xl font-bold mb-3 text-gray-900 dark:text-white">{pkg.title}</h3>
              <p className="text-gray-700 dark:text-gray-300 mb-6">{pkg.description}</p>
              <ul className="mb-6 flex-grow">
                {pkg.features.map((feature, i) => (
                  <li key={i} className="text-gray-700 dark:text-gray-300 mb-2 flex items-start">
                    <span className="text-zakbot-blue mr-2">•</span> {feature}
                  </li>
                ))}
              </ul>
              <div className="mt-auto">
                <p className="text-lg font-bold text-gray-900 dark:text-white mb-4">{pkg.pricing}</p>
                <button className="w-full bg-zakbot-blue text-white py-3 rounded-lg font-bold hover:bg-zakbot-dark-blue transition">
                  Contact Sales
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
          className="text-center"
        >
          <button className="bg-transparent border-2 border-zakbot-blue text-zakbot-blue py-3 px-8 rounded-lg font-bold hover:bg-zakbot-blue hover:text-white transition">
            Contact sales for a tailored quote
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default PricingPackages;