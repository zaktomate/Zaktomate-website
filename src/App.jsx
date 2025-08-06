import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
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

function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [isHomePage, setIsHomePage] = useState(false);

  useEffect(() => {
    // Check if we're on the home page
    setIsHomePage(window.location.pathname === '/');
  }, []);

  return (
    <Router>
      <ThemeProvider>
        <div className="min-h-screen bg-pattern dark:bg-gray-900">
          <Header activeSection={activeSection} setActiveSection={setActiveSection} />
          
          <main>
            <Routes>
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
              
              {/* Stats Dashboard as a standalone page */}
              <Route path="/stats" element={<StatsDashboard />} />
            </Routes>
          </main>
          
          <Footer className="bg-zakbot-dark" />
        </div>
      </ThemeProvider>
    </Router>
  );
}

export default App;