import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaUsers, FaGraduationCap, FaComments, FaCloud, FaDatabase, FaChartBar } from 'react-icons/fa';
import mermaid from 'mermaid';
import { useNavigate } from 'react-router-dom';

const IntegrationsSpecs = () => {
  const navigate = useNavigate();

  const integrations = [
    { name: "CRM", icon: <FaUsers className="text-2xl" /> },
    { name: "LMS", icon: <FaGraduationCap className="text-2xl" /> },
    { name: "Messaging", icon: <FaComments className="text-2xl" /> },
    { name: "Cloud", icon: <FaCloud className="text-2xl" /> },
    { name: "Data stores", icon: <FaDatabase className="text-2xl" /> },
    { name: "Monitoring", icon: <FaChartBar className="text-2xl" /> }
  ];

  useEffect(() => {
    mermaid.initialize({
      startOnLoad: true,
      theme: 'default',
      securityLevel: 'loose',
      flowchart: {
        useMaxWidth: true,
        htmlLabels: true,
        curve: 'basis',
        nodeSpacing: 50,
        rankSpacing: 70
      },
      themeVariables: {
        primaryColor: '#3b82f6',
        primaryTextColor: '#ffffff',
        primaryBorderColor: '#1d4ed8',
        lineColor: '#64748b',
        secondaryColor: '#f1f5f9',
        tertiaryColor: '#e2e8f0'
      }
    });
    
    mermaid.contentLoaded();
  }, []);

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
          Integrations, APIs & Architecture
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-xl text-center max-w-3xl mx-auto mb-12 text-gray-700 dark:text-gray-300"
        >
          Seamlessly connect with your existing tools and infrastructure through our robust integration framework.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mb-12"
        >
          <h3 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white text-center">Supported Integrations</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {integrations.map((integration, index) => (
              <div 
                key={index} 
                className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg text-center flex flex-col items-center justify-center h-32 shadow-md hover:shadow-lg transition-shadow"
              >
                <div className="w-12 h-12 rounded-full bg-zakbot-blue flex items-center justify-center text-white mb-3">
                  {integration.icon}
                </div>
                <p className="text-gray-900 dark:text-white font-medium">{integration.name}</p>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-gray-800 dark:to-gray-800 rounded-xl p-8 mb-12 shadow-lg"
        >
          <h3 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white text-center">Architecture Overview</h3>
          <div className="flex justify-center">
            <div className="mermaid w-full max-w-4xl bg-white dark:bg-gray-700 p-6 rounded-lg shadow-lg border border-gray-200 dark:border-gray-600">
              {`graph TD
    A[User] -- "Sends message" --> B(API Server);
    B -- "Forwards to Chat System" --> C{Chat Controller};
    C -- "Checks client setup" --> D[Client Settings];
    C -- "Passes message" --> E(Bot Service);
    E -- "Finds related info" --> F(Database);
    E -- "Asks AI Model" --> G(LLM API);
    G -- "Returns answer" --> E;
    E -- "Final reply" --> C;
    C -- "Reply back" --> A[User];`}
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center"
        >
          <button
            className="bg-zakbot-blue text-white py-3 px-8 rounded-lg font-bold hover:bg-zakbot-dark-blue transition transform hover:-translate-y-1 transition-transform"
            onClick={() => navigate('/en/Contact')}
            type="button"
            aria-label="View full integration guide"
          >
            View full integration guide
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default IntegrationsSpecs;