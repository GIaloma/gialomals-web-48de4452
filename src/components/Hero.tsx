import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
const Hero = () => {
  return <section className="relative min-h-screen flex items-center">
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <div className="w-full h-full bg-cover bg-center" style={{
        backgroundImage: "url('/placeholder.svg')",
        backgroundColor: "#1a1a1a"
      }}>
          <div className="absolute inset-0 hero-gradient"></div>
        </div>
      </div>

      <div className="container mx-auto px-4 z-10 pt-20">
        <div className="max-w-3xl flex items-center relative">
          
          <div className="relative w-full">
            {/* Transparent squared logo as background */}
            <img src="/lovable-uploads/34119c99-f024-4f88-9bf1-13abf64f51c6.png" alt="Gialoma Life Solutions Logo" style={{
            animationDelay: "0.6s"
          }} className="absolute top-1/2 right-0 transform translate-x-1/2 -translate-y-1/2 opacity-10 w-96 h-96 z-0 animate-pulse animate-fade-in object-fill" />
            
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white animate-fade-in relative z-10" style={{
            animationDelay: "0.2s"
          }}>
              <span className="text-gialoma-gold">Technology</span> that frees up your time
            </h1>
            
            <p className="text-xl md:text-2xl mb-8 text-gray-100 animate-fade-in relative z-10" style={{
            animationDelay: "0.4s"
          }}>
              We design and develop innovative technology solutions that streamline your processes and give you back valuable time.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 animate-fade-in relative z-10" style={{
            animationDelay: "0.6s"
          }}>
              <Button className="bg-gialoma-gold hover:bg-gialoma-darkgold text-black text-lg px-8 py-6">
                Our Solutions
                <ArrowRight className="ml-2" size={18} />
              </Button>
              <Button variant="outline" className="bg-gialoma-gold hover:bg-gialoma-darkgold text-black text-lg px-8 py-6">
                Contact Us
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default Hero;