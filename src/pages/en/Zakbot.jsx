import React from 'react';
import { motion } from 'framer-motion';
import { FaBrain, FaUsers, FaSearch, FaBolt, FaShieldAlt, FaChartLine, FaRobot, FaHeadphones, FaGraduationCap, FaShoppingCart, FaHospital, FaCheck, FaFileAlt, FaLanguage, FaComments, FaUserFriends, FaBullhorn, FaBook, FaBalanceScale, FaFileContract } from 'react-icons/fa';
import Card from '../../components/common/Card';
import { getColorClasses } from '../../utils/colorUtils';
import ChatDemo from '../../components/specific/ChatDemo';
import SEO from '../../components/common/SEO';

const ZakbotEN = () => {
  const features = [
    {
      icon: <FaBrain className="text-3xl" />,
      title: "Custom Knowledge Training",
      description: "Train Zakbot on your specific business data and documentation for accurate, context-aware responses.",
      color: getColorClasses('zakbot-yellow').text,
      bgColor: getColorClasses('zakbot-yellow').bg,
    },
    {
      icon: <FaLanguage className="text-3xl" />,
      title: "Multi-Language",
      description: "Communicate with customers in their preferred language with support for 50+ languages.",
      color: getColorClasses('zakbot-rose').text,
      bgColor: getColorClasses('zakbot-rose').bg,
    },
    {
      icon: <FaComments className="text-3xl" />,
      title: "Omnichannel Deployment",
      description: "Deploy Zakbot across website, social media, email, and messaging platforms seamlessly.",
      color: getColorClasses('zakbot-indigo').text,
      bgColor: getColorClasses('zakbot-indigo').bg,
    },
    {
      icon: <FaChartLine className="text-3xl" />,
      title: "Analytics Dashboard",
      description: "Gain insights into customer interactions, conversation trends, and performance metrics.",
      color: getColorClasses('zakbot-yellow').text,
      bgColor: getColorClasses('zakbot-yellow').bg,
    },
    {
      icon: <FaUserFriends className="text-3xl" />,
      title: "Handoff to Human",
      description: "Seamlessly transfer complex conversations to human agents when needed with full context.",
      color: getColorClasses('zakbot-rose').text,
      bgColor: getColorClasses('zakbot-rose').bg,
    },
    {
      icon: <FaShieldAlt className="text-3xl" />,
      title: "Secure & Private",
      description: "Enterprise-grade security with end-to-end encryption and compliance with global data protection regulations.",
      color: getColorClasses('zakbot-indigo').text,
      bgColor: getColorClasses('zakbot-indigo').bg,
    },
  ];

  const useCases = [
    {
      icon: <FaHeadphones className="text-3xl" />,
      title: "Customer Support",
      description: "Handle customer queries 24/7 with intelligent responses",
      color: "text-zakbot-blue",
      bgColor: "bg-zakbot-blue",
    },
    {
      icon: <FaGraduationCap className="text-3xl" />,
      title: "Educational Platforms",
      description: "Assist students with instant answers to their questions",
      color: "text-zakbot-teal",
      bgColor: "bg-zakbot-teal",
    },
    {
      icon: <FaShoppingCart className="text-3xl" />,
      title: "E-commerce",
      description: "Help customers with product recommendations and support",
      color: "text-zakbot-purple",
      bgColor: "bg-zakbot-purple",
    },
    {
      icon: <FaHospital className="text-3xl" />,
      title: "Healthcare",
      description: "Provide preliminary information and appointment scheduling",
      color: "text-zakbot-blue",
      bgColor: "bg-zakbot-blue",
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* SEO Tags */}
      <SEO />
      
      {/* Hero Section */}
      <section className="min-h-screen bg-gradient-to-br from-zakbot-blue to-zakbot-teal dark:from-zakbot-blue-light dark:to-zakbot-teal-light text-white flex items-center">
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
              Meet Zakbot — Your AI Assistant That Works 24/7
            </h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto mb-8 opacity-90">
              Trained on your business data, Zakbot handles support, customer queries, and content — so your team can focus on growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#demo"
                className="bg-white text-zakbot-blue py-3 px-8 rounded-lg font-bold hover:bg-gray-100 transition"
              >
                Try Zakbot Live
              </a>
              <a
                href="/en/contact"
                className="bg-transparent border-2 border-white text-white py-3 px-8 rounded-lg font-bold hover:bg-white hover:text-zakbot-blue transition"
              >
                Contact Us
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* The Problems Section */}
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
              The Problems <span className="gradient-text">Businesses Face</span>
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Common challenges that prevent businesses from scaling efficiently
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="feature-card group">
              <div className="w-16 h-16 rounded-lg bg-zakbot-blue bg-opacity-10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <FaHeadphones className="text-3xl text-zakbot-blue" />
              </div>
              <h3 className="text-xl font-bold font-heading text-zakbot-dark dark:text-white mb-3">
                Manual Support Costs
              </h3>
              <ul className="text-gray-600 dark:text-gray-300 space-y-2">
                <li className="flex items-start">
                  <FaCheck className="text-green-500 mt-1 mr-2 flex-shrink-0" />
                  <span>High labor costs for customer service teams</span>
                </li>
                <li className="flex items-start">
                  <FaCheck className="text-green-500 mt-1 mr-2 flex-shrink-0" />
                  <span>Inconsistent response quality and timing</span>
                </li>
                <li className="flex items-start">
                  <FaCheck className="text-green-500 mt-1 mr-2 flex-shrink-0" />
                  <span>Limited availability outside business hours</span>
                </li>
                <li className="flex items-start">
                  <FaCheck className="text-green-500 mt-1 mr-2 flex-shrink-0" />
                  <span>Scalability issues during peak periods</span>
                </li>
              </ul>
            </Card>

            <Card className="feature-card group">
              <div className="w-16 h-16 rounded-lg bg-zakbot-teal bg-opacity-10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <FaFileAlt className="text-3xl text-zakbot-teal" />
              </div>
              <h3 className="text-xl font-bold font-heading text-zakbot-dark dark:text-white mb-3">
                Content Bottlenecks
              </h3>
              <ul className="text-gray-600 dark:text-gray-300 space-y-2">
                <li className="flex items-start">
                  <FaCheck className="text-green-500 mt-1 mr-2 flex-shrink-0" />
                  <span>Time-consuming creation of marketing materials</span>
                </li>
                <li className="flex items-start">
                  <FaCheck className="text-green-500 mt-1 mr-2 flex-shrink-0" />
                  <span>Inconsistent messaging across channels</span>
                </li>
                <li className="flex items-start">
                  <FaCheck className="text-green-500 mt-1 mr-2 flex-shrink-0" />
                  <span>Limited capacity to personalize content</span>
                </li>
                <li className="flex items-start">
                  <FaCheck className="text-green-500 mt-1 mr-2 flex-shrink-0" />
                  <span>Difficulty maintaining content freshness</span>
                </li>
              </ul>
            </Card>

            <Card className="feature-card group">
              <div className="w-16 h-16 rounded-lg bg-zakbot-purple bg-opacity-10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <FaChartLine className="text-3xl text-zakbot-purple" />
              </div>
              <h3 className="text-xl font-bold font-heading text-zakbot-dark dark:text-white mb-3">
                Inefficient Lead Generation
              </h3>
              <ul className="text-gray-600 dark:text-gray-300 space-y-2">
                <li className="flex items-start">
                  <FaCheck className="text-green-500 mt-1 mr-2 flex-shrink-0" />
                  <span>Manual lead qualification and follow-up</span>
                </li>
                <li className="flex items-start">
                  <FaCheck className="text-green-500 mt-1 mr-2 flex-shrink-0" />
                  <span>Poor lead nurturing and conversion rates</span>
                </li>
                <li className="flex items-start">
                  <FaCheck className="text-green-500 mt-1 mr-2 flex-shrink-0" />
                  <span>Fragmented data across platforms</span>
                </li>
                <li className="flex items-start">
                  <FaCheck className="text-green-500 mt-1 mr-2 flex-shrink-0" />
                  <span>Missed opportunities due to delayed responses</span>
                </li>
              </ul>
            </Card>
          </div>
        </div>
      </section>

      {/* The Solution Section */}
      <section className="py-20">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold font-heading text-zakbot-dark dark:text-white mb-4">
              The Solution: <span className="gradient-text">Zakbot, Built to Scale Globally</span>
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Zakbot automates what holds businesses back—without sacrificing quality.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <Card className="feature-card group">
              <div className="w-16 h-16 rounded-lg bg-zakbot-blue bg-opacity-10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <FaHeadphones className="text-3xl text-zakbot-blue" />
              </div>
              <h3 className="text-xl font-bold font-heading text-zakbot-dark dark:text-white mb-3">
                AI-Powered Customer Support
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Provide instant, accurate responses to customer inquiries 24/7, reducing support costs and improving satisfaction.
              </p>
              <ul className="text-gray-600 dark:text-gray-300 space-y-2">
                <li className="flex items-start">
                  <FaCheck className="text-green-500 mt-1 mr-2 flex-shrink-0" />
                  <span>Multi-language support for global customers</span>
                </li>
                <li className="flex items-start">
                  <FaCheck className="text-green-500 mt-1 mr-2 flex-shrink-0" />
                  <span>Seamless handoff to human agents when needed</span>
                </li>
                <li className="flex items-start">
                  <FaCheck className="text-green-500 mt-1 mr-2 flex-shrink-0" />
                  <span>Comprehensive analytics and reporting</span>
                </li>
              </ul>
            </Card>

            <Card className="feature-card group">
              <div className="w-16 h-16 rounded-lg bg-zakbot-teal bg-opacity-10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <FaFileAlt className="text-3xl text-zakbot-teal" />
              </div>
              <h3 className="text-xl font-bold font-heading text-zakbot-dark dark:text-white mb-3">
                Content & Workflow Automation
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Generate marketing materials, reports, and documentation in seconds, freeing up your team for strategic work.
              </p>
              <ul className="text-gray-600 dark:text-gray-300 space-y-2">
                <li className="flex items-start">
                  <FaCheck className="text-green-500 mt-1 mr-2 flex-shrink-0" />
                  <span>Dynamic content creation for multiple channels</span>
                </li>
                <li className="flex items-start">
                  <FaCheck className="text-green-500 mt-1 mr-2 flex-shrink-0" />
                  <span>Automated workflows for repetitive tasks</span>
                </li>
                <li className="flex items-start">
                  <FaCheck className="text-green-500 mt-1 mr-2 flex-shrink-0" />
                  <span>Consistent branding across all materials</span>
                </li>
              </ul>
            </Card>

            <Card className="feature-card group">
              <div className="w-16 h-16 rounded-lg bg-zakbot-purple bg-opacity-10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <FaChartLine className="text-3xl text-zakbot-purple" />
              </div>
              <h3 className="text-xl font-bold font-heading text-zakbot-dark dark:text-white mb-3">
                Smarter Lead Generation
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Capture, qualify, and nurture leads automatically, increasing conversion rates and sales efficiency.
              </p>
              <ul className="text-gray-600 dark:text-gray-300 space-y-2">
                <li className="flex items-start">
                  <FaCheck className="text-green-500 mt-1 mr-2 flex-shrink-0" />
                  <span>Intelligent lead scoring and segmentation</span>
                </li>
                <li className="flex items-start">
                  <FaCheck className="text-green-500 mt-1 mr-2 flex-shrink-0" />
                  <span>Personalized nurturing campaigns</span>
                </li>
                <li className="flex items-start">
                  <FaCheck className="text-green-500 mt-1 mr-2 flex-shrink-0" />
                  <span>Automated follow-ups and reminders</span>
                </li>
              </ul>
            </Card>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <Card className="max-w-4xl mx-auto p-8">
              <h3 className="text-2xl font-bold font-heading text-zakbot-dark dark:text-white mb-4">
                Showcase Plan Demo
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                See how Zakbot transforms business operations with our interactive demo. Experience the power of AI-driven automation firsthand.
              </p>
              <a
                href="#demo"
                className="inline-block bg-zakbot-blue hover:bg-zakbot-blue-light text-white font-medium py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105"
              >
                View Live Demo
              </a>
            </Card>
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
                <div className={`w-16 h-16 rounded-lg ${feature.bgColor} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
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

      {/* Zakbot Use Cases Section */}
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
              Zakbot in Action: <span className="gradient-text">Real AI Solutions for Real Businesses</span>
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Discover how Zakbot transforms operations across industries with powerful AI automation
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="feature-card group">
              <div className="w-16 h-16 rounded-lg bg-zakbot-blue bg-opacity-10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <FaHeadphones className="text-3xl text-zakbot-blue" />
              </div>
              <h3 className="text-xl font-bold font-heading text-zakbot-dark dark:text-white mb-2">
                Customer Support Automation
              </h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
                Reduce support costs and improve response times
              </p>
              <ul className="text-gray-600 dark:text-gray-300 space-y-2 mb-4">
                <li className="flex items-start">
                  <FaCheck className="text-green-500 mt-1 mr-2 flex-shrink-0 text-sm" />
                  <span className="text-sm">24/7 instant responses to customer inquiries</span>
                </li>
                <li className="flex items-start">
                  <FaCheck className="text-green-500 mt-1 mr-2 flex-shrink-0 text-sm" />
                  <span className="text-sm">Multi-language support for global customers</span>
                </li>
                <li className="flex items-start">
                  <FaCheck className="text-green-500 mt-1 mr-2 flex-shrink-0 text-sm" />
                  <span className="text-sm">Seamless handoff to human agents</span>
                </li>
                <li className="flex items-start">
                  <FaCheck className="text-green-500 mt-1 mr-2 flex-shrink-0 text-sm" />
                  <span className="text-sm">Comprehensive analytics dashboard</span>
                </li>
              </ul>
              <p className="text-gray-500 dark:text-gray-400 text-xs">
                Perfect for e-commerce, SaaS, and service-based businesses
              </p>
            </Card>

            <Card className="feature-card group">
              <div className="w-16 h-16 rounded-lg bg-zakbot-teal bg-opacity-10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <FaChartLine className="text-3xl text-zakbot-teal" />
              </div>
              <h3 className="text-xl font-bold font-heading text-zakbot-dark dark:text-white mb-2">
                Lead Qualification & Sales Bots
              </h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
                Capture, qualify, and nurture leads automatically
              </p>
              <ul className="text-gray-600 dark:text-gray-300 space-y-2 mb-4">
                <li className="flex items-start">
                  <FaCheck className="text-green-500 mt-1 mr-2 flex-shrink-0 text-sm" />
                  <span className="text-sm">Intelligent lead scoring and segmentation</span>
                </li>
                <li className="flex items-start">
                  <FaCheck className="text-green-500 mt-1 mr-2 flex-shrink-0 text-sm" />
                  <span className="text-sm">Personalized nurturing campaigns</span>
                </li>
                <li className="flex items-start">
                  <FaCheck className="text-green-500 mt-1 mr-2 flex-shrink-0 text-sm" />
                  <span className="text-sm">Automated follow-ups and reminders</span>
                </li>
                <li className="flex items-start">
                  <FaCheck className="text-green-500 mt-1 mr-2 flex-shrink-0 text-sm" />
                  <span className="text-sm">Integration with CRM systems</span>
                </li>
              </ul>
              <p className="text-gray-500 dark:text-gray-400 text-xs">
                Ideal for B2B companies and sales teams
              </p>
            </Card>

            <Card className="feature-card group">
              <div className="w-16 h-16 rounded-lg bg-zakbot-purple bg-opacity-10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <FaUserFriends className="text-3xl text-zakbot-purple" />
              </div>
              <h3 className="text-xl font-bold font-heading text-zakbot-dark dark:text-white mb-2">
                Internal Ops & HR Bots
              </h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
                Streamline employee onboarding and HR processes
              </p>
              <ul className="text-gray-600 dark:text-gray-300 space-y-2 mb-4">
                <li className="flex items-start">
                  <FaCheck className="text-green-500 mt-1 mr-2 flex-shrink-0 text-sm" />
                  <span className="text-sm">Policy lookup and HR Q&A</span>
                </li>
                <li className="flex items-start">
                  <FaCheck className="text-green-500 mt-1 mr-2 flex-shrink-0 text-sm" />
                  <span className="text-sm">Guided onboarding workflows</span>
                </li>
                <li className="flex items-start">
                  <FaCheck className="text-green-500 mt-1 mr-2 flex-shrink-0 text-sm" />
                  <span className="text-sm">Auto-generated HR documents</span>
                </li>
                <li className="flex items-start">
                  <FaCheck className="text-green-500 mt-1 mr-2 flex-shrink-0 text-sm" />
                  <span className="text-sm">Employee feedback collection</span>
                </li>
              </ul>
              <p className="text-gray-500 dark:text-gray-400 text-xs">
                Great for HR departments and growing organizations
              </p>
            </Card>

            <Card className="feature-card group">
              <div className="w-16 h-16 rounded-lg bg-zakbot-blue bg-opacity-10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <FaBullhorn className="text-3xl text-zakbot-blue" />
              </div>
              <h3 className="text-xl font-bold font-heading text-zakbot-dark dark:text-white mb-2">
                Marketing Automation
              </h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
                Create and distribute personalized marketing content
              </p>
              <ul className="text-gray-600 dark:text-gray-300 space-y-2 mb-4">
                <li className="flex items-start">
                  <FaCheck className="text-green-500 mt-1 mr-2 flex-shrink-0 text-sm" />
                  <span className="text-sm">Dynamic content generation</span>
                </li>
                <li className="flex items-start">
                  <FaCheck className="text-green-500 mt-1 mr-2 flex-shrink-0 text-sm" />
                  <span className="text-sm">Campaign scheduling and analytics</span>
                </li>
                <li className="flex items-start">
                  <FaCheck className="text-green-500 mt-1 mr-2 flex-shrink-0 text-sm" />
                  <span className="text-sm">Persona-based personalization</span>
                </li>
                <li className="flex items-start">
                  <FaCheck className="text-green-500 mt-1 mr-2 flex-shrink-0 text-sm" />
                  <span className="text-sm">Social media content creation</span>
                </li>
              </ul>
              <p className="text-gray-500 dark:text-gray-400 text-xs">
                Perfect for marketing teams and agencies
              </p>
            </Card>

            <Card className="feature-card group">
              <div className="w-16 h-16 rounded-lg bg-zakbot-teal bg-opacity-10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <FaBook className="text-3xl text-zakbot-teal" />
              </div>
              <h3 className="text-xl font-bold font-heading text-zakbot-dark dark:text-white mb-2">
                Educational Knowledge-Base Chatbots
              </h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
                Provide instant answers to student and learner questions
              </p>
              <ul className="text-gray-600 dark:text-gray-300 space-y-2 mb-4">
                <li className="flex items-start">
                  <FaCheck className="text-green-500 mt-1 mr-2 flex-shrink-0 text-sm" />
                  <span className="text-sm">24/7 academic support</span>
                </li>
                <li className="flex items-start">
                  <FaCheck className="text-green-500 mt-1 mr-2 flex-shrink-0 text-sm" />
                  <span className="text-sm">Course material explanations</span>
                </li>
                <li className="flex items-start">
                  <FaCheck className="text-green-500 mt-1 mr-2 flex-shrink-0 text-sm" />
                  <span className="text-sm">Exam preparation assistance</span>
                </li>
                <li className="flex items-start">
                  <FaCheck className="text-green-500 mt-1 mr-2 flex-shrink-0 text-sm" />
                  <span className="text-sm">Multilingual support for diverse learners</span>
                </li>
              </ul>
              <p className="text-gray-500 dark:text-gray-400 text-xs">
                Ideal for educational institutions and EdTech platforms
              </p>
            </Card>

            <Card className="feature-card group">
              <div className="w-16 h-16 rounded-lg bg-zakbot-purple bg-opacity-10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <FaFileAlt className="text-3xl text-zakbot-purple" />
              </div>
              <h3 className="text-xl font-bold font-heading text-zakbot-dark dark:text-white mb-2">
                Course Material Generator
              </h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
                Automatically create presentations, notes, and assessments
              </p>
              <ul className="text-gray-600 dark:text-gray-300 space-y-2 mb-4">
                <li className="flex items-start">
                  <FaCheck className="text-green-500 mt-1 mr-2 flex-shrink-0 text-sm" />
                  <span className="text-sm">Slide deck generation from topics</span>
                </li>
                <li className="flex items-start">
                  <FaCheck className="text-green-500 mt-1 mr-2 flex-shrink-0 text-sm" />
                  <span className="text-sm">Notes and summary creation</span>
                </li>
                <li className="flex items-start">
                  <FaCheck className="text-green-500 mt-1 mr-2 flex-shrink-0 text-sm" />
                  <span className="text-sm">Quiz and exam formatting</span>
                </li>
                <li className="flex items-start">
                  <FaCheck className="text-green-500 mt-1 mr-2 flex-shrink-0 text-sm" />
                  <span className="text-sm">Version control and collaboration</span>
                </li>
              </ul>
              <p className="text-gray-500 dark:text-gray-400 text-xs">
                Excellent for educators and training professionals
              </p>
            </Card>
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

      {/* Pricing Preview */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold font-heading text-zakbot-dark dark:text-white mb-4">
              Simple, Transparent <span className="gradient-text">Pricing</span>
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Choose the perfect plan for your business needs
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <Card className="feature-card group">
              <h3 className="text-2xl font-bold font-heading text-zakbot-dark dark:text-white mb-4">
                Ignite
              </h3>
              <div className="mb-6">
                <span className="text-4xl font-bold text-zakbot-dark dark:text-white">
                  $197
                </span>
                <span className="text-gray-600 dark:text-gray-300">
                  /month
                </span>
              </div>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                Perfect for small businesses getting started with AI automation
              </p>
              <ul className="text-gray-600 dark:text-gray-300 space-y-2 mb-8">
                <li className="flex items-start">
                  <FaCheck className="text-green-500 mt-1 mr-2 flex-shrink-0" />
                  <span>Up to 5,000 conversations/month</span>
                </li>
                <li className="flex items-start">
                  <FaCheck className="text-green-500 mt-1 mr-2 flex-shrink-0" />
                  <span>Basic chatbot functionality</span>
                </li>
                <li className="flex items-start">
                  <FaCheck className="text-green-500 mt-1 mr-2 flex-shrink-0" />
                  <span>Email support</span>
                </li>
              </ul>
              <a
                href="/en/pricing"
                className="inline-block bg-zakbot-blue hover:bg-zakbot-blue-light text-white font-medium py-3 px-6 rounded-lg transition-all duration-300 w-full text-center"
              >
                Get Started
              </a>
            </Card>

            <Card className="feature-card group ring-2 ring-zakbot-blue relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <span className="bg-zakbot-blue text-white px-4 py-1 rounded-full text-sm font-medium">
                  Most Popular
                </span>
              </div>
              <h3 className="text-2xl font-bold font-heading text-zakbot-dark dark:text-white mb-4">
                Accelerate
              </h3>
              <div className="mb-6">
                <span className="text-4xl font-bold text-zakbot-dark dark:text-white">
                  $347
                </span>
                <span className="text-gray-600 dark:text-gray-300">
                  /month
                </span>
              </div>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                Ideal for growing businesses with higher customer interaction
              </p>
              <ul className="text-gray-600 dark:text-gray-300 space-y-2 mb-8">
                <li className="flex items-start">
                  <FaCheck className="text-green-500 mt-1 mr-2 flex-shrink-0" />
                  <span>Up to 15,000 conversations/month</span>
                </li>
                <li className="flex items-start">
                  <FaCheck className="text-green-500 mt-1 mr-2 flex-shrink-0" />
                  <span>Advanced chatbot features</span>
                </li>
                <li className="flex items-start">
                  <FaCheck className="text-green-500 mt-1 mr-2 flex-shrink-0" />
                  <span>Priority email & chat support</span>
                </li>
                <li className="flex items-start">
                  <FaCheck className="text-green-500 mt-1 mr-2 flex-shrink-0" />
                  <span>Advanced analytics & insights</span>
                </li>
              </ul>
              <a
                href="/en/pricing"
                className="inline-block bg-zakbot-blue hover:bg-zakbot-blue-light text-white font-medium py-3 px-6 rounded-lg transition-all duration-300 w-full text-center"
              >
                Get Started
              </a>
            </Card>

            <Card className="feature-card group">
              <h3 className="text-2xl font-bold font-heading text-zakbot-dark dark:text-white mb-4">
                Transform
              </h3>
              <div className="mb-6">
                <span className="text-4xl font-bold text-zakbot-dark dark:text-white">
                  $497
                </span>
                <span className="text-gray-600 dark:text-gray-300">
                  /month
                </span>
              </div>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                For large organizations with complex requirements
              </p>
              <ul className="text-gray-600 dark:text-gray-300 space-y-2 mb-8">
                <li className="flex items-start">
                  <FaCheck className="text-green-500 mt-1 mr-2 flex-shrink-0" />
                  <span>Up to 30,000 conversations/month</span>
                </li>
                <li className="flex items-start">
                  <FaCheck className="text-green-500 mt-1 mr-2 flex-shrink-0" />
                  <span>All Accelerate features</span>
                </li>
                <li className="flex items-start">
                  <FaCheck className="text-green-500 mt-1 mr-2 flex-shrink-0" />
                  <span>24/7 dedicated support</span>
                </li>
                <li className="flex items-start">
                  <FaCheck className="text-green-500 mt-1 mr-2 flex-shrink-0" />
                  <span>Custom AI model training</span>
                </li>
              </ul>
              <a
                href="/en/pricing"
                className="inline-block bg-zakbot-blue hover:bg-zakbot-blue-light text-white font-medium py-3 px-6 rounded-lg transition-all duration-300 w-full text-center"
              >
                Get Started
              </a>
            </Card>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-center mt-12"
          >
            <a
              href="/en/pricing"
              className="inline-block bg-transparent border-2 border-zakbot-blue text-zakbot-blue hover:bg-zakbot-blue hover:text-white font-medium py-3 px-8 rounded-lg transition-all duration-300"
            >
              Compare Plans
            </a>
          </motion.div>
        </div>
      </section>

      {/* How It Works */}
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
              How Zakbot <span className="gradient-text">Works</span>
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Our streamlined process ensures a smooth implementation of your AI assistant
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-zakbot-blue bg-opacity-10 flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-zakbot-blue">1</span>
              </div>
              <h3 className="text-xl font-bold font-heading text-zakbot-dark dark:text-white mb-3">
                Discovery
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                We analyze your business needs and identify the best use cases for Zakbot implementation.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-zakbot-teal bg-opacity-10 flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-zakbot-teal">2</span>
              </div>
              <h3 className="text-xl font-bold font-heading text-zakbot-dark dark:text-white mb-3">
                Training
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Your Zakbot is trained on your specific business data and documentation for accurate responses.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-zakbot-purple bg-opacity-10 flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-zakbot-purple">3</span>
              </div>
              <h3 className="text-xl font-bold font-heading text-zakbot-dark dark:text-white mb-3">
                Deployment
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                We seamlessly integrate Zakbot into your existing systems and platforms for immediate use.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-zakbot-blue bg-opacity-10 flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-zakbot-blue">4</span>
              </div>
              <h3 className="text-xl font-bold font-heading text-zakbot-dark dark:text-white mb-3">
                Optimization
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                We continuously monitor and optimize Zakbot's performance to ensure maximum effectiveness.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Trust & Compliance */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold font-heading text-zakbot-dark dark:text-white mb-4">
              Trust & <span className="gradient-text">Compliance</span>
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Your security and privacy are our top priorities
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <Card className="feature-card group text-center">
              <div className="w-16 h-16 rounded-lg bg-zakbot-blue bg-opacity-10 flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <FaShieldAlt className="text-3xl text-zakbot-blue" />
              </div>
              <h3 className="text-xl font-bold font-heading text-zakbot-dark dark:text-white mb-3">
                Secured & Privacy-First
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                End-to-end encryption, secure data storage, and strict access controls to protect your information.
              </p>
            </Card>

            <Card className="feature-card group text-center">
              <div className="w-16 h-16 rounded-lg bg-zakbot-teal bg-opacity-10 flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <FaBalanceScale className="text-3xl text-zakbot-teal" />
              </div>
              <h3 className="text-xl font-bold font-heading text-zakbot-dark dark:text-white mb-3">
                Responsible AI
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Ethical AI practices, bias monitoring, and transparent decision-making processes.
              </p>
            </Card>

            <Card className="feature-card group text-center">
              <div className="w-16 h-16 rounded-lg bg-zakbot-purple bg-opacity-10 flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <FaFileContract className="text-3xl text-zakbot-purple" />
              </div>
              <h3 className="text-xl font-bold font-heading text-zakbot-dark dark:text-white mb-3">
                Optional NDAs / SLAs
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Custom agreements to ensure your data privacy and service level commitments.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Final Conversion CTA */}
      <section className="py-20 bg-gradient-to-r from-zakbot-blue to-zakbot-teal dark:from-zakbot-blue-light dark:to-zakbot-teal-light text-white">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold font-heading mb-6">
              Ready to Launch Your AI Assistant?
            </h2>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#demo"
                className="bg-white text-zakbot-blue py-3 px-8 rounded-lg font-bold hover:bg-gray-100 transition"
              >
                Try Zakbot Free
              </a>
              <a
                href="/en/contact"
                className="bg-transparent border-2 border-white text-white py-3 px-8 rounded-lg font-bold hover:bg-white hover:text-zakbot-blue transition"
              >
                Book Consultation
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ZakbotEN;