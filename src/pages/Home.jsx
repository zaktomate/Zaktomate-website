import React from 'react';
import Hero from '../components/sections/Hero';
import WhoIsItFor from '../components/sections/WhoIsItFor';
import Services from '../components/sections/Services';
import ChatDemo from '../components/specific/ChatDemo';
import GlobalStats from '../components/specific/GlobalStats';
import Pricing from '../components/sections/Pricing';
import About from '../components/sections/About';
import FAQSection from '../components/sections/FAQSection';
import Contact from '../components/sections/Contact';

const Home = ({ setActiveSection }) => {
  return (
    <div className="min-h-screen bg-transparent">
      {/* Hero Section */}
      <Hero setActiveSection={setActiveSection} />

      {/* Who Is It For Section */}
      <WhoIsItFor />

      {/* Services Section */}
      <Services />

      {/* Demo Section */}
      <section id="zakbot-demo" className="min-h-screen bg-white/70 dark:bg-gray-900 backdrop-blur-sm">
        <ChatDemo />
      </section>

      {/* Stats Section */}
      <section id="stats-dashboard" className="min-h-screen bg-white dark:bg-gray-900">
        <GlobalStats />
      </section>

      {/* Pricing Section */}
      <Pricing />

      {/* About Section */}
      <About />

      {/* FAQ Section */}
      <FAQSection />

      {/* Contact Section */}
      <Contact />
    </div>
  );
};

export default Home;