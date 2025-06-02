
import React, { useState, useEffect } from 'react';

const DigitalizationNavbarEn = () => {
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
        <a href="/en" className="flex items-center">
          <img 
            alt="Gialoma Life Solutions Logo" 
            src="/lovable-uploads/8935091c-bbeb-4259-b435-bc8ddb03745e.png" 
            className="h-14 md:h-20 w-auto object-contain transition-all duration-300" 
          />
        </a>
      </div>
    </header>
  );
};

export default DigitalizationNavbarEn;
