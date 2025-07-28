import React, { useState } from 'react';
import { Send, CheckCircle, AlertCircle } from 'lucide-react';

interface ContactFormProps {
  language: 'es' | 'en';
}

interface FormData {
  fullName: string;
  email: string;
  subject: string;
  message: string;
  acceptCookies: boolean;
}

const ContactForm: React.FC<ContactFormProps> = ({ language = 'es' }) => {
  const [formData, setFormData] = useState<FormData>({
    fullName: '',
    email: '',
    subject: '',
    message: '',
    acceptCookies: false
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const texts = {
    es: {
      fullName: 'Tu Nombre',
      email: 'Correo Electrónico',
      subject: 'Asunto',
      message: 'Mensaje',
      acceptCookies: 'Acepto la política de cookies y privacidad',
      submit: 'Enviar mensaje',
      submitting: 'Enviando...',
      success: '¡Mensaje enviado con éxito! Te contactaremos pronto.',
      error: 'Error al enviar el mensaje. Por favor, inténtalo de nuevo.',
      required: 'Este campo es obligatorio',
      emailInvalid: 'Por favor, introduce un email válido',
      cookiesRequired: 'Debes aceptar la política de cookies para continuar',
      placeholders: {
        fullName: 'Juanjo Pérez',
        email: 'juan@ejemplo.com',
        subject: '¿Cómo Podemos Ayudarte?',
        message: 'Tu Mensaje...'
      }
    },
    en: {
      fullName: 'Your Name',
      email: 'Email Address',
      subject: 'Subject',
      message: 'Message',
      acceptCookies: 'I accept the cookies and privacy policy',
      submit: 'Send message',
      submitting: 'Sending...',
      success: 'Message sent successfully! We will contact you soon.',
      error: 'Error sending message. Please try again.',
      required: 'This field is required',
      emailInvalid: 'Please enter a valid email',
      cookiesRequired: 'You must accept the cookies policy to continue',
      placeholders: {
        fullName: 'John Doe',
        email: 'john@example.com',
        subject: 'How Can We Help You?',
        message: 'Your Message...'
      }
    }
  };

  const t = texts[language];

  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    
    if (type === 'checkbox') {
      const checkbox = e.target as HTMLInputElement;
      setFormData(prev => ({
        ...prev,
        [name]: checkbox.checked
      }));
    } else {
      setFormData(prev => ({
        ...prev,
        [name]: value
      }));
    }
  };

  const validateForm = () => {
    if (!formData.fullName.trim()) {
      setErrorMessage(t.required + ' - ' + t.fullName);
      return false;
    }
    if (!formData.email.trim()) {
      setErrorMessage(t.required + ' - ' + t.email);
      return false;
    }
    if (!validateEmail(formData.email)) {
      setErrorMessage(t.emailInvalid);
      return false;
    }
    if (!formData.subject.trim()) {
      setErrorMessage(t.required + ' - ' + t.subject);
      return false;
    }
    if (!formData.message.trim()) {
      setErrorMessage(t.required + ' - ' + t.message);
      return false;
    }
    if (!formData.acceptCookies) {
      setErrorMessage(t.cookiesRequired);
      return false;
    }
    return true;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      setSubmitStatus('error');
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus('idle');
    setErrorMessage('');

    try {
      const response = await fetch('/api/contact-form', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          fullName: formData.fullName.trim(),
          email: formData.email.trim(),
          subject: formData.subject.trim(),
          message: formData.message.trim(),
          language: language === 'es' ? 'Español' : 'English',
          sourcePage: window.location.pathname,
          acceptCookies: formData.acceptCookies
        }),
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const result = await response.json();
      
      if (result.success) {
        setSubmitStatus('success');
        setFormData({
          fullName: '',
          email: '',
          subject: '',
          message: '',
          acceptCookies: false
        });
        
        // Track successful form submission
        if (typeof window.gtag !== 'undefined') {
          window.gtag('event', 'contact_form_submit', {
            'event_category': 'engagement',
            'event_label': language,
            'value': 1
          });
        }
      } else {
        throw new Error(result.error || 'Unknown error');
      }
    } catch (error) {
      console.error('Contact form submission error:', error);
      setSubmitStatus('error');
      setErrorMessage(t.error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Full Name */}
      <div>
        <label htmlFor="fullName" className="block text-sm font-medium text-gialoma-black mb-2">
          {t.fullName} *
        </label>
        <input
          type="text"
          id="fullName"
          name="fullName"
          value={formData.fullName}
          onChange={handleInputChange}
          placeholder={t.placeholders.fullName}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gialoma-gold focus:border-transparent transition-all duration-200 text-gialoma-black"
          required
        />
      </div>

      {/* Email */}
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gialoma-black mb-2">
          {t.email} *
        </label>
        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
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
            placeholder={t.placeholders.email}
            className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gialoma-gold focus:border-transparent transition-all duration-200 text-gialoma-black"
            required
          />
        </div>
      </div>

      {/* Subject */}
      <div>
        <label htmlFor="subject" className="block text-sm font-medium text-gialoma-black mb-2">
          {t.subject} *
        </label>
        <input
          type="text"
          id="subject"
          name="subject"
          value={formData.subject}
          onChange={handleInputChange}
          placeholder={t.placeholders.subject}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gialoma-gold focus:border-transparent transition-all duration-200 text-gialoma-black"
          required
        />
      </div>

      {/* Message */}
      <div>
        <label htmlFor="message" className="block text-sm font-medium text-gialoma-black mb-2">
          {t.message} *
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleInputChange}
          placeholder={t.placeholders.message}
          rows={5}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gialoma-gold focus:border-transparent transition-all duration-200 text-gialoma-black resize-vertical"
          required
        />
      </div>

      {/* Accept Cookies Checkbox */}
      <div className="flex items-start">
        <div className="flex items-center h-5">
          <input
            id="acceptCookies"
            name="acceptCookies"
            type="checkbox"
            checked={formData.acceptCookies}
            onChange={handleInputChange}
            className="w-4 h-4 text-gialoma-gold bg-gray-100 border-gray-300 rounded focus:ring-gialoma-gold focus:ring-2"
            required
          />
        </div>
        <div className="ml-3 text-sm">
          <label htmlFor="acceptCookies" className="text-gialoma-darkgray">
            {language === 'es' ? (
              <>
                Confirma que has leído nuestros{' '}
                <a href="/terminos-de-servicio" className="text-gialoma-gold hover:text-gialoma-darkgold underline">
                  Términos de Servicio
                </a>
                ,{' '}
                <a href="/politica-de-cookies" className="text-gialoma-gold hover:text-gialoma-darkgold underline">
                  Política de cookies
                </a>
                {' '}y{' '}
                <a href="/politica-de-privacidad" className="text-gialoma-gold hover:text-gialoma-darkgold underline">
                  Política de Privacidad
                </a>{' '}*
              </>
            ) : (
              <>
                Confirm that you have read our{' '}
                <a href="/en/terms-of-service" className="text-gialoma-gold hover:text-gialoma-darkgold underline">
                  Terms of Service
                </a>
                ,{' '}
                <a href="/en/cookie-policy" className="text-gialoma-gold hover:text-gialoma-darkgold underline">
                  Cookie Policy
                </a>
                {' '}and{' '}
                <a href="/en/privacy-policy" className="text-gialoma-gold hover:text-gialoma-darkgold underline">
                  Privacy Policy
                </a>{' '}*
              </>
            )}
          </label>
        </div>
      </div>

      {/* Status Messages */}
      {submitStatus === 'success' && (
        <div className="flex items-center p-4 bg-green-50 border border-green-200 rounded-lg">
          <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
          <p className="text-green-700 text-sm">{t.success}</p>
        </div>
      )}

      {submitStatus === 'error' && (
        <div className="flex items-center p-4 bg-red-50 border border-red-200 rounded-lg">
          <AlertCircle className="h-5 w-5 text-red-500 mr-3" />
          <p className="text-red-700 text-sm">{errorMessage || t.error}</p>
        </div>
      )}

      {/* Submit Button */}
      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-gialoma-gold hover:bg-gialoma-darkgold disabled:opacity-50 disabled:cursor-not-allowed text-white font-semibold py-3 px-6 rounded-lg transition-all duration-200 transform hover:scale-105 flex items-center justify-center"
      >
        {isSubmitting ? (
          <>
            <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
            {t.submitting}
          </>
        ) : (
          <>
            <Send className="h-5 w-5 mr-2" />
            {t.submit}
          </>
        )}
      </button>
    </form>
  );
};

export default ContactForm;