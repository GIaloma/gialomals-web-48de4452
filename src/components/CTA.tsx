import React from 'react';
import { Button } from '@/components/ui/button';
const CTA = () => {
  return <section className="py-16 relative overflow-hidden">
      <div className="absolute inset-0 gold-gradient opacity-90 z-0"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
            Ready to take back your time?
          </h2>
          <p className="text-xl mb-8 text-white/90">
            Let us show you how our technology solutions can transform your business operations and free up your valuable time.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button className="bg-gialoma-black hover:bg-gialoma-darkgray text-white text-lg px-8 py-6">
              Schedule a Demo
            </Button>
            <Button variant="outline" className="border-transparent text-black hover:bg-white/10 text-lg px-8 py-6">
              Contact Sales
            </Button>
          </div>
        </div>
      </div>
    </section>;
};
export default CTA;