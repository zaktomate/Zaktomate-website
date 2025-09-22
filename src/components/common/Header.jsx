import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaBars, FaTimes, FaMoon, FaSun } from "react-icons/fa";
import { useTheme } from "../../context/ThemeContext";
import { Link, useLocation } from "react-router-dom"; // Using Link and useLocation from react-router-dom

const Header = ({ activeSection }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const { darkMode, toggleTheme } = useTheme();
    const location = useLocation();
    const isEnglishSection = location.pathname.startsWith("/en");

    // Update navItems to include the correct paths
    const navItems = [
        { id: "home", label: "Home", path: isEnglishSection ? "/en" : "/" },
        {
            id: "services",
            label: "Services",
            path: isEnglishSection ? "/en/services" : "/services",
        },
        {
            id: "zakbot-demo",
            label: "Zakbot",
            path: isEnglishSection ? "/en/zakbot" : "/zakbot",
        },
        {
            id: "zaknote-demo",
            label: "Zaknotes",
            path: "/zaknote",
        },
        {
            id: "pricing",
            label: "Pricing",
            path: isEnglishSection ? "/en/pricing" : "/pricing",
        },
        {
            id: "about",
            label: "About",
            path: isEnglishSection ? "/en/about" : "/about",
        },
        {
            id: "contact",
            label: "Contact",
            path: isEnglishSection ? "/en/contact" : "/contact",
        },
    ];

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <motion.header
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5 }}
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
                isScrolled
                    ? darkMode
                        ? "bg-zakbot-dark/95 backdrop-blur-sm shadow-md py-3"
                        : "bg-white/95 backdrop-blur-sm shadow-md py-3"
                    : darkMode
                    ? "bg-zakbot-dark/80 backdrop-blur-sm py-4"
                    : "bg-transparent py-4"
            }`}
        >
            <div className="container px-4 sm:px-6">
                <div className="flex justify-between items-center">
                    {/* Logo */}
                    <motion.div
                        whileHover={{ scale: 1.05 }}
                        className="flex items-center space-x-2 pl-2"
                    >
                        <Link
                            to={isEnglishSection ? "/en" : "/"}
                            className="flex items-center space-x-2"
                        >
                            <img
                                src="/assets/logos/zaktomate-transparent.png"
                                alt="Zaktomate Logo"
                                className="h-8 w-auto"
                            />
                            {/* <span className={`text-xl font-bold font-heading ${
                isScrolled
                  ? darkMode
                    ? 'text-white'
                    : 'text-zakbot-blue'
                  : 'text-white'
              }`}>
                Zaktomate
              </span> */}
                        </Link>
                    </motion.div>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex items-center space-x-8">
                        {navItems.map((item) => (
                            <motion.div
                                key={item.id}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <Link
                                    to={item.path}
                                    className={`font-medium transition-colors duration-300 ${
                                        isScrolled
                                            ? darkMode
                                                ? "text-gray-300 hover:text-white"
                                                : "text-gray-600 hover:text-zakbot-blue"
                                            : "text-white hover:text-gray-200"
                                    }`}
                                >
                                    {item.label}
                                </Link>
                            </motion.div>
                        ))}

                        {/* Theme Toggle Button */}
                        <motion.button
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            onClick={toggleTheme}
                            className={`p-2 rounded-full ${
                                darkMode
                                    ? "bg-zakbot-blue text-yellow-300"
                                    : "bg-gray-200 text-zakbot-blue"
                            }`}
                            aria-label="Toggle theme"
                        >
                            {darkMode ? (
                                <FaSun size={20} />
                            ) : (
                                <FaMoon size={20} />
                            )}
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
                                    ? "bg-zakbot-blue text-yellow-300"
                                    : "bg-gray-200 text-zakbot-blue"
                            }`}
                            aria-label="Toggle theme"
                        >
                            {darkMode ? (
                                <FaSun size={20} />
                            ) : (
                                <FaMoon size={20} />
                            )}
                        </motion.button>

                        <button
                            className={`${
                                isScrolled
                                    ? darkMode
                                        ? "text-white"
                                        : "text-gray-800"
                                    : "text-white"
                            }`}
                            onClick={() => setIsOpen(!isOpen)}
                        >
                            {isOpen ? (
                                <FaTimes size={24} />
                            ) : (
                                <FaBars size={24} />
                            )}
                        </button>
                    </div>
                </div>

                {/* Mobile Navigation */}
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden mt-4 pb-4"
                    >
                        <nav className="flex flex-col space-y-4">
                            {navItems.map((item) => (
                                <Link
                                    key={item.id}
                                    to={item.path}
                                    onClick={() => setIsOpen(false)}
                                    className={`font-medium text-left transition-colors duration-300 ${
                                        isScrolled
                                            ? darkMode
                                                ? "text-gray-300 hover:text-white pl-2"
                                                : "text-gray-600 hover:text-zakbot-blue pl-2"
                                            : "text-white hover:text-gray-200 pl-2"
                                    }`}
                                >
                                    {item.label}
                                </Link>
                            ))}
                        </nav>
                    </motion.div>
                )}
            </div>
        </motion.header>
    );
};

export default Header;
