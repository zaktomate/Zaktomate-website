import React from 'react';
import { motion } from 'framer-motion';
import { FaRobot, FaGlobe, FaEnvelope, FaLinkedin, FaTwitter, FaGithub, FaArrowUp } from 'react-icons/fa';
import { Link } from 'react-router-dom'; // Changed from react-scroll to react-router-dom for consistency

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = [
    {
      title: "Product",
      links: [
        { name: "Services", href: "/services" },
        { name: "Zakbot", href: "/zakbot" },
        { name: "Pricing", href: "/pricing" },
      ],
    },
  ];


  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-zakbot-dark text-white">
      

      {/* Main Footer Content */}
      <div className="py-12">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
            {/* Brand Column */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="lg:col-span-2"
            >
              <div className="flex items-center space-x-2 mb-4">
                <FaRobot className="text-zakbot-teal text-2xl" />
                <span className="text-xl font-bold font-heading">Zaktomate</span>
              </div>
              <p className="text-gray-300 mb-6 max-w-sm">
                AI-powered tools that save you time. We help Bangladeshi businesses automate repetitive work using easy-to-use AI systems.
              </p>
            </motion.div>

            {/* Footer Links */}
            {footerLinks.map((section, index) => (
              <motion.div
                key={section.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="lg:col-span-1"
              >
                <h4 className="text-lg font-semibold font-heading mb-4">
                  {section.title}
                </h4>
                <ul className="space-y-3">
                  {section.links.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      <Link
                        to={link.href}
                        className="text-gray-300 hover:text-zakbot-teal transition-colors duration-200"
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}

            {/* Additional Information Columns */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="lg:col-span-1"
            >
              <h4 className="text-lg font-semibold font-heading mb-4">Support</h4>
              <ul className="space-y-3">
                <li>
                  <a
                    href="mailto:support@zaktomate.com"
                    className="text-gray-300 hover:text-zakbot-teal transition-colors duration-200 flex items-center space-x-2"
                  >
                    <FaEnvelope />
                    <span>Email Support</span>
                  </a>
                </li>
                <li>
                  <a
                    href="/contact"
                    className="text-gray-300 hover:text-zakbot-teal transition-colors duration-200"
                  >
                    Contact Form
                  </a>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="py-6 border-t border-gray-700">
        <div className="container">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-gray-400 text-sm mb-4 md:mb-0"
            >
              © {currentYear} Zaktomate. All rights reserved. | Secured by 256-bit SSL Encryption
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="flex items-center space-x-4"
            >
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={scrollToTop}
                className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-gray-300 hover:text-zakbot-teal transition-colors duration-200 cursor-pointer"
                aria-label="Scroll to top"
              >
                <FaArrowUp />
              </motion.button>
            </motion.div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;