import React from 'react';
import Hero from '../components/sections/Hero';
import WhoIsItFor from '../components/sections/WhoIsItFor';
import ProblemSolution from '../components/sections/ProblemSolution';
import Services from '../components/sections/Services';
import ChatDemo from '../components/specific/ChatDemo';
import GlobalStats from '../components/specific/GlobalStats';
import { getTextColor } from '../utils/colorUtils';
import BrandPillars from '../components/common/BrandPillars'; // Explicitly import as named
import Pricing from '../components/sections/Pricing';
import TrustSignals from '../components/common/TrustSignals';
import AboutZaktomate from '../components/sections/AboutZaktomate';
import TeamBehindZaktomate from '../components/sections/TeamBehindZaktomate';
import LookingAheadJoinUs from '../components/sections/LookingAheadJoinUs';
import FAQSection from '../components/sections/FAQSection';
import Contact from '../components/sections/Contact';
import SEO from '../components/common/SEO';

const Home = ({ setActiveSection }) => {
  return (
    <div className="min-h-screen bg-transparent">
      {/* SEO Tags */}
      <SEO />
      
      {/* Hero Section */}
      <Hero setActiveSection={setActiveSection} headline="Reinvent How You Work - With AI" />

      {/* Who Is It For Section */}
      <WhoIsItFor targetMarket="SMEs" />

      {/* Problem / Our Solution Section */}
      <ProblemSolution />

      {/* Services Section */}
      <Services />

      {/* Demo Section */}
      <section id="zakbot-demo" className="min-h-screen bg-white/70 dark:bg-gray-900 backdrop-blur-sm">
        <ChatDemo
          headline="Zakbot – Your Always-On AI Assistant for Every Interaction"
          microcopy="Zakbot is an intelligent, multilingual AI assistant that works around the clock to deliver instant, accurate answers and personalized guidance — no human intervention required. Whether on your website, app, or learning platform, Zakbot adapts to your content, processes, and audience needs."
          cta1={{ text: "Learn More", link: "/zakbot" }}
        />
        <div className="text-center mt-2">
          <a
            href="/zakbot"
            className="bg-zakbot-blue text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-zakbot-dark-blue transition-colors duration-300"
          >
            Learn More
          </a>
        </div>
      </section>

      {/* Stats Section */}
      <section id="stats-dashboard" className="h-auto flex item-center justify-center bg-white dark:bg-gray-900">
        <GlobalStats />
      </section>

      {/* Brand Pillars Section */}
      <BrandPillars />

      {/* Trust Signals Section */}
      <TrustSignals />

      {/* FAQ Section */}
      <FAQSection />
    </div>
  );
};

export default Home;