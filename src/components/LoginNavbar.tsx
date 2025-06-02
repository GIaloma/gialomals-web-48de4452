
import React from 'react';
import { Link } from 'react-router-dom';

const LoginNavbar = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-md py-2 md:py-3">
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
      </div>
    </header>
  );
};

export default LoginNavbar;
