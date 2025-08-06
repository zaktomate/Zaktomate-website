import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import ChatDemo from './components/ChatDemo';
import StatsDashboard from './components/StatsDashboard';
import Footer from './components/Footer';
import { ThemeProvider } from './context/ThemeContext';

function App() {
  const [activeSection, setActiveSection] = useState('home');

  return (
    <Router>
      <ThemeProvider>
        <div className="min-h-screen bg-pattern dark:bg-gray-900">
          <Header activeSection={activeSection} setActiveSection={setActiveSection} />
          
          <main>
            <section id="home">
              <Hero />
            </section>
            
            <section id="features" className="section-padding bg-white dark:bg-gray-800">
              <Features />
            </section>
            
            <section id="demo" className="section-padding bg-gray-50 dark:bg-gray-700">
              <ChatDemo />
            </section>
            
            <section id="stats" className="section-padding bg-white dark:bg-gray-800">
              <StatsDashboard />
            </section>
          </main>
          
          <Footer className="bg-zakbot-dark" />
        </div>
      </ThemeProvider>
    </Router>
  );
}

export default App;