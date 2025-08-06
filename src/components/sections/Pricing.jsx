import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import { getTextColor, getColorClasses } from '../../utils/colorUtils';

const Pricing = () => {
  const colors = getColorClasses('zakbot-blue');

  return (
    <section id="pricing" className="h-screen py-20 bg-white/50 dark:bg-gray-950 text-center backdrop-blur-sm">
      <div className="container mx-auto px-4">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className={`text-3xl font-bold mb-4 ${getTextColor('default')}`}
        >
          💰 Transparent Pricing for Local Teams
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className={`max-w-3xl mx-auto mt-4 mb-6 ${getTextColor('secondary')}`}
        >
          We keep pricing affordable for the Bangladesh market — no surprises.
        </motion.p>
        <ul className={`list-disc list-inside mb-6 inline-block text-left ${getTextColor('secondary')}`}>
          <li>Starts at BDT 5,000/month</li>
          <li>Free trial available</li>
          <li>50% OFF your first month</li>
        </ul>
        <div className="flex justify-center gap-4 mt-8">
          <Link
            to="/pricing"
            className={`${colors.button} text-white py-3 px-8 rounded-md font-bold ${colors.buttonHover} transition`}
          >
            See Packages
          </Link>
          <Link
            to="#contact"
            className={`bg-transparent border ${colors.border} ${colors.text} py-3 px-8 rounded-md font-bold hover:${colors.button} hover:text-white transition`}
          >
            Start Free Trial
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Pricing;