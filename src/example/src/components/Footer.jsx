import React from 'react';
import { motion } from 'framer-motion';
import { FaRobot, FaGlobe, FaEnvelope, FaLinkedin, FaTwitter, FaGithub, FaArrowUp } from 'react-icons/fa';
import { Link } from 'react-scroll';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = [
    {
      title: "Product",
      links: [
        { name: "Features", href: "features" },
        { name: "Demo", href: "demo" },
        { name: "Statistics", href: "stats" },
      ],
    },
    {
      title: "Company",
      links: [
        { name: "About Us", href: "https://zaktomate.com" },
        { name: "Careers", href: "https://zaktomate.com/careers" },
        { name: "Blog", href: "https://zaktomate.com/blog" },
      ],
    },
    {
      title: "Resources",
      links: [
        { name: "Documentation", href: "https://docs.zaktomate.com" },
        { name: "API Reference", href: "https://api.zaktomate.com" },
        { name: "Support", href: "mailto:support@zaktomate.com" },
      ],
    },
    {
      title: "Legal",
      links: [
        { name: "Privacy Policy", href: "https://zaktomate.com/privacy" },
        { name: "Terms of Service", href: "https://zaktomate.com/terms" },
        { name: "Cookie Policy", href: "https://zaktomate.com/cookies" },
      ],
    },
  ];

  const socialLinks = [
    { icon: <FaGlobe />, href: "https://zaktomate.com", label: "Website" },
    { icon: <FaLinkedin />, href: "https://linkedin.com/company/zaktomate", label: "LinkedIn" },
    { icon: <FaTwitter />, href: "https://twitter.com/zaktomate", label: "Twitter" },
    { icon: <FaGithub />, href: "https://github.com/zaktomate", label: "GitHub" },
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-zakbot-dark text-white">
      {/* Newsletter Section */}
      <div className="py-12 border-b border-gray-700">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h3 className="text-2xl font-bold font-heading mb-4">
              Stay Updated with Zakbot
            </h3>
            <p className="text-gray-300 mb-6">
              Subscribe to our newsletter for the latest updates, features, and insights.
            </p>
            <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-zakbot-teal focus:border-transparent"
                required
              />
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                type="submit"
                className="btn-secondary bg-zakbot-teal hover:bg-zakbot-teal-light"
              >
                Subscribe
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>

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
                <span className="text-xl font-bold font-heading">Zakbot</span>
              </div>
              <p className="text-gray-300 mb-6 max-w-sm">
                AI-powered chatbot solution by Zaktomate, delivering intelligent 
                conversations and exceptional customer experiences.
              </p>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.9 }}
                    className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-gray-300 hover:text-zakbot-teal transition-colors duration-200"
                    aria-label={social.label}
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Footer Links */}
            {footerLinks.map((section, index) => (
              <motion.div
                key={section.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <h4 className="text-lg font-semibold font-heading mb-4">
                  {section.title}
                </h4>
                <ul className="space-y-3">
                  {section.links.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      {link.href.startsWith('http') ? (
                        <a
                          href={link.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-gray-300 hover:text-zakbot-teal transition-colors duration-200"
                        >
                          {link.name}
                        </a>
                      ) : (
                        <Link
                          to={link.href}
                          spy={true}
                          smooth={true}
                          duration={500}
                          className="text-gray-300 hover:text-zakbot-teal transition-colors duration-200 cursor-pointer"
                        >
                          {link.name}
                        </Link>
                      )}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
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
              © {currentYear} Zaktomate. All rights reserved.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="flex items-center space-x-4"
            >
              <a
                href="mailto:support@zaktomate.com"
                className="text-gray-400 hover:text-zakbot-teal transition-colors duration-200 flex items-center space-x-2"
              >
                <FaEnvelope />
                <span className="text-sm">support@zaktomate.com</span>
              </a>
              
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={scrollToTop}
                className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-gray-300 hover:text-zakbot-teal transition-colors duration-200"
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