
import React, { useEffect } from 'react';
import { Phone, Mail, Bot } from 'lucide-react';

const Contact = () => {
  useEffect(() => {
    // Load Fillout script if not already loaded
    if (!document.querySelector('script[src="https://server.fillout.com/embed/v1/"]')) {
      const script = document.createElement('script');
      script.src = 'https://server.fillout.com/embed/v1/';
      script.async = true;
      document.body.appendChild(script);
    }
  }, []);

  return (
    <section id="contact" className="section-padding bg-white">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-gradient">Contacts</span>
          </h2>
          <p className="text-lg text-gialoma-darkgray max-w-2xl mx-auto">
            Have questions or ready to start your journey with Gialoma Life Solutions? Reach out to us today.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Contact Information Card - Now larger */}
          <div className="bg-gray-50 p-10 rounded-lg transform transition-all duration-300 hover:scale-105 hover:shadow-xl hover:bg-gray-100/80">
            <h3 className="text-2xl font-semibold mb-8 text-gialoma-black">Contact Information</h3>
            
            <div className="space-y-8">
              <div className="flex items-start">
                <div className="flex-shrink-0 mr-6">
                  <Phone className="h-8 w-8 text-gialoma-gold" />
                </div>
                <div>
                  <h4 className="font-semibold text-gialoma-black mb-2 text-lg">Call Us / WhatsApp</h4>
                  <p className="text-gialoma-darkgray text-lg">+34 605 865 631<br/>+39 320 070 8093</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 mr-6">
                  <Mail className="h-8 w-8 text-gialoma-gold" />
                </div>
                <div>
                  <h4 className="font-semibold text-gialoma-black mb-2 text-lg">Email Us</h4>
                  <p className="text-gialoma-darkgray text-lg">gialoma@gialoma.com</p>
                </div>
              </div>
            </div>

            <div className="mt-10 bg-white p-8 rounded-lg shadow-sm">
              <h4 className="font-semibold text-gialoma-black mb-4 text-center text-xl">Business Hours</h4>
              <div className="space-y-4">
                <div className="flex justify-between text-lg">
                  <span className="text-gialoma-darkgray">Monday - Friday:</span>
                  <span className="text-gialoma-black font-medium">9:00 - 18:00 CET</span>
                </div>
                <div className="flex justify-between text-lg text-gray-400">
                  <span>Saturday - Sunday:</span>
                  <span>Closed</span>
                </div>
                
                <div className="pt-6 border-t border-gray-200">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 mr-4">
                      <Bot className="h-6 w-6 text-gialoma-gold mt-1" />
                    </div>
                    <div>
                      <h5 className="font-medium text-gialoma-black text-lg mb-2">Virtual Support Available 24/7</h5>
                      <p className="text-gialoma-darkgray">
                        Our virtual voice assistant is available around the clock to help with your inquiries. 
                        Use the floating button in the bottom-right corner of the page.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Form Card - Now smaller */}
          <div className="bg-gray-50 p-8 rounded-lg transform transition-all duration-300 hover:scale-105 hover:shadow-xl hover:bg-gray-100/80">
            <h3 className="text-2xl font-semibold mb-6 text-gialoma-black">Send Us a Message</h3>
            
            {/* Fillout English Form - Reduced height */}
            <div 
              style={{width:'100%', height:'420px'}} 
              data-fillout-id="mFkKCM3vryus" 
              data-fillout-embed-type="standard" 
              data-fillout-inherit-parameters 
              data-fillout-dynamic-resize
            ></div>
            
            <div className="mt-6 text-center">
              <p className="text-sm text-gialoma-darkgray">
                We typically respond within 24 hours during business days.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
