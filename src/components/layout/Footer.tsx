import React from 'react';
import { Link } from 'react-scroll';
import { Link as RouterLink, useLocation } from 'react-router-dom';
import { Linkedin, ArrowUp } from 'lucide-react';
import { navLinks } from '../../data/navLinks';

const Footer: React.FC = () => {
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  return (
    <footer className="bg-primary-dark text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Brand */}
          <div className="flex flex-col">
            <div className="flex items-center mb-4">
              <img src="/logo.svg" alt="Zorlex AI Logo" className="h-8 w-8 mr-2" />
              <span className="text-xl font-bold">Zorlex AI</span>
            </div>
            <p className="text-primary-light mb-6">
              Transforming businesses through intelligent automation and AI-driven solutions.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://www.linkedin.com/in/mitchell-schafer-4972a615b/" 
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary-light hover:text-secondary transition-colors duration-300"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
            </div>
          </div>
          
          {/* Navigation */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-white">Quick Links</h3>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.id}>
                  {isHomePage ? (
                    <Link
                      to={link.id}
                      spy={true}
                      smooth={true}
                      offset={-80}
                      duration={500}
                      className="text-primary-light hover:text-secondary transition-colors duration-300 cursor-pointer"
                    >
                      {link.label}
                    </Link>
                  ) : (
                    <RouterLink
                      to={`/#${link.id}`}
                      className="text-primary-light hover:text-secondary transition-colors duration-300"
                    >
                      {link.label}
                    </RouterLink>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        <hr className="border-primary-light/30 my-8" />
        
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-primary-light text-sm">
            &copy; {new Date().getFullYear()} Zorlex AI. All rights reserved.
          </p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <RouterLink 
              to="/privacy-policy" 
              className="text-primary-light hover:text-secondary text-sm transition-colors duration-300"
            >
              Privacy Policy
            </RouterLink>
            <RouterLink 
              to="/terms-of-service" 
              className="text-primary-light hover:text-secondary text-sm transition-colors duration-300"
            >
              Terms of Service
            </RouterLink>
          </div>
        </div>
      </div>
      
      {/* Back to top button - only show on home page */}
      {isHomePage && (
        <Link
          to="home"
          spy={true}
          smooth={true}
          offset={-80}
          duration={500}
          className="fixed bottom-6 right-6 bg-secondary p-3 rounded-full shadow-lg cursor-pointer hover:bg-secondary-dark transition-colors duration-300"
          aria-label="Back to top"
        >
          <ArrowUp size={20} className="text-white" />
        </Link>
      )}
    </footer>
  );
};

export default Footer;