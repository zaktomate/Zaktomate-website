import React from 'react';
import { motion } from 'framer-motion';
import { FaCheck, FaStar } from 'react-icons/fa';
import Card from '../components/common/Card';
import SEO from '../components/common/SEO';


const Pricing = () => {
  const plans = [
    {
      name: "Ignite",
      price: "BDT 10,000",
      period: "/month",
      description: "Kickstart your AI journey with essential tools for efficiency.",
      features: [
        "1 AI Workflow Automation",
        "Basic Zakbot Integration",
        "Standard Analytics",
        "Email Support",
        "Up to 1,000 AI interactions/month"
      ],
      popular: false,
      cta: "Start Your AI Journey"
    },
    {
      name: "Accelerate",
      price: "BDT 25,000",
      period: "/month",
      description: "Scale your operations with advanced AI and dedicated support.",
      features: [
        "3 AI Workflow Automations",
        "Advanced Zakbot Integration",
        "Custom Analytics Dashboard",
        "Priority Chat & Email Support",
        "Up to 5,000 AI interactions/month",
        "Monthly Performance Review"
      ],
      popular: true,
      cta: "Most Popular"
    },
    {
      name: "Transform",
      price: "BDT 40,000",
      period: "/month",
      description: "Comprehensive AI integration for complete business transformation.",
      features: [
        "Unlimited AI Workflow Automations",
        "Full Zakbot & Zakdeck Integration",
        "Real-time Analytics & Reporting",
        "24/7 Dedicated Support",
        "Up to 15,000 AI interactions/month",
        "Quarterly Strategy Session",
        "Custom AI Model Training"
      ],
      popular: false,
      cta: "Start Your AI Journey"
    },
    {
      name: "Pinnacle",
      price: "From BDT 60,000",
      period: "/month",
      description: "Enterprise-grade AI solutions with bespoke development and SLA.",
      features: [
        "Custom AI Solutions",
        "Dedicated Development Team",
        "On-site Support & Training",
        "Unlimited AI interactions",
        "Advanced Security & Compliance",
        "Strategic Partnership & Consulting",
        "SLA Guarantee"
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
        <SEO />
      <div className="container">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold font-heading text-zakbot-dark dark:text-white mb-6">
            Flexible Plans for Every Stage of AI Adoption
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Whether you want a one-off project to test the waters or a long-term partner to scale AI across your business—we’ve got you covered.
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

        {/* Secondary Track – One-Off Services */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="text-center mt-20 mb-16"
        >
{/* Comparison Table: One-Off Services vs OpsMate Plans */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-20 mb-16 max-w-6xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl font-bold font-heading text-zakbot-dark dark:text-white mb-10 text-center">
            Choose What Suits You Best
          </h2>
          <div className="overflow-x-auto bg-white dark:bg-gray-800 rounded-lg shadow-lg p-4">
            <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
              <thead className="bg-zakbot-blue-dark text-white">
                <tr>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">
                    Feature / Plan
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">
                    One-Off Services
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">
                    Ignite
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider relative">
                    Accelerate
                    <span className="absolute -top-2 left-1/2 transform -translate-x-1/2 bg-zakbot-blue text-white px-2 py-0.5 rounded-full text-xs font-medium whitespace-nowrap">
                      Most Popular
                    </span>
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">
                    Transform
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">
                    Pinnacle
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white dark:bg-gray-800 divide-y divide-gray-200 dark:divide-gray-700">
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-zakbot-dark dark:text-white">Commitment</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600 dark:text-gray-300">Low (Project-based)</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600 dark:text-gray-300">Monthly</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600 dark:text-gray-300">Monthly</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600 dark:text-gray-300">Monthly</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600 dark:text-gray-300">Annual/Custom</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-zakbot-dark dark:text-white">Zakdeck</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600 dark:text-gray-300">Setup Only</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600 dark:text-gray-300">Limited Access</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600 dark:text-gray-300">Standard Access</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600 dark:text-gray-300">Full Integration</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600 dark:text-gray-300">Custom Development</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-zakbot-dark dark:text-white">Zakbot</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600 dark:text-gray-300">Setup Only</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600 dark:text-gray-300">Basic Integration</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600 dark:text-gray-300">Advanced Integration</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600 dark:text-gray-300">Full Integration</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600 dark:text-gray-300">Custom Development</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-zakbot-dark dark:text-white">Workflows & Automations</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600 dark:text-gray-300">Specific Project</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600 dark:text-gray-300">1 Workflow</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600 dark:text-gray-300">3 Workflows</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600 dark:text-gray-300">Unlimited</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600 dark:text-gray-300">Custom</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-zakbot-dark dark:text-white">Support</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600 dark:text-gray-300">Project-based</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600 dark:text-gray-300">Email</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600 dark:text-gray-300">Priority Email & Chat</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600 dark:text-gray-300">24/7 Dedicated</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600 dark:text-gray-300">Dedicated Team</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-zakbot-dark dark:text-white">Onboarding & Training</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600 dark:text-gray-300">Basic Setup</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600 dark:text-gray-300">Self-Serve Guides</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600 dark:text-gray-300">Assisted Onboarding</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600 dark:text-gray-300">Full Training</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600 dark:text-gray-300">Custom Program</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-zakbot-dark dark:text-white">Integration Level</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600 dark:text-gray-300">Basic API</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600 dark:text-gray-300">Standard API</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600 dark:text-gray-300">Advanced API</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600 dark:text-gray-300">Full Custom</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600 dark:text-gray-300">Bespoke</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-zakbot-dark dark:text-white">Consulting</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600 dark:text-gray-300">None</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600 dark:text-gray-300">Basic Guidance</td>
{/* Positioning Notes */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.7 }}
          className="mt-10 text-center max-w-4xl mx-auto text-gray-600 dark:text-gray-300"
        >
          <p className="mb-4">
            <span className="font-bold text-zakbot-dark dark:text-white">One-Off Services:</span> Ideal for businesses looking to test AI solutions with minimal commitment or for specific project needs.
          </p>
          <p>
            <span className="font-bold text-zakbot-dark dark:text-white">OpsMate Plans:</span> Designed for long-term partnerships, offering comprehensive AI integration, dedicated support, and strategic growth.
          </p>
        </motion.div>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600 dark:text-gray-300">Monthly Review</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600 dark:text-gray-300">Quarterly Strategy</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600 dark:text-gray-300">Ongoing Strategic</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-zakbot-dark dark:text-white">Scalability</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600 dark:text-gray-300">Limited</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600 dark:text-gray-300">Moderate</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600 dark:text-gray-300">High</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600 dark:text-gray-300">Very High</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600 dark:text-gray-300">Unlimited</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-zakbot-dark dark:text-white">Pricing</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600 dark:text-gray-300">Custom Quote</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600 dark:text-gray-300">BDT 10,000/month</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600 dark:text-gray-300">BDT 25,000/month</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600 dark:text-gray-300">BDT 40,000/month</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600 dark:text-gray-300">From BDT 60,000/month</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-zakbot-dark dark:text-white"></td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600 dark:text-gray-300">
                    <a href="/contact" className="inline-block bg-gray-200 text-gray-700 hover:bg-gray-300 dark:bg-gray-700 dark:text-gray-300 dark:hover:bg-gray-600 font-medium py-2 px-4 rounded-lg transition-all duration-300">Request Project</a>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600 dark:text-gray-300">
                    <button className="w-full py-2 px-4 rounded-lg font-medium transition-colors bg-gray-200 text-gray-700 hover:bg-gray-300 dark:bg-gray-700 dark:text-gray-300 dark:hover:bg-gray-600">Get Started</button>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600 dark:text-gray-300">
                    <button className="w-full py-2 px-4 rounded-lg font-medium transition-colors bg-zakbot-blue text-white hover:bg-zakbot-blue-light">Most Popular</button>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600 dark:text-gray-300">
                    <button className="w-full py-2 px-4 rounded-lg font-medium transition-colors bg-gray-200 text-gray-700 hover:bg-gray-300 dark:bg-gray-700 dark:text-gray-300 dark:hover:bg-gray-600">Get Started</button>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600 dark:text-gray-300">
                    <button className="w-full py-2 px-4 rounded-lg font-medium transition-colors bg-gray-200 text-gray-700 hover:bg-gray-300 dark:bg-gray-700 dark:text-gray-300 dark:hover:bg-gray-600">Contact Sales</button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </motion.div>
          <h2 className="text-3xl md:text-4xl font-bold font-heading text-zakbot-dark dark:text-white mb-6">
            Not Ready for Full OpsMate? <span className="gradient-text">Start Off with One-Off Services</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-10">
            Test our expertise with a single project. Experience our quality, reliability, and impact—then scale into a long-term OpsMate partnership when you’re ready.
          </p>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-12">
            <Card className="p-6 text-left">
              <h3 className="text-xl font-semibold text-zakbot-dark dark:text-white mb-3">Zakbot Setup</h3>
              <p className="text-gray-600 dark:text-gray-300">Custom AI chatbot deployment for your business.</p>
            </Card>
            <Card className="p-6 text-left">
              <h3 className="text-xl font-semibold text-zakbot-dark dark:text-white mb-3">Zakdeck Setup</h3>
              <p className="text-gray-600 dark:text-gray-300">Automated content generation and presentation tools.</p>
            </Card>
            <Card className="p-6 text-left">
              <h3 className="text-xl font-semibold text-zakbot-dark dark:text-white mb-3">Exam Formatter</h3>
              <p className="text-gray-600 dark:text-gray-300">AI-powered formatting for academic exams and quizzes.</p>
            </Card>
            <Card className="p-6 text-left">
              <h3 className="text-xl font-semibold text-zakbot-dark dark:text-white mb-3">Q&A Service</h3>
              <p className="text-gray-600 dark:text-gray-300">Develop a custom Q&A bot for your knowledge base.</p>
            </Card>
            <Card className="p-6 text-left">
              <h3 className="text-xl font-semibold text-zakbot-dark dark:text-white mb-3">AI Summarization & Notes</h3>
              <p className="text-gray-600 dark:text-gray-300">Automate meeting notes and document summarization.</p>
            </Card>
            <Card className="p-6 text-left">
              <h3 className="text-xl font-semibold text-zakbot-dark dark:text-white mb-3">Lead Gen Script Automation</h3>
              <p className="text-gray-600 dark:text-gray-300">Automate lead generation scripts and outreach.</p>
            </Card>
          </div>

          <p className="text-md text-gray-500 dark:text-gray-400 max-w-3xl mx-auto mb-8">
            All services are delivered and priced as one-time setup only. Any recurring costs are on the client.
          </p>

          <div className="flex justify-center items-center space-x-4">
            <span className="text-2xl font-bold text-zakbot-dark dark:text-white">Custom Pricing</span>
            <a
              href="/contact"
              className="inline-block bg-zakbot-teal hover:bg-zakbot-teal-light text-white font-medium py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105"
            >
              Request a One-Off Project
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Pricing;