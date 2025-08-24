import React from 'react';
import { motion } from 'framer-motion';
import { FaFilePowerpoint, FaClipboardList, FaTasks, FaCodeBranch } from 'react-icons/fa';

const ContentAutomation = () => {
  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl font-bold text-center mb-4 text-gray-900 dark:text-white"
        >
          Zakdeck — Generate Slides & Content, Fast & Easy
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-xl text-center max-w-3xl mx-auto mb-12 text-gray-700 dark:text-gray-300"
        >
          Zakdeck turns course outlines and lecture notes into polished slide decks, at the click of a button. Designed for educators and training centers that need high-throughput content generation with institutional quality.
        </motion.p>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <ul className="space-y-6">
              <li className="flex items-start">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-zakbot-blue flex items-center justify-center text-white font-bold mr-4">
                  1
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white">Slide Packs</h3>
                  <p className="text-gray-700 dark:text-gray-300">Auto-generate clean, structured slide decks instantly from your content.</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">From raw notes to ready-to-present slides—faster than ever.</p>
                </div>
              </li>
              <li className="flex items-start">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-zakbot-blue flex items-center justify-center text-white font-bold mr-4">
                  2
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white">Custom Templates & Branding</h3>
                  <p className="text-gray-700 dark:text-gray-300">Apply your institution's branding, layouts, and color schemes across every deck.</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">Maintain brand consistency and professional polish effortlessly.</p>
                </div>
              </li>
              <li className="flex items-start">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-zakbot-blue flex items-center justify-center text-white font-bold mr-4">
                  3
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white">Version Control & Revisions</h3>
                  <p className="text-gray-700 dark:text-gray-300">Update existing decks with new topics, questions, or case studies while retaining structure.</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">Iterate on materials seamlessly—no starting from scratch.</p>
                </div>
              </li>
              <li className="flex items-start">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-zakbot-blue flex items-center justify-center text-white font-bold mr-4">
                  4
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white">Multilingual Support (Bangla + English)</h3>
                  <p className="text-gray-700 dark:text-gray-300">Generate slides and notes in either or both languages for local institutions.</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">Reach wider audiences with bilingual-ready decks.</p>
                </div>
              </li>
            </ul>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="bg-gray-200 dark:bg-gray-700 rounded-lg h-96 flex items-center justify-center"
          >
            <p className="text-gray-700 dark:text-gray-300">Demo thumbnails of Zakdeck in action</p>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center"
        >
          <button className="bg-zakbot-blue text-white py-3 px-8 rounded-lg font-bold hover:bg-zakbot-dark-blue transition">
            Request Access
          </button>
          <p className="mt-4 text-gray-700 dark:text-gray-300">
            Cross-sell opportunity with Zakbot for enhanced automation capabilities
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default ContentAutomation;