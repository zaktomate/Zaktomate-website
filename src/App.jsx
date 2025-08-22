import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import Header from './components/common/Header';
import Footer from './components/common/Footer';
import { ThemeProvider } from './context/ThemeContext';
import Home from './pages/Home';
import Services from './pages/Services';
import Zakbot from './pages/Zakbot';
import Pricing from './pages/Pricing';
import About from './pages/About';
import Contact from './pages/Contact';
import FAQ from './pages/FAQ';
import Dashboard from './pages/Dashboard';
import StatsDashboard from './components/specific/StatsDashboard';

// International pages
import HomeEN from './pages/en/Home';
import ServicesEN from './pages/en/Services';
import ZakbotEN from './pages/en/Zakbot';
import PricingEN from './pages/en/Pricing';
import AboutEN from './pages/en/About';
import ContactEN from './pages/en/Contact';
import FAQEN from './pages/en/FAQ';

function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [isHomePage, setIsHomePage] = useState(false);

  useEffect(() => {
    // Check if we're on the home page
    setIsHomePage(window.location.pathname === '/' || window.location.pathname === '/en/');
  }, []);

  return (
    <Router>
      <HelmetProvider>
        <ThemeProvider>
          <div className="min-h-screen bg-pattern dark:bg-gray-900">
            <Header activeSection={activeSection} setActiveSection={setActiveSection} />
            
            <main>
              <Routes>
                {/* Bangladeshi Routes */}
                <Route
                  path="/"
                  element={<Home setActiveSection={setActiveSection} />}
                />
                <Route path="/services" element={<Services />} />
                <Route path="/zakbot" element={<Zakbot />} />
                <Route path="/pricing" element={<Pricing />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/faq" element={<FAQ />} />
                <Route path="/dashboard" element={<Dashboard />} />
                
                {/* International Routes */}
                <Route
                  path="/en"
                  element={<HomeEN setActiveSection={setActiveSection} />}
                />
                <Route path="/en/services" element={<ServicesEN />} />
                <Route path="/en/zakbot" element={<ZakbotEN />} />
                <Route path="/en/pricing" element={<PricingEN />} />
                <Route path="/en/about" element={<AboutEN />} />
                <Route path="/en/contact" element={<ContactEN />} />
                <Route path="/en/faq" element={<FAQEN />} />
                
                {/* Stats Dashboard as a standalone page */}
                <Route path="/stats" element={<StatsDashboard />} />
              </Routes>
            </main>
            
            <Footer className="bg-zakbot-dark" />
          </div>
        </ThemeProvider>
      </HelmetProvider>
    </Router>
  );
}

export default App;