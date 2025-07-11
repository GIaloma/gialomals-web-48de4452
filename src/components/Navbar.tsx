
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import LanguageSelector from './LanguageSelector';
import { Link } from 'react-router-dom';

const Navbar = () => {
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
          <a href="https://gialoma.com" className="flex items-center">
            <img 
              alt="Gialoma Life Solutions Logo" 
              src="/lovable-uploads/8935091c-bbeb-4259-b435-bc8ddb03745e.png" 
              className="h-14 md:h-20 w-auto mr-3 object-contain transition-all duration-300" 
            />
          </a>
        </div>

        {/* Desktop Menu */}
        <nav className="hidden md:flex space-x-8">
          <a href="#about" className="text-gialoma-lightgold hover:text-gialoma-darkgold transition-colors font-medium">About</a>
          <a href="#solutions" className="text-gialoma-lightgold hover:text-gialoma-darkgold transition-colors font-medium">Solutions</a>
          <a href="#services" className="text-gialoma-lightgold hover:text-gialoma-darkgold transition-colors font-medium">Services</a>
          <a href="#team" className="text-gialoma-lightgold hover:text-gialoma-darkgold transition-colors font-medium">Team</a>
          <a href="#testimonials" className="text-gialoma-lightgold hover:text-gialoma-darkgold transition-colors font-medium">Clients</a>
          <a href="#contact" className="text-gialoma-lightgold hover:text-gialoma-darkgold transition-colors font-medium">Contacts</a>
        </nav>

        <div className="flex items-center gap-2">
          {/* Desktop Language Selector - compact size */}
          <div className="hidden md:block">
            <LanguageSelector isCompact={true} />
          </div>

          {/* Login Button - Temporarily removed
          <div className="hidden md:block">
            <Link to="/login">
              <Button variant="outline" className="border-gialoma-gold text-gialoma-gold hover:bg-gialoma-gold hover:text-white px-3 py-1 h-9">
                <LogIn size={16} className="mr-1" /> Login
              </Button>
            </Link>
          </div>
          */}
            
          <div className="hidden md:block">
            <a href="#get-started">
              <Button className="bg-gialoma-gold hover:bg-gialoma-darkgold text-white">
                Get Started
              </Button>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-gialoma-gold hover:text-gialoma-darkgold transition-colors" 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-navigation"
            type="button"
          >
            {isMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div 
          className="md:hidden bg-white absolute top-full left-0 right-0 shadow-md"
          id="mobile-navigation"
          role="navigation"
          aria-label="Mobile navigation menu"
        >
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            <a 
              href="#about" 
              className="text-gialoma-lightgold hover:text-gialoma-darkgold transition-colors font-medium py-2" 
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </a>
            <a 
              href="#solutions" 
              className="text-gialoma-lightgold hover:text-gialoma-darkgold transition-colors font-medium py-2" 
              onClick={() => setIsMenuOpen(false)}
            >
              Solutions
            </a>
            <a 
              href="#services" 
              className="text-gialoma-lightgold hover:text-gialoma-darkgold transition-colors font-medium py-2" 
              onClick={() => setIsMenuOpen(false)}
            >
              Services
            </a>
            <a 
              href="#team" 
              className="text-gialoma-lightgold hover:text-gialoma-darkgold transition-colors font-medium py-2" 
              onClick={() => setIsMenuOpen(false)}
            >
              Team
            </a>
            <a 
              href="#testimonials" 
              className="text-gialoma-lightgold hover:text-gialoma-darkgold transition-colors font-medium py-2" 
              onClick={() => setIsMenuOpen(false)}
            >
              Clients
            </a>
            <a 
              href="#contact" 
              className="text-gialoma-lightgold hover:text-gialoma-darkgold transition-colors font-medium py-2" 
              onClick={() => setIsMenuOpen(false)}
            >
              Contacts
            </a>
            
            {/* Mobile Language Selector */}
            <div className="py-2">
              <LanguageSelector isMobile={true} />
            </div>

            {/* Mobile Login Button - Temporarily removed
            <Link 
              to="/login" 
              onClick={() => setIsMenuOpen(false)}
            >
              <Button variant="outline" className="border-gialoma-gold text-gialoma-gold hover:bg-gialoma-gold hover:text-white w-full flex items-center justify-center">
                <LogIn size={18} className="mr-2" /> Login
              </Button>
            </Link>
            */}
            
            <a 
              href="#get-started" 
              onClick={() => setIsMenuOpen(false)}
            >
              <Button className="bg-gialoma-gold hover:bg-gialoma-darkgold text-white w-full">
                Get Started
              </Button>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
