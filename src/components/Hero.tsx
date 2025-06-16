
import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-24 md:pt-24">
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <div 
          className="w-full h-full" 
          style={{
            backgroundImage: "url('')",
            backgroundColor: "#1a1a1a"
          }}
        >
          <div className="absolute inset-0 hero-gradient"></div>
        </div>
      </div>
        
      <div className="container mx-auto px-4">
        <div className="max-w-3xl relative">
          {/* Logo as background - desktop version (right side) */}
          <img 
            src="/lovable-uploads/34119c99-f024-4f88-9bf1-13abf64f51c6.png" 
            alt="Gialoma Life Solutions Logo" 
            className="hidden md:block absolute top-1/2 right-[-30%] transform translate-x-1/2 -translate-y-1/2 opacity-10 w-96 h-96 z-0 animate-pulse animate-fade-in object-contain" 
            style={{ animationDelay: "0.6s" }}
          />
          
          {/* Mobile text content with background logo */}
          <div className="relative md:static">
            {/* Logo as background - mobile version (sized to fit text only) */}
            <div className="md:hidden absolute top-0 left-0 right-0 overflow-visible pointer-events-none h-auto z-0">
              <div className="flex justify-center">
                <img 
                  src="/lovable-uploads/34119c99-f024-4f88-9bf1-13abf64f51c6.png" 
                  alt="Gialoma Life Solutions Logo" 
                  className="opacity-10 w-52 h-52 object-contain animate-pulse animate-fade-in -mt-4" 
                  style={{ animationDelay: "0.2s" }}
                />
              </div>
            </div>
            
            <div className="relative w-full z-10">
              <h1 
                className="text-4xl md:text-6xl font-bold mb-6 text-white animate-fade-in" 
                style={{ animationDelay: "0.2s" }}
              >
                <span className="text-gialoma-gold">Technology</span> that frees up your time
              </h1>
              
              <p 
                className="text-xl md:text-2xl mb-8 text-gray-100 animate-fade-in" 
                style={{ animationDelay: "0.4s" }}
              >
                We design and develop innovative technology solutions that streamline your processes and give you back valuable time.
              </p>
              
              <div 
                className="flex flex-col sm:flex-row gap-4 animate-fade-in mt-20 md:mt-8" 
                style={{ animationDelay: "0.6s" }}
              >
                <a href="#solutions">
                  <Button className="bg-gialoma-gold hover:bg-gialoma-darkgold text-black text-lg px-8 py-6 w-full">
                    Our Solutions
                    <ArrowRight className="ml-2" size={18} />
                  </Button>
                </a>
                <a href="#contact">
                  <Button variant="outline" className="border-transparent bg-gialoma-gold hover:bg-gialoma-darkgold text-black text-lg px-8 py-6 w-full">
                    Contact Us
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
