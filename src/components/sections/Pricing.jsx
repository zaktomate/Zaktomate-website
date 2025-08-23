import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaChevronDown, FaChevronUp, FaMoneyBillWave, FaBriefcase, FaRocket, FaGift } from 'react-icons/fa';
import Card from '../common/Card';
import { getTextColor, getColorClasses } from '../../utils/colorUtils';

const Pricing = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const colors = getColorClasses('zakbot-blue');

  // Detailed pricing data from pricing.html
  const pricingPlans = {
    standard: [
      {
        name: "Ignite",
        price: "BDT 10,000/month",
        features: [
          "Zakdeck: 50 decks/month",
          "Zakbot: 5,000 messages/month",
          "1 pre-built AI automation",
          "Basic email support",
          "Free AI audit"
        ],
        color: "zakbot-yellow"
      },
      {
        name: "Accelerate",
        price: "BDT 15,000/month",
        features: [
          "Zakdeck: 500 decks/month",
          "Zakbot: 10,000 messages/month",
          "Up to 3 customized workflows & integrations",
          "Priority email support",
          "Onboarding assistance",
          "Free AI audit"
        ],
        color: "zakbot-teal"
      },
      {
        name: "Transform",
        price: "BDT 25,000/month",
        features: [
          "Zakdeck: 1000 decks/month",
          "Zakbot: 30,000 messages/month",
          "Up to 10 workflows & automations",
          "Priority support 24/7"
        ],
        color: "zakbot-rose"
      }
    ],
    premium: [
      {
        name: "Pinnacle",
        price: "BDT 50,000/month",
        features: [
          "Zakdeck & Zakbot: Unlimited usage",
          "Unlimited workflows & custom AI agents",
          "Priority support 24/7 & on-demand engineering support with SLA",
          "Premium integrations",
          "Dedicated CSM support",
          "Free training & workshops for staff",
          "Regular AI consulting support"
        ],
        color: "zakbot-indigo"
      }
    ],
    promotional: [
      {
        title: "Free AI Audit",
        description: "We'll analyze your current workflows, identify automation gaps, and recommend AI solutions tailored to your operations."
      },
      {
        title: "Free Trial & Launch Offer",
        description: "Start with a risk-free pilot. Plus, get 50% off your first month if you sign up within 7 days of your audit."
      }
    ]
  };

  return (
    <section id="pricing" className="py-20 bg-white/50 dark:bg-gray-900 text-center backdrop-blur-sm">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className={`text-3xl font-bold mb-4 ${getTextColor('default')}`}
        >
          <FaMoneyBillWave className="inline-block mr-2" /> Transparent Pricing for Local Teams
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className={`max-w-3xl mx-auto mt-4 mb-6 ${getTextColor('secondary')}`}
        >
          We keep pricing affordable for the Bangladesh market — no surprises.
        </motion.p>
        <ul className={`list-disc list-inside mb-6 inline-block text-left ${getTextColor('secondary')}`}>
          <li>Starts at BDT 5,000/month</li>
          <li>Free trial available</li>
          <li>50% OFF your first month</li>
        </ul>

        {/* Expandable Pricing Section */}
        <div className="text-center mt-12">
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="inline-flex items-center gap-2 bg-cyan-600 hover:bg-cyan-700 text-white font-bold py-3 px-8 rounded-lg transition duration-300 text-lg"
          >
            {isExpanded ? (
              <>
                <FaChevronUp /> Show Less
              </>
            ) : (
              <>
                <FaChevronDown /> Read More About Our Pricing Plans
              </>
            )}
          </button>
        </div>

        {/* Detailed Pricing Content */}
        <AnimatePresence>
          {isExpanded && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.5 }}
              className="overflow-hidden"
            >
              <div className="mt-16">
                {/* Standard Plans */}
                <div className="mb-16">
                  <motion.h3
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="text-3xl md:text-4xl font-bold text-center mb-10 text-cyan-600"
                  >
                    <FaBriefcase className="inline-block mr-2" /> Choose Your Plan
                  </motion.h3>
                  <div className="grid md:grid-cols-3 gap-8">
                    {pricingPlans.standard.map((plan, index) => {
                      const planColors = getColorClasses(plan.color);
                      return (
                        <Card
                          key={index}
                          className="p-8 flex flex-col"
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                          <h4 className={`text-2xl font-bold mb-4 ${getTextColor('default')}`}>
                            {plan.name}
                          </h4>
                          <p className={`text-3xl font-bold mb-6 ${planColors.text}`}>
                            {plan.price}
                          </p>
                          <ul className={`space-y-2 mb-6 ${getTextColor('muted')}`}>
                            {plan.features.map((feature, idx) => (
                              <li key={idx} className="flex items-start">
                                <span className="mr-2">•</span> {feature}
                              </li>
                            ))}
                          </ul>
                          <button
                            type="button"
                            className={`${planColors.button} text-white py-3 px-6 rounded-md font-bold text-center mt-auto hover:${planColors.buttonHover} transition cursor-pointer`}
                            onClick={() => {
                              const element = document.querySelector('#contact');
                              if (element) {
                                element.scrollIntoView({ behavior: 'smooth' });
                              }
                            }}
                            aria-label="Start Free Trial"
                          >
                            Start Free Trial
                          </button>
                        </Card>
                      );
                    })}
                  </div>
                </div>

                {/* Premium Plan */}
                <div className="mb-16">
                  <motion.h3
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="text-3xl md:text-4xl font-bold text-center mb-10 text-purple-600"
                  >
                    <FaRocket className="inline-block mr-2" /> Premium Plan
                  </motion.h3>
                  <div className="flex justify-center">
                    <div className="w-full md:w-2/3 lg:w-1/2">
                      {pricingPlans.premium.map((plan, index) => {
                        const planColors = getColorClasses(plan.color);
                        return (
                          <Card
                            key={index}
                            className="p-8 flex flex-col"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.3 }}
                          >
                            <h4 className={`text-2xl font-bold mb-4 ${getTextColor('default')}`}>
                              {plan.name}
                            </h4>
                            <p className={`text-3xl font-bold mb-6 ${planColors.text}`}>
                              {plan.price}
                            </p>
                            <ul className={`space-y-2 mb-6 ${getTextColor('muted')}`}>
                              {plan.features.map((feature, idx) => (
                                <li key={idx} className="flex items-start">
                                  <span className="mr-2">•</span> {feature}
                                </li>
                              ))}
                            </ul>
                            <button
                              type="button"
                              className={`${planColors.button} text-white py-3 px-6 rounded-md font-bold text-center mt-auto hover:${planColors.buttonHover} transition cursor-pointer`}
                              onClick={() => {
                                const element = document.querySelector('#contact');
                                if (element) {
                                  element.scrollIntoView({ behavior: 'smooth' });
                                }
                              }}
                              aria-label="Start Free Trial"
                            >
                              Start Free Trial
                            </button>
                          </Card>
                        );
                      })}
                    </div>
                  </div>
                </div>

                {/* Promotional Offers */}
                <div className="mb-16">
                  <motion.h3
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    className="text-3xl md:text-4xl font-bold text-center mb-10 text-green-600"
                  >
                    <FaGift className="inline-block mr-2" /> Special Offers
                  </motion.h3>
                  <div className="max-w-3xl mx-auto">
                    <Card
                      className="p-8"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.5 }}
                    >
                      {pricingPlans.promotional.map((offer, index) => (
                        <div key={index} className="mb-6 last:mb-0">
                          <h4 className={`text-2xl font-bold mb-2 ${getTextColor('default')}`}>
                            {offer.title}
                          </h4>
                          <p className={getTextColor('muted')}>
                            {offer.description}
                          </p>
                        </div>
                      ))}
                    </Card>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Pricing;