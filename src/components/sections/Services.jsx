import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaBrain, FaBolt, FaShieldAlt, FaChevronDown, FaChevronUp, FaCheckCircle, FaTools } from 'react-icons/fa';
import Card from '../common/Card';
import { getColorClasses, getTextColor } from '../../utils/colorUtils';

const Services = () => {
  const [allowAutoScroll, setAllowAutoScroll] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  
  // Prevent automatic scrolling for the first 3 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      setAllowAutoScroll(true);
    }, 3000);
    
    return () => clearTimeout(timer);
  }, []);

  // Detailed services data from services.html
  const detailedServices = {
    liveNow: [
      {
        title: "Zakdeck – AI Slide & Content Engine",
        description: "Turn outlines, textbook photos, or lecture notes into ready-to-use presentation decks.",
        useCases: "Lesson plans, pitch decks, workshop slides",
        status: "Live Now",
        color: "zakbot-blue"
      },
      {
        title: "Zakbot – AI Chatbot for Customer Engagement",
        description: "Deploy your AI chatbot to answer queries, generate leads, and provide support.",
        channels: "Website, Messenger, WhatsApp",
        useCases: "Student helpdesk, lead generation, product support",
        status: "Live Now",
        color: "zakbot-teal"
      }
    ],
    onDemand: [
      {
        title: "AI Exam Typing & Formatting",
        description: "Convert handwritten or image-based questions into clean MCQs or exams",
        formats: "Google Docs, Word, PDF",
        useCases: "Mock exams, past papers, daily assessments",
        color: "zakbot-purple"
      },
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
        title: "Lecture Notes & Summaries Generator",
        description: "Convert full lectures into organized, summarized handouts",
        useCases: "Course materials, revisions",
        color: "zakbot-blue"
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
    ],
    pricing: [
      { plan: "Ignite", target: "Small ops / pilots", price: "BDT 5,000/month" },
      { plan: "Accelerate", target: "Scaling companies", price: "BDT 10,000/month" },
      { plan: "Transform", target: "Full automation setups", price: "BDT 15,000/month" }
    ]
  };
  const services = [
    {
      icon: <FaBrain className="text-4xl" />,
      title: "ZakDeck — AI-Powered Slide Creator (Coming Soon)",
      description: "Turn your notes into beautiful, ready-to-present slides in minutes.",
      details: "Just paste your content — ZakDeck handles the formatting.",
      features: [
        "Saves hours of manual work",
        "Great for teachers, trainers, and marketers",
        "Fully editable PowerPoint/Google Slides output"
      ],
      color: "zakbot-blue",
      action: "Currently in development. Sign up for early access.",
      disabled: true
    },
    {
      icon: <FaBolt className="text-4xl" />,
      title: "Zakbot — Your AI Customer Support Assistant",
      description: "Zakbot is an intelligent chatbot that works 24/7.",
      details: "It answers common questions instantly, without human help.",
      features: [
        "Works on your website or app",
        "Trained using your content (FAQ, product info, etc.)",
        "Custom responses in Bangla or English",
        "Perfect for student help desks, online businesses, and service teams"
      ],
      example: "A student asks: \"When will classes start?\"<br />Zakbot answers instantly, without your team getting involved.",
      color: "zakbot-teal",
      actions: [
        { text: "See Live Demo", href: "#zakbot-demo", primary: true },
        { text: "Try Zakbot", href: "#contact", primary: false }
      ]
    },
    {
      icon: <FaShieldAlt className="text-4xl" />,
      title: "Custom AI Tools — Built Around Your Workflow",
      description: "Not sure what AI can do for your business?",
      details: "We'll help you find out — starting with a free audit.",
      subdetails: "We review your daily work, spot automation opportunities, and build simple AI tools just for you.",
      features: [
        "Automate repetitive reporting",
        "Summarize large documents",
        "Organize customer queries",
        "Streamline internal processes"
      ],
      color: "zakbot-purple",
      actions: [
        { text: "Book Free Audit", href: "#contact", primary: true }
      ]
    }
  ];

  return (
    <section id="services" className="min-h-screen py-20 bg-white/70 dark:bg-gray-900 backdrop-blur-sm">
      <div className="container mx-auto px-4 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className={`text-3xl md:text-4xl font-bold mb-12 ${getTextColor('default')}`}
        >
          What Zaktomate Offers
        </motion.h2>
        <div className="grid md:grid-cols-3 gap-8 text-left">
          {services.map((service, index) => {
            const colors = getColorClasses(service.color);
            return (
              <Card
                key={index}
                className="p-8 flex flex-col min-h-80"
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
              >
                <div className={`w-16 h-16 rounded-lg ${colors.bg} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <div className={colors.text}>
                    {service.icon}
                  </div>
                </div>
                <div className="flex-grow">
                  <h2 className={`text-2xl font-bold mb-2 ${getTextColor('default')}`}>{service.title}</h2>
                  <p className={`font-bold mb-4 ${getTextColor('secondary')}`}>{service.description}</p>
                  <p className={`mb-6 ${getTextColor('muted')}`}>
                    {service.details}
                  </p>
                  {service.subdetails && (
                    <p className={`mb-6 ${getTextColor('muted')}`}>
                      {service.subdetails}
                    </p>
                  )}
                  <ul className={`list-disc list-inside mb-6 ${getTextColor('muted')}`}>
                    {service.features.map((feature, idx) => (
                      <li key={idx}>{feature}</li>
                    ))}
                  </ul>
                  {service.example && (
                    <>
                      <p className={`font-bold mb-2 ${getTextColor('secondary')}`}>Example:</p>
                      <p className={`mb-6 ${getTextColor('muted')}`} dangerouslySetInnerHTML={{ __html: service.example }} />
                    </>
                  )}
                </div>
                <div className="mt-auto flex flex-wrap gap-4">
                  {service.action ? (
                    <button
                      className={`${colors.button} text-white py-2 px-6 rounded-md font-bold cursor-not-allowed opacity-50 mt-auto`}
                      disabled
                      aria-disabled="true"
                      aria-label={service.action}
                    >
                      {service.action}
                    </button>
                  ) : service.actions ? (
                    service.actions.map((action, idx) => (
                      <button
                        key={idx}
                        type="button"
                        className={`${action.primary ? colors.button + ' text-white' : 'bg-transparent border-2 ' + colors.border + ' ' + colors.text} py-2 px-6 rounded-md font-bold hover:opacity-80 transition mt-auto cursor-pointer`}
                        onClick={() => {
                          // Only proceed if it's a manual click and auto-scroll is allowed
                          if (allowAutoScroll) {
                            const element = document.querySelector(action.href);
                            if (element) {
                              element.scrollIntoView({ behavior: 'smooth' });
                            }
                          }
                        }}
                        aria-label={action.text}
                      >
                        {action.text}
                      </button>
                    ))
                  ) : null}
                </div>
              </Card>
            );
          })}
        </div>
        
        {/* Expandable Services Section */}
        <div className="text-center mt-12">
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="inline-flex items-center gap-2 bg-cyan-600 hover:bg-cyan-700 text-white font-bold py-3 px-8 rounded-lg transition duration-300 text-lg cursor-pointer"
            aria-expanded={isExpanded}
            aria-controls="services-expandable-content"
            type="button"
          >
            {isExpanded ? (
              <>
                <FaChevronUp /> Show Less
              </>
            ) : (
              <>
                <FaChevronDown /> Read More About Our Services
              </>
            )}
          </button>
        </div>

        {/* Detailed Services Content */}
        <AnimatePresence>
          {isExpanded && (
            <motion.div
              id="services-expandable-content"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.5 }}
              className="overflow-hidden"
            >
              <div className="mt-16">
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
                              <span className="font-semibold">Channels:</span> {service.channels}
                            </p>
                          )}
                          <p className={`mb-6 ${getTextColor('secondary')}`}>
                            <span className="font-semibold">Use Cases:</span> {service.useCases}
                          </p>
                          <button
                            className={`${colors.button} text-white py-2 px-6 rounded-md font-bold mt-auto cursor-pointer`}
                            aria-label="Live Now Service"
                            type="button"
                          >
                            <FaCheckCircle className="inline-block mr-2" /> Live Now
                          </button>
                        </Card>
                      );
                    })}
                  </div>
                </div>

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
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Services;