import React, { useState, useRef } from 'react';

interface ContactFormProps {
  language?: 'en' | 'es';
}

const ContactForm: React.FC<ContactFormProps> = ({ language = 'es' }) => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    subject: '',
    message: '',
    acceptTerms: false
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');
  const [submitError, setSubmitError] = useState('');
  const isProcessingRef = useRef(false);

  const texts = {
    es: {
      title: "Envíanos un Mensaje",
      nameLabel: "Tu Nombre",
      namePlaceholder: "Juanjo Pérez",
      emailLabel: "Correo Electrónico",
      emailPlaceholder: "juan@ejemplo.com",
      subjectLabel: "Asunto",
      subjectPlaceholder: "¿Como Podemos Ayudarte?",
      messageLabel: "Mensaje",
      messagePlaceholder: "Tu Mensaje...",
      termsText: "Confirma que has leído nuestros",
      termsLink: "Términos de Servicio",
      cookiesLink: "Política de cookies",
      privacyLink: "Política de Privacidad",
      submitButton: "Enviar mensaje",
      submitButtonLoading: "Enviando...",
      footerText: "Normalmente respondemos en un plazo de 24 horas durante los días laborales.",
      successMessage: "Mensaje enviado exitosamente. Te responderemos en un plazo de 24 horas durante los días laborales.",
      requiredFields: "Todos los campos marcados con * son obligatorios",
      acceptTermsError: "Debes aceptar nuestros términos de servicio y política de privacidad"
    },
    en: {
      title: "Send us a Message",
      nameLabel: "Your Name",
      namePlaceholder: "John Doe",
      emailLabel: "Email Address",
      emailPlaceholder: "john@example.com",
      subjectLabel: "Subject",
      subjectPlaceholder: "How Can We Help You?",
      messageLabel: "Message",
      messagePlaceholder: "Your Message...",
      termsText: "Confirm that you have read our",
      termsLink: "Terms of Service",
      cookiesLink: "Cookie Policy",
      privacyLink: "Privacy Policy",
      submitButton: "Send message",
      submitButtonLoading: "Sending...",
      footerText: "We normally respond within 24 hours during business days.",
      successMessage: "Message sent successfully. We will respond within 24 hours during business days.",
      requiredFields: "All fields marked with * are required",
      acceptTermsError: "You must accept our terms of service and privacy policy"
    }
  };

  const t = texts[language];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    // Clear messages when user starts typing
    if (submitMessage) setSubmitMessage('');
    if (submitError) setSubmitError('');
  };

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(prev => ({ ...prev, acceptTerms: e.target.checked }));
    if (submitError) setSubmitError('');
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (isProcessingRef.current) return;
    
    // Validate required fields
    if (!formData.fullName || !formData.email || !formData.subject || !formData.message) {
      setSubmitError(t.requiredFields);
      return;
    }

    if (!formData.acceptTerms) {
      setSubmitError(t.acceptTermsError);
      return;
    }

    isProcessingRef.current = true;
    setIsSubmitting(true);
    setSubmitError('');
    setSubmitMessage('');

    try {
      const response = await fetch('/api/contact-form', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          language: language === 'en' ? 'English' : 'Español',
          sourcePage: window.location.pathname
        }),
      });

      const result = await response.json();

      if (response.ok) {
        setSubmitMessage(result.message);
        setFormData({
          fullName: '',
          email: '',
          subject: '',
          message: '',
          acceptTerms: false
        });

        // Track successful submission
        if (typeof window !== 'undefined' && window.gtag) {
          window.gtag('event', 'form_submit', {
            event_category: 'Contact',
            event_label: 'Contact Form Submission',
            value: 1
          });
        }
      } else {
        setSubmitError(result.message || 'Error al enviar el mensaje');
      }
    } catch (error) {
      setSubmitError('Error de conexión. Por favor, inténtalo de nuevo.');
      console.error('Form submission error:', error);
    } finally {
      setIsSubmitting(false);
      setTimeout(() => {
        isProcessingRef.current = false;
      }, 500);
    }
  };

  return (
    <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-sm p-8">
      {/* Title */}
      <h2 className="text-2xl font-bold text-gray-900 mb-8">{t.title}</h2>

      {/* Success Message */}
      {submitMessage && (
        <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg">
          <p className="text-green-800 text-sm">{submitMessage}</p>
        </div>
      )}

      {/* Error Message */}
      {submitError && (
        <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg">
          <p className="text-red-800 text-sm">{submitError}</p>
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Name Field */}
        <div>
          <label htmlFor="fullName" className="block text-sm font-medium text-gray-900 mb-2">
            {t.nameLabel} <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="fullName"
            name="fullName"
            value={formData.fullName}
            onChange={handleInputChange}
            placeholder={t.namePlaceholder}
            disabled={isSubmitting}
            className="w-full px-4 py-3 border border-gray-200 rounded-lg text-gray-900 placeholder-gray-400 focus:ring-2 focus:ring-gialoma-gold focus:border-transparent transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            required
          />
        </div>

        {/* Email Field */}
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-900 mb-2">
            {t.emailLabel} <span className="text-red-500">*</span>
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
              <svg className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
              </svg>
            </div>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder={t.emailPlaceholder}
              disabled={isSubmitting}
              className="w-full pl-12 pr-4 py-3 border border-gray-200 rounded-lg text-gray-900 placeholder-gray-400 focus:ring-2 focus:ring-gialoma-gold focus:border-transparent transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              required
            />
          </div>
        </div>

        {/* Subject Field */}
        <div>
          <label htmlFor="subject" className="block text-sm font-medium text-gray-900 mb-2">
            {t.subjectLabel} <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="subject"
            name="subject"
            value={formData.subject}
            onChange={handleInputChange}
            placeholder={t.subjectPlaceholder}
            disabled={isSubmitting}
            className="w-full px-4 py-3 border border-gray-200 rounded-lg text-gray-900 placeholder-gray-400 focus:ring-2 focus:ring-gialoma-gold focus:border-transparent transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            required
          />
        </div>

        {/* Message Field */}
        <div>
          <label htmlFor="message" className="block text-sm font-medium text-gray-900 mb-2">
            {t.messageLabel} <span className="text-red-500">*</span>
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleInputChange}
            placeholder={t.messagePlaceholder}
            disabled={isSubmitting}
            rows={6}
            className="w-full px-4 py-3 border border-gray-200 rounded-lg text-gray-900 placeholder-gray-400 focus:ring-2 focus:ring-gialoma-gold focus:border-transparent transition-colors resize-none disabled:opacity-50 disabled:cursor-not-allowed"
            required
          />
        </div>

        {/* Terms Checkbox */}
        <div className="flex items-start space-x-3">
          <input
            type="checkbox"
            id="acceptTerms"
            name="acceptTerms"
            checked={formData.acceptTerms}
            onChange={handleCheckboxChange}
            disabled={isSubmitting}
            className="mt-1 h-4 w-4 text-gialoma-gold border-gray-300 rounded focus:ring-gialoma-gold focus:ring-2 disabled:opacity-50 disabled:cursor-not-allowed"
            required
          />
          <label htmlFor="acceptTerms" className="text-sm text-gray-600 leading-relaxed">
            {t.termsText}{' '}
            <a
              href="/terminos-de-servicio"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-800 underline"
            >
              {t.termsLink}
            </a>
            ,{' '}
            <a
              href="/politica-de-cookies"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-800 underline"
            >
              {t.cookiesLink}
            </a>
            {' '}y{' '}
            <a
              href="/politica-de-privacidad"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-800 underline"
            >
              {t.privacyLink}
            </a>{' '}
            <span className="text-red-500">*</span>
          </label>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={isSubmitting || isProcessingRef.current}
          className="w-full bg-gialoma-gold hover:bg-gialoma-darkgold text-white font-medium py-4 px-6 rounded-lg transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isSubmitting ? t.submitButtonLoading : t.submitButton}
        </button>

        {/* Footer Text */}
        <p className="text-center text-sm text-gray-500 mt-4">
          {t.footerText}
        </p>

        {/* Fillout Branding (to maintain visual consistency) */}
        <div className="text-center text-xs text-gray-400 mt-6">
          <p>Never share passwords in contact forms. Report malicious form</p>
          <div className="inline-flex items-center justify-center mt-2 px-3 py-1 bg-gray-100 rounded-full">
            <span className="text-gray-600 font-medium text-xs">Made with ❤️ by Gialoma</span>
          </div>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;