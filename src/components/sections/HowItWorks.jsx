import React from 'react';

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="py-16 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-gray-900 dark:text-white mb-12">How It Works</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Step 1 */}
          <div className="flex flex-col items-center text-center p-6 bg-gray-50 dark:bg-gray-800 rounded-lg shadow-md">
            <div className="w-16 h-16 flex items-center justify-center bg-blue-600 text-white rounded-full text-2xl font-bold mb-4">1</div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Consultation Call</h3>
            <p className="text-gray-700 dark:text-gray-300">
              We start with a free consultation to understand your business, challenges, and AI automation goals.
            </p>
          </div>

          {/* Step 2 */}
          <div className="flex flex-col items-center text-center p-6 bg-gray-50 dark:bg-gray-800 rounded-lg shadow-md">
            <div className="w-16 h-16 flex items-center justify-center bg-blue-600 text-white rounded-full text-2xl font-bold mb-4">2</div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Custom Development</h3>
            <p className="text-gray-700 dark:text-gray-300">
              Our team designs and develops tailored AI solutions, integrating seamlessly with your existing systems.
            </p>
          </div>

          {/* Step 3 */}
          <div className="flex flex-col items-center text-center p-6 bg-gray-50 dark:bg-gray-800 rounded-lg shadow-md">
            <div className="w-16 h-16 flex items-center justify-center bg-blue-600 text-white rounded-full text-2xl font-bold mb-4">3</div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Launch & Support</h3>
            <p className="text-gray-700 dark:text-gray-300">
              We deploy your AI systems and provide ongoing support and optimization to ensure maximum ROI.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;