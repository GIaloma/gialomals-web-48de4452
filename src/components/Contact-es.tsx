
import React, { useEffect } from 'react';
import { Phone, Mail, Bot, MessageCircle } from 'lucide-react';

const ContactEs = () => {
  useEffect(() => {
    // Load Fillout script if not already loaded
    if (!document.querySelector('script[src="https://server.fillout.com/embed/v1/"]')) {
      const script = document.createElement('script');
      script.src = 'https://server.fillout.com/embed/v1/';
      script.async = true;
      document.body.appendChild(script);
    }

    // Load Botpress v3.0 script if not already loaded
    if (!document.querySelector('script[src="https://cdn.botpress.cloud/webchat/v3.0/inject.js"]')) {
      const botpressScript = document.createElement('script');
      botpressScript.src = 'https://cdn.botpress.cloud/webchat/v3.0/inject.js';
      botpressScript.async = true;
      document.head.appendChild(botpressScript);

      // Initialize Botpress after script loads
      botpressScript.onload = () => {
        setTimeout(() => {
          if (window.botpress) {
            window.botpress.on("webchat:ready", () => {
              window.botpress.open();
            });
            
            window.botpress.init({
              "botId": "c828a0c2-b428-4caa-bb15-72e4afb46bcb",
              "configuration": {
                "version": "v1",
                "botName": "Natalia",
                "fabImage": "https://files.bpcontent.cloud/2025/06/07/17/20250607174013-SEVTS4FD.png",
                "website": {
                  "title": "www.gialoma.com",
                  "link": "www.gialoma.com"
                },
                "email": {
                  "title": "gialoma@gialoma.com",
                  "link": "gialoma@gialoma.com"
                },
                "phone": {
                  "title": "+34605865631",
                  "link": "+34605865631"
                },
                "termsOfService": {},
                "privacyPolicy": {},
                "color": "#c7ae6a",
                "variant": "solid",
                "headerVariant": "solid",
                "themeMode": "light",
                "fontFamily": "ibm",
                "radius": 3,
                "feedbackEnabled": false,
                "footer": "[⚡ by Botpress](https://botpress.com/?from=webchat)"
              },
              "clientId": "bbc7acb7-ea94-4bf7-ace4-e0b02df48042",
              "selector": "#webchat-es"
            });
          }
        }, 500);
      };
    }
  }, []);

  return (
    <section id="contactos" className="section-padding bg-white">
      <style>
        {`
          #webchat-es .bpWebchat {
            position: unset;
            width: 100%;
            height: 100%;
            max-height: 100%;
            max-width: 100%;
          }
          #webchat-es .bpFab {
            display: none;
          }
        `}
      </style>
      
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-gradient">Contactos</span>
          </h2>
          <p className="text-lg text-gialoma-darkgray max-w-2xl mx-auto">
            ¿Tienes preguntas o estás listo para comenzar tu viaje con Gialoma Life Solutions? Contáctanos hoy.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="bg-gray-50 p-8 rounded-lg transform transition-all duration-300 hover:scale-105 hover:shadow-xl hover:bg-gray-100/80">
            <h3 className="text-2xl font-semibold mb-6 text-gialoma-black">Envíanos un Mensaje</h3>
            
            {/* Fillout Spanish Form */}
            <div 
              style={{width:'100%', height:'500px'}} 
              data-fillout-id="pw2CQvvBZmus" 
              data-fillout-embed-type="standard" 
              data-fillout-inherit-parameters 
              data-fillout-dynamic-resize
            ></div>
          </div>

          <div className="space-y-8">
            <div className="transform transition-all duration-300 hover:scale-105 hover:shadow-xl bg-white hover:bg-gray-50/50 p-6 rounded-lg">
              <h3 className="text-2xl font-semibold mb-6 text-gialoma-black">Información de Contactos</h3>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="flex-shrink-0 mr-4">
                    <Phone className="h-6 w-6 text-gialoma-gold" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gialoma-black mb-1">Llámanos / WhatsApp</h4>
                    <p className="text-gialoma-darkgray">+34 605 865 631<br/>+39 320 070 8093</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 mr-4">
                    <Mail className="h-6 w-6 text-gialoma-gold" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gialoma-black mb-1">Escríbenos</h4>
                    <p className="text-gialoma-darkgray">gialoma@gialoma.com</p>
                  </div>
                </div>
              </div>

              <div className="mt-8 bg-gray-50 p-6 rounded-lg">
                <h4 className="font-semibold text-gialoma-black mb-3 text-center">Horario de Atención</h4>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-gialoma-darkgray">Lunes - Viernes:</span>
                    <span className="text-gialoma-black">9:00 - 18:00 CET</span>
                  </div>
                  <div className="flex justify-between text-gray-400">
                    <span>Sábado - Domingo:</span>
                    <span>Cerrado</span>
                  </div>
                  
                  <div className="pt-3 border-t border-gray-200">
                    <div className="flex items-start">
                      <div className="flex-shrink-0 mr-3">
                        <Bot className="h-5 w-5 text-gialoma-gold mt-1" />
                      </div>
                      <div>
                        <h5 className="font-medium text-gialoma-black">Soporte Virtual Disponible 24/7</h5>
                        <p className="text-sm text-gialoma-darkgray">
                          Nuestro asistente virtual y sistema de soporte está disponible las 24 horas para ayudarte con tus consultas.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* New Embedded Chat Agent */}
            <div className="transform transition-all duration-300 hover:scale-105 hover:shadow-xl bg-white hover:bg-gray-50/50 p-6 rounded-lg">
              <div className="flex items-center mb-4">
                <MessageCircle className="h-6 w-6 text-gialoma-gold mr-3" />
                <h3 className="text-2xl font-semibold text-gialoma-black">Chat en Vivo</h3>
              </div>
              <div className="border border-gray-200 rounded-lg overflow-hidden bg-white shadow-sm">
                <div id="webchat-es" style={{width: '100%', height: '500px'}}></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactEs;
