import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './Home';
import Services from './Services';
import Zakbot from './Zakbot';
import Pricing from './Pricing';
import About from './About';
import Contact from './Contact';
import FAQ from './FAQ';

function EnApp() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="services" element={<Services />} />
      <Route path="zakbot" element={<Zakbot />} />
      <Route path="pricing" element={<Pricing />} />
      <Route path="about" element={<About />} />
      <Route path="contact" element={<Contact />} />
      <Route path="faq" element={<FAQ />} />
    </Routes>
  );
}

export default EnApp;