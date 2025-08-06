import React from 'react';
import { motion } from 'framer-motion';
import { FaRobot, FaArrowRight, FaPlay } from 'react-icons/fa';
import { Link } from 'react-scroll';

const Hero = () => {
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
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16">
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
          {/* Badge */}
          <motion.div variants={itemVariants} className="inline-block mb-6">
            <span className="bg-zakbot-blue text-white text-sm font-medium py-2 px-4 rounded-full">
              Powered by Zaktomate
            </span>
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            variants={itemVariants}
            className="text-4xl md:text-6xl font-bold font-heading text-zakbot-dark dark:text-white mb-6 text-balance"
          >
            Experience the Future of
            <span className="gradient-text dark:gradient-text-dark block">AI Conversations</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            variants={itemVariants}
            className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-10 text-balance"
          >
            Zakbot is an AI-powered chatbot that delivers context-aware responses, 
            supports multiple clients, and integrates seamlessly across platforms. 
            Transform your customer interactions with intelligent automation.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="demo"
              spy={true}
              smooth={true}
              duration={500}
              className="btn-primary flex items-center justify-center gap-2"
            >
              <FaPlay className="text-sm" />
              Try Demo
            </Link>
            <Link
              to="features"
              spy={true}
              smooth={true}
              duration={500}
              className="btn-outline flex items-center justify-center gap-2"
            >
              Learn More
              <FaArrowRight className="text-sm" />
            </Link>
          </motion.div>

          {/* Stats */}
          <motion.div
            variants={itemVariants}
            className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto"
          >
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold gradient-text dark:gradient-text-dark mb-2">24/7</div>
              <div className="text-gray-600 dark:text-gray-300">Availability</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold gradient-text dark:gradient-text-dark mb-2">{"<1s"}</div>
              <div className="text-gray-600 dark:text-gray-300">Response Time</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold gradient-text dark:gradient-text-dark mb-2">100%</div>
              <div className="text-gray-600 dark:text-gray-300">Accuracy</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold gradient-text dark:gradient-text-dark mb-2">∞</div>
              <div className="text-gray-600 dark:text-gray-300">Scalability</div>
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