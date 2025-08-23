import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import { FaBuilding, FaLightbulb, FaUsers, FaGlobe, FaHandshake, FaTag } from 'react-icons/fa';
import { getTextColor, getColorClasses } from '../../utils/colorUtils';

const About = ({ content, ctaText, ctaLink }) => {
  const colors = getColorClasses('zakbot-blue');

  const values = [
    { icon: <FaLightbulb className="text-xl" />, title: "Simplicity", description: "We cut through complexity to deliver clarity and efficiency." },
    { icon: <FaUsers className="text-xl" />, title: "Customization", description: "Every client is unique; our solutions adapt to your workflow, not the other way around." },
    { icon: <FaTag className="text-xl" />, title: "Affordability", description: "AI should drive ROI, not drain budgets." },
    { icon: <FaHandshake className="text-xl" />, title: "Trust", description: "Long-term relationships over quick wins." },
    { icon: <FaGlobe className="text-xl" />, title: "Global Mindset", description: "While rooted in Dhaka, our outlook is borderless." }
  ];

  return (
    <section id="about" className="py-20 bg-white/70 dark:bg-gray-800 backdrop-blur-sm">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className={`text-3xl font-bold mb-4 ${getTextColor('default')}`}
          >
            <FaBuilding className="inline-block mr-2" /> About Zaktomate
          </motion.h2>
        </div>

        {/* Our Story Section */}
        <div className="mb-16">
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className={`text-2xl font-bold mb-6 ${getTextColor('default')}`}
          >
            Our Story
          </motion.h3>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className={`max-w-3xl mx-auto mb-4 ${getTextColor('secondary')}`}
          >
            Zaktomate was born in Dhaka, but with a vision that goes far beyond borders. It started with a group of students who weren't satisfied with how businesses—especially in emerging markets—struggled to adopt AI. Most tools were either too expensive, too complicated, or too disconnected from the realities of running a business.
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className={`max-w-3xl mx-auto mb-4 ${getTextColor('secondary')}`}
          >
            We asked ourselves: What if AI could be packaged as a service, designed around people—not the other way around?
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className={`max-w-3xl mx-auto ${getTextColor('secondary')}`}
          >
            From that simple question, Zaktomate grew. Today, we are building AI systems and solutions that bridge the gap between cutting-edge technology and everyday business needs. What began as experiments in automating repetitive academic and content workflows has become a platform for long-term AI transformation—starting with ed-tech and SMEs, and now extending to global clients through platforms like Fiverr and Upwork.
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className={`max-w-3xl mx-auto ${getTextColor('secondary')}`}
          >
            That's when Zaktomate's identity crystallized: an AI transformation partner that grows with you.
          </motion.p>
        </div>

        {/* Our Values Section */}
        <div className="mb-16">
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className={`text-2xl font-bold mb-6 ${getTextColor('default')}`}
          >
            Our Values
          </motion.h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-md"
              >
                <div className={`mb-4 ${colors.text}`}>
                  {value.icon}
                </div>
                <h4 className={`text-xl font-semibold mb-2 ${getTextColor('default')}`}>
                  {value.title}
                </h4>
                <p className={getTextColor('secondary')}>
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {ctaText && ctaLink && (
          <div className="text-center">
            <Link
              to={ctaLink}
              className={`inline-block ${colors.button} text-white py-3 px-8 rounded-md font-bold ${colors.buttonHover} transition mt-8`}
            >
              {ctaText}
            </Link>
          </div>
        )}
      </div>
    </section>
  );
};

export default About;