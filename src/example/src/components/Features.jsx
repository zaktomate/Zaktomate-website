import React from 'react';
import { motion } from 'framer-motion';
import { FaBrain, FaUsers, FaSearch, FaBolt, FaShieldAlt, FaChartLine } from 'react-icons/fa';

const Features = () => {
  const features = [
    {
      icon: <FaBrain className="text-3xl" />,
      title: "Context-Aware AI",
      description: "Uses Fastest of the Large Language Models for fast, intelligent responses with deep understanding of context.",
      color: "text-zakbot-blue",
      bgColor: "bg-zakbot-blue",
    },
    {
      icon: <FaSearch className="text-3xl" />,
      title: "Smart Vector Search",
      description: "Leverages MongoDB's vector search capabilities to find relevant information quickly.",
      color: "text-zakbot-teal",
      bgColor: "bg-zakbot-teal",
    },
    {
      icon: <FaUsers className="text-3xl" />,
      title: "Multi-Client Support",
      description: "Dynamically adapts to different clients with unique configurations and knowledge bases.",
      color: "text-zakbot-purple",
      bgColor: "bg-zakbot-purple",
    },
    {
      icon: <FaBolt className="text-3xl" />,
      title: "Real-Time Responses",
      description: "Delivers instant responses with minimal latency for seamless user experiences.",
      color: "text-zakbot-blue",
      bgColor: "bg-zakbot-blue",
    },
    {
      icon: <FaShieldAlt className="text-3xl" />,
      title: "Secure & Reliable",
      description: "Built with enterprise-grade security and reliability for peace of mind.",
      color: "text-zakbot-teal",
      bgColor: "bg-zakbot-teal",
    },
    {
      icon: <FaChartLine className="text-3xl" />,
      title: "Analytics & Insights",
      description: "Track usage patterns and gain valuable insights from customer interactions.",
      color: "text-zakbot-purple",
      bgColor: "bg-zakbot-purple",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section className="section-padding">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold font-heading text-zakbot-dark dark:text-white mb-4">
            Powerful Features for <span className="gradient-text">Intelligent Conversations</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Zakbot combines cutting-edge AI technology with practical business needs to deliver 
            an unmatched conversational experience.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -10 }}
              className="feature-card group"
            >
              <div className={`w-16 h-16 rounded-lg ${feature.bgColor} bg-opacity-10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <div className={feature.color}>
                  {feature.icon}
                </div>
              </div>
              <h3 className="text-xl font-bold font-heading text-zakbot-dark dark:text-white mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Technology Stack */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-20"
        >
          <h3 className="text-2xl font-bold font-heading text-zakbot-dark dark:text-white mb-8 text-center">
            Built with <span className="gradient-text dark:gradient-text-dark">Modern Technology</span>
          </h3>
          
          <div className="bg-gray-50 dark:bg-gray-700 rounded-2xl p-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-4xl font-bold text-zakbot-blue dark:text-blue-400 mb-2">Node.js</div>
                <div className="text-gray-600 dark:text-gray-300">Backend</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-zakbot-teal dark:text-teal-400 mb-2">MongoDB</div>
                <div className="text-gray-600 dark:text-gray-300">Database</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-zakbot-purple dark:text-purple-400 mb-2">Gemini</div>
                <div className="text-gray-600 dark:text-gray-300">AI Model</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-zakbot-blue dark:text-blue-400 mb-2">Docker</div>
                <div className="text-gray-600 dark:text-gray-300">Deployment</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Features;