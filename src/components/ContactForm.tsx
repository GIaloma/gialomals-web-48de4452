import React, { useState } from 'react';

interface ContactFormProps {
  language: 'es' | 'en';
}

interface FormData {
  fullName: string;
  email: string;
  subject: string;
  message: string;
  consentToMarketing: boolean;
}

interface FormErrors {
  fullName?: string;
  email?: string;
  subject?: string;
  message?: string;
  consentToMarketing?: string;
}

const ContactForm: React.FC<ContactFormProps> = ({ language }) => {
  const [formData, setFormData] = useState<FormData>({
    fullName: '',
    email: '',
    subject: '',
    message: '',
    consentToMarketing: false,
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const text = {
    es: {
      title: 'Envíanos un Mensaje',
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
      title: 'Send us a Message',
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

  const t = text[language];

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

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
        'Language': language === 'es' ? 'Español' : 'English',
        'Status': 'New',
        'Source Page': window.location.pathname,
        'User Agent': navigator.userAgent,
        'IP Address': '', // This will be empty for privacy
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
          event_label: language,
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
    if (errors[name as keyof FormErrors]) {
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
      <div className="bg-gray-50 p-8 rounded-lg h-full flex flex-col justify-center items-center text-center">
        <div className="text-green-600 text-5xl mb-4">✓</div>
        <h3 className="text-xl font-semibold text-gialoma-darkgray mb-2">
          {t.success}
        </h3>
        <button
          onClick={() => setIsSubmitted(false)}
          className="mt-4 text-gialoma-gold hover:text-gialoma-darkgold underline"
        >
          {language === 'es' ? 'Enviar otro mensaje' : 'Send another message'}
        </button>
      </div>
    );
  }

  return (
    <div className="bg-gray-50 p-8 rounded-lg h-full flex flex-col">
      <h3 className="text-2xl font-bold text-gialoma-darkgray mb-6">
        {t.title}
      </h3>
      
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
            rows={8}
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
        <div className="mt-auto pt-4">
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-gialoma-gold text-white py-4 px-6 rounded-lg font-semibold hover:bg-gialoma-darkgold focus:ring-2 focus:ring-gialoma-gold focus:ring-offset-2 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isSubmitting ? t.submitting : t.submit}
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
