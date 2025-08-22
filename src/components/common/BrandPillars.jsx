import React from 'react';
import { motion } from 'framer-motion';
import { getTextColor } from '../../utils/colorUtils';
import { FaCheckCircle, FaPuzzlePiece, FaWallet, FaShieldAlt } from 'react-icons/fa';

const BrandPillars = () => {
  const pillars = [
    {
      icon: <FaCheckCircle className="text-4xl text-green-500" />,
      headline: "AI that just works",
      microcopy: "We strip away the jargon and give you tools that are easy to use, fast to deploy, and built to deliver results from day one.",
      proof: "Our clients can launch within weeks",
    },
    {
      icon: <FaPuzzlePiece className="text-4xl text-orange-500" />,
      headline: "Tailored to Your Business",
      microcopy: "No two businesses are the same. That’s why every Zakbot solution adapts to your exact processes, not the other way around.",
      proof: "Custom-trained chatbot for your business can handle thousands of queries/month.",
    },
    {
      icon: <FaWallet className="text-4xl text-blue-500" />,
      headline: "AI shouldn’t break the bank.",
      microcopy: "We make automation accessible. Transparent pricing ensures you get enterprise-grade capability without enterprise-grade costs.",
      proof: "Save up to 70% vs global providers.",
    },
    {
      icon: <FaShieldAlt className="text-4xl text-purple-500" />,
      headline: "Your Trusted AI Partner",
      microcopy: "From data security to long-term support, we don’t just deploy automation—we stand by it. Our team is your partner, not just your vendor.",
      proof: "Zakbot demo snippet",
    },
  ];

  return (
    <section id="brand-pillars" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className={`text-3xl md:text-4xl font-bold mb-12 ${getTextColor('default')}`}
        >
          Why Choose Zaktomate?
        </motion.h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {pillars.map((pillar, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex flex-col items-center p-6 rounded-lg shadow-lg bg-gray-50 dark:bg-gray-800"
            >
              <div className="mb-4">{pillar.icon}</div>
              <h3 className={`text-xl font-bold mb-2 ${getTextColor('default')}`}>{pillar.headline}</h3>
              <p className={`text-center mb-3 ${getTextColor('secondary')}`}>{pillar.microcopy}</p>
              <p className={`text-sm font-semibold ${getTextColor('primary')}`}>{pillar.proof}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BrandPillars;