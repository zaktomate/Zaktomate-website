import React from 'react';
import { motion } from 'framer-motion';
import { FaCheck, FaStar } from 'react-icons/fa';
import Card from '../components/common/Card';

const Pricing = () => {
  const plans = [
    {
      name: "Starter",
      price: "BDT 5,000",
      period: "/month",
      description: "Perfect for small businesses getting started with AI automation",
      features: [
        "Up to 1,000 conversations/month",
        "Basic chatbot functionality",
        "Email support",
        "Basic analytics",
        "1 knowledge base"
      ],
      popular: false,
      cta: "Get Started"
    },
    {
      name: "Professional",
      price: "BDT 15,000",
      period: "/month",
      description: "Ideal for growing businesses with higher customer interaction",
      features: [
        "Up to 5,000 conversations/month",
        "Advanced chatbot features",
        "Priority email & chat support",
        "Advanced analytics & insights",
        "3 knowledge bases",
        "Custom branding",
        "API access"
      ],
      popular: true,
      cta: "Most Popular"
    },
    {
      name: "Enterprise",
      price: "Custom",
      period: "",
      description: "For large organizations with complex requirements",
      features: [
        "Unlimited conversations",
        "All Professional features",
        "24/7 dedicated support",
        "Custom AI model training",
        "Unlimited knowledge bases",
        "White-label solution",
        "Advanced API & integrations",
        "Custom development",
        "SLA guarantee"
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
      answer: "We accept all major credit cards, debit cards, and bank transfers for Bangladeshi customers."
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-20">
      <div className="container">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold font-heading text-zakbot-dark dark:text-white mb-6">
            Simple, <span className="gradient-text">Transparent Pricing</span>
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Choose the perfect plan for your business. All plans include a 14-day free trial.
          </p>
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {plans.map((plan, index) => (
            <div key={index} className="relative">
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-zakbot-blue text-white px-4 py-1 rounded-full text-sm font-medium flex items-center">
                    <FaStar className="mr-1" /> Most Popular
                  </span>
                </div>
              )}
              <Card
                className={`h-full ${plan.popular ? 'ring-2 ring-zakbot-blue' : ''}`}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="text-center mb-8">
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
                
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start">
                      <FaCheck className="text-green-500 mt-1 mr-3 flex-shrink-0" />
                      <span className="text-gray-600 dark:text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <button 
                  className={`w-full py-3 px-6 rounded-lg font-medium transition-colors ${
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

        {/* FAQ Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="max-w-4xl mx-auto"
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

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center mt-16"
        >
          <h2 className="text-2xl font-bold font-heading text-zakbot-dark dark:text-white mb-4">
            Need a Custom Solution?
          </h2>
          <p className="text-gray-600 dark:text-gray-300 mb-6 max-w-2xl mx-auto">
            We understand that every business has unique needs. Let's discuss how we can 
            create a tailored solution for your organization.
          </p>
          <a 
            href="/contact" 
            className="inline-block bg-zakbot-teal hover:bg-zakbot-teal-light text-white font-medium py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105"
          >
            Contact Us
          </a>
        </motion.div>
      </div>
    </div>
  );
};

export default Pricing;