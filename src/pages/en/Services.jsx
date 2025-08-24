import React from 'react';
import SEO from '../../components/common/SEO';

// Import all the new section components we'll create
import ServicesHero from '../../components/en/services/ServicesHero';
import QuickServiceOverview from '../../components/en/services/QuickServiceOverview';
import ZakbotDeepDive from '../../components/en/services/ZakbotDeepDive';
import ContentAutomation from '../../components/en/services/ContentAutomation';
import MarketingAutomation from '../../components/en/services/MarketingAutomation';
import InternalOpsAutomation from '../../components/en/services/InternalOpsAutomation';
import IntegrationsSpecs from '../../components/en/services/IntegrationsSpecs';
import SecurityCompliance from '../../components/en/services/SecurityCompliance';
import PricingPackages from '../../components/en/services/PricingPackages';
import OnboardingSLA from '../../components/en/services/OnboardingSLA';
import CaseStudies from '../../components/en/services/CaseStudies';
import ServicesFAQ from '../../components/en/services/ServicesFAQ';

const ServicesEN = () => {
  return (
    <div className="min-h-screen bg-transparent">
      {/* SEO Tags */}
      <SEO />
      
      {/* Hero / Value proposition */}
      <ServicesHero />
      
      {/* Quick service overview */}
      <QuickServiceOverview />
      
      {/* Flagship product: Zakbot deep module breakdown */}
      <ZakbotDeepDive />
      
      {/* Content Automation — Zakdeck & Course Generator */}
      <ContentAutomation />
      
      {/* Marketing & Lead Automation */}
      <MarketingAutomation />
      
      {/* Internal Ops & HR Automation */}
      <InternalOpsAutomation />
      
      {/* Integrations & Technical Specifications */}
      <IntegrationsSpecs />
      
      {/* Security, Compliance & Responsible AI */}
      <SecurityCompliance />
      
      {/* Pricing & Packages */}
      <PricingPackages />
      
      {/* Onboarding & SLA */}
      {/* <OnboardingSLA /> */}
      
      {/* Case Studies / ROI highlights */}
      {/* <CaseStudies /> */}
      
      {/* FAQ + Footer CTA */}
      <ServicesFAQ />
    </div>
  );
};

export default ServicesEN;