
import React, { useState, useEffect } from 'react';

const DigitalizationNavbar = () => {
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
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md py-2 md:py-3' : 'bg-black py-3 md:py-5'}`}>
      <div className="container mx-auto px-4 flex justify-center items-center">
        <a href="/" className="flex items-center">
          <img 
            alt="Gialoma Life Solutions Logo" 
            src="/lovable-uploads/d3975bb5-3e96-450e-a77f-7fd8af9e04de.png" 
            className="h-16 md:h-24 w-auto object-contain transition-all duration-300" 
          />
        </a>
      </div>
    </header>
  );
};

export default DigitalizationNavbar;
