
import React from 'react';
import { Phone, Mail, Bot } from 'lucide-react';
import { Link } from 'react-router-dom';

const FooterEs = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gialoma-black text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8 justify-items-center lg:justify-items-start">
          {/* Company Information */}
          <div className="text-center lg:text-left max-w-xs">
            <h3 className="text-xl font-bold mb-4 text-gialoma-gold">Gialoma Life Solutions</h3>
            <p className="mb-4 text-gray-300">
              Tecnología que libera tu tiempo. Creamos soluciones innovadoras para optimizar las operaciones de tu negocio.
            </p>
          </div>

          {/* Quick Links */}
          <div className="text-center lg:text-left">
            <h3 className="text-lg font-semibold mb-4">Enlaces Rápidos</h3>
            <ul className="space-y-2">
              <li>
                <a href="#acerca" className="text-gray-300 hover:text-gialoma-gold transition-colors">Acerca</a>
              </li>
              <li>
                <a href="#soluciones" className="text-gray-300 hover:text-gialoma-gold transition-colors">Soluciones</a>
              </li>
              <li>
                <a href="#servicios" className="text-gray-300 hover:text-gialoma-gold transition-colors">Servicios</a>
              </li>
              <li>
                <a href="#equipo" className="text-gray-300 hover:text-gialoma-gold transition-colors">Equipo</a>
              </li>
              <li>
                <a href="#testimonios" className="text-gray-300 hover:text-gialoma-gold transition-colors">Clientes</a>
              </li>
              <li>
                <a href="#contacto" className="text-gray-300 hover:text-gialoma-gold transition-colors">Contacto</a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div className="text-center lg:text-left">
            <h3 className="text-lg font-semibold mb-4">Nuestros Servicios</h3>
            <ul className="space-y-2">
              <li>
                <a href="#servicios" className="text-gray-300 hover:text-gialoma-gold transition-colors">Automatización de Procesos</a>
              </li>
              <li>
                <a href="#servicios" className="text-gray-300 hover:text-gialoma-gold transition-colors">Diseño y Desarrollo Web</a>
              </li>
              <li>
                <a href="#servicios" className="text-gray-300 hover:text-gialoma-gold transition-colors">Asistentes Virtuales IA y Chatbots</a>
              </li>
              <li>
                <a href="#servicios" className="text-gray-300 hover:text-gialoma-gold transition-colors">Consultoría Tecnológica Personalizada</a>
              </li>
              <li>
                <a href="#servicios" className="text-gray-300 hover:text-gialoma-gold transition-colors">Optimización e Informes de Negocio</a>
              </li>
              <li>
                <a href="#servicios" className="text-gray-300 hover:text-gialoma-gold transition-colors">Visibilidad Digital</a>
              </li>
            </ul>
          </div>

          {/* Contact Information */}
          <div className="text-center lg:text-left max-w-xs">
            <h3 className="text-lg font-semibold mb-4">Contacto</h3>
            <ul className="space-y-3">
              <li className="text-gray-300 flex items-start lg:items-center justify-center lg:justify-start">
                <Phone className="h-5 w-5 text-gialoma-gold mr-2 mt-0.5 lg:mt-0" />
                <div>
                  <p className="font-medium text-gray-200">Llámanos / WhatsApp</p>
                  <a href="tel:+34605865631" className="hover:text-gialoma-gold block">+34 605 865 631</a>
                  <a href="tel:+393200708093" className="hover:text-gialoma-gold block">+39 320 070 8093</a>
                </div>
              </li>
              <li className="text-gray-300 flex items-start lg:items-center justify-center lg:justify-start">
                <Mail className="h-5 w-5 text-gialoma-gold mr-2 mt-0.5 lg:mt-0" />
                <div>
                  <p className="font-medium text-gray-200">Escríbenos</p>
                  <a href="mailto:gialomals@gmail.com" className="hover:text-gialoma-gold">
                    gialomals@gmail.com
                  </a>
                </div>
              </li>
              <li className="text-gray-300 flex items-start lg:items-center justify-center lg:justify-start">
                <Bot className="h-5 w-5 text-gialoma-gold mr-2 mt-0.5 lg:mt-0" />
                <div>
                  <p className="font-medium text-gray-200">Soporte Virtual</p>
                  <p className="text-sm">Disponible 24/7</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-gray-800 text-center md:flex md:justify-between md:text-left">
          <p className="text-gray-400">
            © {currentYear} Gialoma Life Solutions. Todos los derechos reservados.
          </p>
          <div className="mt-4 md:mt-0">
            <Link 
              to="/privacy-policy" 
              className="text-gray-400 hover:text-gialoma-gold mr-4"
              target="_blank"
              rel="noopener noreferrer"
            >
              Política de Privacidad
            </Link>
            <Link 
              to="/terms-of-service" 
              className="text-gray-400 hover:text-gialoma-gold mr-4"
              target="_blank"
              rel="noopener noreferrer"
            >
              Términos de Servicio
            </Link>
            <Link 
              to="/cookie-policy" 
              className="text-gray-400 hover:text-gialoma-gold"
              target="_blank"
              rel="noopener noreferrer"
            >
              Política de Cookies
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterEs;
