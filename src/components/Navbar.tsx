
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import LanguageSelector from './LanguageSelector';

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
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md py-3' : 'bg-transparent py-5'}`}>
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center">
          <a href="/" className="flex items-center">
            <img 
              alt="Gialoma Life Solutions Logo" 
              src="/lovable-uploads/d3975bb5-3e96-450e-a77f-7fd8af9e04de.png" 
              className="h-24 w-auto mr-3 object-contain" 
            />
          </a>
        </div>

        {/* Desktop Menu */}
        <nav className="hidden md:flex space-x-8">
          <a href="#solutions" className="text-gialoma-lightgold hover:text-gialoma-darkgold transition-colors font-medium">Solutions</a>
          <a href="#services" className="text-gialoma-lightgold hover:text-gialoma-darkgold transition-colors font-medium">Services</a>
          <a href="#about" className="text-gialoma-lightgold hover:text-gialoma-darkgold transition-colors font-medium">About</a>
          <a href="#contact" className="text-gialoma-lightgold hover:text-gialoma-darkgold transition-colors font-medium">Contact</a>
        </nav>

        <div className="flex items-center gap-4">
          {/* Language Selector */}
          <div className="hidden md:block">
            <LanguageSelector />
          </div>
            
          <div className="hidden md:block">
            <Button className="bg-gialoma-gold hover:bg-gialoma-darkgold text-white">
              Get Started
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden text-gialoma-black" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white absolute top-full left-0 right-0 shadow-md">
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
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
              href="#about" 
              className="text-gialoma-lightgold hover:text-gialoma-darkgold transition-colors font-medium py-2" 
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </a>
            <a 
              href="#contact" 
              className="text-gialoma-lightgold hover:text-gialoma-darkgold transition-colors font-medium py-2" 
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </a>
            
            {/* Mobile Language Selector */}
            <div className="py-2">
              <LanguageSelector />
            </div>
            
            <Button className="bg-gialoma-gold hover:bg-gialoma-darkgold text-white w-full">
              Get Started
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
