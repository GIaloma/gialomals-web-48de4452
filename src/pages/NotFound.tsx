import React, { useState, useEffect } from 'react';
import { Mail, ArrowLeft } from 'lucide-react';
import Navbar from '../components/Navbar';
import NavbarEs from '../components/Navbar-es';
import Footer from '../components/Footer';

const NotFound = () => {
  const [language, setLanguage] = useState<'es' | 'en'>('es');
  const [showContactForm, setShowContactForm] = useState(false);

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
      agentText: "Puedes hablar con nuestro agente usando el botón de chat que aparece en la esquina inferior derecha de cualquier página, o envíanos un mensaje:",
      sendMessage: "Enviar Mensaje",
      backHome: "Volver al Inicio",
      // Contact form texts
      contactTitle: "Envíanos un Mensaje",
      fullName: "Tu Nombre",
      email: "Correo Electrónico", 
      subject: "Asunto",
      message: "Mensaje",
      send: "Enviar mensaje",
      sending: "Enviando...",
      close: "Cerrar",
      thankYou: "¡Gracias!",
      messageSent: "Tu mensaje ha sido enviado correctamente. Te responderemos lo antes posible.",
      required: "Campo obligatorio"
    },
    en: {
      title: "Page not found!",
      subtitle: "404",
      description: "Sorry, the page you're looking for doesn't exist or has been moved.",
      helpText: "Need help? We're here for you",
      agentText: "You can talk to our agent using the chat button that appears in the bottom right corner of any page, or send us a message:",
      sendMessage: "Send Message",
      backHome: "Back to Home",
      // Contact form texts
      contactTitle: "Send us a Message",
      fullName: "Your Name",
      email: "Email Address",
      subject: "Subject", 
      message: "Message",
      send: "Send message",
      sending: "Sending...",
      close: "Close",
      thankYou: "Thank you!",
      messageSent: "Your message has been sent successfully. We will respond as soon as possible.",
      required: "Required field"
    }
  };

  const text = content[language];
  const homeUrl = language === 'en' ? '/en' : '/es';

  // Simple contact form component
  const ContactForm = () => {
    const [formData, setFormData] = useState({
      name: '',
      email: '',
      subject: '¿Cómo Podemos Ayudarte?',
      message: ''
    });
    const [errors, setErrors] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleInputChange = (field: string, value: string) => {
      setFormData(prev => ({ ...prev, [field]: value }));
      if (errors[field]) {
        setErrors(prev => ({ ...prev, [field]: '' }));
      }
    };

    const validateForm = () => {
      const newErrors = {};
      if (!formData.name.trim()) newErrors.name = text.required;
      if (!formData.email.trim()) newErrors.email = text.required;
      if (!formData.message.trim()) newErrors.message = text.required;
      
      setErrors(newErrors);
      return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = async (e: React.FormEvent) => {
      e.preventDefault();
      if (!validateForm()) return;

      setIsSubmitting(true);
      
      try {
        const response = await fetch('/.netlify/functions/contact-form', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            ...formData,
            source: '404 Page',
            language: language
          }),
        });

        if (!response.ok) {
          throw new Error('Failed to send message');
        }

        setIsSubmitted(true);
      } catch (error) {
        console.error('Error sending message:', error);
        alert('Error al enviar el mensaje. Por favor, inténtalo de nuevo.');
      } finally {
        setIsSubmitting(false);
      }
    };

    if (isSubmitted) {
      return (
        <div className="text-center py-8">
          <h3 className="text-2xl font-bold text-gialoma-gold mb-4">{text.thankYou}</h3>
          <p className="text-gialoma-darkgray mb-6">{text.messageSent}</p>
          <button
            onClick={() => setShowContactForm(false)}
            className="bg-gialoma-gold hover:bg-gialoma-darkgold text-white px-6 py-2 rounded-lg transition-colors duration-200"
          >
            {text.close}
          </button>
        </div>
      );
    }

    return (
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gialoma-black mb-2">
            {text.fullName} *
          </label>
          <input
            type="text"
            value={formData.name}
            onChange={(e) => handleInputChange('name', e.target.value)}
            className={`w-full p-3 border-2 rounded-lg focus:ring-2 focus:ring-gialoma-gold focus:border-transparent ${
              errors.name ? 'border-red-300' : 'border-gray-200'
            }`}
            placeholder=""
          />
          {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
        </div>

        <div>
          <label className="block text-sm font-medium text-gialoma-black mb-2">
            {text.email} *
          </label>
          <input
            type="email"
            value={formData.email}
            onChange={(e) => handleInputChange('email', e.target.value)}
            className={`w-full p-3 border-2 rounded-lg focus:ring-2 focus:ring-gialoma-gold focus:border-transparent ${
              errors.email ? 'border-red-300' : 'border-gray-200'
            }`}
            placeholder="juan@ejemplo.com"
          />
          {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
        </div>

        <div>
          <label className="block text-sm font-medium text-gialoma-black mb-2">
            {text.subject}
          </label>
          <input
            type="text"
            value={formData.subject}
            onChange={(e) => handleInputChange('subject', e.target.value)}
            className="w-full p-3 border-2 border-gray-200 rounded-lg focus:ring-2 focus:ring-gialoma-gold focus:border-transparent"
            placeholder=""
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gialoma-black mb-2">
            {text.message} *
          </label>
          <textarea
            value={formData.message}
            onChange={(e) => handleInputChange('message', e.target.value)}
            rows={4}
            className={`w-full p-3 border-2 rounded-lg focus:ring-2 focus:ring-gialoma-gold focus:border-transparent ${
              errors.message ? 'border-red-300' : 'border-gray-200'
            }`}
            placeholder="Tu Mensaje..."
          />
          {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
        </div>

        <div className="flex gap-4 pt-4">
          <button
            type="submit"
            disabled={isSubmitting}
            className="flex-1 bg-gialoma-gold hover:bg-gialoma-darkgold disabled:bg-gray-300 text-white px-6 py-3 rounded-lg font-medium transition-colors duration-200"
          >
            {isSubmitting ? text.sending : text.send}
          </button>
          <button
            type="button"
            onClick={() => setShowContactForm(false)}
            className="px-6 py-3 border border-gray-300 text-gialoma-darkgray rounded-lg hover:bg-gray-50 transition-colors duration-200"
          >
            {text.close}
          </button>
        </div>
      </form>
    );
  };

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

                {/* Contact Form Modal or Button */}
                {showContactForm ? (
                  <div className="bg-white rounded-lg p-6 max-w-2xl mx-auto">
                    <h4 className="text-xl font-semibold text-gialoma-black mb-6 text-center">
                      {text.contactTitle}
                    </h4>
                    <ContactForm />
                  </div>
                ) : (
                  <div className="flex justify-center">
                    <button
                      onClick={() => setShowContactForm(true)}
                      className="flex items-center gap-3 bg-gialoma-gold hover:bg-gialoma-darkgold text-white px-8 py-4 rounded-xl font-medium text-lg transition-all duration-200 shadow-md hover:shadow-lg hover:scale-105"
                    >
                      <Mail size={24} />
                      {text.sendMessage}
                    </button>
                  </div>
                )}
              </div>

              {/* Navigation Button - larger */}
              {!showContactForm && (
                <div className="flex justify-center">
                  <a
                    href={homeUrl}
                    className="inline-flex items-center gap-3 text-gialoma-gold hover:text-gialoma-darkgold font-medium text-lg transition-colors duration-200"
                  >
                    <ArrowLeft size={24} />
                    {text.backHome}
                  </a>
                </div>
              )}
            </div>

            {/* Language Toggle - more spaced */}
            {!showContactForm && (
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
            )}
          </div>
        </main>
      </div>

      {/* Footer - exactly same as main pages */}
      <Footer />
    </div>
  );
};

export default NotFound;