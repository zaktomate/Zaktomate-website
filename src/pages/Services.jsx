import React from 'react';
import { motion } from 'framer-motion';
import Card from '../components/common/Card';

const Services = () => {
  const services = [
    {
      title: "ZakDeck — AI-Powered Slide Creator",
      description: "Turn your notes into beautiful, ready-to-present slides in minutes.",
      features: [
        "Saves hours of manual work",
        "Great for teachers, trainers, and marketers",
        "Fully editable PowerPoint/Google Slides output",
        "Supports both English and Bangla content"
      ],
      status: "Coming Soon"
    },
    {
      title: "Zakbot — Your AI Customer Support Assistant",
      description: "Intelligent chatbot that works 24/7 to handle customer queries.",
      features: [
        "Works on your website or app",
        "Trained using your content",
        "Custom responses in Bangla or English",
        "Perfect for student help desks and businesses"
      ],
      status: "Available Now"
    },
    {
      title: "Custom AI Solutions",
      description: "Tailor-made AI tools built around your specific workflow needs.",
      features: [
        "Automate repetitive reporting",
        "Summarize large documents",
        "Organize customer queries",
        "Streamline internal processes"
      ],
      status: "Custom Development"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-20">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold font-heading text-zakbot-dark dark:text-white mb-6">
            Our <span className="gradient-text">Services</span>
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            We offer a range of AI-powered solutions designed to help Bangladeshi businesses 
            automate repetitive work and improve efficiency.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card
              key={index}
              className="h-full"
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
                <div className="mb-4">
                  <span className={`inline-block px-3 py-1 rounded-full text-sm font-medium ${
                    service.status === 'Available Now' 
                      ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200'
                      : service.status === 'Coming Soon'
                      ? 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200'
                      : 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200'
                  }`}>
                    {service.status}
                  </span>
                </div>
                <h3 className="text-2xl font-bold font-heading text-zakbot-dark dark:text-white mb-4">
                  {service.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-6">
                  {service.description}
                </p>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start">
                      <span className="text-zakbot-blue mr-2 mt-1">•</span>
                      <span className="text-gray-600 dark:text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>
                <button 
                  className={`w-full py-3 px-6 rounded-lg font-medium transition-colors ${
                    service.status === 'Available Now'
                      ? 'bg-zakbot-blue text-white hover:bg-zakbot-blue-light'
                      : 'bg-gray-200 text-gray-500 cursor-not-allowed dark:bg-gray-700'
                  }`}
                  disabled={service.status !== 'Available Now'}
                >
                  {service.status === 'Available Now' ? 'Get Started' : service.status}
                </button>
              </Card>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-16 text-center"
        >
          <h2 className="text-3xl font-bold font-heading text-zakbot-dark dark:text-white mb-6">
            Need Something <span className="gradient-text">Custom</span>?
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-8">
            Don't see exactly what you need? We can build custom AI solutions tailored to your 
            specific business requirements. Let's discuss your unique challenges.
          </p>
          <a 
            href="/contact" 
            className="inline-block bg-zakbot-teal hover:bg-zakbot-teal-light text-white font-medium py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105"
          >
            Discuss Custom Solution
          </a>
        </motion.div>
      </div>
    </div>
  );
};

export default Services;