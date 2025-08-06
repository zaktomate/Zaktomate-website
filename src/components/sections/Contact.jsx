import React from 'react';
import { motion } from 'framer-motion';
import { getTextColor, getColorClasses } from '../../utils/colorUtils';

const Contact = () => {
  const colors = getColorClasses('zakbot-blue');

  return (
    <section id="contact" className="py-20 bg-white/50 dark:bg-gray-950 backdrop-blur-sm">
      <div className="container mx-auto px-4">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className={`text-3xl font-bold text-center mb-8 ${getTextColor('default')}`}
        >
          📅 Book a Free Trial or Demo
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className={`max-w-xl mx-auto text-center mb-8 ${getTextColor('secondary')}`}
        >
          Let's find out how AI can make your work easier.
          No commitment. No pressure. We'll walk you through it.
        </motion.p>
        <form 
          action="https://formspree.io/f/mvgrlkvl" 
          method="POST" 
          className="max-w-xl mx-auto flex flex-col gap-4 fade-in-up"
        >
          <input
            type="text"
            name="name"
            placeholder="Name"
            required
            className="p-3 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-md text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-cyan-400"
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            required
            className="p-3 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-md text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-cyan-400"
          />
          <input
            type="tel"
            name="phone"
            placeholder="Phone"
            required
            className="p-3 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-md text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-cyan-400"
          />
          <input
            type="text"
            name="company"
            placeholder="Company / Institution"
            className="p-3 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-md text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-cyan-400"
          />
          <input
            type="date"
            name="preferred_date"
            className="p-3 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-md text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-cyan-400"
          />
          <textarea
            name="services"
            placeholder="Services You're Interested In (optional)"
            className="p-3 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-md text-gray-900 dark:text-white h-24 focus:outline-none focus:ring-2 focus:ring-cyan-400"
          />
          <button
            type="submit"
            className={`${colors.button} text-white py-3 px-6 rounded-md font-bold ${colors.buttonHover} transition`}
          >
            Book My Free Trial
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;