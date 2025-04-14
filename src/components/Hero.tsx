
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
        <div className="max-w-3xl flex items-center">
          
          <div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white animate-fade-in" style={{
            animationDelay: "0.2s"
          }}>
              <span className="text-gialoma-gold">Technology</span> that frees up your time
            </h1>
            
            <p className="text-xl md:text-2xl mb-8 text-gray-100 animate-fade-in" style={{
            animationDelay: "0.4s"
          }}>
              We design and develop innovative technology solutions that streamline your processes and give you back valuable time.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 animate-fade-in" style={{
            animationDelay: "0.6s"
          }}>
              <Button className="bg-gialoma-gold hover:bg-gialoma-darkgold text-black text-lg px-8 py-6">
                Our Solutions
                <ArrowRight className="ml-2" size={18} />
              </Button>
              <Button variant="outline" className="border-white text-white hover:bg-white/10 text-lg px-8 py-6">
                Contact Us
              </Button>
            </div>

            {/* Add transparent squared logo */}
            <div className="mt-8 flex justify-center animate-fade-in" style={{
              animationDelay: "0.8s"
            }}>
              <img 
                src="/lovable-uploads/d3975bb5-3e96-450e-a77f-7fd8af9e04de.png" 
                alt="Gialoma Life Solutions Squared Logo" 
                className="w-24 h-24 object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default Hero;

