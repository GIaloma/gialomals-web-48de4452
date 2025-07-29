import React, { useState } from 'react';
import { X, ArrowLeft, ArrowRight } from 'lucide-react';

interface FormData {
  // Basic Information
  'Nombre Completo': string;
  'Email': string;
  'Empresa': string;
  'Cargo': string;
  'Teléfono': string;
  
  // Form Questions
  'Cual es el tamaño de tu empresa?': string;
  'En qué sector opera tu empresa?': string;
  'P1 - Procesos Manuales Diarios': string;
  'P2 - Frecuencia de Errores': string;
  'P3 - Herramientas Digitales': string[];
  'P4 - Integración de Herramientas': string;
  'P5 - Horas Automatizables': string;
  'P6 - Tiempo Procesos': string;
  'P7 - Nivel de Estrés': string;
  'P8 - Agotamiento Digital': string;
  'P9 - Procesos Digitalizados': string;
  'P10 - Análisis de Datos': string;
  'P11 - Horas Extra': string;
  'P12 - Desconexión Digital': string;
  'P13 - Áreas Prioritarias': string[];
  'P14 - Tareas Frustrantes': string[];
  'P15 - Objetivos Digitalización': string[];
  'P16 - Presupuesto': string;
  'Accept Cookies': boolean;
}

interface FormErrors {
  [key: string]: string;
}

