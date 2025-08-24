import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const ServicesHero = () => {
  return (
    <section className="h-screen bg-gradient-to-br from-zakbot-blue to-zakbot-teal dark:from-zakbot-blue-light dark:to-zakbot-teal-light text-white flex items-center justify-center">
      <div className="text-center w-full px-4">
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
          <Link to="/en/contact" className="bg-white text-zakbot-blue py-3 px-8 rounded-lg font-bold hover:bg-gray-100 transition text-lg block text-center">
            Get Free Consultation
          </Link>
          <Link to="/en/zakbot" className="bg-transparent border-2 border-white text-white py-3 px-8 rounded-lg font-bold hover:bg-white hover:text-zakbot-blue transition text-lg block text-center">
            Try Zakbot Demo
          </Link>
        </motion.div>
        
      </div>
    </section>
  );
};

export default ServicesHero;