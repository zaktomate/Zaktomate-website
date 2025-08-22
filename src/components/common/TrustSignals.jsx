import React from 'react';
import { motion } from 'framer-motion';
import { getTextColor } from '../../utils/colorUtils';

// Import your logo images here
import openaiLogo from '../../assets/logos/openai.png';
import openrouterLogo from '../../assets/logos/openrouter.png';
import kilocodeLogo from '../../assets/logos/kilocode.png';
import googleGeminiLogo from '../../assets/logos/google-gemini.png';
import mongodbLogo from '../../assets/logos/mongodb.png';

const TrustSignals = () => {
  const logos = [
    { src: openaiLogo, alt: "OpenAI Logo" },
    { src: openrouterLogo, alt: "Openrouter Logo" },
    { src: kilocodeLogo, alt: "Kilocode Logo" },
    { src: googleGeminiLogo, alt: "Google Gemini Logo" },
    { src: mongodbLogo, alt: "MongoDB Logo" },
  ];

  return (
    <section id="trust-signals" className="py-12 bg-gray-100 dark:bg-gray-800">
      <div className="container mx-auto px-4 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className={`text-2xl md:text-3xl font-bold mb-8 ${getTextColor('default')}`}
        >
          Trusted By
        </motion.h2>
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
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
      </div>
    </section>
  );
};

export default TrustSignals;