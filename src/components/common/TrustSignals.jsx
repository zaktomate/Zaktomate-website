import React from 'react';

const TrustSignals = ({ logos }) => {
  return (
    <div className="trust-signals py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-center items-center gap-8">
          {logos.map((logo, index) => (
            <img
              key={index}
              src={logo.src}
              alt={logo.alt}
              className="h-12 max-w-full object-contain"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TrustSignals;