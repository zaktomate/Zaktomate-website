import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import { FaBuilding } from 'react-icons/fa';
import { getTextColor, getColorClasses } from '../../utils/colorUtils';

const About = ({ content, ctaText, ctaLink }) => {
  const colors = getColorClasses('zakbot-blue');

  return (
    <section id="about" className="py-20 bg-white/70 dark:bg-gray-900 backdrop-blur-sm">
      <div className="container mx-auto px-4 text-center">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className={`text-3xl font-bold mb-4 ${getTextColor('default')}`}
        >
          <FaBuilding className="inline-block mr-2" /> About Zaktomate
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className={`max-w-3xl mx-auto ${getTextColor('secondary')}`}
        >
          {content || `We're an AI automation agency based in Dhaka, working with local startups, ed-techs, and SMEs.
          Our mission: Make AI useful, simple, and affordable for growing Bangladeshi teams.
          Whether you need to answer 1,000+ queries daily or create slides in a rush — we build tools that do the work for you.`}
        </motion.p>
        {ctaText && ctaLink && (
          <Link
            to={ctaLink}
            className={`inline-block ${colors.button} text-white py-3 px-8 rounded-md font-bold ${colors.buttonHover} transition mt-8`}
          >
            {ctaText}
          </Link>
        )}
      </div>
    </section>
  );
};

export default About;