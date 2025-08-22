import React from 'react';
import { motion } from 'framer-motion';
import { getTextColor } from '../../utils/colorUtils';
import { FaHeadset, FaFileAlt, FaUserFriends, FaLightbulb, FaRobot, FaChartLine } from 'react-icons/fa';

const ProblemSolution = () => {
  const problems = [
    {
      icon: <FaHeadset className="text-3xl text-red-500" />,
      title: "Manual Customer Support",
      points: [
        "Endless hours spent answering repetitive queries.",
        "Support teams stretched thin, leaving customers waiting.",
        "Scaling feels impossible without inflating costs."
      ]
    },
    {
      icon: <FaFileAlt className="text-3xl text-yellow-500" />,
      title: "Content Bottlenecks",
      points: [
        "Marketing and educational content takes weeks, not days.",
        "Teams struggle to keep up with demand for slides, posts, blogs, and reports.",
        "Inconsistent quality undermines brand authority."
      ]
    },
    {
      icon: <FaUserFriends className="text-3xl text-blue-500" />,
      title: "Lead Generation Inefficiencies",
      points: [
        "Cold outreach feels random and ineffective.",
        "Teams lack actionable insights to convert leads into paying clients.",
        "Valuable opportunities slip through the cracks daily."
      ]
    }
  ];

  const solutions = [
    {
      icon: <FaRobot className="text-3xl text-green-500" />,
      title: "AI-Powered Customer Support",
      points: [
        "Smart chatbots trained on your data.",
        "Available 24/7 with instant, consistent responses.",
        "Scales effortlessly as you grow."
      ]
    },
    {
      icon: <FaLightbulb className="text-3xl text-purple-500" />,
      title: "Automated Content Creation",
      points: [
        "AI-driven slides, notes, blogs, and posts delivered in hours.",
        "Maintain consistent brand tone and quality.",
        "Free your team from repetitive creative tasks."
      ]
    },
    {
      icon: <FaChartLine className="text-3xl text-indigo-500" />,
      title: "Intelligent Lead Generation",
      points: [
        "Automated outreach with tailored, AI-personalized messaging.",
        "Analytics-driven insights to identify and convert leads faster.",
        "Streamlined workflows that keep your pipeline alive."
      ]
    }
  ];

  return (
    <section id="problem-solution" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        {/* Problem Framing */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className={`text-3xl md:text-4xl font-bold text-center mb-4 ${getTextColor('default')}`}
        >
          The Hidden Costs of Running a Business in 2025
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className={`max-w-3xl mx-auto text-lg text-center mb-12 ${getTextColor('secondary')}`}
        >
          Manual tasks and outdated processes silently drain resources, slow growth, and erode competitiveness.
        </motion.p>

        {/* Pain Points (The Problems) */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {problems.map((problem, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-lg"
            >
              <div className="flex items-center justify-center mb-4">
                {problem.icon}
              </div>
              <h3 className={`text-xl font-bold text-center mb-3 ${getTextColor('default')}`}>
                {problem.title}
              </h3>
              <ul className="list-disc list-inside text-left">
                {problem.points.map((point, i) => (
                  <li key={i} className={`${getTextColor('secondary')} mb-1`}>{point}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className={`max-w-3xl mx-auto text-lg text-center mb-12 ${getTextColor('secondary')}`}
        >
          These challenges don’t just slow you down—they quietly hold your business back from reaching its full potential.
        </motion.p>

        {/* Solution Pivot */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className={`text-3xl md:text-4xl font-bold text-center mb-4 ${getTextColor('default')}`}
        >
          Zaktomate: Turning Bottlenecks Into Breakthroughs
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className={`max-w-3xl mx-auto text-lg text-center mb-12 ${getTextColor('secondary')}`}
        >
          We don’t just solve problems—we re-engineer the way you operate, so your business is free to focus on what truly matters: growth.
        </motion.p>

        {/* Solutions (What We Do) */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {solutions.map((solution, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-lg"
            >
              <div className="flex items-center justify-center mb-4">
                {solution.icon}
              </div>
              <h3 className={`text-xl font-bold text-center mb-3 ${getTextColor('default')}`}>
                {solution.title}
              </h3>
              <ul className="list-disc list-inside text-left">
                {solution.points.map((point, i) => (
                  <li key={i} className={`${getTextColor('secondary')} mb-1`}>{point}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* CTA (Close the Section) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="text-center"
        >
          <p className={`text-2xl font-bold mb-6 ${getTextColor('default')}`}>
            Ready to eliminate the friction in your business?
          </p>
          <div className="flex justify-center space-x-4">
            <button className="bg-zakbot-blue text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-zakbot-dark-blue transition-colors duration-300">
              Get Started with OpsMate
            </button>
            <a href="#" className={`text-zakbot-blue px-8 py-3 text-lg font-semibold border border-zakbot-blue rounded-full hover:bg-zakbot-blue hover:text-white transition-colors duration-300 ${getTextColor('default')}`}>
              Explore One-Off Services
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProblemSolution;