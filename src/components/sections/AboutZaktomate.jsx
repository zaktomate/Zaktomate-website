import React from 'react';

const AboutZaktomate = () => {
  return (
    <section className="about-zaktomate py-16 bg-gray-50">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-6">About Zaktomate</h2>
        <p className="text-lg text-gray-700 mb-4">
          Zaktomate is an AI automation agency based in Dhaka, dedicated to helping startups, ed‑tech companies, and SMEs work smarter. Our mission is simple: make AI useful, easy to adopt, and affordable for growing teams in Bangladesh and beyond.
        </p>
        <p className="text-lg text-gray-700 mb-8">
          We design intelligent tools that take the weight off your daily operations—whether it’s answering thousands of customer queries in a day or creating polished presentations in minutes. Every solution we build is crafted to save time, cut costs, and unlock new possibilities for your business.
        </p>
        <a href="/about" className="btn btn-primary">Learn More About Us</a>
      </div>
    </section>
  );
};

export default AboutZaktomate;