import React from 'react';
import { motion } from 'framer-motion';
import { FaTasks, FaLayerGroup, FaHandsHelping } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const PricingPackages = () => {
  const navigate = useNavigate();

  const packages = [
    {
      title: "One-Off Projects",
      icon: <FaTasks className="text-3xl text-zakbot-blue mb-4" />,
      description: "Perfect for testing our expertise with a single project",
      features: [
        "Zakbot Setup",
        "Zakdeck Setup",
        "Exam Formatter / Q&A Service"
      ],
      cta: "Explore One-off services"
    },
    {
      title: "OpsMate",
      icon: <FaHandsHelping className="text-3xl text-zakbot-blue mb-4" />,
      description: "Dedicated AI acquisition partner for sustained growth",
      features: [
        "Starter: Ignite — Budget friendly",
        "Growth: Accelerate — best for scale.",
        "Scale: Transform — for advanced automation."
      ],
      cta: "View Plans"
    },
    {
      title: "Product Tiers",
      icon: <FaLayerGroup className="text-3xl text-zakbot-blue mb-4" />,
      description: "Scalable AI solutions for growing businesses",
      features: [
        "Ignite - Starter Plan ($197/month)",
        "Accelerate - Most Popular ($347/month)",
        "Transform - Advanced Plan ($497/month)",
        "Pinnacle - Enterprise Plan (Custom Quote)"
      ],
      cta: "Contact Sales"
    }
  ];

  // Map CTA text to routes
  const getRouteForCTA = (cta) => {
    if (cta === "Explore One-off services") return "/en/Contact";
    if (cta === "View Plans") return "/en/Pricing";
    if (cta === "Contact Sales") return "/en/Contact";
    return "/en/Contact";
  };

  return (
    <section className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl font-bold text-center mb-4 text-gray-900 dark:text-white"
        >
          Commercial Models — Start Small or Partner Long-Term
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-xl text-center max-w-3xl mx-auto mb-12 text-gray-700 dark:text-gray-300"
        >
          Flexible engagement models: one-off projects, product tiers, or our managed OpsMate program.
        </motion.p>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {packages.map((pkg, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
              className="bg-gray-50 dark:bg-gray-800 rounded-lg shadow-lg p-8 flex flex-col h-full"
            >
              <div className="flex justify-center">
                {pkg.icon}
              </div>
              <h3 className="text-2xl font-bold mb-3 text-gray-900 dark:text-white text-center">{pkg.title}</h3>
              <p className="text-gray-700 dark:text-gray-300 mb-6 text-center">{pkg.description}</p>
              <ul className="mb-6 flex-grow">
                {pkg.features.map((feature, i) => (
                  <li key={i} className="text-gray-700 dark:text-gray-300 mb-2 flex items-start">
                    <span className="text-zakbot-blue mr-2">•</span> {feature}
                  </li>
                ))}
              </ul>
              <div className="mt-auto">
                <p className="text-lg font-bold text-gray-900 dark:text-white mb-4 text-center">{pkg.pricing}</p>
                <button
                  className="w-full bg-zakbot-blue text-white py-3 rounded-lg font-bold hover:bg-zakbot-dark-blue transition"
                  onClick={() => navigate(getRouteForCTA(pkg.cta))}
                  type="button"
                  aria-label={pkg.cta + " for " + pkg.title}
                >
                  {pkg.cta}
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="text-center"
        >
          <button
            className="bg-transparent border-2 border-zakbot-blue text-zakbot-blue py-3 px-8 rounded-lg font-bold hover:bg-zakbot-blue hover:text-white transition"
            onClick={() => navigate('/en/Contact')}
            type="button"
            aria-label="Contact sales for a tailored quote"
          >
            Contact sales for a tailored quote
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default PricingPackages;