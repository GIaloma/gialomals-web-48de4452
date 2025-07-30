import React, { useState, useEffect } from 'react';
import { Home, MessageCircle, Mail, ArrowLeft } from 'lucide-react';

const NotFound = () => {
  const [language, setLanguage] = useState<'es' | 'en'>('es');

  useEffect(() => {
    // Detect language from URL path, browser language, or default to Spanish
    const path = window.location.pathname;
    const browserLang = navigator.language.slice(0, 2);
    
    if (path.includes('/en') || browserLang === 'en') {
      setLanguage('en');
    } else {
      setLanguage('es');
    }
  }, []);

  const content = {
    es: {
      title: "¡Página no encontrada!",
      subtitle: "404",
      description: "Lo sentimos, la página que buscas no existe o ha sido movida.",
      options: "Puedes hablar con nuestro agente o escribirnos un mensaje:",
      contactAgent: "Hablar con Agente",
      sendMessage: "Enviar Mensaje",
      backHome: "Volver al Inicio",
      or: "o",
      helpText: "¿Necesitas ayuda? Estamos aquí para ti",
      whatsappText: "Hola, llegué a una página 404 en gialoma.com y necesito ayuda para encontrar lo que busco."
    },
    en: {
      title: "Page not found!",
      subtitle: "404",
      description: "Sorry, the page you're looking for doesn't exist or has been moved.",
      options: "You can talk to our agent or send us a message:",
      contactAgent: "Talk to Agent",
      sendMessage: "Send Message",
      backHome: "Back to Home",
      or: "or",
      helpText: "Need help? We're here for you",
      whatsappText: "Hi, I reached a 404 page on gialoma.com and need help finding what I'm looking for."
    }
  };

  const text = content[language];
  const homeUrl = language === 'en' ? '/en' : '/es';
  const contactUrl = language === 'en' ? '/en#contact' : '/es#contact';

  // WhatsApp number - replace with your actual WhatsApp business number
  const whatsappNumber = "+34900000000"; // Update this with your real WhatsApp number
  const whatsappUrl = `https://wa.me/${whatsappNumber.replace(/[^0-9]/g, '')}?text=${encodeURIComponent(text.whatsappText)}`;

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center px-4">
      <div className="max-w-2xl mx-auto text-center">
        {/* Logo/Brand Section */}
        <div className="mb-8">
          <div className="w-24 h-24 bg-gradient-to-br from-gialoma-gold to-gialoma-darkgold rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
            <span className="text-2xl font-bold text-white">GL</span>
          </div>
          <h3 className="text-xl font-semibold text-gialoma-black">Gialoma Life Solutions</h3>
          <p className="text-sm text-gialoma-darkgray">Tecnología que libera tu tiempo</p>
        </div>

        {/* 404 Content */}
        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 mb-8">
          <div className="mb-6">
            <h1 className="text-6xl md:text-8xl font-bold text-gialoma-gold mb-4">
              {text.subtitle}
            </h1>
            <h2 className="text-2xl md:text-3xl font-bold text-gialoma-black mb-4">
              {text.title}
            </h2>
            <p className="text-lg text-gialoma-darkgray mb-8">
              {text.description}
            </p>
          </div>

          {/* Help Section */}
          <div className="bg-gradient-to-r from-gialoma-gold/10 to-gialoma-gold/5 rounded-lg p-6 mb-8 border border-gialoma-gold/20">
            <h3 className="text-lg font-semibold text-gialoma-black mb-2">
              {text.helpText}
            </h3>
            <p className="text-gialoma-darkgray mb-6">
              {text.options}
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-medium transition-colors duration-200 shadow-md hover:shadow-lg"
              >
                <MessageCircle size={20} />
                {text.contactAgent}
              </a>
              
              <span className="text-gialoma-darkgray font-medium">
                {text.or}
              </span>

              <a
                href={contactUrl}
                className="flex items-center gap-2 bg-gialoma-gold hover:bg-gialoma-darkgold text-white px-6 py-3 rounded-lg font-medium transition-colors duration-200 shadow-md hover:shadow-lg"
              >
                <Mail size={20} />
                {text.sendMessage}
              </a>
            </div>
          </div>

          {/* Navigation Button */}
          <div className="flex justify-center">
            <a
              href={homeUrl}
              className="inline-flex items-center gap-2 text-gialoma-gold hover:text-gialoma-darkgold font-medium transition-colors duration-200"
            >
              <ArrowLeft size={20} />
              {text.backHome}
            </a>
          </div>
        </div>

        {/* Language Toggle */}
        <div className="flex justify-center gap-2">
          <button
            onClick={() => setLanguage('es')}
            className={`px-3 py-1 rounded text-sm font-medium transition-colors ${
              language === 'es'
                ? 'bg-gialoma-gold text-white'
                : 'text-gialoma-gold hover:bg-gialoma-gold/10'
            }`}
          >
            Español
          </button>
          <button
            onClick={() => setLanguage('en')}
            className={`px-3 py-1 rounded text-sm font-medium transition-colors ${
              language === 'en'
                ? 'bg-gialoma-gold text-white'
                : 'text-gialoma-gold hover:bg-gialoma-gold/10'
            }`}
          >
            English
          </button>
        </div>
      </div>
    </div>
  );
};

export default NotFound;