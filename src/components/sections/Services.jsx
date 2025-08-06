import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import { FaBrain, FaBolt, FaShieldAlt } from 'react-icons/fa';
import Card from '../common/Card';
import { getColorClasses, getTextColor } from '../../utils/colorUtils';

const Services = () => {
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
        { text: "Try Zakbot", href: "/zakbot", primary: false }
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
        { text: "Book Free Audit", href: "#contact", primary: true },
        { text: "Talk to Our Team", href: "#contact", primary: false }
      ]
    }
  ];

  return (
    <section id="services" className="min-h-screen py-20 bg-white/70 dark:bg-gray-900 section-offset backdrop-blur-sm">
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
                    <button className={`${colors.button} text-white py-2 px-6 rounded-md font-bold cursor-not-allowed opacity-50 mt-auto`} disabled>
                      {service.action}
                    </button>
                  ) : service.actions ? (
                    service.actions.map((action, idx) => (
                      <Link
                        key={idx}
                        to={action.href}
                        spy={true}
                        smooth={true}
                        duration={500}
                        className={`${action.primary ? colors.button + ' text-white' : 'bg-transparent border-2 ' + colors.border + ' ' + colors.text} py-2 px-6 rounded-md font-bold hover:opacity-80 transition mt-auto`}
                      >
                        {action.text}
                      </Link>
                    ))
                  ) : null}
                </div>
              </Card>
            );
          })}
        </div>
        <div className="text-center mt-12">
          <Link
            to="/services"
            className="inline-block bg-cyan-600 hover:bg-cyan-700 text-white font-bold py-3 px-8 rounded-lg transition duration-300 text-lg"
          >
            Read More About Our Services
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Services;