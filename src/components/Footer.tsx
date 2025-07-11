
import React from 'react';
import { Phone, Mail, Bot } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gialoma-black text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8 justify-items-center lg:justify-items-start">
          {/* Company Information */}
          <div className="text-center lg:text-left max-w-xs">
            <h3 className="text-xl font-bold mb-4 text-gialoma-lightgold-accessible">Gialoma Life Solutions</h3>
            <p className="mb-4 text-gray-200">
              Technology that frees your time. We create innovative solutions to optimize your business operations.
            </p>
          </div>

          {/* Quick Links */}
          <div className="text-center lg:text-left">
            <h3 className="text-lg font-semibold mb-4 text-white">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#about" className="text-gray-200 hover:text-gialoma-lightgold-accessible transition-colors">About</a>
              </li>
              <li>
                <a href="#solutions" className="text-gray-200 hover:text-gialoma-lightgold-accessible transition-colors">Solutions</a>
              </li>
              <li>
                <a href="#services" className="text-gray-200 hover:text-gialoma-lightgold-accessible transition-colors">Services</a>
              </li>
              <li>
                <a href="#team" className="text-gray-200 hover:text-gialoma-lightgold-accessible transition-colors">Team</a>
              </li>
              <li>
                <a href="#testimonials" className="text-gray-200 hover:text-gialoma-lightgold-accessible transition-colors">Clients</a>
              </li>
              <li>
                <a href="#contact" className="text-gray-200 hover:text-gialoma-lightgold-accessible transition-colors">Contact</a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div className="text-center lg:text-left">
            <h3 className="text-lg font-semibold mb-4 text-white">Our Services</h3>
            <ul className="space-y-2">
              <li>
                <a href="#services" className="text-gray-200 hover:text-gialoma-lightgold-accessible transition-colors">Process Automation</a>
              </li>
              <li>
                <a href="#services" className="text-gray-200 hover:text-gialoma-lightgold-accessible transition-colors">Web Design & Development</a>
              </li>
              <li>
                <a href="#services" className="text-gray-200 hover:text-gialoma-lightgold-accessible transition-colors">AI Virtual Assistants & Chatbots</a>
              </li>
              <li>
                <a href="#services" className="text-gray-200 hover:text-gialoma-lightgold-accessible transition-colors">Personalized Tech Consulting</a>
              </li>
              <li>
                <a href="#services" className="text-gray-200 hover:text-gialoma-lightgold-accessible transition-colors">Business Optimization & Reports</a>
              </li>
              <li>
                <a href="#services" className="text-gray-200 hover:text-gialoma-lightgold-accessible transition-colors">Digital Visibility</a>
              </li>
            </ul>
          </div>

          {/* Contact Information */}
          <div className="text-center lg:text-left max-w-xs">
            <h3 className="text-lg font-semibold mb-4 text-white">Contact</h3>
            <ul className="space-y-3">
              <li className="text-gray-200 flex items-start lg:items-center justify-center lg:justify-start">
                <Phone className="h-5 w-5 text-gialoma-lightgold-accessible mr-2 mt-0.5 lg:mt-0" />
                <div>
                  <p className="font-medium text-gray-100">Call / WhatsApp</p>
                  <a href="tel:+34605865631" className="hover:text-gialoma-lightgold-accessible block">+34 605 865 631</a>
                  <a href="tel:+393200708093" className="hover:text-gialoma-lightgold-accessible block">+39 320 070 8093</a>
                </div>
              </li>
              <li className="text-gray-200 flex items-start lg:items-center justify-center lg:justify-start">
                <Mail className="h-5 w-5 text-gialoma-lightgold-accessible mr-2 mt-0.5 lg:mt-0" />
                <div>
                  <p className="font-medium text-gray-100">Email Us</p>
                  <a href="mailto:gialoma@gialoma.com" className="hover:text-gialoma-lightgold-accessible">
                    gialoma@gialoma.com
                  </a>
                </div>
              </li>
              <li className="text-gray-200 flex items-start lg:items-center justify-center lg:justify-start">
                <Bot className="h-5 w-5 text-gialoma-lightgold-accessible mr-2 mt-0.5 lg:mt-0" />
                <div>
                  <p className="font-medium text-gray-100">Virtual Support</p>
                  <p className="text-sm">Available 24/7</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-gray-800 text-center md:flex md:justify-between md:text-left">
          <p className="text-gray-300">
            © {currentYear} Gialoma Life Solutions. All rights reserved.
          </p>
          <div className="mt-4 md:mt-0">
            <Link 
              to="/privacy-policy" 
              className="text-gray-300 hover:text-gialoma-lightgold-accessible mr-4"
              target="_blank"
              rel="noopener noreferrer"
            >
              Privacy Policy
            </Link>
            <Link 
              to="/terms-of-service" 
              className="text-gray-300 hover:text-gialoma-lightgold-accessible mr-4"
              target="_blank"
              rel="noopener noreferrer"
            >
              Terms of Service
            </Link>
            <Link 
              to="/cookie-policy" 
              className="text-gray-300 hover:text-gialoma-lightgold-accessible"
              target="_blank"
              rel="noopener noreferrer"
            >
              Cookie Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
