
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const PolicyNavbar = () => {
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
              src="/lovable-uploads/8935091c-bbeb-4259-b435-bc8ddb03745e.png" 
              className="h-16 md:h-24 w-auto mr-3 object-contain transition-all duration-300" 
            />
          </Link>
        </div>

        {/* No nav items as requested */}
      </div>
    </header>
  );
};

export default PolicyNavbar;
