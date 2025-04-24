
import React from 'react';
import { ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import DigitalizationNavbar from '../components/DigitalizationNavbar';
import Footer from '../components/Footer';

const Digitalization = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <DigitalizationNavbar />
      
      <main className="flex-grow pt-32 pb-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            {/* Back button */}
            <a href="/" className="inline-flex items-center text-gialoma-gold hover:text-gialoma-darkgold mb-6">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Home
            </a>
            
            <div className="bg-white shadow-xl rounded-xl p-8 md:p-12">
              <div className="text-center mb-10">
                <h1 className="text-3xl md:text-4xl font-bold mb-4 text-gialoma-black">
                  Digitalize Your Business
                </h1>
                <div className="w-20 h-1 bg-gialoma-gold mx-auto mb-6"></div>
                <p className="text-lg text-gray-700">
                  Transform your business operations with custom digital solutions tailored to your needs
                </p>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-lg mb-10">
                <h2 className="text-xl font-semibold mb-4 text-gialoma-black">
                  Coming Soon: Business Digitalization Assessment
                </h2>
                <p className="text-gray-700 mb-4">
                  We're currently building a comprehensive form to better understand your business needs and provide 
                  you with a personalized digitalization strategy.
                </p>
                <p className="text-gray-700 mb-6">
                  In the meantime, please contact us directly so we can begin your digital transformation journey.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button className="bg-gialoma-gold hover:bg-gialoma-darkgold text-white">
                    Contact Us Now
                  </Button>
                  <Button variant="outline" className="border-gialoma-gold text-gialoma-gold hover:bg-gialoma-gold hover:text-white">
                    Learn More About Our Process
                  </Button>
                </div>
              </div>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-gialoma-gold/10 p-3 rounded-full mr-4">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gialoma-gold">
                      <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
                      <polyline points="3.29 7 12 12 20.71 7"></polyline>
                      <line x1="12" y1="22" x2="12" y2="12"></line>
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gialoma-black">Process Automation</h3>
                    <p className="text-gray-700">Identify repetitive tasks and automate them to save time and reduce errors</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-gialoma-gold/10 p-3 rounded-full mr-4">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gialoma-gold">
                      <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
                      <line x1="8" y1="21" x2="16" y2="21"></line>
                      <line x1="12" y1="17" x2="12" y2="21"></line>
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gialoma-black">Custom Software Development</h3>
                    <p className="text-gray-700">Create tailored solutions that address your specific business challenges</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-gialoma-gold/10 p-3 rounded-full mr-4">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gialoma-gold">
                      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gialoma-black">Data Security</h3>
                    <p className="text-gray-700">Implement robust security measures to protect your valuable business data</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Digitalization;
