
import React from 'react';
import { Phone, Mail, Bot } from 'lucide-react';
import { Link } from 'react-router-dom';

const PolicyFooter = () => {
  const currentYear = new Date().getFullYear();
  
  // Function to handle scrolling to top when clicking footer links
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };
  
  return (
    <footer className="bg-gialoma-black text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8 justify-items-center lg:justify-items-start">
          {/* Company Information */}
          <div className="text-center lg:text-left max-w-xs">
            <h3 className="text-xl font-bold mb-4 text-gialoma-gold">Gialoma Life Solutions</h3>
            <p className="mb-4 text-gray-300">
              Technology that frees up your time. We create innovative solutions to optimize your business operations.
            </p>
          </div>

          {/* Quick Links */}
          <div className="text-center lg:text-left">
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/#about" className="text-gray-300 hover:text-gialoma-gold transition-colors">About</Link>
              </li>
              <li>
                <Link to="/#solutions" className="text-gray-300 hover:text-gialoma-gold transition-colors">Solutions</Link>
              </li>
              <li>
                <Link to="/#services" className="text-gray-300 hover:text-gialoma-gold transition-colors">Services</Link>
              </li>
              <li>
                <Link to="/#team" className="text-gray-300 hover:text-gialoma-gold transition-colors">Team</Link>
              </li>
              <li>
                <Link to="/#testimonials" className="text-gray-300 hover:text-gialoma-gold transition-colors">Clients</Link>
              </li>
              <li>
                <Link to="/#contact" className="text-gray-300 hover:text-gialoma-gold transition-colors">Contacts</Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div className="text-center lg:text-left">
            <h3 className="text-lg font-semibold mb-4">Our Services</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/#services" className="text-gray-300 hover:text-gialoma-gold transition-colors">Process Automation</Link>
              </li>
              <li>
                <Link to="/#services" className="text-gray-300 hover:text-gialoma-gold transition-colors">Web Design & Development</Link>
              </li>
              <li>
                <Link to="/#services" className="text-gray-300 hover:text-gialoma-gold transition-colors">AI Virtual Assistants & Chatbots</Link>
              </li>
              <li>
                <Link to="/#services" className="text-gray-300 hover:text-gialoma-gold transition-colors">Personalized Tech Consulting</Link>
              </li>
              <li>
                <Link to="/#services" className="text-gray-300 hover:text-gialoma-gold transition-colors">Business Optimization & Reporting</Link>
              </li>
              <li>
                <Link to="/#services" className="text-gray-300 hover:text-gialoma-gold transition-colors">Digital Visibility</Link>
              </li>
            </ul>
          </div>

          {/* Contact Information */}
          <div className="text-center lg:text-left max-w-xs">
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <ul className="space-y-3">
              <li className="text-gray-300 flex items-start lg:items-center justify-center lg:justify-start">
                <Phone className="h-5 w-5 text-gialoma-gold mr-2 mt-0.5 lg:mt-0" />
                <div>
                  <p className="font-medium text-gray-200">Call Us / WhatsApp</p>
                  <a href="tel:+34605865631" className="hover:text-gialoma-gold block">+34 605 865 631</a>
                  <a href="tel:+393200708093" className="hover:text-gialoma-gold block">+39 320 070 8093</a>
                </div>
              </li>
              <li className="text-gray-300 flex items-start lg:items-center justify-center lg:justify-start">
                <Mail className="h-5 w-5 text-gialoma-gold mr-2 mt-0.5 lg:mt-0" />
                <div>
                  <p className="font-medium text-gray-200">Email Us</p>
                  <a href="mailto:gialomals@gmail.com" className="hover:text-gialoma-gold">
                    gialomals@gmail.com
                  </a>
                </div>
              </li>
              <li className="text-gray-300 flex items-start lg:items-center justify-center lg:justify-start">
                <Bot className="h-5 w-5 text-gialoma-gold mr-2 mt-0.5 lg:mt-0" />
                <div>
                  <p className="font-medium text-gray-200">Virtual Support</p>
                  <p className="text-sm">Available 24/7</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-gray-800 text-center md:flex md:justify-between md:text-left">
          <p className="text-gray-400">
            © {currentYear} Gialoma Life Solutions. All rights reserved.
          </p>
          <div className="mt-4 md:mt-0">
            <Link 
              to="/privacy-policy" 
              className="text-gray-400 hover:text-gialoma-gold mr-4"
              onClick={scrollToTop}
            >
              Privacy Policy
            </Link>
            <a href="#" className="text-gray-400 hover:text-gialoma-gold mr-4">Terms of Service</a>
            <Link 
              to="/cookie-policy" 
              className="text-gray-400 hover:text-gialoma-gold"
              onClick={scrollToTop}
            >
              Cookie Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default PolicyFooter;
