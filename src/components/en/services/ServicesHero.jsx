import React from 'react';
import { motion } from 'framer-motion';

const ServicesHero = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-zakbot-blue to-zakbot-teal dark:from-zakbot-blue-light dark:to-zakbot-teal-light text-white">
      <div className="container mx-auto px-4 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl md:text-5xl font-bold mb-6"
        >
          Transform Operations with Custom AI Automation
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-xl md:text-2xl max-w-3xl mx-auto mb-8"
        >
          We build, deploy and operate AI systems that cut repetitive work, accelerate growth, and integrate with your stack — delivered as managed service or productized modules.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-col sm:flex-row justify-center gap-4 mb-8"
        >
          <button className="bg-white text-zakbot-blue py-3 px-8 rounded-lg font-bold hover:bg-gray-100 transition text-lg">
            Get Free Consultation
          </button>
          <button className="bg-transparent border-2 border-white text-white py-3 px-8 rounded-lg font-bold hover:bg-white hover:text-zakbot-blue transition text-lg">
            Try Zakbot Demo
          </button>
        </motion.div>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-lg max-w-2xl mx-auto mb-12"
        >
          Proven automations for support, content, leads and internal ops — live in weeks, ROI in months.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex justify-center"
        >
          {/* Placeholder for looping demo video/GIF */}
          <div className="w-full max-w-4xl h-64 bg-gray-200 dark:bg-gray-700 rounded-lg flex items-center justify-center">
            <span className="text-gray-500 dark:text-gray-400">Short looping demo of Zakbot answering queries (video/GIF)</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesHero;