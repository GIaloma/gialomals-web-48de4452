
import React, { useEffect } from 'react';
import { Phone, Mail, Bot, MessageCircle } from 'lucide-react';
import EmbeddedChatAgent from './EmbeddedChatAgent';

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

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="bg-gray-50 p-8 rounded-lg transform transition-all duration-300 hover:scale-105 hover:shadow-xl hover:bg-gray-100/80">
            <h3 className="text-2xl font-semibold mb-6 text-gialoma-black">Send Us a Message</h3>
            
            {/* Fillout English Form */}
            <div 
              style={{width:'100%', height:'500px'}} 
              data-fillout-id="mFkKCM3vryus" 
              data-fillout-embed-type="standard" 
              data-fillout-inherit-parameters 
              data-fillout-dynamic-resize
            ></div>
          </div>

          <div className="space-y-8">
            <div className="transform transition-all duration-300 hover:scale-105 hover:shadow-xl bg-white hover:bg-gray-50/50 p-6 rounded-lg">
              <h3 className="text-2xl font-semibold mb-6 text-gialoma-black">Contact Information</h3>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="flex-shrink-0 mr-4">
                    <Phone className="h-6 w-6 text-gialoma-gold" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gialoma-black mb-1">Call Us / WhatsApp</h4>
                    <p className="text-gialoma-darkgray">+34 605 865 631<br/>+39 320 070 8093</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 mr-4">
                    <Mail className="h-6 w-6 text-gialoma-gold" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gialoma-black mb-1">Email Us</h4>
                    <p className="text-gialoma-darkgray">gialoma@gialoma.com</p>
                  </div>
                </div>
              </div>

              <div className="mt-8 bg-gray-50 p-6 rounded-lg">
                <h4 className="font-semibold text-gialoma-black mb-3 text-center">Business Hours</h4>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-gialoma-darkgray">Monday - Friday:</span>
                    <span className="text-gialoma-black">9:00 - 18:00 CET</span>
                  </div>
                  <div className="flex justify-between text-gray-400">
                    <span>Saturday - Sunday:</span>
                    <span>Closed</span>
                  </div>
                  
                  <div className="pt-3 border-t border-gray-200">
                    <div className="flex items-start">
                      <div className="flex-shrink-0 mr-3">
                        <Bot className="h-5 w-5 text-gialoma-gold mt-1" />
                      </div>
                      <div>
                        <h5 className="font-medium text-gialoma-black">Virtual Support Available 24/7</h5>
                        <p className="text-sm text-gialoma-darkgray">
                          Our virtual assistant and support system is available around the clock to help with your inquiries.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Embedded Chat Agent */}
            <div className="transform transition-all duration-300 hover:scale-105 hover:shadow-xl bg-white hover:bg-gray-50/50 p-6 rounded-lg">
              <div className="flex items-center mb-4">
                <MessageCircle className="h-6 w-6 text-gialoma-gold mr-3" />
                <h3 className="text-2xl font-semibold text-gialoma-black">Live Chat</h3>
              </div>
              <EmbeddedChatAgent language="en" height="400px" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
