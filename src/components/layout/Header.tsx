import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { navLinks } from '../../data/navLinks';

interface HeaderProps {
  currentPage: 'home' | 'privacy' | 'terms';
  setCurrentPage: (page: 'home' | 'privacy' | 'terms') => void;
  scrollToSection: (sectionId: string) => void;
}

const Header: React.FC<HeaderProps> = ({ currentPage, setCurrentPage, scrollToSection }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isHomePage = currentPage === 'home';
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  
  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const handleNavClick = (sectionId: string) => {
    scrollToSection(sectionId);
    closeMenu();
  };

  const handleLogoClick = () => {
    setCurrentPage('home');
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 100);
  };
  
  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled || !isHomePage ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <button 
          onClick={handleLogoClick}
          className="flex items-center cursor-pointer"
        >
          <img src="/logo.svg" alt="Zorlex AI Logo" className="h-8 w-8 mr-2" />
          <span className={`text-xl font-bold ${
            isScrolled || !isHomePage ? 'text-primary' : 'text-white'
          }`}>Zorlex AI</span>
        </button>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex">
          <ul className="flex space-x-8">
            {navLinks.map((link) => (
              <li key={link.id}>
                <button
                  onClick={() => handleNavClick(link.id)}
                  className={`font-medium transition-colors duration-300 cursor-pointer ${
                    isScrolled || !isHomePage ? 'text-neutral-dark hover:text-primary' : 'text-white hover:text-secondary'
                  }`}
                >
                  {link.label}
                </button>
              </li>
            ))}
          </ul>
        </nav>
        
        {/* Mobile Menu Button */}
        <button
          className={`md:hidden focus:outline-none ${
            isScrolled || !isHomePage ? 'text-primary' : 'text-white'
          }`}
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      
      {/* Mobile Menu */}
      <div 
        className={`fixed top-0 right-0 h-full w-64 bg-white shadow-lg transform transition-transform duration-300 ease-in-out z-50 ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        } md:hidden`}
      >
        <div className="p-4 border-b border-neutral-light">
          <div className="flex items-center justify-between">
            <button 
              onClick={() => { handleLogoClick(); closeMenu(); }} 
              className="flex items-center cursor-pointer"
            >
              <img src="/logo.svg" alt="Zorlex AI Logo" className="h-8 w-8 mr-2" />
              <span className="text-xl font-bold text-primary">Zorlex AI</span>
            </button>
            <button 
              className="text-primary focus:outline-none" 
              onClick={toggleMenu}
              aria-label="Close menu"
            >
              <X size={24} />
            </button>
          </div>
        </div>
        <ul className="flex flex-col p-4 space-y-4">
          {navLinks.map((link) => (
            <li key={link.id}>
              <button
                onClick={() => handleNavClick(link.id)}
                className="block text-neutral-dark hover:text-primary font-medium py-2 w-full text-left"
              >
                {link.label}
              </button>
            </li>
          ))}
        </ul>
      </div>
      
      {/* Overlay when mobile menu is open */}
      {isMenuOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
          onClick={closeMenu}
        />
      )}
    </header>
  );
};

export default Header;