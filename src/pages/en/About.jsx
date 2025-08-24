import React from 'react';
import { motion } from 'framer-motion';
import { FaUsers, FaLightbulb, FaRocket, FaHeart, FaCheck } from 'react-icons/fa';
import Card from '../../components/common/Card';
import SEO from '../../components/common/SEO';


const AboutEN = () => {
  const team = [
    {
      name: "AI Specialists",
      icon: <FaLightbulb className="text-3xl" />,
      description: "Experts in machine learning and natural language processing"
    },
    {
      name: "Software Engineers",
      icon: <FaRocket className="text-3xl" />,
      description: "Skilled developers building robust and scalable solutions"
    },
    {
      name: "Customer Success",
      icon: <FaUsers className="text-3xl" />,
      description: "Dedicated team ensuring your success with our products"
    },
    {
      name: "Support Team",
      icon: <FaHeart className="text-3xl" />,
      description: "Always ready to help you with any questions or issues"
    }
  ];

  const values = [
    {
      title: "Innovation",
      description: "We stay at the forefront of AI technology to bring you the best solutions."
    },
    {
      title: "Simplicity",
      description: "Complex technology made simple and accessible for everyone."
    },
    {
      title: "Reliability",
      description: "Building dependable solutions you can count on 24/7."
    },
    {
      title: "Customer-Centric",
      description: "Your success is our success. We're here to support your growth."
    }
  ];

  const timeline = [
    {
      year: "2023",
      title: "Founded in Dhaka",
      description: "Zaktomate was established with a vision to bring AI automation to businesses worldwide."
    },
    {
      year: "2024",
      title: "Launch of Zakbot",
      description: "Released our flagship AI chatbot product, helping businesses automate customer support."
    },
    {
      year: "2025",
      title: "Global Expansion",
      description: "Expanding our team and product suite to serve businesses across the globe."
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-20">
        <SEO />
      <div className="container">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="section-padding text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold font-heading text-zakbot-dark dark:text-white mb-6">
            About <span className="gradient-text">Zaktomate</span>
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            We're an AI automation agency based in Dhaka, working with businesses worldwide.
            Our mission: Make AI useful, simple, and affordable for growing teams everywhere.
          </p>
        </motion.div>

        {/* Mission Section */}
        <section className="mb-20">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl font-bold font-heading text-zakbot-dark dark:text-white mb-6">
                Our <span className="gradient-text">Mission</span>
              </h2>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                At Zaktomate, we believe that AI technology should be accessible to every business, 
                regardless of size or technical expertise. We're committed to democratizing AI by 
                creating solutions that are:
              </p>
              <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                <li className="flex items-start">
                  <span className="text-zakbot-blue mr-2">•</span>
                  <span>Easy to implement and use</span>
                </li>
                <li className="flex items-start">
                  <span className="text-zakbot-blue mr-2">•</span>
                  <span>Affordable for businesses worldwide</span>
                </li>
                <li className="flex items-start">
                  <span className="text-zakbot-blue mr-2">•</span>
                  <span>Tailored to diverse needs and contexts</span>
                </li>
                <li className="flex items-start">
                  <span className="text-zakbot-blue mr-2">•</span>
                  <span>Reliable and secure</span>
                </li>
              </ul>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-gradient-to-br from-zakbot-blue to-zakbot-teal rounded-2xl p-8 text-white"
            >
              <h3 className="text-2xl font-bold mb-4">Why Choose Us?</h3>
              <p className="mb-4">
                Whether you need to answer 1,000+ queries daily or create slides in a rush — 
                we build tools that do the work for you.
              </p>
              <div className="space-y-3">
                <div className="flex items-center">
                  <FaCheck className="mr-3" />
                  <span>Global expertise with cutting-edge technology</span>
                </div>
                <div className="flex items-center">
                  <FaCheck className="mr-3" />
                  <span>24/7 support in multiple languages</span>
                </div>
                <div className="flex items-center">
                  <FaCheck className="mr-3" />
                  <span>Competitive pricing for global market</span>
                </div>
                <div className="flex items-center">
                  <FaCheck className="mr-3" />
                  <span>Custom solutions for unique needs</span>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Values Section */}
        <section className="mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold font-heading text-zakbot-dark dark:text-white mb-4">
              Our <span className="gradient-text">Values</span>
            </h2>
            <p className="text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              The principles that guide everything we do at Zaktomate.
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <Card
                key={index}
                className="text-center h-full"
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <h3 className="text-xl font-bold text-zakbot-dark dark:text-white mb-3">
                  {value.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  {value.description}
                </p>
              </Card>
            ))}
          </div>
        </section>

        {/* Team Section */}
        <section className="mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold font-heading text-zakbot-dark dark:text-white mb-4">
              Our <span className="gradient-text">Team</span>
            </h2>
            <p className="text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Meet the passionate individuals working together to transform businesses with AI.
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((member, index) => (
              <Card
                key={index}
                className="text-center h-full"
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="w-16 h-16 bg-zakbot-blue bg-opacity-10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <div className="text-zakbot-blue">
                    {member.icon}
                  </div>
                </div>
                <h3 className="text-xl font-bold text-zakbot-dark dark:text-white mb-2">
                  {member.name}
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  {member.description}
                </p>
              </Card>
            ))}
          </div>
        </section>

        {/* Timeline Section */}
        <section className="mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold font-heading text-zakbot-dark dark:text-white mb-4">
              Our <span className="gradient-text">Journey</span>
            </h2>
            <p className="text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Key milestones in our mission to bring AI to businesses worldwide.
            </p>
          </motion.div>
          
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-zakbot-blue bg-opacity-20"></div>
            <div className="space-y-12">
              {timeline.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className={`relative flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
                >
                  <div className="w-1/2 pr-8">
                    <Card transition={{ duration: 0.5, delay: index * 0.1 }}>
                      <div className="text-sm font-semibold text-zakbot-blue mb-2">{item.year}</div>
                      <h3 className="text-xl font-bold text-zakbot-dark dark:text-white mb-2">
                        {item.title}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-300">
                        {item.description}
                      </p>
                    </Card>
                  </div>
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-zakbot-blue rounded-full border-4 border-white dark:border-gray-900"></div>
                  <div className="w-1/2 pl-8"></div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <h2 className="text-3xl font-bold font-heading text-zakbot-dark dark:text-white mb-4">
            Ready to Transform Your Business?
          </h2>
          <p className="text-gray-600 dark:text-gray-300 mb-6 max-w-2xl mx-auto">
            Join the growing number of businesses worldwide using Zaktomate's AI solutions 
            to automate their workflows and improve efficiency.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/en/contact" 
              className="bg-zakbot-blue hover:bg-zakbot-blue-light text-white font-medium py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105"
            >
              Get Started
            </a>
            <a 
              href="/en/services" 
              className="bg-transparent border-2 border-zakbot-blue text-zakbot-blue hover:bg-zakbot-blue hover:text-white font-medium py-3 px-8 rounded-lg transition-all duration-300"
            >
              View Services
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default AboutEN;