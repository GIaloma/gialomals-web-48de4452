
import React, { useState, useEffect } from 'react';
import { Menu, X, LogIn } from 'lucide-react';
import { Button } from '@/components/ui/button';
import LanguageSelector from './LanguageSelector';
import { Link } from 'react-router-dom';

const PolicyNavbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md py-2 md:py-3' : 'bg-transparent py-3 md:py-5'}`}>
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center">
          <Link to="/" className="flex items-center">
            <img 
              alt="Gialoma Life Solutions Logo" 
              src="/lovable-uploads/d3975bb5-3e96-450e-a77f-7fd8af9e04de.png" 
              className="h-16 md:h-24 w-auto mr-3 object-contain transition-all duration-300" 
            />
          </Link>
        </div>

        {/* Desktop Menu */}
        <nav className="hidden md:flex space-x-8">
          <Link to="/#about" className="text-gialoma-lightgold hover:text-gialoma-darkgold transition-colors font-medium">About</Link>
          <Link to="/#solutions" className="text-gialoma-lightgold hover:text-gialoma-darkgold transition-colors font-medium">Solutions</Link>
          <Link to="/#services" className="text-gialoma-lightgold hover:text-gialoma-darkgold transition-colors font-medium">Services</Link>
          <Link to="/#team" className="text-gialoma-lightgold hover:text-gialoma-darkgold transition-colors font-medium">Team</Link>
          <Link to="/#testimonials" className="text-gialoma-lightgold hover:text-gialoma-darkgold transition-colors font-medium">Clients</Link>
          <Link to="/#contact" className="text-gialoma-lightgold hover:text-gialoma-darkgold transition-colors font-medium">Contacts</Link>
        </nav>

        <div className="flex items-center gap-2">
          {/* Desktop Language Selector - compact size to match login button */}
          <div className="hidden md:block">
            <LanguageSelector isCompact={true} />
          </div>

          {/* Login Button */}
          <div className="hidden md:block">
            <Link to="/login">
              <Button variant="outline" className="border-gialoma-gold text-gialoma-gold hover:bg-gialoma-gold hover:text-white px-3 py-1 h-9">
                <LogIn size={16} className="mr-1" /> Login
              </Button>
            </Link>
          </div>
            
          <div className="hidden md:block">
            <Link to="/#get-started">
              <Button className="bg-gialoma-gold hover:bg-gialoma-darkgold text-white">
                Get Started
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-gialoma-gold hover:text-gialoma-darkgold transition-colors" 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white absolute top-full left-0 right-0 shadow-md">
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            <Link 
              to="/#about" 
              className="text-gialoma-lightgold hover:text-gialoma-darkgold transition-colors font-medium py-2" 
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
            <Link 
              to="/#solutions" 
              className="text-gialoma-lightgold hover:text-gialoma-darkgold transition-colors font-medium py-2" 
              onClick={() => setIsMenuOpen(false)}
            >
              Solutions
            </Link>
            <Link 
              to="/#services" 
              className="text-gialoma-lightgold hover:text-gialoma-darkgold transition-colors font-medium py-2" 
              onClick={() => setIsMenuOpen(false)}
            >
              Services
            </Link>
            <Link 
              to="/#team" 
              className="text-gialoma-lightgold hover:text-gialoma-darkgold transition-colors font-medium py-2" 
              onClick={() => setIsMenuOpen(false)}
            >
              Team
            </Link>
            <Link 
              to="/#testimonials" 
              className="text-gialoma-lightgold hover:text-gialoma-darkgold transition-colors font-medium py-2" 
              onClick={() => setIsMenuOpen(false)}
            >
              Clients
            </Link>
            <Link 
              to="/#contact" 
              className="text-gialoma-lightgold hover:text-gialoma-darkgold transition-colors font-medium py-2" 
              onClick={() => setIsMenuOpen(false)}
            >
              Contacts
            </Link>
            
            {/* Mobile Language Selector */}
            <div className="py-2">
              <LanguageSelector isMobile={true} />
            </div>

            {/* Mobile Login Button */}
            <Link 
              to="/login" 
              onClick={() => setIsMenuOpen(false)}
            >
              <Button variant="outline" className="border-gialoma-gold text-gialoma-gold hover:bg-gialoma-gold hover:text-white w-full flex items-center justify-center">
                <LogIn size={18} className="mr-2" /> Login
              </Button>
            </Link>
            
            <Link 
              to="/#get-started" 
              onClick={() => setIsMenuOpen(false)}
            >
              <Button className="bg-gialoma-gold hover:bg-gialoma-darkgold text-white w-full">
                Get Started
              </Button>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default PolicyNavbar;
