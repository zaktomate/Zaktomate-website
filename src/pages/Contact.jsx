import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaClock } from 'react-icons/fa';
import { formApi } from '../services/api';
import Card from '../components/common/Card';
import SEO from '../components/common/SEO';


const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    preferred_date: '',
    services: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const contactInfo = [
    {
      icon: <FaEnvelope className="text-2xl" />,
      title: "Email Us",
      details: "support@zaktomate.com",
      description: "We'll respond within 24 hours"
    },
    {
      icon: <FaPhone className="text-2xl" />,
      title: "Call Us",
      details: "+880 1975 169294",
      description: "Mon-Fri 9AM-6PM BST"
    },
    {
      icon: <FaMapMarkerAlt className="text-2xl" />,
      title: "Visit Us",
      details: "Dhaka, Bangladesh",
      description: "By appointment only"
    },
    {
      icon: <FaClock className="text-2xl" />,
      title: "Business Hours",
      details: "9:00 AM - 6:00 PM",
      description: "Saturday - Thursday"
    }
  ];

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      await formApi.submitContact(formData);
      setSubmitStatus('success');
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        preferred_date: '',
        services: ''
      });
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-20">
        <SEO />
      <div className="container">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center my-24"
        >
          <h1 className="text-4xl md:text-5xl font-bold font-heading text-zakbot-dark dark:text-white mb-6 mt-6">
            Get in <span className="gradient-text">Touch</span>
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Have questions about our AI solutions? We'd love to hear from you. 
            Send us a message and we'll respond as soon as possible.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Card transition={{ duration: 0.5 }}>
              <h2 className="text-2xl font-bold font-heading text-zakbot-dark dark:text-white mb-6">
                Book a Free Trial or Demo
              </h2>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                Let's find out how AI can make your work easier. No commitment. No pressure.
              </p>

              {submitStatus === 'success' && (
                <div className="mb-6 p-4 bg-green-100 border border-green-400 text-green-700 rounded-lg">
                  Thank you for your message! We'll get back to you soon.
                </div>
              )}

              {submitStatus === 'error' && (
                <div className="mb-6 p-4 bg-red-100 border border-red-400 text-red-700 rounded-lg">
                  Something went wrong. Please try again later.
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-zakbot-blue bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                    placeholder="Your full name"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-zakbot-blue bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                    placeholder="your@email.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Phone *
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-zakbot-blue bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                    placeholder="+880 1975 169294"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Company / Institution
                  </label>
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-zakbot-blue bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                    placeholder="Your company name"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Preferred Date for Demo
                  </label>
                  <input
                    type="date"
                    name="preferred_date"
                    value={formData.preferred_date}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-zakbot-blue bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Services You're Interested In (optional)
                  </label>
                  <textarea
                    name="services"
                    value={formData.services}
                    onChange={handleChange}
                    rows="4"
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-zakbot-blue bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                    placeholder="Tell us about your needs..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-zakbot-blue hover:bg-zakbot-blue-light text-white font-medium py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? 'Sending...' : 'Book My Free Trial'}
                </button>
              </form>
            </Card>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            <div>
              <h2 className="text-2xl font-bold font-heading text-zakbot-dark dark:text-white mb-6">
                Contact Information
              </h2>
              <p className="text-gray-600 dark:text-gray-300 mb-8">
                Reach out to us through any of these channels. We're here to help and answer any questions you might have.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {contactInfo.map((info, index) => (
                <Card
                  key={index}
                  className="text-center"
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className="w-12 h-12 bg-zakbot-teal bg-opacity-10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <div className="text-zakbot-teal">
                      {info.icon}
                    </div>
                  </div>
                  <h3 className="text-lg font-semibold text-zakbot-dark dark:text-white mb-2">
                    {info.title}
                  </h3>
                  <p className="text-zakbot-teal font-medium mb-1">
                    {info.details}
                  </p>
                  <p className="text-sm text-gray-600 dark:text-gray-300">
                    {info.description}
                  </p>
                </Card>
              ))}
            </div>

            {/* FAQ Preview */}
            <Card transition={{ duration: 0.5, delay: 0.2 }}>
              <h3 className="text-xl font-bold font-heading text-zakbot-dark dark:text-white mb-4">
                Frequently Asked Questions
              </h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-zakbot-dark dark:text-white mb-2">
                    How quickly can I get started?
                  </h4>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">
                    You can start with our free trial immediately. Setup takes less than 5 minutes.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-zakbot-dark dark:text-white mb-2">
                    Do you provide training?
                  </h4>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">
                    Yes, we provide comprehensive training and documentation to get you up and running.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-zakbot-dark dark:text-white mb-2">
                    Is my data secure?
                  </h4>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">
                    Absolutely. We use enterprise-grade security and never share your data with third parties.
                  </p>
                </div>
              </div>
              <a 
                href="/faq" 
                className="inline-block mt-4 text-zakbot-teal hover:text-zakbot-teal-light font-medium"
              >
                View all FAQs →
              </a>
            </Card>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Contact;