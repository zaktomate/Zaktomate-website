import React from 'react';

const BrandPillar = ({ title, description, proof, icon: Icon }) => {
  return (
    <div className="brand-pillar p-6 text-center">
      <div className="icon-container mb-4">
        {Icon && <Icon className="h-12 w-12 mx-auto text-primary-500" />}
      </div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600 mb-3">{description}</p>
      <p className="text-sm text-gray-500 italic">{proof}</p>
    </div>
  );
};

export default BrandPillar;