import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Home from './pages/Home';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsOfService from './pages/TermsOfService';

type PageType = 'home' | 'privacy' | 'terms';

function App() {
  const [currentPage, setCurrentPage] = useState<PageType>('home');

  // Force immediate render on mount
  useEffect(() => {
    // Ensure the page renders immediately
    const timer = setTimeout(() => {
      setCurrentPage('home');
    }, 0);
    return () => clearTimeout(timer);
  }, []);

  const scrollToSection = (sectionId: string) => {
    if (currentPage !== 'home') {
      setCurrentPage('home');
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 100);
    } else {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'privacy':
        return <PrivacyPolicy />;
      case 'terms':
        return <TermsOfService />;
      default:
        return <Home scrollToSection={scrollToSection} />;
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Header currentPage={currentPage} setCurrentPage={setCurrentPage} scrollToSection={scrollToSection} />
      <AnimatePresence mode="wait">
        <motion.main
          key={currentPage}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          {renderPage()}
        </motion.main>
      </AnimatePresence>
      <Footer currentPage={currentPage} setCurrentPage={setCurrentPage} scrollToSection={scrollToSection} />
    </div>
  );
}

export default App;