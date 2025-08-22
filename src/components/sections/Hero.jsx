import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaRobot, FaArrowRight, FaPlay } from 'react-icons/fa';
import { Link } from 'react-scroll';

const Hero = ({ setActiveSection }) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  const floatingVariants = {
    float: {
      y: [-10, 10, -10],
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16 bg-gradient-to-br from-zakbot-blue to-zakbot-teal dark:from-zakbot-blue-light dark:to-zakbot-teal-light text-white">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-64 h-64 bg-zakbot-blue rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse-slow"></div>
        <div className="absolute bottom-20 right-10 w-64 h-64 bg-zakbot-teal rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse-slow"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-zakbot-purple rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-pulse-slow"></div>
      </div>

      <div className="container relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="text-center"
        >
          {/* Main Heading */}
          <motion.h1
            variants={itemVariants}
            className="text-3xl sm:text-4xl md:text-6xl font-bold font-heading text-white mb-6 text-balance mt-6"
          >
            Zaktomate — AI Tools That Save You Time
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            variants={itemVariants}
            className="text-base sm:text-lg md:text-xl text-white opacity-90 max-w-3xl mx-auto mb-10 text-balance"
          >
            We help Bangladeshi businesses automate repetitive work using easy-to-use AI systems.
            No tech knowledge needed. No extra overhead. Just smart, practical tools.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div variants={itemVariants} className="flex flex-row gap-3 justify-center">
            <Link
              to="zakbot-demo"
              spy={true}
              smooth={true}
              duration={500}
              className="bg-white text-zakbot-blue py-2 px-4 sm:py-3 sm:px-6 rounded-lg font-bold hover:bg-gray-100 transition flex items-center justify-center gap-2 cursor-pointer text-sm sm:text-base"
              onClick={() => {
                if (window.gtag) {
                  window.gtag('event', 'select_content', {
                    content_type: 'button',
                    item_id: 'try_zakbot_live_hero',
                    event_category: 'CTA',
                    event_label: 'Try Zakbot Live - Hero Section'
                  });
                }
              }}
            >
              <FaPlay className="text-xs sm:text-sm" />
              Try Zakbot Live
            </Link>
            <Link
              to="contact"
              spy={true}
              smooth={true}
              duration={500}
              className="bg-transparent border-2 border-white text-white py-2 px-4 sm:py-3 sm:px-6 rounded-lg font-bold hover:bg-white hover:text-zakbot-blue transition flex items-center justify-center gap-2 cursor-pointer text-sm sm:text-base"
              onClick={() => {
                if (window.gtag) {
                  window.gtag('event', 'select_content', {
                    content_type: 'button',
                    item_id: 'book_free_demo_hero',
                    event_category: 'CTA',
                    event_label: 'Book a Free Demo - Hero Section'
                  });
                }
              }}
            >
              Book a Free Demo
              <FaArrowRight className="text-xs sm:text-sm" />
            </Link>
          </motion.div>

          {/* Stats */}
          <motion.div
            variants={itemVariants}
            className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto"
          >
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-white mb-2">24/7</div>
              <div className="text-white opacity-80">Availability</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-white mb-2">{"<1s"}</div>
              <div className="text-white opacity-80">Response Time</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-white mb-2">100%</div>
              <div className="text-white opacity-80">Accuracy</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-white mb-2">∞</div>
              <div className="text-white opacity-80">Scalability</div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Floating Robot Icon */}
      <motion.div
        variants={floatingVariants}
        animate="float"
        className="absolute bottom-10 right-10 text-zakbot-blue opacity-20 hidden lg:block"
      >
        <FaRobot size={120} />
      </motion.div>
    </section>
  );
};

export default Hero;