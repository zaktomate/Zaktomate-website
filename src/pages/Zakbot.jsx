import React from 'react';
import { motion } from 'framer-motion';
import { FaBrain, FaUsers, FaSearch, FaBolt, FaShieldAlt, FaChartLine, FaRobot } from 'react-icons/fa';
import Card from '../components/common/Card';
import ChatDemo from '../components/specific/ChatDemo';

const Zakbot = () => {
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

  const useCases = [
    {
      title: "Customer Support",
      description: "Handle customer queries 24/7 with intelligent responses",
      icon: "🎧"
    },
    {
      title: "Educational Platforms",
      description: "Assist students with instant answers to their questions",
      icon: "🎓"
    },
    {
      title: "E-commerce",
      description: "Help customers with product recommendations and support",
      icon: "🛒"
    },
    {
      title: "Healthcare",
      description: "Provide preliminary information and appointment scheduling",
      icon: "🏥"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-zakbot-blue to-zakbot-teal text-white">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <div className="flex justify-center mb-6">
              <div className="w-20 h-20 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
                <FaRobot className="text-4xl" />
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold font-heading mb-6">
              Zakbot by <span className="text-white">Zaktomate</span>
            </h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto mb-8 opacity-90">
              AI-powered chatbot with context-aware responses and multi-client support
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="#demo" 
                className="bg-white text-zakbot-blue py-3 px-8 rounded-lg font-bold hover:bg-gray-100 transition"
              >
                Try Live Demo
              </a>
              <a 
                href="#features" 
                className="bg-transparent border-2 border-white text-white py-3 px-8 rounded-lg font-bold hover:bg-white hover:text-zakbot-blue transition"
              >
                View Features
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20">
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

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card
                key={index}
                className="feature-card group"
                transition={{ duration: 0.5, delay: index * 0.1 }}
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
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-20 bg-white dark:bg-gray-800">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold font-heading text-zakbot-dark dark:text-white mb-4">
              Perfect for <span className="gradient-text">Every Industry</span>
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Zakbot adapts to your specific industry needs, providing tailored solutions for various use cases.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {useCases.map((useCase, index) => (
              <Card
                key={index}
                className="h-full text-center"
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="text-4xl mb-4">{useCase.icon}</div>
                <h3 className="text-xl font-bold font-heading text-zakbot-dark dark:text-white mb-3">
                  {useCase.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  {useCase.description}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Demo Section */}
      <section id="demo" className="py-20">
        <ChatDemo />
      </section>

      {/* Technology Stack */}
      <section className="py-20 bg-white dark:bg-gray-800">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <h3 className="text-2xl font-bold font-heading text-zakbot-dark dark:text-white mb-8">
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

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-zakbot-blue to-zakbot-teal text-white">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold font-heading mb-6">
              Ready to Transform Your Customer Experience?
            </h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto opacity-90">
              Join hundreds of businesses already using Zakbot to automate their customer support and improve efficiency.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/contact" 
                className="bg-white text-zakbot-blue py-3 px-8 rounded-lg font-bold hover:bg-gray-100 transition"
              >
                Get Started
              </a>
              <a 
                href="#demo" 
                className="bg-transparent border-2 border-white text-white py-3 px-8 rounded-lg font-bold hover:bg-white hover:text-zakbot-blue transition"
              >
                Try Demo
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Zakbot;