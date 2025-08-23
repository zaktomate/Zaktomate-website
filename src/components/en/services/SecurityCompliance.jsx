import React from 'react';
import { motion } from 'framer-motion';
import { FaShieldAlt, FaCheckCircle, FaUserShield } from 'react-icons/fa';

const SecurityCompliance = () => {
  const subitems = [
    {
      icon: <FaShieldAlt className="text-2xl text-zakbot-blue" />,
      title: "Tenant Sharding",
      description: "Data isolation ensures your information is never commingled with other clients"
    },
    {
      icon: <FaCheckCircle className="text-2xl text-zakbot-blue" />,
      title: "GDPR-Friendly Controls",
      description: "Built-in privacy controls and data handling procedures compliant with GDPR requirements"
    },
    {
      icon: <FaUserShield className="text-2xl text-zakbot-blue" />,
      title: "Model Explainability",
      description: "Transparent AI decision-making processes with audit trails for compliance purposes"
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
          className="text-3xl md:text-4xl font-bold text-center mb-4 text-gray-900 dark:text-white"
        >
          Security & Responsible AI
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-xl text-center max-w-3xl mx-auto mb-12 text-gray-700 dark:text-gray-300"
        >
          Enterprise-grade security and ethical AI practices you can trust.
        </motion.p>

        <div className="max-w-4xl mx-auto">
          <div className="flex justify-center mb-12">
            <div className="w-24 h-24 rounded-full bg-zakbot-blue flex items-center justify-center text-white">
              <FaShieldAlt className="text-4xl" />
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {subitems.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-md text-center"
              >
                <div className="flex justify-center mb-4">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">{item.title}</h3>
                <p className="text-gray-700 dark:text-gray-300">{item.description}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-6"
          >
            <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">Our Commitment</h3>
            <p className="text-gray-700 dark:text-gray-300">
              We are committed to responsible AI development and deployment. Our systems are regularly 
              audited for bias, fairness, and transparency. We provide optional NDAs and SLAs for 
              enterprise clients requiring additional security measures.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default SecurityCompliance;