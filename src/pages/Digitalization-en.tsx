
import React from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import DigitalizationNavbarEn from '../components/DigitalizationNavbar-en';
import Footer from '../components/Footer';

const DigitalizationEn = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <DigitalizationNavbarEn />
      
      <main className="flex-grow pt-44 md:pt-48 pb-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            {/* Back button */}
            <a href="/en" className="inline-flex items-center text-gialoma-gold hover:text-gialoma-darkgold mb-6">
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
                  Transform your company operations with personalized digital solutions tailored to your needs
                </p>
              </div>
              
              <div className="bg-gradient-to-r from-gialoma-gold/10 to-gialoma-gold/5 p-8 rounded-lg mb-10 border border-gialoma-gold/20">
                <h2 className="text-2xl font-semibold mb-4 text-gialoma-black">
                  🚀 Digital Maturity Assessment
                </h2>
                <p className="text-gray-700 mb-4">
                  Discover your company's level of digitalization and get a personalized diagnosis about automation opportunities and improvement of your team's work-life balance.
                </p>
                <p className="text-gray-700 mb-6">
                  Our interactive questionnaire will provide you with:
                </p>
                
                <div className="grid md:grid-cols-2 gap-4 mb-6">
                  <div className="flex items-start">
                    <div className="bg-gialoma-gold/20 p-2 rounded-full mr-3 mt-1">
                      <svg className="w-4 h-4 text-gialoma-gold" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div>
                      <strong>Digital Maturity Index</strong>
                      <p className="text-sm text-gray-600">Assess your current automation level</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-gialoma-gold/20 p-2 rounded-full mr-3 mt-1">
                      <svg className="w-4 h-4 text-gialoma-gold" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div>
                      <strong>Work-Life Balance Analysis</strong>
                      <p className="text-sm text-gray-600">Measure your team's work-life balance</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-gialoma-gold/20 p-2 rounded-full mr-3 mt-1">
                      <svg className="w-4 h-4 text-gialoma-gold" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div>
                      <strong>Personalized Recommendations</strong>
                      <p className="text-sm text-gray-600">Get specific strategies for your company</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-gialoma-gold/20 p-2 rounded-full mr-3 mt-1">
                      <svg className="w-4 h-4 text-gialoma-gold" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div>
                      <strong>Estimated ROI</strong>
                      <p className="text-sm text-gray-600">Calculate expected return on investment</p>
                    </div>
                  </div>
                </div>
                
                <div className="flex justify-center">
                  <a href="/digital-evaluation">
                    <Button className="bg-gialoma-gold hover:bg-gialoma-darkgold text-white flex items-center gap-2">
                      Start Assessment
                      <ArrowRight className="h-4 w-4" />
                    </Button>
                  </a>
                </div>
              </div>
              
              <div className="space-y-6">
                <h3 className="text-xl font-semibold text-gialoma-black mb-4">
                  What does our digitalization process include?
                </h3>
                
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
                    <p className="text-gray-700">We identify repetitive tasks and automate them to save time and reduce errors</p>
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
                    <p className="text-gray-700">We create tailor-made solutions that address your business's specific challenges</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-gialoma-gold/10 p-3 rounded-full mr-4">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gialoma-gold">
                      <path d="M9 12l2 2 4-4"></path>
                      <path d="M21 12c.552 0 1-.448 1-1s-.448-1-1-1-1 .448-1 1 .448 1 1 1"></path>
                      <path d="M3 12c.552 0 1-.448 1-1s-.448-1-1-1-1 .448-1 1 .448 1 1 1"></path>
                      <path d="M12 21c.552 0 1-.448 1-1s-.448-1-1-1-1 .448-1 1 .448 1 1 1"></path>
                      <path d="M12 3c.552 0 1-.448 1-1s-.448-1-1-1-1 .448-1 1 .448 1 1 1"></path>
                      <path d="m16 16 1.5 1.5"></path>
                      <path d="m6.5 6.5 1.5 1.5"></path>
                      <path d="m16.5 6.5-1.5 1.5"></path>
                      <path d="m6.5 16.5 1.5-1.5"></path>
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gialoma-black">AI Virtual Assistants</h3>
                    <p className="text-gray-700">We implement intelligent chatbots that enhance customer experience 24/7</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-gialoma-gold/10 p-3 rounded-full mr-4">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gialoma-gold">
                      <circle cx="12" cy="12" r="10"></circle>
                      <polyline points="12,6 12,12 16,14"></polyline>
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gialoma-black">System Integration</h3>
                    <p className="text-gray-700">We connect your existing tools to create a unified digital ecosystem</p>
                  </div>
                </div>
              </div>

              <div className="mt-10 p-6 bg-blue-50 rounded-lg border border-blue-200">
                <h3 className="text-lg font-semibold text-blue-800 mb-2">
                  💡 Did you know...?
                </h3>
                <p className="text-blue-700">
                  Companies that implement intelligent automation can reduce operational costs by 25%, 
                  increase productivity by 30%, and improve employee job satisfaction by 40%.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default DigitalizationEn;
