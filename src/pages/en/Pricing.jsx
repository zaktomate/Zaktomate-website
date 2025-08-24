import React from 'react';
import { motion } from 'framer-motion';
import { FaCheck, FaStar } from 'react-icons/fa';
import Card from '../../components/common/Card';
import SEO from '../../components/common/SEO';


const PricingEN = () => {
  const plans = [
    {
      name: "Ignite",
      price: "$197",
      period: "/month",
      description: "Starter Plan - Perfect for small businesses getting started with AI automation",
      features: [
        "Up to 5,000 conversations/month",
        "Basic chatbot functionality",
        "Email support",
        "Basic analytics",
        "1 knowledge base"
      ],
      popular: false,
      cta: "Get Started"
    },
    {
      name: "Accelerate",
      price: "$347",
      period: "/month",
      description: "Most Popular - Ideal for growing businesses with higher customer interaction",
      features: [
        "Up to 15,000 conversations/month",
        "Advanced chatbot features",
        "Priority email & chat support",
        "Advanced analytics & insights",
        "3 knowledge bases",
        "Custom branding",
        "API access"
      ],
      popular: true,
      cta: "Get Started"
    },
    {
      name: "Transform",
      price: "$497",
      period: "/month",
      description: "Advanced Plan - For businesses with complex requirements",
      features: [
        "Up to 30,000 conversations/month",
        "All Accelerate features",
        "24/7 dedicated support",
        "Custom AI model training",
        "Unlimited knowledge bases",
        "White-label solution",
        "Advanced API & integrations"
      ],
      popular: false,
      cta: "Get Started"
    },
    {
      name: "Pinnacle",
      price: "From $697",
      period: "/month",
      description: "Enterprise Plan - Custom solutions for large organizations",
      features: [
        "Unlimited conversations",
        "All Transform features",
        "Custom AI model training",
        "Dedicated account manager",
        "SLA guarantee",
        "Custom development",
        "Advanced security features"
      ],
      popular: false,
      cta: "Contact Sales"
    }
  ];

  const faqs = [
    {
      question: "What is included in the free trial?",
      answer: "Our free trial includes full access to all Professional plan features for 14 days. No credit card required."
    },
    {
      question: "Can I change my plan later?",
      answer: "Yes, you can upgrade or downgrade your plan at any time. Changes take effect at the next billing cycle."
    },
    {
      question: "Do you offer discounts for annual billing?",
      answer: "Yes, we offer 20% off for annual billing on all plans."
    },
    {
      question: "What payment methods do you accept?",
      answer: "We accept all major credit cards, debit cards, and bank transfers for international customers."
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
        <SEO />
      {/* OpsMate Branding - Fullscreen with Gradient */}
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-zakbot-blue to-zakbot-teal dark:from-zakbot-blue-light dark:to-zakbot-teal-light">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center px-4 py-16"
        >
          <h1 className="text-4xl md:text-6xl font-bold font-heading text-white mb-6">
            OpsMate – Your Dedicated AI Acquisition Partner
          </h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-10">
            Designed for businesses ready to integrate AI into their operations for sustained growth and efficiency.
          </p>
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <span className="bg-white bg-opacity-20 text-white text-sm font-medium px-4 py-2 rounded-full backdrop-blur-sm">
              End-to-end AI transformation support
            </span>
            <span className="bg-white bg-opacity-20 text-white text-sm font-medium px-4 py-2 rounded-full backdrop-blur-sm">
              Tailored workflows for your business model
            </span>
            <span className="bg-white bg-opacity-20 text-white text-sm font-medium px-4 py-2 rounded-full backdrop-blur-sm">
              Dedicated team support and scaling capacity
            </span>
          </div>
          <div className="mt-8">
            <a
              href="/en/contact"
              className="inline-block bg-white text-blue-600 hover:bg-blue-50 font-bold py-4 px-10 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Start Your AI Journey
            </a>
          </div>
        </motion.div>
      </div>
      
      {/* Main Content */}
      <div className="container py-20">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="section-padding text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold font-heading text-zakbot-dark dark:text-white mb-6">
            Simple, Transparent Pricing for Scalable <span className="gradient-text">AI Automation</span>
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Choose the perfect plan to transform your business with AI automation. Our Accelerate plan is the most popular choice for growing businesses.
          </p>
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
          {plans.slice(0, 3).map((plan, index) => (
            <div key={index} className="relative">
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
                  <span className="bg-zakbot-blue text-white px-4 py-1 rounded-full text-sm font-medium flex items-center whitespace-nowrap">
                    <FaStar className="mr-1" /> Most Popular
                  </span>
                </div>
              )}
              <Card
                className={`h-full flex flex-col ${plan.popular ? 'ring-2 ring-zakbot-blue ring-offset-4 ring-offset-gray-50 dark:ring-offset-gray-900' : ''}`}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="text-center mb-8 pt-6">
                  <h3 className="text-2xl font-bold font-heading text-zakbot-dark dark:text-white mb-2">
                    {plan.name}
                  </h3>
                  <div className="mb-4">
                    <span className="text-4xl font-bold text-zakbot-dark dark:text-white">
                      {plan.price}
                    </span>
                    <span className="text-gray-600 dark:text-gray-300">
                      {plan.period}
                    </span>
                  </div>
                  <p className="text-gray-600 dark:text-gray-300">
                    {plan.description}
                  </p>
                </div>
                
                <ul className="space-y-3 mb-8 flex-grow">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start">
                      <FaCheck className="text-green-500 mt-1 mr-3 flex-shrink-0" />
                      <span className="text-gray-600 dark:text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <button
                  className={`w-full py-3 px-6 rounded-lg font-medium transition-colors mt-auto ${
                    plan.popular
                      ? 'bg-zakbot-blue text-white hover:bg-zakbot-blue-light'
                      : 'bg-gray-200 text-gray-700 hover:bg-gray-300 dark:bg-gray-700 dark:text-gray-300 dark:hover:bg-gray-600'
                  }`}
                >
                  {plan.cta}
                </button>
              </Card>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-1 gap-8 max-w-2xl mx-auto mb-20">
          {plans.slice(3, 4).map((plan, index) => (
            <div key={index} className="relative lg:col-span-full">
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
                  <span className="bg-zakbot-blue text-white px-4 py-1 rounded-full text-sm font-medium flex items-center whitespace-nowrap">
                    <FaStar className="mr-1" /> Most Popular
                  </span>
                </div>
              )}
              <Card
                className={`h-full flex flex-col ${plan.popular ? 'ring-2 ring-zakbot-blue ring-offset-4 ring-offset-gray-50 dark:ring-offset-gray-900' : ''}`}
                transition={{ duration: 0.5, delay: (index + 3) * 0.1 }}
              >
                <div className="text-center mb-8 pt-6">
                  <h3 className="text-2xl font-bold font-heading text-zakbot-dark dark:text-white mb-2">
                    {plan.name}
                  </h3>
                  <div className="mb-4">
                    <span className="text-4xl font-bold text-zakbot-dark dark:text-white">
                      {plan.price}
                    </span>
                    <span className="text-gray-600 dark:text-gray-300">
                      {plan.period}
                    </span>
                  </div>
                  <p className="text-gray-600 dark:text-gray-300">
                    {plan.description}
                  </p>
                </div>
                
                <ul className="space-y-3 mb-8 flex-grow">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start">
                      <FaCheck className="text-green-500 mt-1 mr-3 flex-shrink-0" />
                      <span className="text-gray-600 dark:text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <button
                  className={`w-full py-3 px-6 rounded-lg font-medium transition-colors mt-auto ${
                    plan.popular
                      ? 'bg-zakbot-blue text-white hover:bg-zakbot-blue-light'
                      : 'bg-gray-200 text-gray-700 hover:bg-gray-300 dark:bg-gray-700 dark:text-gray-300 dark:hover:bg-gray-600'
                  }`}
                >
                  {plan.cta}
                </button>
              </Card>
            </div>
          ))}
        </div>

        {/* Comparison Table */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="max-w-6xl mx-auto mt-20"
        >
          <h2 className="text-3xl font-bold font-heading text-zakbot-dark dark:text-white mb-8 text-center">
            Compare <span className="gradient-text">Plans</span>
          </h2>
          
          <div className="overflow-x-auto rounded-lg shadow">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-gray-100 dark:bg-gray-800">
                  <th className="border border-gray-200 dark:border-gray-700 p-4 text-left">Feature</th>
                  <th className="border border-gray-200 dark:border-gray-700 p-4 text-center">Ignite</th>
                  <th className="border border-gray-200 dark:border-gray-700 p-4 text-center">Accelerate</th>
                  <th className="border border-gray-200 dark:border-gray-700 p-4 text-center">Transform</th>
                  <th className="border border-gray-200 dark:border-gray-700 p-4 text-center">Pinnacle</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-200 dark:border-gray-700 p-4 font-medium">Zakbot Messages</td>
                  <td className="border border-gray-200 dark:border-gray-700 p-4 text-center">5,000</td>
                  <td className="border border-gray-200 dark:border-gray-700 p-4 text-center">15,000</td>
                  <td className="border border-gray-200 dark:border-gray-700 p-4 text-center">30,000</td>
                  <td className="border border-gray-200 dark:border-gray-700 p-4 text-center">Unlimited</td>
                </tr>
                <tr className="bg-gray-50 dark:bg-gray-800">
                  <td className="border border-gray-200 dark:border-gray-700 p-4 font-medium">Pre-Built Automations</td>
                  <td className="border border-gray-200 dark:border-gray-700 p-4 text-center">Basic</td>
                  <td className="border border-gray-200 dark:border-gray-700 p-4 text-center">Advanced</td>
                  <td className="border border-gray-200 dark:border-gray-700 p-4 text-center">Advanced</td>
                  <td className="border border-gray-200 dark:border-gray-700 p-4 text-center">Custom</td>
                </tr>
                <tr>
                  <td className="border border-gray-200 dark:border-gray-700 p-4 font-medium">Custom Workflows & Integrations</td>
                  <td className="border border-gray-200 dark:border-gray-700 p-4 text-center">-</td>
                  <td className="border border-gray-200 dark:border-gray-700 p-4 text-center">Limited</td>
                  <td className="border border-gray-200 dark:border-gray-700 p-4 text-center">Full</td>
                  <td className="border border-gray-200 dark:border-gray-700 p-4 text-center">Full</td>
                </tr>
                <tr className="bg-gray-50 dark:bg-gray-800">
                  <td className="border border-gray-200 dark:border-gray-700 p-4 font-medium">Support</td>
                  <td className="border border-gray-200 dark:border-gray-700 p-4 text-center">Email</td>
                  <td className="border border-gray-200 dark:border-gray-700 p-4 text-center">Priority Email & Chat</td>
                  <td className="border border-gray-200 dark:border-gray-700 p-4 text-center">24/7 Dedicated</td>
                  <td className="border border-gray-200 dark:border-gray-700 p-4 text-center">24/7 Dedicated + Account Manager</td>
                </tr>
                <tr>
                  <td className="border border-gray-200 dark:border-gray-700 p-4 font-medium">Onboarding Assistance</td>
                  <td className="border border-gray-200 dark:border-gray-700 p-4 text-center">Basic</td>
                  <td className="border border-gray-200 dark:border-gray-700 p-4 text-center">Standard</td>
                  <td className="border border-gray-200 dark:border-gray-700 p-4 text-center">Premium</td>
                  <td className="border border-gray-200 dark:border-gray-700 p-4 text-center">White-Glove</td>
                </tr>
                <tr className="bg-gray-50 dark:bg-gray-800">
                  <td className="border border-gray-200 dark:border-gray-700 p-4 font-medium">Training & Consulting</td>
                  <td className="border border-gray-200 dark:border-gray-700 p-4 text-center">Self-Service</td>
                  <td className="border border-gray-200 dark:border-gray-700 p-4 text-center">Guided</td>
                  <td className="border border-gray-200 dark:border-gray-700 p-4 text-center">Hands-On</td>
                  <td className="border border-gray-200 dark:border-gray-700 p-4 text-center">Strategic Partnership</td>
                </tr>
              </tbody>
            </table>
          </div>
        </motion.div>

        {/* One-Off Services Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="section-padding max-w-4xl mx-auto mt-20"
        >
          <h2 className="text-3xl font-bold font-heading text-zakbot-dark dark:text-white mb-4 text-center">
            Not Ready for a Full Plan? Try Our <span className="gradient-text">One-Off Services</span>.
          </h2>
          <p className="text-gray-600 dark:text-gray-300 mb-8 text-center max-w-2xl mx-auto">
            Test our expertise with a single project. Experience our quality, reliability, and impact—then scale into a long-term partnership when you're ready.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {/* First row with three items */}
            <Card className="feature-card group">
              <h3 className="text-xl font-bold font-heading text-zakbot-dark dark:text-white mb-3">
                Zakbot Setup
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Custom configuration and deployment of your AI assistant
              </p>
            </Card>
            
            <Card className="feature-card group">
              <h3 className="text-xl font-bold font-heading text-zakbot-dark dark:text-white mb-3">
                Exam Formatter
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Convert documents into structured exam formats with AI
              </p>
            </Card>
            
            <Card className="feature-card group">
              <h3 className="text-xl font-bold font-heading text-zakbot-dark dark:text-white mb-3">
                Custom Q&A Bot
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Build a specialized chatbot for your specific knowledge base
              </p>
            </Card>
          </div>
          
          {/* Second row with remaining items centered */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8 max-w-3xl mx-auto">
            <Card className="feature-card group">
              <h3 className="text-xl font-bold font-heading text-zakbot-dark dark:text-white mb-3">
                AI Summarization & Notes
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Transform lengthy documents into concise summaries and notes
              </p>
            </Card>
            
            <Card className="feature-card group">
              <h3 className="text-xl font-bold font-heading text-zakbot-dark dark:text-white mb-3">
                Lead Gen Script Automation
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Create and optimize scripts for automated lead generation
              </p>
            </Card>
          </div>
          
          <div className="text-center">
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              <span className="font-semibold">Pricing:</span> Custom quotes based on project scope
            </p>
            <a
              href="/en/contact"
              className="inline-block bg-zakbot-blue hover:bg-zakbot-blue-light text-white font-medium py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105"
            >
              Request a One-Off Project
            </a>
          </div>
        </motion.div>

        {/* FAQ Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="max-w-4xl mx-auto mt-20"
        >
          <h2 className="text-3xl font-bold font-heading text-zakbot-dark dark:text-white mb-8 text-center">
            Frequently Asked <span className="gradient-text">Questions</span>
          </h2>
          
          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <Card
                key={index}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <h3 className="text-lg font-semibold text-zakbot-dark dark:text-white mb-2">
                  {faq.question}
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  {faq.answer}
                </p>
              </Card>
            ))}
          </div>
        </motion.div>

        {/* Closing CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center mt-20"
        >
          <h2 className="text-3xl font-bold font-heading text-zakbot-dark dark:text-white mb-4">
            Ready to Automate Your Business with <span className="gradient-text">AI</span>?
          </h2>
          <p className="text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
            Transform your operations with our cutting-edge AI solutions. Schedule a free consultation to discover how we can help you save time and scale efficiently.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/en/contact"
              className="inline-block bg-zakbot-blue hover:bg-zakbot-blue-light text-white font-medium py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105"
            >
              Get Free Consultation
            </a>
            <a
              href="/en/contact"
              className="inline-block bg-transparent border-2 border-zakbot-blue text-zakbot-blue hover:bg-zakbot-blue hover:text-white font-medium py-3 px-8 rounded-lg transition-all duration-300"
            >
              Contact Us
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default PricingEN;