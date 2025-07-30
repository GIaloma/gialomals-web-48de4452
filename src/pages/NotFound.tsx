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
      contactTitle: "Envíanos un Mensaje",
      responseTime: "Normalmente respondemos en un plazo de 24 horas durante los días laborales.",
      close: "Cerrar"
    },
    en: {
      title: "Page not found!",
      subtitle: "404",
      description: "Sorry, the page you're looking for doesn't exist or has been moved.",
      helpText: "Need help? We're here for you",
      agentText: "You can talk to our agent using the chat button that appears in the bottom right corner of any page, or send us a message:",
      sendMessage: "Send Message",
      backHome: "Back to Home",
      contactTitle: "Send us a Message",
      responseTime: "We typically respond within 24 hours during business days.",
      close: "Close"
    }
  };

  const text = content[language];
  const homeUrl = language === 'en' ? '/en' : '/es';

  // Full ContactForm component - exactly the same as ContactForm.tsx
  const ContactForm = ({ language: formLanguage }: { language: 'es' | 'en' }) => {
    const [formData, setFormData] = useState({
      fullName: '',
      email: '',
      subject: '',
      message: '',
      consentToMarketing: false,
    });

    const [errors, setErrors] = useState<any>({});
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [submitError, setSubmitError] = useState<string | null>(null);

    const formText = {
      es: {
        fullName: 'Tu Nombre',
        email: 'Correo Electrónico',
        subject: 'Asunto',
        message: 'Mensaje',
        consent: 'Confirma que has leído nuestros:',
        termsOfService: 'Términos de Servicio',
        cookiePolicy: 'Política de cookies',
        privacyPolicy: 'Política de Privacidad',
        submit: 'Enviar mensaje',
        submitting: 'Enviando...',
        success: '¡Mensaje enviado correctamente! Te responderemos pronto.',
        error: 'Error al enviar el mensaje. Por favor, inténtalo de nuevo.',
        required: 'Este campo es obligatorio',
        invalidEmail: 'Por favor, introduce un email válido',
        consentRequired: 'Debes aceptar nuestros términos para continuar',
        placeholders: {
          fullName: 'Tu nombre completo',
          email: 'tu@email.com',
          subject: '¿Cómo Podemos Ayudarte?',
          message: 'Tu Mensaje...'
        }
      },
      en: {
        fullName: 'Your Name',
        email: 'Email Address',
        subject: 'Subject',
        message: 'Message',
        consent: 'Confirm that you have read our:',
        termsOfService: 'Terms of Service',
        cookiePolicy: 'Cookie Policy',
        privacyPolicy: 'Privacy Policy',
        submit: 'Send message',
        submitting: 'Sending...',
        success: 'Message sent successfully! We\'ll get back to you soon.',
        error: 'Error sending message. Please try again.',
        required: 'This field is required',
        invalidEmail: 'Please enter a valid email',
        consentRequired: 'You must accept our terms to continue',
        placeholders: {
          fullName: 'Your full name',
          email: 'your@email.com',
          subject: 'How Can We Help You?',
          message: 'Your Message...'
        }
      }
    };

    const t = formText[formLanguage];

    const validateForm = (): boolean => {
      const newErrors: any = {};

      if (!formData.fullName.trim()) {
        newErrors.fullName = t.required;
      }

      if (!formData.email.trim()) {
        newErrors.email = t.required;
      } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
        newErrors.email = t.invalidEmail;
      }

      if (!formData.subject.trim()) {
        newErrors.subject = t.required;
      }

      if (!formData.message.trim()) {
        newErrors.message = t.required;
      }

      if (!formData.consentToMarketing) {
        newErrors.consentToMarketing = t.consentRequired;
      }

      setErrors(newErrors);
      return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = async (e: React.FormEvent) => {
      e.preventDefault();
      
      if (!validateForm()) {
        return;
      }

      setIsSubmitting(true);
      setSubmitError(null);

      try {
        const submissionData = {
          'Full Name': formData.fullName,
          'Email': formData.email,
          'Subject': formData.subject,
          'Message': formData.message,
          'Submission Date': new Date().toISOString(),
          'Language': formLanguage === 'es' ? 'Español' : 'English',
          'Status': 'New',
          'Source Page': '404 Page',
          'User Agent': navigator.userAgent,
          'IP Address': '',
          'Consent to Marketing': formData.consentToMarketing
        };

        const response = await fetch('/.netlify/functions/contact-form', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(submissionData),
        });

        const result = await response.json();

        if (!response.ok) {
          throw new Error(result.message || 'Error submitting form');
        }

        // Track successful submission
        if (window.gtag) {
          window.gtag('event', 'contact_form_submission', {
            event_category: 'engagement',
            event_label: `404-${formLanguage}`,
            value: 1
          });
        }

        setIsSubmitted(true);
        setFormData({
          fullName: '',
          email: '',
          subject: '',
          message: '',
          consentToMarketing: false,
        });

      } catch (error) {
        console.error('Error submitting form:', error);
        setSubmitError(error instanceof Error ? error.message : t.error);
      } finally {
        setIsSubmitting(false);
      }
    };

    const handleInputChange = (
      e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
      const { name, value } = e.target;
      setFormData(prev => ({ ...prev, [name]: value }));
      
      // Clear error when user starts typing
      if (errors[name]) {
        setErrors(prev => ({ ...prev, [name]: undefined }));
      }
    };

    const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      setFormData(prev => ({ ...prev, consentToMarketing: e.target.checked }));
      
      if (errors.consentToMarketing) {
        setErrors(prev => ({ ...prev, consentToMarketing: undefined }));
      }
    };

    if (isSubmitted) {
      return (
        <div className="h-full flex flex-col justify-center items-center text-center">
          <div className="text-green-600 text-5xl mb-4">✓</div>
          <h3 className="text-xl font-semibold text-gialoma-darkgray mb-2">
            {t.success}
          </h3>
          <button
            onClick={() => setShowContactForm(false)}
            className="mt-4 text-gialoma-gold hover:text-gialoma-darkgold underline"
          >
            {text.close}
          </button>
        </div>
      );
    }

    return (
      <div className="h-full flex flex-col">
        {submitError && (
          <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded mb-4">
            {submitError}
          </div>
        )}

        <form onSubmit={handleSubmit} className="flex-grow flex flex-col space-y-5">
          {/* Full Name */}
          <div>
            <label htmlFor="fullName" className="block text-sm font-medium text-gialoma-darkgray mb-2">
              {t.fullName} *
            </label>
            <input
              type="text"
              id="fullName"
              name="fullName"
              value={formData.fullName}
              onChange={handleInputChange}
              placeholder={t.placeholders.fullName}
              className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-gialoma-gold focus:border-transparent ${
                errors.fullName ? 'border-red-300' : 'border-gray-300'
              }`}
              disabled={isSubmitting}
            />
            {errors.fullName && (
              <p className="mt-1 text-sm text-red-600">{errors.fullName}</p>
            )}
          </div>

          {/* Email */}
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gialoma-darkgray mb-2">
              {t.email} *
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder={t.placeholders.email}
              className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-gialoma-gold focus:border-transparent ${
                errors.email ? 'border-red-300' : 'border-gray-300'
              }`}
              disabled={isSubmitting}
            />
            {errors.email && (
              <p className="mt-1 text-sm text-red-600">{errors.email}</p>
            )}
          </div>

          {/* Subject */}
          <div>
            <label htmlFor="subject" className="block text-sm font-medium text-gialoma-darkgray mb-2">
              {t.subject} *
            </label>
            <input
              type="text"
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleInputChange}
              placeholder={t.placeholders.subject}
              className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-gialoma-gold focus:border-transparent ${
                errors.subject ? 'border-red-300' : 'border-gray-300'
              }`}
              disabled={isSubmitting}
            />
            {errors.subject && (
              <p className="mt-1 text-sm text-red-600">{errors.subject}</p>
            )}
          </div>

          {/* Message */}
          <div className="flex-grow flex flex-col">
            <label htmlFor="message" className="block text-sm font-medium text-gialoma-darkgray mb-2">
              {t.message} *
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              placeholder={t.placeholders.message}
              rows={4}
              className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-gialoma-gold focus:border-transparent flex-grow min-h-[120px] resize-none ${
                errors.message ? 'border-red-300' : 'border-gray-300'
              }`}
              disabled={isSubmitting}
            />
            {errors.message && (
              <p className="mt-1 text-sm text-red-600">{errors.message}</p>
            )}
          </div>

          {/* Consent */}
          <div className="pt-2">
            <label className="flex items-start space-x-3">
              <input
                type="checkbox"
                checked={formData.consentToMarketing}
                onChange={handleCheckboxChange}
                className="mt-1 h-4 w-4 text-gialoma-gold focus:ring-gialoma-gold border-gray-300 rounded"
                disabled={isSubmitting}
              />
              <span className="text-sm text-gialoma-darkgray leading-relaxed">
                {t.consent}<br />
                <a href="/terminos-de-servicio" target="_blank" className="text-gialoma-gold hover:text-gialoma-darkgold underline">
                  {t.termsOfService}
                </a><br />
                <a href="/politica-de-cookies" target="_blank" className="text-gialoma-gold hover:text-gialoma-darkgold underline">
                  {t.cookiePolicy}
                </a><br />
                <a href="/politica-de-privacidad" target="_blank" className="text-gialoma-gold hover:text-gialoma-darkgold underline">
                  {t.privacyPolicy}
                </a> *
              </span>
            </label>
            {errors.consentToMarketing && (
              <p className="mt-1 text-sm text-red-600">{errors.consentToMarketing}</p>
            )}
          </div>

          {/* Submit Button */}
          <div className="flex gap-4 pt-4">
            <button
              type="submit"
              disabled={isSubmitting}
              className="flex-1 bg-gialoma-gold text-white py-4 px-6 rounded-lg font-semibold hover:bg-gialoma-darkgold focus:ring-2 focus:ring-gialoma-gold focus:ring-offset-2 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? t.submitting : t.submit}
            </button>
            <button
              type="button"
              onClick={() => setShowContactForm(false)}
              className="px-6 py-4 border border-gray-300 text-gialoma-darkgray rounded-lg hover:bg-gray-50 transition-colors duration-200"
            >
              {text.close}
            </button>
          </div>
        </form>
      </div>
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
                  <div className="bg-white rounded-lg p-6 max-w-2xl mx-auto text-left">
                    <h4 className="text-xl font-semibold text-gialoma-black mb-6 text-center">
                      {text.contactTitle}
                    </h4>
                    <ContactForm language={language} />
                    <div className="mt-5 text-center">
                      <p className="text-sm text-gialoma-darkgray">
                        {text.responseTime}
                      </p>
                    </div>
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