const DigitalizationForm: React.FC<{
  isOpen: boolean;
  onClose: () => void;
  language?: 'es' | 'en';
}> = ({ isOpen, onClose, language = 'es' }) => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState<FormData>({
    'Nombre Completo': '',
    'Email': '',
    'Empresa': '',
    'Cargo': '',
    'Teléfono': '',
    'Cual es el tamaño de tu empresa?': '',
    'En qué sector opera tu empresa?': '',
    'P1 - Procesos Manuales Diarios': '',
    'P2 - Frecuencia de Errores': '',
    'P3 - Herramientas Digitales': [],
    'P4 - Integración de Herramientas': '',
    'P5 - Horas Automatizables': '',
    'P6 - Tiempo Procesos': '',
    'P7 - Nivel de Estrés': '',
    'P8 - Agotamiento Digital': '',
    'P9 - Procesos Digitalizados': '',
    'P10 - Análisis de Datos': '',
    'P11 - Horas Extra': '',
    'P12 - Desconexión Digital': '',
    'P13 - Áreas Prioritarias': [],
    'P14 - Tareas Frustrantes': [],
    'P15 - Objetivos Digitalización': [],
    'P16 - Presupuesto': '',
    'Accept Cookies': false,
  });
  
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const text = {
    es: {
      title: 'Evaluación de Madurez Digital y Bienestar Laboral',
      basicInfo: 'Información Básica',
      fullName: 'Nombre Completo',
      companyName: 'Nombre de tu Empresa',
      position: 'Cargo en la Empresa',
      email: 'Correo Electrónico',
      phone: 'Whatsapp',
      companySize: '¿Cuál es el tamaño de tu empresa?',
      companySizeOptions: [
        '1-5 empleados',
        '6-20 empleados', 
        '21-50 empleados',
        '51-100 empleados',
        '101-250 empleados',
        '251-500 empleados',
        '500+ empleados'
      ],
      sector: '¿En qué sector opera tu empresa?',
      sectorOptions: [
        'Salud',
        'Educación', 
        'Tecnología',
        'Finanzas',
        'Retail/Comercio',
        'Manufactura',
        'Servicios Profesionales',
        'Hostelería y Turismo',
        'Construcción',
        'Logística y Transporte',
        'Marketing y Publicidad',
        'Inmobiliario',
        'Energía',
        'Agricultura',
        'Otros'
      ],
      processesTitle: 'Procesos y Automatización',
      digitalToolsTitle: 'Herramientas Digitales',
      productivityTitle: 'Productividad',
      wellbeingTitle: 'Bienestar Laboral',
      digitalMaturityTitle: 'Madurez Digital',
      workLifeBalanceTitle: 'Balance Trabajo-Vida',
      prioritiesTitle: 'Prioridades',
      objectivesTitle: 'Objetivos',
      next: 'Siguiente',
      previous: 'Anterior',
      submit: 'Finalizar',
      submitComplete: 'Enviando...',
      consentText: 'Confirma que has leído nuestros',
      termsService: 'Términos de Servicio',
      cookiePolicy: 'Política de cookies',
      privacyPolicy: 'Política de Privacidad',
      required: 'Campo obligatorio',
      thankYou: '¡Gracias!',
      submissionComplete: 'El equipo de Gialoma Life Solutions analizará las respuestas y te enviará el resultado de tu',
      evaluationTitle: 'Evaluación de Madurez Digital y Bienestar Laboral',
      asapText: 'al correo electrónico lo antes posible.',
      nextStep: 'El siguiente paso:',
      // Questions
      q1: '¿Cuántos procesos manuales repetitivos realizas tú y tu equipo diariamente?',
      q1Options: ['0-3', '4-7', '8+'],
      q2: '¿Con qué frecuencia se producen errores en los procesos manuales de tu equipo?',
      q2Options: ['Raramente', 'Ocasionalmente', 'Frecuentemente'],
      q3: '¿Qué herramientas digitales utilizáis tú y tu equipo actualmente?',
      q3Options: ['Email/Calendar', 'CRM', 'Project Management', 'Automatización', 'IA', 'ERP', 'Comunicación internacional', 'Gestión documental', 'Otro'],
      q4: '¿Cómo calificarías la integración entre vuestras herramientas digitales?',
      q4Options: ['Fragmentada', 'Parcialmente integrada', 'Totalmente integrada'],
      q5: '¿Cuántas horas al día dedicáis tú y tu equipo a tareas que podrían automatizarse?',
      q5Options: ['1-2', '3-4', '5+'],
      q6: '¿Cuánto tiempo tardáis tú y tu equipo en completar los procesos administrativos más frecuentes?',
      q6Options: ['Minutos', 'Horas', 'Días'],
      q7: '¿Cómo calificarías el nivel de estrés en tu equipo?',
      q7Options: ['Bajo', 'Medio', 'Alto'],
      q8: '¿Qué porcentaje de tus empleados ha reportado agotamiento digital en el último año?',
      q8Options: ['0-10%', '11-25%', '26-50%', '51%+'],
      q9: '¿Qué porcentaje de vuestros procesos están digitalizados?',
      q9Options: ['0-25%', '26-50%', '51-75%', '76-100%'],
      q10: '¿En tu empresa utilizáis análisis de datos para la toma de decisiones?',
      q10Options: ['Nunca', 'Ocasionalmente', 'Regularmente'],
      q11: '¿Con qué frecuencia tú y tu equipo trabajáis horas extra?',
      q11Options: ['Nunca', 'Ocasionalmente', 'Frecuentemente'],
      q12: '¿Tu empresa tiene políticas formales de desconexión digital?',
      q12Options: ['No existen', 'Existen pero no se aplican', 'Existen y se aplican efectivamente'],
      q13: '¿Qué áreas consideras prioritarias para automatizar?',
      q13Options: ['Administración', 'Ventas', 'Marketing', 'Servicio al cliente', 'RRHH', 'Finanzas', 'Logística', 'Producción'],
      q14: '¿Qué tipo de tareas generan mayor frustración en tu equipo?',
      q14Options: ['Entrada manual de datos', 'Generación de informes', 'Comunicación entre departamentos', 'Seguimiento de proyectos', 'Gestión documental'],
      q15: '¿Cuál es vuestro principal objetivo con la digitalización?',
      q15Options: ['Reducir costos', 'Aumentar productividad', 'Mejorar satisfacción laboral', 'Reducir errores', 'Acelerar tiempo de respuesta', 'Mejorar experiencia del cliente'],
      q16: '¿Qué presupuesto anual destináis a transformación digital? (como % de ingresos)',
      q16Options: ['0-2%', '3-5%', '6-10%', '+10%']
    }
  };

  const totalSteps = 6; // Adjusting to match Fillout design (6 main sections)

  const handleInputChange = (field: keyof FormData, value: any) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: '' }));
    }
  };

  const handleCheckboxChange = (field: keyof FormData, option: string, checked: boolean) => {
    const currentArray = formData[field] as string[];
    let newArray: string[];
    
    if (checked) {
      newArray = [...currentArray, option];
    } else {
      newArray = currentArray.filter(item => item !== option);
    }
    
    setFormData(prev => ({ ...prev, [field]: newArray }));
  };

  const validateStep = (step: number): boolean => {
    const newErrors: FormErrors = {};
    
    switch (step) {
      case 1: // Basic Information
        if (!formData['Nombre Completo']) newErrors['Nombre Completo'] = text[language].required;
        if (!formData['Email']) newErrors['Email'] = text[language].required;
        if (!formData['Empresa']) newErrors['Empresa'] = text[language].required;
        if (!formData['Cargo']) newErrors['Cargo'] = text[language].required;
        if (!formData['Cual es el tamaño de tu empresa?']) newErrors['Cual es el tamaño de tu empresa?'] = text[language].required;
        if (!formData['En qué sector opera tu empresa?']) newErrors['En qué sector opera tu empresa?'] = text[language].required;
        break;
      case 2: // Processes and Automation
        if (!formData['P1 - Procesos Manuales Diarios']) newErrors['P1 - Procesos Manuales Diarios'] = text[language].required;
        if (!formData['P2 - Frecuencia de Errores']) newErrors['P2 - Frecuencia de Errores'] = text[language].required;
        break;
      case 3: // Digital Tools + Productivity
        if (formData['P3 - Herramientas Digitales'].length === 0) newErrors['P3 - Herramientas Digitales'] = text[language].required;
        if (!formData['P4 - Integración de Herramientas']) newErrors['P4 - Integración de Herramientas'] = text[language].required;
        if (!formData['P5 - Horas Automatizables']) newErrors['P5 - Horas Automatizables'] = text[language].required;
        if (!formData['P6 - Tiempo Procesos']) newErrors['P6 - Tiempo Procesos'] = text[language].required;
        break;
      case 4: // Wellbeing + Digital Maturity
        if (!formData['P7 - Nivel de Estrés']) newErrors['P7 - Nivel de Estrés'] = text[language].required;
        if (!formData['P8 - Agotamiento Digital']) newErrors['P8 - Agotamiento Digital'] = text[language].required;
        if (!formData['P9 - Procesos Digitalizados']) newErrors['P9 - Procesos Digitalizados'] = text[language].required;
        if (!formData['P10 - Análisis de Datos']) newErrors['P10 - Análisis de Datos'] = text[language].required;
        break;
      case 5: // Work-Life Balance + Priorities
        if (!formData['P11 - Horas Extra']) newErrors['P11 - Horas Extra'] = text[language].required;
        if (!formData['P12 - Desconexión Digital']) newErrors['P12 - Desconexión Digital'] = text[language].required;
        if (formData['P13 - Áreas Prioritarias'].length === 0) newErrors['P13 - Áreas Prioritarias'] = text[language].required;
        if (formData['P14 - Tareas Frustrantes'].length === 0) newErrors['P14 - Tareas Frustrantes'] = text[language].required;
        break;
      case 6: // Objectives + Consent
        if (formData['P15 - Objetivos Digitalización'].length === 0) newErrors['P15 - Objetivos Digitalización'] = text[language].required;
        if (!formData['P16 - Presupuesto']) newErrors['P16 - Presupuesto'] = text[language].required;
        if (!formData['Accept Cookies']) newErrors['Accept Cookies'] = text[language].required;
        break;
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNext = () => {
    if (validateStep(currentStep)) {
      setCurrentStep(prev => Math.min(prev + 1, totalSteps));
    }
  };

  const handlePrevious = () => {
    setCurrentStep(prev => Math.max(prev - 1, 1));
  };

  const handleSubmit = async () => {
    if (!validateStep(currentStep)) return;
    
    setIsSubmitting(true);
    
    try {
      const submissionData = {
        ...formData,
        'P3 - Herramientas Digitales': formData['P3 - Herramientas Digitales'].join(', '),
        'P13 - Áreas Prioritarias': formData['P13 - Áreas Prioritarias'].join(', '),
        'P14 - Tareas Frustrantes': formData['P14 - Tareas Frustrantes'].join(', '),
        'P15 - Objetivos Digitalización': formData['P15 - Objetivos Digitalización'].join(', '),
        'Fecha Evaluación': new Date().toISOString(),
        'ID Evaluación': `eval_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
        language: language
      };

      const response = await fetch('/.netlify/functions/digitalization-form', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(submissionData),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Failed to submit form');
      }

      // Analytics tracking
      if (window.gtag) {
        window.gtag('event', 'form_submission', {
          event_category: 'engagement',
          event_label: 'digitalization_assessment',
          value: 1
        });
      }

      setIsSubmitted(true);
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('Error al enviar el formulario. Por favor, inténtalo de nuevo.');
    } finally {
      setIsSubmitting(false);
    }
  };

  // Progress calculation
  const progress = (currentStep / totalSteps) * 100;

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-[#E8D5B7] w-full max-w-4xl h-[90vh] rounded-lg shadow-2xl flex flex-col relative">
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-gray-600 hover:text-gray-800 z-10"
        >
          <X className="w-6 h-6" />
        </button>

        {/* Header with logo and progress */}
        <div className="p-6 border-b border-gray-300">
          {/* Progress indicators */}
          <div className="flex justify-center mb-6">
            {Array.from({ length: totalSteps }, (_, i) => (
              <div key={i} className="flex items-center">
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center border-2 ${
                    i + 1 === currentStep
                      ? 'bg-[#C7AE6A] border-[#C7AE6A] text-white'
                      : i + 1 < currentStep
                      ? 'bg-[#C7AE6A] border-[#C7AE6A] text-white'
                      : 'bg-white border-gray-300 text-gray-400'
                  }`}
                >
                  {i + 1 < currentStep ? (
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  ) : (
                    <span className="text-sm font-medium">{i + 1}</span>
                  )}
                </div>
                {i < totalSteps - 1 && (
                  <div
                    className={`w-16 h-0.5 ${
                      i + 1 < currentStep ? 'bg-[#C7AE6A]' : 'bg-gray-300'
                    }`}
                  />
                )}
              </div>
            ))}
          </div>

          {/* Logo */}
          <div className="flex justify-center mb-4">
            <div className="flex items-center">
              <div className="w-12 h-12 bg-[#C7AE6A] rounded-full flex items-center justify-center mr-3">
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2L2 7v10c0 5.55 3.84 9.739 9 11 5.16-1.261 9-5.45 9-11V7l-10-5z"/>
                </svg>
              </div>
              <div>
                <div className="text-lg font-semibold text-gray-800">GIALOMA LIFE SOLUTIONS</div>
                <div className="text-sm text-gray-600">TECNOLOGÍA QUE LIBERA TU TIEMPO</div>
              </div>
            </div>
          </div>
        </div>

        {/* Form content */}
        <div className="flex-1 overflow-y-auto p-6">
          {isSubmitted ? (
            <div className="text-center py-16">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">
                {text[language].thankYou}
              </h2>
              <div className="text-lg text-gray-700 mb-2">
                {text[language].nextStep}
              </div>
              <p className="text-gray-600 max-w-md mx-auto">
                {text[language].submissionComplete}{' '}
                <strong>{text[language].evaluationTitle}</strong>{' '}
                {text[language].asapText}
              </p>
            </div>
          ) : (
            <>
              {/* Step content will be rendered here */}
              <div className="min-h-[400px]">
                {/* Step content components will be added in the next phases */}
                <div className="text-center py-16">
                  <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                    Paso {currentStep} de {totalSteps}
                  </h2>
                  <p className="text-gray-600">
                    Contenido del formulario se implementará en las siguientes fases
                  </p>
                </div>
              </div>
            </>
          )}
        </div>

        {/* Footer with navigation */}
        {!isSubmitted && (
          <div className="p-6 border-t border-gray-300 bg-white rounded-b-lg">
            <div className="flex justify-between items-center">
              {currentStep > 1 ? (
                <button
                  onClick={handlePrevious}
                  className="flex items-center px-6 py-3 text-gray-600 hover:text-gray-800 transition-colors"
                >
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  {text[language].previous}
                </button>
              ) : (
                <div></div>
              )}

              {currentStep < totalSteps ? (
                <button
                  onClick={handleNext}
                  className="flex items-center px-8 py-3 bg-[#C7AE6A] text-white rounded-lg hover:bg-[#B5A060] transition-colors font-medium"
                >
                  {text[language].next}
                  <ArrowRight className="w-4 h-4 ml-2" />
                </button>
              ) : (
                <button
                  onClick={handleSubmit}
                  disabled={isSubmitting}
                  className="px-8 py-3 bg-[#C7AE6A] text-white rounded-lg hover:bg-[#B5A060] transition-colors font-medium disabled:opacity-50"
                >
                  {isSubmitting ? text[language].submitComplete : text[language].submit}
                </button>
              )}
            </div>

            {/* Made with credit */}
            <div className="text-center mt-4">
              <span className="text-xs text-gray-400">
                Made with{' '}
                <span className="font-semibold text-gray-600">Gialoma</span>
              </span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default DigitalizationForm;