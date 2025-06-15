
import React, { useEffect } from 'react';
import { Phone, Mail, Bot, Linkedin, Instagram } from 'lucide-react';

const ContactEs = () => {
  useEffect(() => {
    // Load Fillout script if not already loaded
    if (!document.querySelector('script[src="https://server.fillout.com/embed/v1/"]')) {
      const script = document.createElement('script');
      script.src = 'https://server.fillout.com/embed/v1/';
      script.async = true;
      script.onload = () => {
        console.log('Fillout script loaded successfully for Spanish form');
      };
      script.onerror = () => {
        console.error('Failed to load Fillout script');
      };
      document.body.appendChild(script);
    } else {
      // Trigger reinit if script already exists
      if ((window as any).Fillout && (window as any).Fillout.initializeWidgets) {
        (window as any).Fillout.initializeWidgets();
      }
    }
  }, []);

  return (
    <section id="contactos" className="section-padding bg-white">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-gradient">Contacto</span>
          </h2>
          <p className="text-lg text-gialoma-darkgray max-w-2xl mx-auto">
            ¿Tienes preguntas o estás listo para comenzar tu camino con Gialoma Life Solutions? Contáctanos hoy mismo.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Contact Information Card - Adjusted to match form card height */}
          <div className="bg-gray-50 p-8 rounded-lg transform transition-all duration-300 hover:scale-105 hover:shadow-xl hover:bg-gray-100/80">
            <h3 className="text-2xl font-semibold mb-6 text-gialoma-black">Información de Contacto</h3>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="flex-shrink-0 mr-6">
                  <Phone className="h-8 w-8 text-gialoma-gold" />
                </div>
                <div>
                  <h4 className="font-semibold text-gialoma-black mb-2 text-lg">Llámanos / WhatsApp</h4>
                  <p className="text-gialoma-darkgray text-lg">+34 605 865 631<br/>+39 320 070 8093</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 mr-6">
                  <Mail className="h-8 w-8 text-gialoma-gold" />
                </div>
                <div>
                  <h4 className="font-semibold text-gialoma-black mb-2 text-lg">Envíanos un Email</h4>
                  <p className="text-gialoma-darkgray text-lg">gialoma@gialoma.com</p>
                </div>
              </div>
            </div>

            {/* Social Media Section - Reduced padding */}
            <div className="mt-8 bg-white p-6 rounded-lg shadow-sm">
              <h4 className="font-semibold text-gialoma-black mb-4 text-center text-xl">Conecta con Nuestros Fundadores</h4>
              
              {/* Paloma */}
              <div className="mb-4">
                <h5 className="font-medium text-gialoma-black mb-2 text-lg">Paloma Firgaira - Co-Fundadora y CEO</h5>
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
                <h5 className="font-medium text-gialoma-black mb-2 text-lg">Gianro Compagno - Co-Fundador y CTO</h5>
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

            <div className="mt-6 bg-white p-6 rounded-lg shadow-sm">
              <h4 className="font-semibold text-gialoma-black mb-4 text-center text-xl">Horarios de Atención</h4>
              <div className="space-y-3">
                <div className="flex justify-between text-lg">
                  <span className="text-gialoma-darkgray">Lunes - Viernes:</span>
                  <span className="text-gialoma-black font-medium">9:00 - 18:00 CET</span>
                </div>
                <div className="flex justify-between text-lg text-gray-400">
                  <span>Sábado - Domingo:</span>
                  <span>Cerrado</span>
                </div>
                
                <div className="pt-4 border-t border-gray-200">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 mr-4">
                      <Bot className="h-6 w-6 text-gialoma-gold mt-1" />
                    </div>
                    <div>
                      <h5 className="font-medium text-gialoma-black text-lg mb-2">Soporte Virtual 24/7</h5>
                      <p className="text-gialoma-darkgray text-sm">
                        Nuestro asistente virtual está disponible las 24 horas. 
                        Usa el botón flotante en la esquina inferior derecha.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Form Card */}
          <div className="bg-gray-50 p-8 rounded-lg transform transition-all duration-300 hover:scale-105 hover:shadow-xl hover:bg-gray-100/80">
            <h3 className="text-2xl font-semibold mb-6 text-gialoma-black">Envíanos un Mensaje</h3>
            
            {/* Fillout Spanish Form - Correct ID and height */}
            <div 
              style={{width:'100%', height:'500px'}} 
              data-fillout-id="pw2CQvvBZmus" 
              data-fillout-embed-type="standard" 
              data-fillout-inherit-parameters 
              data-fillout-dynamic-resize
            ></div>
            
            <div className="mt-6 text-center">
              <p className="text-sm text-gialoma-darkgray">
                Normalmente respondemos en un plazo de 24 horas durante los días laborales.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactEs;
