import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaBars, FaTimes, FaRobot, FaMoon, FaSun } from 'react-icons/fa';
import { useTheme } from '../../context/ThemeContext';
import { Link } from 'react-scroll';

const Header = ({ activeSection, setActiveSection }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { darkMode, toggleTheme } = useTheme();

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'services', label: 'Services' },
    { id: 'zakbot-demo', label: 'Zakbot' },
    { id: 'pricing', label: 'Pricing' },
    { id: 'about', label: 'About' },
    { id: 'contact', label: 'Contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(id);
      setIsOpen(false);
    }
  };

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? darkMode
            ? 'bg-zakbot-dark/95 backdrop-blur-sm shadow-md py-3'
            : 'bg-white/95 backdrop-blur-sm shadow-md py-3'
          : darkMode
            ? 'bg-zakbot-dark/80 backdrop-blur-sm py-4'
            : 'bg-transparent py-4'
      }`}
    >
      <div className="container px-4 sm:px-6">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex items-center space-x-2 cursor-pointer pl-2"
            onClick={() => scrollToSection('home')}
          >
            
            <span className={`text-xl font-bold font-heading ${
              isScrolled
                ? darkMode
                  ? 'text-white'
                  : 'text-zakbot-blue'
                : 'text-white'
            }`}>
              Zaktomate
            </span>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <motion.button
                key={item.id}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => scrollToSection(item.id)}
                className={`font-medium transition-colors duration-300 ${
                  activeSection === item.id
                    ? 'text-zakbot-blue border-b-2 border-zakbot-blue'
                    : isScrolled
                      ? darkMode
                        ? 'text-gray-300 hover:text-white'
                        : 'text-gray-600 hover:text-zakbot-blue'
                      : 'text-white hover:text-gray-200'
                }`}
              >
                {item.label}
              </motion.button>
            ))}
            
            {/* Theme Toggle Button */}
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={toggleTheme}
              className={`p-2 rounded-full ${
                darkMode
                  ? 'bg-zakbot-blue text-yellow-300'
                  : 'bg-gray-200 text-zakbot-blue'
              }`}
              aria-label="Toggle theme"
            >
              {darkMode ? <FaSun size={20} /> : <FaMoon size={20} />}
            </motion.button>
          </nav>

          {/* Mobile Menu Button */}
          <div className="flex items-center md:hidden pr-2">
            {/* Theme Toggle Button for Mobile */}
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={toggleTheme}
              className={`p-2 rounded-full mr-2 ${
                darkMode
                  ? 'bg-zakbot-blue text-yellow-300'
                  : 'bg-gray-200 text-zakbot-blue'
              }`}
              aria-label="Toggle theme"
            >
              {darkMode ? <FaSun size={20} /> : <FaMoon size={20} />}
            </motion.button>
            
            <button
              className={`${
                isScrolled
                  ? darkMode
                    ? 'text-white'
                    : 'text-gray-800'
                  : 'text-white'
              }`}
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden mt-4 pb-4"
          >
            <nav className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <motion.button
                  key={item.id}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => scrollToSection(item.id)}
                  className={`font-medium text-left transition-colors duration-300 ${
                    activeSection === item.id
                      ? 'text-zakbot-blue border-l-4 border-zakbot-blue pl-2'
                      : isScrolled
                        ? darkMode
                          ? 'text-gray-300 hover:text-white pl-2'
                          : 'text-gray-600 hover:text-zakbot-blue pl-2'
                        : 'text-white hover:text-gray-200 pl-2'
                  }`}
                >
                  {item.label}
                </motion.button>
              ))}
            </nav>
          </motion.div>
        )}
      </div>
    </motion.header>
  );
};

export default Header;