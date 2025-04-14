
import React from 'react';
import { Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gialoma-black text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Company Information */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-gialoma-gold">Gialoma Life Solutions</h3>
            <p className="mb-4 text-gray-300">
              Technology that frees up your time. We create innovative solutions to optimize your business operations.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-gialoma-gold">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-gialoma-gold">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-gialoma-gold">
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-gialoma-gold">
                <Instagram size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-300 hover:text-gialoma-gold transition-colors">Home</a>
              </li>
              <li>
                <a href="#about" className="text-gray-300 hover:text-gialoma-gold transition-colors">About</a>
              </li>
              <li>
                <a href="#services" className="text-gray-300 hover:text-gialoma-gold transition-colors">Services</a>
              </li>
              <li>
                <a href="#solutions" className="text-gray-300 hover:text-gialoma-gold transition-colors">Solutions</a>
              </li>
              <li>
                <a href="#contact" className="text-gray-300 hover:text-gialoma-gold transition-colors">Contact</a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Our Services</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-300 hover:text-gialoma-gold transition-colors">Digital Transformation</a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-gialoma-gold transition-colors">Custom Software Development</a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-gialoma-gold transition-colors">AI & Automation</a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-gialoma-gold transition-colors">Mobile Solutions</a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-gialoma-gold transition-colors">Cloud Services</a>
              </li>
            </ul>
          </div>

          {/* Contact Information */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <ul className="space-y-2">
              <li className="text-gray-300">
                123 Technology Park, Suite 500<br />
                Innovation City, IC 10001
              </li>
              <li className="text-gray-300">
                <a href="tel:+15551234567" className="hover:text-gialoma-gold">
                  +1 (555) 123-4567
                </a>
              </li>
              <li className="text-gray-300">
                <a href="mailto:info@gialomalife.com" className="hover:text-gialoma-gold">
                  info@gialomalife.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-gray-800 text-center md:flex md:justify-between md:text-left">
          <p className="text-gray-400">
            © {currentYear} Gialoma Life Solutions. All rights reserved.
          </p>
          <div className="mt-4 md:mt-0">
            <a href="#" className="text-gray-400 hover:text-gialoma-gold mr-4">Privacy Policy</a>
            <a href="#" className="text-gray-400 hover:text-gialoma-gold mr-4">Terms of Service</a>
            <a href="#" className="text-gray-400 hover:text-gialoma-gold">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
