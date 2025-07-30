import React, { useState, useEffect } from 'react';
import { Mail, ArrowLeft } from 'lucide-react';
import Navbar from '../components/Navbar';
import NavbarEs from '../components/Navbar-es';
import Footer from '../components/Footer';

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
      helpText: "¿Necesitas ayuda? Estamos aquí para ti",
      agentText: "Puedes hablar con nuestro agente haciendo clic en el botón de chat que aparece en la página principal, o envíanos un mensaje:",
      sendMessage: "Enviar Mensaje",
      backHome: "Volver al Inicio",
      whatsappText: "Hola, llegué a una página 404 en gialoma.com y necesito ayuda para encontrar lo que busco."
    },
    en: {
      title: "Page not found!",
      subtitle: "404",
      description: "Sorry, the page you're looking for doesn't exist or has been moved.",
      helpText: "Need help? We're here for you",
      agentText: "You can talk to our agent by clicking the chat button that appears on the main page, or send us a message:",
      sendMessage: "Send Message",
      backHome: "Back to Home",
      whatsappText: "Hi, I reached a 404 page on gialoma.com and need help finding what I'm looking for."
    }
  };

  const text = content[language];
  const homeUrl = language === 'en' ? '/en' : '/es';
  const contactUrl = language === 'en' ? '/en#contact' : '/es#contact';

  return (
    <div className="min-h-screen flex flex-col">
      {/* Hero section to provide proper navbar background - matching main page structure */}
      <div className="relative min-h-screen bg-gradient-to-br from-gialoma-black via-gray-900 to-gialoma-black">
        {/* Navbar - using exact same components as main pages */}
        {language === 'en' ? <Navbar /> : <NavbarEs />}
        
        {/* Main Content - positioned in the center with extra spacing from navbar */}
        <main className="flex-grow flex items-center justify-center px-4 pt-32 md:pt-40 pb-16">
          <div className="max-w-4xl mx-auto text-center w-full">
            {/* 404 Content - larger and more spacious */}
            <div className="bg-white rounded-2xl shadow-xl p-12 md:p-16 lg:p-20 mb-12">
              <div className="mb-12">
                <h1 className="text-8xl md:text-9xl lg:text-[10rem] font-bold text-gialoma-gold mb-8">
                  {text.subtitle}
                </h1>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gialoma-black mb-8">
                  {text.title}
                </h2>
                <p className="text-xl md:text-2xl text-gialoma-darkgray mb-12 max-w-3xl mx-auto leading-relaxed">
                  {text.description}
                </p>
              </div>

              {/* Help Section - more spacious */}
              <div className="bg-gradient-to-r from-gialoma-gold/10 to-gialoma-gold/5 rounded-xl p-8 md:p-10 mb-12 border border-gialoma-gold/20">
                <h3 className="text-xl md:text-2xl font-semibold text-gialoma-black mb-4">
                  {text.helpText}
                </h3>
                <p className="text-lg md:text-xl text-gialoma-darkgray mb-10 max-w-3xl mx-auto leading-relaxed">
                  {text.agentText}
                </p>

                {/* Action Button - centered and single */}
                <div className="flex justify-center">
                  <a
                    href={contactUrl}
                    className="flex items-center gap-3 bg-gialoma-gold hover:bg-gialoma-darkgold text-white px-8 py-4 rounded-xl font-medium text-lg transition-all duration-200 shadow-md hover:shadow-lg hover:scale-105"
                  >
                    <Mail size={24} />
                    {text.sendMessage}
                  </a>
                </div>
              </div>

              {/* Navigation Button - larger */}
              <div className="flex justify-center">
                <a
                  href={homeUrl}
                  className="inline-flex items-center gap-3 text-gialoma-gold hover:text-gialoma-darkgold font-medium text-lg transition-colors duration-200"
                >
                  <ArrowLeft size={24} />
                  {text.backHome}
                </a>
              </div>
            </div>

            {/* Language Toggle - more spaced */}
            <div className="flex justify-center gap-4">
              <button
                onClick={() => setLanguage('es')}
                className={`px-6 py-3 rounded-lg text-base font-medium transition-all duration-200 ${
                  language === 'es'
                    ? 'bg-gialoma-gold text-white shadow-md'
                    : 'text-white hover:bg-gialoma-gold/20 border border-gialoma-gold'
                }`}
              >
                Español
              </button>
              <button
                onClick={() => setLanguage('en')}
                className={`px-6 py-3 rounded-lg text-base font-medium transition-all duration-200 ${
                  language === 'en'
                    ? 'bg-gialoma-gold text-white shadow-md'
                    : 'text-white hover:bg-gialoma-gold/20 border border-gialoma-gold'
                }`}
              >
                English
              </button>
            </div>
          </div>
        </main>
      </div>

      {/* Footer - exactly same as main pages */}
      <Footer />
    </div>
  );
};

export default NotFound;