import React from 'react';
import Hero from '../../components/sections/Hero';
import ProblemSolution from '../../components/sections/ProblemSolution';
import HowItWorks from '../../components/sections/HowItWorks';
import BrandPillars from '../../components/common/BrandPillars';
import TrustSignals from '../../components/common/TrustSignals';
import Contact from '../../components/sections/Contact';
import SEO from '../../components/common/SEO';

const HomeEN = ({ setActiveSection }) => {
  return (
    <div className="min-h-screen bg-transparent">
      {/* SEO Tags */}
      <SEO />
      
      {/* Hero Section */}
      <Hero
        headline="Transform Your Business with AI"
        subheadline="We build, deploy, and manage AI systems that save you 20+ hours per week—without you lifting a finger."
        primaryCtaText="Get Free Consultation Call"
        secondaryCtaText="Try Zakbot Live"
        setActiveSection={setActiveSection}
      />

      {/* Problem / Solution Section */}
      <ProblemSolution
        problemHeader="Business Growth Is Stalled by Hidden Inefficiencies"
        problemMicrocopy="Many businesses struggle with operational bottlenecks that drain resources and hinder scalability. These hidden inefficiencies prevent teams from focusing on strategic growth, leading to stagnant progress and missed opportunities."
        problems={[
          {
            icon: 'manual-support-icon', // Placeholder, replace with actual icon path
            title: 'Manual Support Costs',
            bullets: [
              'High overhead from human-led customer service.',
              'Inconsistent responses and long resolution times.',
              'Difficulty scaling support during peak periods.'
            ]
          },
          {
            icon: 'content-bottlenecks-icon', // Placeholder, replace with actual icon path
            title: 'Content Bottlenecks',
            bullets: [
              'Slow content creation for marketing and internal needs.',
              'Lack of personalized content for diverse audiences.',
              'Inefficient processes for updating and distributing information.'
            ]
          },
          {
            icon: 'lead-gen-icon', // Placeholder, replace with actual icon path
            title: 'Inefficient Lead Generation',
            bullets: [
              'Manual lead qualification and follow-up processes.',
              'Missed opportunities due to slow response times.',
              'Difficulty in personalizing outreach at scale.'
            ]
          }
        ]}
        solutionHeader="The Zaktomate Solution – AI Automation That Scales With You"
        solutionMicrocopy="Zaktomate provides end-to-end AI solutions that eliminate operational friction, empower your teams, and drive sustainable growth. We handle the complexity so you can reap the benefits."
        solutions={[
          {
            icon: 'ai-support-icon', // Placeholder, replace with actual icon path
            title: 'AI-Powered Customer & User Support',
            bullets: [
              '24/7 automated support with instant, accurate responses.',
              'Reduced operational costs and improved customer satisfaction.',
              'Seamless integration with existing communication channels.'
            ]
          },
          {
            icon: 'content-automation-icon', // Placeholder, replace with actual icon path
            title: 'Content & Workflow Automation',
            bullets: [
              'Automated generation of marketing copy, reports, and internal documents.',
              'Streamlined content workflows for faster delivery.',
              'Personalized content at scale, tailored to specific needs.'
            ]
          },
          {
            icon: 'lead-nurturing-icon', // Placeholder, replace with actual icon path
            title: 'Smarter Lead Generation & Nurturing',
            bullets: [
              'AI-driven lead qualification and automated follow-ups.',
              'Personalized outreach campaigns that convert.',
              'Optimized sales funnels for maximum efficiency.'
            ]
          }
        ]}
      />

      {/* How It Works Section */}
      <HowItWorks />

      {/* Brand Pillars Section */}
      <BrandPillars />

      {/* Trust Signals Section */}
      <TrustSignals />

      {/* Contact Section */}
      <Contact />
    </div>
  );
};

export default HomeEN;