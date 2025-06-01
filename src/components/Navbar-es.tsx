
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import LanguageSelector from './LanguageSelector';
import { Link } from 'react-router-dom';

const NavbarEs = () => {
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
              alt="Logo de Gialoma Life Solutions" 
              src="/lovable-uploads/4fe10b17-aa26-49e1-a9a2-e516e09ef670.png" 
              className="h-14 md:h-20 w-auto mr-3 object-contain transition-all duration-300" 
            />
          </Link>
        </div>

        {/* Desktop Menu */}
        <nav className="hidden md:flex space-x-8">
          <a href="#acerca" className="text-gialoma-lightgold hover:text-gialoma-darkgold transition-colors font-medium">Acerca</a>
          <a href="#soluciones" className="text-gialoma-lightgold hover:text-gialoma-darkgold transition-colors font-medium">Soluciones</a>
          <a href="#servicios" className="text-gialoma-lightgold hover:text-gialoma-darkgold transition-colors font-medium">Servicios</a>
          <a href="#equipo" className="text-gialoma-lightgold hover:text-gialoma-darkgold transition-colors font-medium">Equipo</a>
          <a href="#testimonios" className="text-gialoma-lightgold hover:text-gialoma-darkgold transition-colors font-medium">Clientes</a>
          <a href="#contactos" className="text-gialoma-lightgold hover:text-gialoma-darkgold transition-colors font-medium">Contactos</a>
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
                <LogIn size={16} className="mr-1" /> Iniciar Sesión
              </Button>
            </Link>
          </div>
          */}
            
          <div className="hidden md:block">
            <a href="#empezar">
              <Button className="bg-gialoma-gold hover:bg-gialoma-darkgold text-white">
                Comenzar
              </Button>
            </a>
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
            <a 
              href="#acerca" 
              className="text-gialoma-lightgold hover:text-gialoma-darkgold transition-colors font-medium py-2" 
              onClick={() => setIsMenuOpen(false)}
            >
              Acerca
            </a>
            <a 
              href="#soluciones" 
              className="text-gialoma-lightgold hover:text-gialoma-darkgold transition-colors font-medium py-2" 
              onClick={() => setIsMenuOpen(false)}
            >
              Soluciones
            </a>
            <a 
              href="#servicios" 
              className="text-gialoma-lightgold hover:text-gialoma-darkgold transition-colors font-medium py-2" 
              onClick={() => setIsMenuOpen(false)}
            >
              Servicios
            </a>
            <a 
              href="#equipo" 
              className="text-gialoma-lightgold hover:text-gialoma-darkgold transition-colors font-medium py-2" 
              onClick={() => setIsMenuOpen(false)}
            >
              Equipo
            </a>
            <a 
              href="#testimonios" 
              className="text-gialoma-lightgold hover:text-gialoma-darkgold transition-colors font-medium py-2" 
              onClick={() => setIsMenuOpen(false)}
            >
              Clientes
            </a>
            <a 
              href="#contactos" 
              className="text-gialoma-lightgold hover:text-gialoma-darkgold transition-colors font-medium py-2" 
              onClick={() => setIsMenuOpen(false)}
            >
              Contactos
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
                <LogIn size={18} className="mr-2" /> Iniciar Sesión
              </Button>
            </Link>
            */}
            
            <a 
              href="#empezar" 
              onClick={() => setIsMenuOpen(false)}
            >
              <Button className="bg-gialoma-gold hover:bg-gialoma-darkgold text-white w-full">
                Comenzar
              </Button>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default NavbarEs;
