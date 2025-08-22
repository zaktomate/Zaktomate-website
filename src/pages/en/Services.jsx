import React from 'react';
import ServicesSection from '../../components/sections/Services';
import SEO from '../../components/common/SEO';

const ServicesEN = () => {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 py-20">
      {/* SEO Tags */}
      <SEO />
      <ServicesSection />
    </div>
  );
};

export default ServicesEN;