import React from 'react';
import { motion } from 'framer-motion';
import { getTextColor } from '../../utils/colorUtils';
import { Link } from 'react-router-dom';

// Import your logo images here
import openaiLogo from '../../assets/logos/openai.png';
import openrouterLogo from '../../assets/logos/openrouter.png';
import kilocodeLogo from '../../assets/logos/kilocode.png';
import googleGeminiLogo from '../../assets/logos/google-gemini.png';
import mongodbLogo from '../../assets/logos/mongodb.svg';

const TrustSignals = () => {
  const logos = [
    { src: openaiLogo, alt: "OpenAI Logo" },
    { src: openrouterLogo, alt: "Openrouter Logo" },
    { src: kilocodeLogo, alt: "Kilocode Logo" },
    { src: googleGeminiLogo, alt: "Google Gemini Logo" },
    { src: mongodbLogo, alt: "MongoDB Logo" },
  ];

  return (
    <section id="trust-signals" className="section-padding py-12 bg-gray-100 dark:bg-gray-800">
      <div className="container mx-auto px-4 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className={`text-2xl md:text-3xl font-bold mb-8 ${getTextColor('default')}`}
        >
          Technologies We Use
        </motion.h2>
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12 mb-16">
          {logos.map((logo, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex-shrink-0"
            >
              <img src={logo.src} alt={logo.alt} className="h-12 md:h-16 w-auto object-contain dark:filter dark:invert" />
            </motion.div>
          ))}
        </div>
        
        {/* Closing CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="bg-white dark:bg-gray-700 rounded-2xl shadow-lg p-8 md:p-12 max-w-4xl mx-auto"
        >
          <h2 className="text-2xl md:text-3xl font-bold mb-4 text-gray-900 dark:text-white">
            Ready to Automate Your Business with AI?
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
            Transform your operations with our cutting-edge AI solutions. Schedule a free consultation to discover how we can help you save time and scale efficiently.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              to="/contact"
              className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition duration-300 ease-in-out transform hover:scale-105"
            >
              Get Free Consultation
            </Link>
            <Link
              to="/contact"
              className="bg-gray-800 hover:bg-black text-white font-bold py-3 px-6 rounded-lg transition duration-300 ease-in-out transform hover:scale-105 dark:bg-gray-600 dark:hover:bg-gray-500"
            >
              Contact Us
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TrustSignals;