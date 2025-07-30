
import React, { useEffect } from 'react';
import { ArrowLeft } from 'lucide-react';
import DigitalizationNavbarEn from '../components/DigitalizationNavbar-en';
import Footer from '../components/Footer';

const DigitalizationEn = () => {
  useEffect(() => {
    // Remove any existing Fillout script to avoid conflicts
    const existingScript = document.querySelector('script[src="https://server.fillout.com/embed/v1/"]');
    if (existingScript) {
      existingScript.remove();
    }

    // Load Fillout script
    const script = document.createElement('script');
    script.src = 'https://server.fillout.com/embed/v1/';
    script.async = true;
    script.onload = () => {
      console.log('Fillout script loaded successfully');
    };
    script.onerror = () => {
      console.error('Failed to load Fillout script');
    };
    document.head.appendChild(script);

    // Cleanup function
    return () => {
      const scriptToRemove = document.querySelector('script[src="https://server.fillout.com/embed/v1/"]');
      if (scriptToRemove) {
        scriptToRemove.remove();
      }
    };
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <DigitalizationNavbarEn />
      
      <main className="flex-grow pt-44 md:pt-48 pb-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Back button */}
            <a href="/en" className="inline-flex items-center text-gialoma-gold hover:text-gialoma-darkgold mb-8">
              <ArrowLeft className="mr-2 h-5 w-5" />
              Back to Home
            </a>
            
            <div className="bg-white shadow-xl rounded-xl p-10 md:p-16">
              <div className="text-center mb-12">
                <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gialoma-black">
                  Digitalize Your Business
                </h1>
                <div className="w-24 h-1 bg-gialoma-gold mx-auto mb-8"></div>
                <p className="text-xl text-gray-700 service-description text-justify">
                  Transform your company operations with personalized digital solutions tailored to your needs
                </p>
              </div>
              
              <div className="bg-gradient-to-r from-gialoma-gold/10 to-gialoma-gold/5 p-10 rounded-lg mb-12 border border-gialoma-gold/20">
                <h2 className="text-3xl font-semibold mb-6 text-gialoma-gold">
                  🚀 Digital Maturity and Work-Life Balance Assessment
                </h2>
                <p className="text-lg text-gray-700 mb-6 service-description text-justify">
                  Discover your company's level of digitalization. <strong>Complete this questionnaire</strong> and get a personalized diagnosis about automation opportunities and improvement of your team's work-life balance.
                </p>
                <p className="text-lg text-gray-700 mb-8 service-description text-justify">
                  Our interactive questionnaire will provide you with:
                </p>
                
                <div className="grid md:grid-cols-2 gap-6 mb-8">
                  <div className="flex items-start">
                    <div className="bg-gialoma-gold/20 p-3 rounded-full mr-4 mt-1">
                      <svg className="w-5 h-5 text-gialoma-gold" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div>
                      <strong className="text-lg">Digital Maturity Index</strong>
                      <p className="text-base text-gray-600 feature-text text-justify">Assess your current automation level</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-gialoma-gold/20 p-3 rounded-full mr-4 mt-1">
                      <svg className="w-5 h-5 text-gialoma-gold" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div>
                      <strong className="text-lg">Work-Life Balance Analysis</strong>
                      <p className="text-base text-gray-600 feature-text text-justify">Measure your team's work-life balance</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-gialoma-gold/20 p-3 rounded-full mr-4 mt-1">
                      <svg className="w-5 h-5 text-gialoma-gold" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div>
                      <strong className="text-lg">Personalized Recommendations</strong>
                      <p className="text-base text-gray-600 feature-text text-justify">Get specific strategies for your company</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-gialoma-gold/20 p-3 rounded-full mr-4 mt-1">
                      <svg className="w-5 h-5 text-gialoma-gold" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div>
                      <strong className="text-lg">Estimated ROI</strong>
                      <p className="text-base text-gray-600 feature-text text-justify">Calculate expected return on investment</p>
                    </div>
                  </div>
                </div>

                <div className="mb-8 text-center">
                  <p className="text-xl text-gray-700 mb-2">
                    <strong>Estimated time:</strong> 5-10 minutes
                  </p>
                  <p className="text-xl text-gray-700">
                    <strong>Result:</strong> Detailed report with your score and next steps
                  </p>
                </div>
                
                <div className="flex justify-center">
                  <div 
                    data-fillout-id="quXDk3DgRqus" 
                    data-fillout-embed-type="popup" 
                    data-fillout-button-text="Start Assessment" 
                    data-fillout-dynamic-resize="true"
                    data-fillout-button-color="#C7AE6A" 
                    data-fillout-button-size="large" 
                    data-fillout-inherit-parameters="true"
                    data-fillout-popup-size="large"
                  ></div>
                </div>
              </div>

              {/* Process Steps Section */}
              <div className="border-t border-gray-200 pt-10 mb-12">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
                  <div>
                    <div className="w-20 h-20 bg-gialoma-gold/10 rounded-full flex items-center justify-center mx-auto mb-6">
                      <span className="text-3xl font-bold text-gialoma-gold">1</span>
                    </div>
                    <h4 className="font-semibold text-gialoma-black mb-3 text-lg">Answer the Questions</h4>
                    <p className="text-gialoma-darkgray text-base step-description text-justify">
                      Complete the questionnaire about your current processes and digital objectives
                    </p>
                  </div>
                  
                  <div>
                    <div className="w-20 h-20 bg-gialoma-gold/10 rounded-full flex items-center justify-center mx-auto mb-6">
                      <span className="text-3xl font-bold text-gialoma-gold">2</span>
                    </div>
                    <h4 className="font-semibold text-gialoma-black mb-3 text-lg">Receive Your Analysis</h4>
                    <p className="text-gialoma-darkgray text-base step-description text-justify">
                      Get a detailed report with your current digital maturity level
                    </p>
                  </div>
                  
                  <div>
                    <div className="w-20 h-20 bg-gialoma-gold/10 rounded-full flex items-center justify-center mx-auto mb-6">
                      <span className="text-3xl font-bold text-gialoma-gold">3</span>
                    </div>
                    <h4 className="font-semibold text-gialoma-black mb-3 text-lg">Act According to the Plan</h4>
                    <p className="text-gialoma-darkgray text-base step-description text-justify">
                      Implement the personalized recommendations for your company
                    </p>
                  </div>

                  <div>
                    <div className="w-20 h-20 bg-gialoma-gold/10 rounded-full flex items-center justify-center mx-auto mb-6">
                      <span className="text-3xl font-bold text-gialoma-gold">4</span>
                    </div>
                    <h4 className="font-semibold text-gialoma-black mb-3 text-lg">Start Saving Time and Money</h4>
                    <p className="text-gialoma-darkgray text-base step-description text-justify">
                      Enjoy the benefits of automation in your daily operations
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="space-y-8">
                <h3 className="text-2xl font-semibold text-gialoma-black mb-6">
                  What does our digitalization process include?
                </h3>
                
                <div className="flex items-start">
                  <div className="bg-gialoma-gold/10 p-4 rounded-full mr-6">
                    <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gialoma-gold">
                      <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
                      <polyline points="3.29 7 12 12 20.71 7"></polyline>
                      <line x1="12" y1="22" x2="12" y2="12"></line>
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gialoma-black mb-2">Process Automation</h3>
                    <p className="text-lg text-gray-700 process-text text-justify">We identify repetitive tasks and automate them to save time and reduce errors</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-gialoma-gold/10 p-4 rounded-full mr-6">
                    <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gialoma-gold">
                      <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
                      <line x1="8" y1="21" x2="16" y2="21"></line>
                      <line x1="12" y1="17" x2="12" y2="21"></line>
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gialoma-black mb-2">Custom Software Development</h3>
                    <p className="text-lg text-gray-700 process-text text-justify">We create tailor-made solutions that address your business's specific challenges</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-gialoma-gold/10 p-4 rounded-full mr-6">
                    <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gialoma-gold">
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
                    <h3 className="text-xl font-semibold text-gialoma-black mb-2">AI Virtual Assistants</h3>
                    <p className="text-lg text-gray-700 process-text text-justify">We implement intelligent chatbots that enhance customer experience 24/7</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-gialoma-gold/10 p-4 rounded-full mr-6">
                    <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gialoma-gold">
                      <circle cx="12" cy="12" r="10"></circle>
                      <polyline points="12,6 12,12 16,14"></polyline>
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gialoma-black mb-2">System Integration</h3>
                    <p className="text-lg text-gray-700 process-text text-justify">We connect your existing tools to create a unified digital ecosystem</p>
                  </div>
                </div>
              </div>

              <div className="mt-12 p-8 bg-blue-50 rounded-lg border border-blue-200">
                <h3 className="text-xl font-semibold text-blue-800 mb-3">
                  💡 Did you know...?
                </h3>
                <p className="text-lg text-blue-700 methodology-content text-justify">
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
