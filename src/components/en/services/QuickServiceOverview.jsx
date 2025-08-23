import React from 'react';
import { motion } from 'framer-motion';

const QuickServiceOverview = () => {
  const services = [
    {
      title: "Zakbot",
      benefit: "AI-powered customer support & content automation",
      bullets: ["24/7 availability", "Multi-channel support", "Custom knowledge training"],
      cta: "See demo",
      popular: false
    },
    {
      title: "Zakdeck",
      benefit: "Professional learning & marketing content in minutes",
      bullets: ["Slide generation", "Course materials", "Version control"],
      cta: "See demo",
      popular: false
    },
    {
      title: "Marketing Automation",
      benefit: "From traffic to qualified pipeline",
      bullets: ["Lead capture", "Personalized nurture", "Campaign analytics"],
      cta: "Request quote",
      popular: false
    },
    {
      title: "OpsMate",
      benefit: "Managed AI program for your business",
      bullets: ["Dedicated team", "End-to-end automation", "Continuous optimization"],
      cta: "See demo",
      popular: true
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
          Quick Service Overview
        </motion.h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="bg-white dark:bg-gray-900 rounded-lg shadow-lg p-6 relative"
            >
              {service.popular && (
                <div className="absolute -top-3 -right-3 bg-zakbot-blue text-white text-xs font-bold px-3 py-1 rounded-full">
                  Most popular
                </div>
              )}
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 rounded-lg bg-zakbot-blue flex items-center justify-center text-white font-bold mr-3">
                  {service.title.charAt(0)}
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">{service.title}</h3>
              </div>
              <p className="text-gray-700 dark:text-gray-300 mb-4">{service.benefit}</p>
              <ul className="mb-6">
                {service.bullets.map((bullet, i) => (
                  <li key={i} className="text-gray-600 dark:text-gray-400 text-sm mb-2 flex items-start">
                    <span className="text-zakbot-blue mr-2">•</span> {bullet}
                  </li>
                ))}
              </ul>
              <button className="w-full bg-zakbot-blue text-white py-2 rounded-md font-medium hover:bg-zakbot-dark-blue transition">
                {service.cta}
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default QuickServiceOverview;