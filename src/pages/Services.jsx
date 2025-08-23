import React from 'react';
import { motion } from 'framer-motion';
import { FaCheckCircle, FaTools } from 'react-icons/fa';
import Card from '../components/common/Card';
import SEO from '../components/common/SEO';
import { getColorClasses, getTextColor } from '../utils/colorUtils';

const Services = () => {
  // Detailed services data
  const detailedServices = {
    liveNow: [
      {
        title: "Zakbot – Your Always-On AI Assistant",
        description: "Intelligent chatbot that works 24/7 to handle customer queries, generate leads, and provide support.",
        channels: "Works seamlessly on: Website, Messenger, WhatsApp",
        useCases: "Ideal for: Student helpdesks, lead generation, product support, and business teams.",
        status: "Now live and ready to connect",
        color: "zakbot-teal",
        cta: { text: "Learn More", href: "/zakbot" }
      },
      {
        title: "AI Exam Typing & Formatting",
        description: "Convert handwritten or image-based questions into clean MCQs or exams.",
        formats: "Formats: Google Docs, Word, PDF",
        useCases: "Use Cases: Mock exams, past papers, daily assessments.",
        status: "Live Now",
        color: "zakbot-purple",
        cta: { text: "Get Started", href: "#contact" }
      },
      {
        title: "Lecture Notes & Summaries Generator",
        description: "Convert full lectures into organized, summarized handouts.",
        useCases: "Use Cases: Course materials, revisions.",
        status: "Live Now",
        color: "zakbot-blue",
        cta: { text: "Get Started", href: "#contact" }
      }
    ],
    comingSoon: [
      {
        title: "Zakdeck – AI Slide & Content Engine",
        description: "Turn outlines, textbook photos, or lecture notes into ready-to-use presentation decks.",
        useCases: "Lesson plans, pitch decks, workshop slides",
        status: "Coming Soon",
        color: "zakbot-blue"
      }
    ],
    onDemand: [
      {
        title: "AI Blog & Content Writing",
        description: "Generate SEO blogs, FAQs, and copy in your custom tone",
        useCases: "Institutional blogs, promo content",
        color: "zakbot-blue"
      },
      {
        title: "Workflow Automation & Custom Integrations",
        description: "Automate admin tasks and integrate with Google Workspace, Zapier, Notion",
        useCases: "Attendance, lead routing, LMS triggers",
        color: "zakbot-teal"
      },
      {
        title: "AI Social Media Content Packs",
        description: "Monthly bundles of captions, carousel ideas, and visuals",
        platforms: "Facebook, Instagram, LinkedIn",
        useCases: "Daily academic engagement",
        color: "zakbot-purple"
      },
      {
        title: "Standard Operating Procedures (SOPs)",
        description: "Convert team workflows into actionable AI SOPs",
        useCases: "Training manuals, operations guides",
        color: "zakbot-teal"
      },
      {
        title: "Lead Generation Messaging & Funnels",
        description: "AI-personalized outreach campaigns for WhatsApp, LinkedIn, etc.",
        useCases: "B2C sales, student recruitment",
        color: "zakbot-purple"
      }
    ]
  };

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
      {/* SEO Tags */}
      <SEO />
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="section-padding text-center mb-16"
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

        {/* Detailed Services Content */}
        <div className="mt-20">
          {/* Live Now Services */}
          <div className="mb-16">
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-3xl md:text-4xl font-bold text-center mb-10 text-green-500"
            >
              <FaCheckCircle className="inline-block mr-2" /> Live Now
            </motion.h3>
            <div className="grid md:grid-cols-2 gap-8">
              {detailedServices.liveNow.map((service, index) => {
                const colors = getColorClasses(service.color);
                return (
                  <Card
                    key={index}
                    className="p-8 flex flex-col"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <div className="mb-4">
                      <span className="inline-block px-3 py-1 rounded-full text-sm font-medium bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200">
                        {service.status}
                      </span>
                    </div>
                    <h4 className={`text-2xl font-bold mb-4 ${getTextColor('default')}`}>
                      {service.title}
                    </h4>
                    <p className={`mb-4 ${getTextColor('muted')}`}>
                      {service.description}
                    </p>
                    {service.channels && (
                      <p className={`mb-2 ${getTextColor('secondary')}`}>
                        <span className="font-semibold"></span> {service.channels}
                      </p>
                    )}
                    {service.formats && (
                      <p className={`mb-2 ${getTextColor('secondary')}`}>
                        <span className="font-semibold"></span> {service.formats}
                      </p>
                    )}
                    <p className={`mb-6 ${getTextColor('secondary')}`}>
                      <span className="font-semibold"></span> {service.useCases}
                    </p>
                    {service.cta ? (
                      <a
                        href={service.cta.href}
                        className={`${colors.button} text-white py-2 px-6 rounded-md font-bold mt-auto cursor-pointer inline-block text-center`}
                        aria-label={service.cta.text}
                      >
                        {service.cta.text}
                      </a>
                    ) : (
                      <button
                        className={`${colors.button} text-white py-2 px-6 rounded-md font-bold mt-auto cursor-not-allowed opacity-50`}
                        disabled
                        aria-label="Live Now Service"
                        type="button"
                      >
                        <FaCheckCircle className="inline-block mr-2" /> Live Now
                      </button>
                    )}
                  </Card>
                );
              })}
            </div>
          </div>

          {/* Coming Soon Services */}
          {detailedServices.comingSoon.length > 0 && (
            <div className="mb-16">
              <motion.h3
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="text-3xl md:text-4xl font-bold text-center mb-10 text-yellow-500"
              >
                <FaTools className="inline-block mr-2" /> Coming Soon
              </motion.h3>
              <div className="grid md:grid-cols-2 gap-8">
                {detailedServices.comingSoon.map((service, index) => {
                  const colors = getColorClasses(service.color);
                  return (
                    <Card
                      key={index}
                      className="p-8 flex flex-col"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                    >
                      <div className="mb-4">
                        <span className="inline-block px-3 py-1 rounded-full text-sm font-medium bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200">
                          {service.status}
                        </span>
                      </div>
                      <h4 className={`text-2xl font-bold mb-4 ${getTextColor('default')}`}>
                        {service.title}
                      </h4>
                      <p className={`mb-4 ${getTextColor('muted')}`}>
                        {service.description}
                      </p>
                      {service.useCases && (
                        <p className={`mb-6 ${getTextColor('secondary')}`}>
                          <span className="font-semibold">Use Cases:</span> {service.useCases}
                        </p>
                      )}
                      <button
                        className={`${colors.button} text-white py-2 px-6 rounded-md font-bold mt-auto cursor-not-allowed opacity-50`}
                        disabled
                        aria-label="Coming Soon Service"
                        type="button"
                      >
                        {service.status}
                      </button>
                    </Card>
                  );
                })}
              </div>
            </div>
          )}

          {/* On Demand Services */}
          <div className="mb-16">
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-3xl md:text-4xl font-bold text-center mb-10 text-yellow-500"
            >
              <FaTools className="inline-block mr-2" /> On Demand Services
            </motion.h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {detailedServices.onDemand.map((service, index) => {
                const colors = getColorClasses(service.color);
                return (
                  <Card
                    key={index}
                    className="p-8 flex flex-col"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 + (index * 0.1) }}
                  >
                    <h4 className={`text-2xl font-bold mb-4 ${getTextColor('default')}`}>
                      {service.title}
                    </h4>
                    <p className={`mb-4 ${getTextColor('muted')}`}>
                      {service.description}
                    </p>
                    {service.formats && (
                      <p className={`mb-2 ${getTextColor('secondary')}`}>
                        <span className="font-semibold">Formats:</span> {service.formats}
                      </p>
                    )}
                    {service.platforms && (
                      <p className={`mb-2 ${getTextColor('secondary')}`}>
                        <span className="font-semibold">Platforms:</span> {service.platforms}
                      </p>
                    )}
                    <p className={`mb-6 ${getTextColor('secondary')}`}>
                      <span className="font-semibold">Use Cases:</span> {service.useCases}
                    </p>
                    <button
                      type="button"
                      className={`${colors.button} text-white py-2 px-6 rounded-md font-bold text-center mt-auto cursor-pointer`}
                      onClick={() => {
                        const element = document.querySelector('#contact');
                        if (element) {
                          element.scrollIntoView({ behavior: 'smooth' });
                        }
                      }}
                      aria-label="Request Access"
                    >
                      Request Access
                    </button>
                  </Card>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;