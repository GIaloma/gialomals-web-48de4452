
import React from 'react';
import { Phone, Mail, Bot, Linkedin, Instagram } from 'lucide-react';
import ContactForm from './ContactForm';

const Contact = () => {
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

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-stretch">
          {/* Contact Information Card - Ensure consistent height */}
          <div className="bg-gray-50 p-8 rounded-lg transform transition-all duration-300 hover:scale-105 hover:shadow-xl hover:bg-gray-100/80 flex flex-col">
            <h3 className="text-2xl font-semibold mb-6 text-gialoma-black">Contact Information</h3>
            
            <div className="space-y-7 flex-grow">
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

            {/* Social Media Section */}
            <div className="mt-7 bg-white p-8 rounded-lg shadow-sm">
              <h4 className="font-semibold text-gialoma-black mb-6 text-center text-xl">Connect with Our Founders</h4>
              
              {/* Paloma */}
              <div className="mb-6">
                <h5 className="font-medium text-gialoma-black mb-3 text-lg">Paloma Firgaira - Co-Founder & CEO</h5>
                <div className="flex space-x-4">
                  <a 
                    href="https://www.linkedin.com/in/paloma-firgaira-840b50a3" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center text-gialoma-gold hover:text-gialoma-darkgold transition-colors"
                  >
                    <Linkedin size={20} className="mr-2" />
                    LinkedIn
                  </a>
                  <a 
                    href="https://www.instagram.com/prf.171508/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center text-gialoma-gold hover:text-gialoma-darkgold transition-colors"
                  >
                    <Instagram size={20} className="mr-2" />
                    Instagram
                  </a>
                </div>
              </div>

              {/* Gianro */}
              <div className="mb-4">
                <h5 className="font-medium text-gialoma-black mb-3 text-lg">Gianro Compagno - Co-Founder & CTO</h5>
                <div className="flex space-x-4">
                  <a 
                    href="https://www.linkedin.com/in/giovanni-roberto-compagno-aa7494110" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center text-gialoma-gold hover:text-gialoma-darkgold transition-colors"
                  >
                    <Linkedin size={20} className="mr-2" />
                    LinkedIn
                  </a>
                  <a 
                    href="https://www.instagram.com/gianro89/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center text-gialoma-gold hover:text-gialoma-darkgold transition-colors"
                  >
                    <Instagram size={20} className="mr-2" />
                    Instagram
                  </a>
                </div>
              </div>
            </div>

            <div className="mt-7 bg-white p-8 rounded-lg shadow-sm">
              <h4 className="font-semibold text-gialoma-black mb-6 text-center text-xl">Business Hours</h4>
              <div className="space-y-5">
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
                      <h5 className="font-medium text-gialoma-black text-lg mb-3">Virtual Support 24/7</h5>
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

          {/* Form Card - Matching height with contact info card */}
          <div className="bg-gray-50 p-8 rounded-lg transform transition-all duration-300 hover:scale-105 hover:shadow-xl hover:bg-gray-100/80 flex flex-col">
            <h3 className="text-2xl font-semibold mb-6 text-gialoma-black">Send Us a Message</h3>
            
            {/* Custom Contact Form - Takes up available space */}
            <div className="flex-grow flex flex-col">
              <ContactForm language="en" />
            </div>
            
            <div className="mt-5 text-center">
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