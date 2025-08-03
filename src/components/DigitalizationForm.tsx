import React, { useState } from 'react';
import { X, ArrowLeft, ArrowRight, CheckCircle } from 'lucide-react';

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
}> = ({ isOpen, onClose }) => {
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

  const totalSteps = 9;

  const companySizeOptions = [
    '1-5 empleados',
    '6-20 empleados', 
    '21-50 empleados',
    '51-100 empleados',
    '101-250 empleados',
    '251-500 empleados',
    '500+ empleados'
  ];

  const sectorOptions = [
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
  ];

  const digitalToolsOptions = [
    'Email/Calendar',
    'CRM',
    'Project Management',
    'Automatización',
    'IA',
    'ERP',
    'Comunicación internacional',
    'Gestión documental',
    'Otro'
  ];

  const priorityAreasOptions = [
    'Automatización de procesos',
    'Mejora en comunicación interna',
    'Gestión de datos y reportes',
    'Atención al cliente',
    'Gestión de inventario',
    'Facturación y contabilidad',
    'Marketing digital',
    'Gestión de proyectos',
    'Recursos humanos',
    'Seguridad digital'
  ];

  const frustratingTasksOptions = [
    'Entrada manual de datos',
    'Generar reportes repetitivos',
    'Gestión de correos',
    'Programación de reuniones',
    'Seguimiento de inventario',
    'Facturación manual',
    'Gestión de documentos',
    'Atención al cliente repetitiva',
    'Procesos de aprobación lentos',
    'Copias de seguridad manuales'
  ];

  const digitalizationObjectivesOptions = [
    'Reducir tiempo en tareas repetitivas',
    'Minimizar errores humanos',
    'Mejorar comunicación entre equipos',
    'Tener mejor control de datos',
    'Acelerar procesos de decisión',
    'Mejorar experiencia del cliente',
    'Reducir costos operativos',
    'Aumentar flexibilidad laboral',
    'Mejorar seguridad de datos',
    'Facilitar trabajo remoto'
  ];

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
    
    // Clear error if we now have selections
    if (newArray.length > 0 && errors[field]) {
      setErrors(prev => ({ ...prev, [field]: '' }));
    }
  };

  const validateStep1 = (): boolean => {
    const newErrors: FormErrors = {};
    
    if (!formData['Nombre Completo']) newErrors['Nombre Completo'] = 'Campo obligatorio';
    if (!formData['Email']) newErrors['Email'] = 'Campo obligatorio';
    if (!formData['Empresa']) newErrors['Empresa'] = 'Campo obligatorio';
    if (!formData['Cargo']) newErrors['Cargo'] = 'Campo obligatorio';
    if (!formData['Cual es el tamaño de tu empresa?']) newErrors['Cual es el tamaño de tu empresa?'] = 'Campo obligatorio';
    if (!formData['En qué sector opera tu empresa?']) newErrors['En qué sector opera tu empresa?'] = 'Campo obligatorio';
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const validateStep2 = (): boolean => {
    const newErrors: FormErrors = {};
    
    if (!formData['P1 - Procesos Manuales Diarios']) newErrors['P1 - Procesos Manuales Diarios'] = 'Campo obligatorio';
    if (!formData['P2 - Frecuencia de Errores']) newErrors['P2 - Frecuencia de Errores'] = 'Campo obligatorio';
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const validateStep3 = (): boolean => {
    const newErrors: FormErrors = {};
    
    if (formData['P3 - Herramientas Digitales'].length === 0) newErrors['P3 - Herramientas Digitales'] = 'Selecciona al menos una herramienta';
    if (!formData['P4 - Integración de Herramientas']) newErrors['P4 - Integración de Herramientas'] = 'Campo obligatorio';
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const validateStep4 = (): boolean => {
    const newErrors: FormErrors = {};
    
    if (!formData['P5 - Horas Automatizables']) newErrors['P5 - Horas Automatizables'] = 'Campo obligatorio';
    if (!formData['P6 - Tiempo Procesos']) newErrors['P6 - Tiempo Procesos'] = 'Campo obligatorio';
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const validateStep5 = (): boolean => {
    const newErrors: FormErrors = {};
    
    if (!formData['P7 - Nivel de Estrés']) newErrors['P7 - Nivel de Estrés'] = 'Campo obligatorio';
    if (!formData['P8 - Agotamiento Digital']) newErrors['P8 - Agotamiento Digital'] = 'Campo obligatorio';
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const validateStep6 = (): boolean => {
    const newErrors: FormErrors = {};
    
    if (!formData['P9 - Procesos Digitalizados']) newErrors['P9 - Procesos Digitalizados'] = 'Campo obligatorio';
    if (!formData['P10 - Análisis de Datos']) newErrors['P10 - Análisis de Datos'] = 'Campo obligatorio';
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const validateStep7 = (): boolean => {
    const newErrors: FormErrors = {};
    
    if (!formData['P11 - Horas Extra']) newErrors['P11 - Horas Extra'] = 'Campo obligatorio';
    if (!formData['P12 - Desconexión Digital']) newErrors['P12 - Desconexión Digital'] = 'Campo obligatorio';
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const validateStep8 = (): boolean => {
    const newErrors: FormErrors = {};
    
    if (formData['P13 - Áreas Prioritarias'].length === 0) newErrors['P13 - Áreas Prioritarias'] = 'Selecciona al menos una área';
    if (formData['P14 - Tareas Frustrantes'].length === 0) newErrors['P14 - Tareas Frustrantes'] = 'Selecciona al menos una tarea';
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const validateStep9 = (): boolean => {
    const newErrors: FormErrors = {};
    
    if (formData['P15 - Objetivos Digitalización'].length === 0) newErrors['P15 - Objetivos Digitalización'] = 'Selecciona al menos un objetivo';
    if (!formData['P16 - Presupuesto']) newErrors['P16 - Presupuesto'] = 'Campo obligatorio';
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNext = () => {
    let canProceed = false;
    
    if (currentStep === 1) {
      canProceed = validateStep1();
    } else if (currentStep === 2) {
      canProceed = validateStep2();
    } else if (currentStep === 3) {
      canProceed = validateStep3();
    } else if (currentStep === 4) {
      canProceed = validateStep4();
    } else if (currentStep === 5) {
      canProceed = validateStep5();
    } else if (currentStep === 6) {
      canProceed = validateStep6();
    } else if (currentStep === 7) {
      canProceed = validateStep7();
    } else if (currentStep === 8) {
      canProceed = validateStep8();
    } else if (currentStep === 9) {
      canProceed = validateStep9();
    }
    
    if (canProceed && currentStep < totalSteps) {
      setCurrentStep(prev => prev + 1);
    }
  };

  const handlePrevious = () => {
    setCurrentStep(prev => Math.max(prev - 1, 1));
  };

  const renderProgressBar = () => (
    <div className="flex items-center justify-center mb-8 overflow-x-auto">
      <div className="flex items-center min-w-max">
        {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((step, index) => (
          <React.Fragment key={step}>
            <div 
              className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium flex-shrink-0
                ${step === currentStep 
                  ? 'bg-[#C7AE6A] text-white' 
                  : step < currentStep 
                    ? 'bg-green-500 text-white'
                    : 'bg-gray-300 text-gray-600'
                }`}
            >
              {step < currentStep ? '✓' : step}
            </div>
            {index < 8 && (
              <div className={`w-12 h-1 ${step < currentStep ? 'bg-green-500' : 'bg-gray-300'}`} />
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
  );

  const renderStep1 = () => (
    <div className="space-y-6">
      {/* Logo y título */}
      <div className="text-center mb-8">
        <div className="flex items-center justify-center mb-4">
          <div className="w-12 h-12 bg-[#C7AE6A] rounded-full flex items-center justify-center mr-3">
            <div className="w-6 h-6 bg-white rounded opacity-80"></div>
          </div>
          <div>
            <div className="text-[#C7AE6A] font-medium text-lg">GIALOMA LIFE SOLUTIONS</div>
            <div className="text-xs text-gray-500 tracking-wider">TECNOLOGÍA QUE LIBERA TU TIEMPO</div>
          </div>
        </div>
      </div>

      <h2 className="text-2xl font-semibold text-center mb-8 text-gray-800">
        Información Básica
      </h2>
      
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Nombre Completo: *
        </label>
        <input
          type="text"
          value={formData['Nombre Completo']}
          onChange={(e) => handleInputChange('Nombre Completo', e.target.value)}
          className={`w-full p-3 border-2 rounded-lg focus:ring-2 focus:ring-[#C7AE6A] focus:border-transparent ${
            errors['Nombre Completo'] ? 'border-red-300' : 'border-gray-200'
          }`}
          placeholder=""
        />
        {errors['Nombre Completo'] && (
          <p className="text-red-500 text-sm mt-1">{errors['Nombre Completo']}</p>
        )}
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Nombre de tu Empresa: *
        </label>
        <input
          type="text"
          value={formData['Empresa']}
          onChange={(e) => handleInputChange('Empresa', e.target.value)}
          className={`w-full p-3 border-2 rounded-lg focus:ring-2 focus:ring-[#C7AE6A] focus:border-transparent ${
            errors['Empresa'] ? 'border-red-300' : 'border-gray-200'
          }`}
          placeholder=""
        />
        {errors['Empresa'] && (
          <p className="text-red-500 text-sm mt-1">{errors['Empresa']}</p>
        )}
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Cargo en la Empresa: *
        </label>
        <input
          type="text"
          value={formData['Cargo']}
          onChange={(e) => handleInputChange('Cargo', e.target.value)}
          className={`w-full p-3 border-2 rounded-lg focus:ring-2 focus:ring-[#C7AE6A] focus:border-transparent ${
            errors['Cargo'] ? 'border-red-300' : 'border-gray-200'
          }`}
          placeholder=""
        />
        {errors['Cargo'] && (
          <p className="text-red-500 text-sm mt-1">{errors['Cargo']}</p>
        )}
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Correo Electrónico: *
        </label>
        <div className="relative">
          <input
            type="email"
            value={formData['Email']}
            onChange={(e) => handleInputChange('Email', e.target.value)}
            className={`w-full p-3 pl-10 border-2 rounded-lg focus:ring-2 focus:ring-[#C7AE6A] focus:border-transparent ${
              errors['Email'] ? 'border-red-300' : 'border-gray-200'
            }`}
            placeholder=""
          />
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <svg className="h-5 w-5 text-gray-400" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
              <path d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 001-1.73l-7-4a2 2 0 00-2 0l-7 4A2 2 0 005 19z"></path>
            </svg>
          </div>
        </div>
        {errors['Email'] && (
          <p className="text-red-500 text-sm mt-1">{errors['Email']}</p>
        )}
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Whatsapp: *
        </label>
        <div className="relative">
          <input
            type="tel"
            value={formData['Teléfono']}
            onChange={(e) => handleInputChange('Teléfono', e.target.value)}
            className="w-full p-3 pl-16 border-2 rounded-lg focus:ring-2 focus:ring-[#C7AE6A] focus:border-transparent border-gray-200"
            placeholder=""
          />
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <div className="flex items-center">
              <span className="text-sm">🇪🇸</span>
              <span className="ml-1 text-sm text-gray-500">+34</span>
            </div>
          </div>
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-4">
          ¿Cuál es el tamaño de tu empresa? *
        </label>
        <div className="space-y-3">
          {companySizeOptions.map((option) => (
            <label key={option} className="flex items-center cursor-pointer p-3 border-2 rounded-lg hover:bg-gray-50 transition-colors">
              <input
                type="radio"
                name="companySize"
                value={option}
                checked={formData['Cual es el tamaño de tu empresa?'] === option}
                onChange={(e) => handleInputChange('Cual es el tamaño de tu empresa?', e.target.value)}
                className="w-4 h-4 text-[#C7AE6A] focus:ring-[#C7AE6A] border-gray-300"
              />
              <span className="ml-3 text-gray-700">{option}</span>
            </label>
          ))}
        </div>
        {errors['Cual es el tamaño de tu empresa?'] && (
          <p className="text-red-500 text-sm mt-1">{errors['Cual es el tamaño de tu empresa?']}</p>
        )}
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-4">
          ¿En qué sector opera tu empresa? *
        </label>
        <div className="grid grid-cols-2 gap-3">
          {sectorOptions.map((option) => (
            <label key={option} className="flex items-center cursor-pointer p-3 border-2 rounded-lg hover:bg-gray-50 transition-colors">
              <input
                type="radio"
                name="sector"
                value={option}
                checked={formData['En qué sector opera tu empresa?'] === option}
                onChange={(e) => handleInputChange('En qué sector opera tu empresa?', e.target.value)}
                className="w-4 h-4 text-[#C7AE6A] focus:ring-[#C7AE6A] border-gray-300"
              />
              <span className="ml-3 text-gray-700">{option}</span>
            </label>
          ))}
        </div>
        {errors['En qué sector opera tu empresa?'] && (
          <p className="text-red-500 text-sm mt-1">{errors['En qué sector opera tu empresa?']}</p>
        )}
      </div>

      <div className="mt-8">
        <label className="flex items-start cursor-pointer">
          <input
            type="checkbox"
            checked={formData['Accept Cookies']}
            onChange={(e) => handleInputChange('Accept Cookies', e.target.checked)}
            className="w-4 h-4 text-[#C7AE6A] focus:ring-[#C7AE6A] border-gray-300 rounded mt-1"
          />
          <span className="ml-3 text-sm text-gray-700">
            Confirma que has leído nuestros{' '}
            <a href="/terms-of-service" className="text-[#C7AE6A] hover:underline">Términos de Servicio</a>,{' '}
            <a href="/cookie-policy" className="text-[#C7AE6A] hover:underline">Política de cookies</a>,{' '}
            <a href="/privacy-policy" className="text-[#C7AE6A] hover:underline">Política de Privacidad</a> *
          </span>
        </label>
        {errors['Accept Cookies'] && (
          <p className="text-red-500 text-sm mt-1">{errors['Accept Cookies']}</p>
        )}
      </div>
    </div>
  );

  const renderStep2 = () => (
    <div className="space-y-6">
      {/* Logo y título */}
      <div className="text-center mb-8">
        <div className="flex items-center justify-center mb-4">
          <div className="w-12 h-12 bg-[#C7AE6A] rounded-full flex items-center justify-center mr-3">
            <div className="w-6 h-6 bg-white rounded opacity-80"></div>
          </div>
          <div>
            <div className="text-[#C7AE6A] font-medium text-lg">GIALOMA LIFE SOLUTIONS</div>
            <div className="text-xs text-gray-500 tracking-wider">TECNOLOGÍA QUE LIBERA TU TIEMPO</div>
          </div>
        </div>
      </div>

      <h2 className="text-2xl font-semibold text-center mb-8 text-gray-800">
        Procesos y Automatización
      </h2>

      {/* Pregunta 1 */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-4">
          1. ¿Cuántos procesos manuales repetitivos realizas tú y tu equipo diariamente? *
        </label>
        <div className="grid grid-cols-3 gap-3">
          {['0-3', '4-7', '8+'].map((option) => (
            <label key={option} className="flex items-center cursor-pointer p-3 border-2 rounded-lg hover:bg-gray-50 transition-colors">
              <input
                type="radio"
                name="P1"
                value={option}
                checked={formData['P1 - Procesos Manuales Diarios'] === option}
                onChange={(e) => handleInputChange('P1 - Procesos Manuales Diarios', e.target.value)}
                className="w-4 h-4 text-[#C7AE6A] focus:ring-[#C7AE6A] border-gray-300"
              />
              <span className="ml-3 text-gray-700">{option}</span>
            </label>
          ))}
        </div>
        {errors['P1 - Procesos Manuales Diarios'] && (
          <p className="text-red-500 text-sm mt-1">{errors['P1 - Procesos Manuales Diarios']}</p>
        )}
      </div>

      {/* Pregunta 2 */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-4">
          2. ¿Con qué frecuencia se producen errores en los procesos manuales de tu equipo? *
        </label>
        <div className="grid grid-cols-3 gap-3">
          {['Raramente', 'Ocasionalmente', 'Frecuentemente'].map((option) => (
            <label key={option} className="flex items-center cursor-pointer p-3 border-2 rounded-lg hover:bg-gray-50 transition-colors">
              <input
                type="radio"
                name="P2"
                value={option}
                checked={formData['P2 - Frecuencia de Errores'] === option}
                onChange={(e) => handleInputChange('P2 - Frecuencia de Errores', e.target.value)}
                className="w-4 h-4 text-[#C7AE6A] focus:ring-[#C7AE6A] border-gray-300"
              />
              <span className="ml-3 text-gray-700">{option}</span>
            </label>
          ))}
        </div>
        {errors['P2 - Frecuencia de Errores'] && (
          <p className="text-red-500 text-sm mt-1">{errors['P2 - Frecuencia de Errores']}</p>
        )}
      </div>
    </div>
  );

  const renderStep3 = () => (
    <div className="space-y-6">
      {/* Logo y título */}
      <div className="text-center mb-8">
        <div className="flex items-center justify-center mb-4">
          <div className="w-12 h-12 bg-[#C7AE6A] rounded-full flex items-center justify-center mr-3">
            <div className="w-6 h-6 bg-white rounded opacity-80"></div>
          </div>
          <div>
            <div className="text-[#C7AE6A] font-medium text-lg">GIALOMA LIFE SOLUTIONS</div>
            <div className="text-xs text-gray-500 tracking-wider">TECNOLOGÍA QUE LIBERA TU TIEMPO</div>
          </div>
        </div>
      </div>

      <h2 className="text-2xl font-semibold text-center mb-8 text-gray-800">
        Herramientas Digitales
      </h2>

      {/* Pregunta 3 */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-4">
          3. ¿Qué herramientas digitales utilizáis tú y tu equipo actualmente? *
        </label>
        <div className="grid grid-cols-2 gap-3">
          {digitalToolsOptions.map((option) => (
            <label key={option} className="flex items-center cursor-pointer p-3 border-2 rounded-lg hover:bg-gray-50 transition-colors">
              <input
                type="checkbox"
                checked={formData['P3 - Herramientas Digitales'].includes(option)}
                onChange={(e) => handleCheckboxChange('P3 - Herramientas Digitales', option, e.target.checked)}
                className="w-4 h-4 text-[#C7AE6A] focus:ring-[#C7AE6A] border-gray-300 rounded"
              />
              <span className="ml-3 text-gray-700">{option}</span>
            </label>
          ))}
        </div>
        {errors['P3 - Herramientas Digitales'] && (
          <p className="text-red-500 text-sm mt-1">{errors['P3 - Herramientas Digitales']}</p>
        )}
      </div>

      {/* Pregunta 4 */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-4">
          4. ¿Cómo calificarías la integración entre vuestras herramientas digitales? *
        </label>
        <div className="grid grid-cols-2 gap-3">
          {['Fragmentada', 'Parcialmente integrada', 'Totalmente integrada'].map((option) => (
            <label key={option} className="flex items-center cursor-pointer p-3 border-2 rounded-lg hover:bg-gray-50 transition-colors">
              <input
                type="radio"
                name="P4"
                value={option}
                checked={formData['P4 - Integración de Herramientas'] === option}
                onChange={(e) => handleInputChange('P4 - Integración de Herramientas', e.target.value)}
                className="w-4 h-4 text-[#C7AE6A] focus:ring-[#C7AE6A] border-gray-300"
              />
              <span className="ml-3 text-gray-700">{option}</span>
            </label>
          ))}
        </div>
        {errors['P4 - Integración de Herramientas'] && (
          <p className="text-red-500 text-sm mt-1">{errors['P4 - Integración de Herramientas']}</p>
        )}
      </div>

      {/* Ejemplo explicativo */}
      <div className="bg-gray-50 p-4 rounded-lg border">
        <p className="text-sm text-gray-700">
          <strong>Ejemplo:</strong> Imagine una cocina con varios electrodomésticos. En una cocina con 
          sistemas "fragmentados", cada aparato funciona por separado y debe transferir manualmente 
          los ingredientes entre ellos. En una cocina "parcialmente integrada", algunos aparatos se 
          conectan entre sí, pero otros requieren intervención manual. En una cocina "totalmente 
          integrada", todos los aparatos están conectados, permitiendo que los ingredientes fluyan 
          automáticamente de un proceso a otro sin intervención manual.
        </p>
      </div>
    </div>
  );

  const renderStep4 = () => (
    <div className="space-y-6">
      {/* Logo y título */}
      <div className="text-center mb-8">
        <div className="flex items-center justify-center mb-4">
          <div className="w-12 h-12 bg-[#C7AE6A] rounded-full flex items-center justify-center mr-3">
            <div className="w-6 h-6 bg-white rounded opacity-80"></div>
          </div>
          <div>
            <div className="text-[#C7AE6A] font-medium text-lg">GIALOMA LIFE SOLUTIONS</div>
            <div className="text-xs text-gray-500 tracking-wider">TECNOLOGÍA QUE LIBERA TU TIEMPO</div>
          </div>
        </div>
      </div>

      <h2 className="text-2xl font-semibold text-center mb-8 text-gray-800">
        Productividad
      </h2>

      {/* Pregunta 5 */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-4">
          5. ¿Cuántas horas al día estimas que tú y tu equipo podrían ahorrar con automatización? *
        </label>
        <div className="grid grid-cols-3 gap-3">
          {['1-2 horas', '3-4 horas', '5+ horas'].map((option) => (
            <label key={option} className="flex items-center cursor-pointer p-3 border-2 rounded-lg hover:bg-gray-50 transition-colors">
              <input
                type="radio"
                name="P5"
                value={option}
                checked={formData['P5 - Horas Automatizables'] === option}
                onChange={(e) => handleInputChange('P5 - Horas Automatizables', e.target.value)}
                className="w-4 h-4 text-[#C7AE6A] focus:ring-[#C7AE6A] border-gray-300"
              />
              <span className="ml-3 text-gray-700">{option}</span>
            </label>
          ))}
        </div>
        {errors['P5 - Horas Automatizables'] && (
          <p className="text-red-500 text-sm mt-1">{errors['P5 - Horas Automatizables']}</p>
        )}
      </div>

      {/* Pregunta 6 */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-4">
          6. ¿Cuánto tiempo tardan actualmente los procesos críticos de tu empresa? *
        </label>
        <div className="grid grid-cols-3 gap-3">
          {['Minutos', 'Horas', 'Días'].map((option) => (
            <label key={option} className="flex items-center cursor-pointer p-3 border-2 rounded-lg hover:bg-gray-50 transition-colors">
              <input
                type="radio"
                name="P6"
                value={option}
                checked={formData['P6 - Tiempo Procesos'] === option}
                onChange={(e) => handleInputChange('P6 - Tiempo Procesos', e.target.value)}
                className="w-4 h-4 text-[#C7AE6A] focus:ring-[#C7AE6A] border-gray-300"
              />
              <span className="ml-3 text-gray-700">{option}</span>
            </label>
          ))}
        </div>
        {errors['P6 - Tiempo Procesos'] && (
          <p className="text-red-500 text-sm mt-1">{errors['P6 - Tiempo Procesos']}</p>
        )}
      </div>

      {/* Ejemplo explicativo */}
      <div className="bg-gray-50 p-4 rounded-lg border">
        <p className="text-sm text-gray-700">
          <strong>Ejemplo:</strong> Piensa en los procesos clave de tu empresa como la gestión de pedidos, 
          la facturación, o la incorporación de nuevos empleados. Si estos procesos toman días cuando 
          podrían automatizarse para tomar horas, o si toman horas cuando podrían ser instantáneos, 
          hay una gran oportunidad de mejora en la productividad.
        </p>
      </div>
    </div>
  );

  const renderStep5 = () => (
    <div className="space-y-6">
      {/* Logo y título */}
      <div className="text-center mb-8">
        <div className="flex items-center justify-center mb-4">
          <div className="w-12 h-12 bg-[#C7AE6A] rounded-full flex items-center justify-center mr-3">
            <div className="w-6 h-6 bg-white rounded opacity-80"></div>
          </div>
          <div>
            <div className="text-[#C7AE6A] font-medium text-lg">GIALOMA LIFE SOLUTIONS</div>
            <div className="text-xs text-gray-500 tracking-wider">TECNOLOGÍA QUE LIBERA TU TIEMPO</div>
          </div>
        </div>
      </div>

      <h2 className="text-2xl font-semibold text-center mb-8 text-gray-800">
        Bienestar Laboral
      </h2>

      {/* Pregunta 7 */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-4">
          7. ¿Cuál es tu nivel de estrés relacionado con las tareas repetitivas en el trabajo? *
        </label>
        <div className="grid grid-cols-3 gap-3">
          {['Bajo', 'Medio', 'Alto'].map((option) => (
            <label key={option} className="flex items-center cursor-pointer p-3 border-2 rounded-lg hover:bg-gray-50 transition-colors">
              <input
                type="radio"
                name="P7"
                value={option}
                checked={formData['P7 - Nivel de Estrés'] === option}
                onChange={(e) => handleInputChange('P7 - Nivel de Estrés', e.target.value)}
                className="w-4 h-4 text-[#C7AE6A] focus:ring-[#C7AE6A] border-gray-300"
              />
              <span className="ml-3 text-gray-700">{option}</span>
            </label>
          ))}
        </div>
        {errors['P7 - Nivel de Estrés'] && (
          <p className="text-red-500 text-sm mt-1">{errors['P7 - Nivel de Estrés']}</p>
        )}
      </div>

      {/* Pregunta 8 */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-4">
          8. ¿Experimentas agotamiento debido a la sobrecarga de herramientas digitales? *
        </label>
        <div className="grid grid-cols-3 gap-3">
          {['Nunca', 'A veces', 'Frecuentemente'].map((option) => (
            <label key={option} className="flex items-center cursor-pointer p-3 border-2 rounded-lg hover:bg-gray-50 transition-colors">
              <input
                type="radio"
                name="P8"
                value={option}
                checked={formData['P8 - Agotamiento Digital'] === option}
                onChange={(e) => handleInputChange('P8 - Agotamiento Digital', e.target.value)}
                className="w-4 h-4 text-[#C7AE6A] focus:ring-[#C7AE6A] border-gray-300"
              />
              <span className="ml-3 text-gray-700">{option}</span>
            </label>
          ))}
        </div>
        {errors['P8 - Agotamiento Digital'] && (
          <p className="text-red-500 text-sm mt-1">{errors['P8 - Agotamiento Digital']}</p>
        )}
      </div>

      {/* Ejemplo explicativo */}
      <div className="bg-gray-50 p-4 rounded-lg border">
        <p className="text-sm text-gray-700">
          <strong>Ejemplo:</strong> El agotamiento digital puede manifestarse como fatiga mental por 
          usar demasiadas aplicaciones diferentes, frustración por sistemas que no se comunican entre 
          sí, o sentirse abrumado por notificaciones constantes. Es diferente del estrés por tareas 
          repetitivas, que se refiere más a la monotonía y aburrimiento de hacer lo mismo una y otra vez.
        </p>
      </div>
    </div>
  );

  const renderStep6 = () => (
    <div className="space-y-6">
      {/* Logo y título */}
      <div className="text-center mb-8">
        <div className="flex items-center justify-center mb-4">
          <div className="w-12 h-12 bg-[#C7AE6A] rounded-full flex items-center justify-center mr-3">
            <div className="w-6 h-6 bg-white rounded opacity-80"></div>
          </div>
          <div>
            <div className="text-[#C7AE6A] font-medium text-lg">GIALOMA LIFE SOLUTIONS</div>
            <div className="text-xs text-gray-500 tracking-wider">TECNOLOGÍA QUE LIBERA TU TIEMPO</div>
          </div>
        </div>
      </div>

      <h2 className="text-2xl font-semibold text-center mb-8 text-gray-800">
        Madurez Digital
      </h2>

      {/* Pregunta 9 */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-4">
          9. ¿Qué porcentaje de los procesos de tu empresa están digitalizados? *
        </label>
        <div className="grid grid-cols-3 gap-3">
          {['0-30%', '31-70%', '71-100%'].map((option) => (
            <label key={option} className="flex items-center cursor-pointer p-3 border-2 rounded-lg hover:bg-gray-50 transition-colors">
              <input
                type="radio"
                name="P9"
                value={option}
                checked={formData['P9 - Procesos Digitalizados'] === option}
                onChange={(e) => handleInputChange('P9 - Procesos Digitalizados', e.target.value)}
                className="w-4 h-4 text-[#C7AE6A] focus:ring-[#C7AE6A] border-gray-300"
              />
              <span className="ml-3 text-gray-700">{option}</span>
            </label>
          ))}
        </div>
        {errors['P9 - Procesos Digitalizados'] && (
          <p className="text-red-500 text-sm mt-1">{errors['P9 - Procesos Digitalizados']}</p>
        )}
      </div>

      {/* Pregunta 10 */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-4">
          10. ¿Con qué frecuencia tu empresa utiliza datos para tomar decisiones importantes? *
        </label>
        <div className="grid grid-cols-3 gap-3">
          {['Raramente', 'Ocasionalmente', 'Frecuentemente'].map((option) => (
            <label key={option} className="flex items-center cursor-pointer p-3 border-2 rounded-lg hover:bg-gray-50 transition-colors">
              <input
                type="radio"
                name="P10"
                value={option}
                checked={formData['P10 - Análisis de Datos'] === option}
                onChange={(e) => handleInputChange('P10 - Análisis de Datos', e.target.value)}
                className="w-4 h-4 text-[#C7AE6A] focus:ring-[#C7AE6A] border-gray-300"
              />
              <span className="ml-3 text-gray-700">{option}</span>
            </label>
          ))}
        </div>
        {errors['P10 - Análisis de Datos'] && (
          <p className="text-red-500 text-sm mt-1">{errors['P10 - Análisis de Datos']}</p>
        )}
      </div>

      {/* Ejemplo explicativo */}
      <div className="bg-gray-50 p-4 rounded-lg border">
        <p className="text-sm text-gray-700">
          <strong>Ejemplo:</strong> Una empresa con baja madurez digital podría tener la contabilidad 
          en Excel y la gestión de clientes en papel. Una empresa con madurez media tendría algunos 
          sistemas digitales pero desconectados. Una empresa con alta madurez digital tendría la 
          mayoría de procesos automatizados y conectados, usando datos en tiempo real para tomar decisiones.
        </p>
      </div>
    </div>
  );

  const renderStep7 = () => (
    <div className="space-y-6">
      {/* Logo y título */}
      <div className="text-center mb-8">
        <div className="flex items-center justify-center mb-4">
          <div className="w-12 h-12 bg-[#C7AE6A] rounded-full flex items-center justify-center mr-3">
            <div className="w-6 h-6 bg-white rounded opacity-80"></div>
          </div>
          <div>
            <div className="text-[#C7AE6A] font-medium text-lg">GIALOMA LIFE SOLUTIONS</div>
            <div className="text-xs text-gray-500 tracking-wider">TECNOLOGÍA QUE LIBERA TU TIEMPO</div>
          </div>
        </div>
      </div>

      <h2 className="text-2xl font-semibold text-center mb-8 text-gray-800">
        Balance Trabajo-Vida
      </h2>

      {/* Pregunta 11 */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-4">
          11. ¿Con qué frecuencia trabajas horas extra debido a tareas que podrían automatizarse? *
        </label>
        <div className="grid grid-cols-3 gap-3">
          {['Nunca', 'A veces', 'Frecuentemente'].map((option) => (
            <label key={option} className="flex items-center cursor-pointer p-3 border-2 rounded-lg hover:bg-gray-50 transition-colors">
              <input
                type="radio"
                name="P11"
                value={option}
                checked={formData['P11 - Horas Extra'] === option}
                onChange={(e) => handleInputChange('P11 - Horas Extra', e.target.value)}
                className="w-4 h-4 text-[#C7AE6A] focus:ring-[#C7AE6A] border-gray-300"
              />
              <span className="ml-3 text-gray-700">{option}</span>
            </label>
          ))}
        </div>
        {errors['P11 - Horas Extra'] && (
          <p className="text-red-500 text-sm mt-1">{errors['P11 - Horas Extra']}</p>
        )}
      </div>

      {/* Pregunta 12 */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-4">
          12. ¿Qué tan fácil es para ti desconectarte del trabajo fuera del horario laboral? *
        </label>
        <div className="grid grid-cols-3 gap-3">
          {['Muy fácil', 'Algo difícil', 'Muy difícil'].map((option) => (
            <label key={option} className="flex items-center cursor-pointer p-3 border-2 rounded-lg hover:bg-gray-50 transition-colors">
              <input
                type="radio"
                name="P12"
                value={option}
                checked={formData['P12 - Desconexión Digital'] === option}
                onChange={(e) => handleInputChange('P12 - Desconexión Digital', e.target.value)}
                className="w-4 h-4 text-[#C7AE6A] focus:ring-[#C7AE6A] border-gray-300"
              />
              <span className="ml-3 text-gray-700">{option}</span>
            </label>
          ))}
        </div>
        {errors['P12 - Desconexión Digital'] && (
          <p className="text-red-500 text-sm mt-1">{errors['P12 - Desconexión Digital']}</p>
        )}
      </div>

      {/* Ejemplo explicativo */}
      <div className="bg-gray-50 p-4 rounded-lg border">
        <p className="text-sm text-gray-700">
          <strong>Ejemplo:</strong> La desconexión digital se refiere a tu capacidad de "apagar" 
          mentalmente el trabajo cuando termina tu jornada. Si constantemente piensas en tareas 
          pendientes, recibes notificaciones de trabajo, o sientes que debes estar siempre disponible, 
          esto indica dificultades para desconectarte.
        </p>
      </div>
    </div>
  );

  const renderStep8 = () => (
    <div className="space-y-6">
      {/* Logo y título */}
      <div className="text-center mb-8">
        <div className="flex items-center justify-center mb-4">
          <div className="w-12 h-12 bg-[#C7AE6A] rounded-full flex items-center justify-center mr-3">
            <div className="w-6 h-6 bg-white rounded opacity-80"></div>
          </div>
          <div>
            <div className="text-[#C7AE6A] font-medium text-lg">GIALOMA LIFE SOLUTIONS</div>
            <div className="text-xs text-gray-500 tracking-wider">TECNOLOGÍA QUE LIBERA TU TIEMPO</div>
          </div>
        </div>
      </div>

      <h2 className="text-2xl font-semibold text-center mb-8 text-gray-800">
        Prioridades
      </h2>

      {/* Pregunta 13 */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-4">
          13. ¿Cuáles son las áreas prioritarias donde te gustaría implementar soluciones tecnológicas? *
          <span className="text-gray-500">(Selecciona todas las que apliquen)</span>
        </label>
        <div className="grid grid-cols-2 gap-3">
          {priorityAreasOptions.map((option) => (
            <label key={option} className="flex items-center cursor-pointer p-3 border-2 rounded-lg hover:bg-gray-50 transition-colors">
              <input
                type="checkbox"
                checked={formData['P13 - Áreas Prioritarias'].includes(option)}
                onChange={(e) => handleCheckboxChange('P13 - Áreas Prioritarias', option, e.target.checked)}
                className="w-4 h-4 text-[#C7AE6A] focus:ring-[#C7AE6A] border-gray-300 rounded"
              />
              <span className="ml-3 text-gray-700">{option}</span>
            </label>
          ))}
        </div>
        {errors['P13 - Áreas Prioritarias'] && (
          <p className="text-red-500 text-sm mt-1">{errors['P13 - Áreas Prioritarias']}</p>
        )}
      </div>

      {/* Pregunta 14 */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-4">
          14. ¿Cuáles son las tareas más frustrantes que realizas habitualmente? *
          <span className="text-gray-500">(Selecciona todas las que apliquen)</span>
        </label>
        <div className="grid grid-cols-2 gap-3">
          {frustratingTasksOptions.map((option) => (
            <label key={option} className="flex items-center cursor-pointer p-3 border-2 rounded-lg hover:bg-gray-50 transition-colors">
              <input
                type="checkbox"
                checked={formData['P14 - Tareas Frustrantes'].includes(option)}
                onChange={(e) => handleCheckboxChange('P14 - Tareas Frustrantes', option, e.target.checked)}
                className="w-4 h-4 text-[#C7AE6A] focus:ring-[#C7AE6A] border-gray-300 rounded"
              />
              <span className="ml-3 text-gray-700">{option}</span>
            </label>
          ))}
        </div>
        {errors['P14 - Tareas Frustrantes'] && (
          <p className="text-red-500 text-sm mt-1">{errors['P14 - Tareas Frustrantes']}</p>
        )}
      </div>
    </div>
  );

  const renderStep9 = () => (
    <div className="space-y-6">
      {/* Logo y título */}
      <div className="text-center mb-8">
        <div className="flex items-center justify-center mb-4">
          <div className="w-12 h-12 bg-[#C7AE6A] rounded-full flex items-center justify-center mr-3">
            <div className="w-6 h-6 bg-white rounded opacity-80"></div>
          </div>
          <div>
            <div className="text-[#C7AE6A] font-medium text-lg">GIALOMA LIFE SOLUTIONS</div>
            <div className="text-xs text-gray-500 tracking-wider">TECNOLOGÍA QUE LIBERA TU TIEMPO</div>
          </div>
        </div>
      </div>

      <h2 className="text-2xl font-semibold text-center mb-8 text-gray-800">
        Objetivos
      </h2>

      {/* Pregunta 15 */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-4">
          15. ¿Cuáles son tus principales objetivos con la digitalización? *
          <span className="text-gray-500">(Selecciona todas las que apliquen)</span>
        </label>
        <div className="grid grid-cols-2 gap-3">
          {digitalizationObjectivesOptions.map((option) => (
            <label key={option} className="flex items-center cursor-pointer p-3 border-2 rounded-lg hover:bg-gray-50 transition-colors">
              <input
                type="checkbox"
                checked={formData['P15 - Objetivos Digitalización'].includes(option)}
                onChange={(e) => handleCheckboxChange('P15 - Objetivos Digitalización', option, e.target.checked)}
                className="w-4 h-4 text-[#C7AE6A] focus:ring-[#C7AE6A] border-gray-300 rounded"
              />
              <span className="ml-3 text-gray-700">{option}</span>
            </label>
          ))}
        </div>
        {errors['P15 - Objetivos Digitalización'] && (
          <p className="text-red-500 text-sm mt-1">{errors['P15 - Objetivos Digitalización']}</p>
        )}
      </div>

      {/* Pregunta 16 */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-4">
          16. ¿Cuál es tu presupuesto aproximado para inversión en digitalización? *
        </label>
        <div className="grid grid-cols-2 gap-3">
          {['Menos de 5.000€', '5.000€ - 15.000€', '15.000€ - 30.000€', '30.000€ - 50.000€', 'Más de 50.000€', 'Aún no lo tengo definido'].map((option) => (
            <label key={option} className="flex items-center cursor-pointer p-3 border-2 rounded-lg hover:bg-gray-50 transition-colors">
              <input
                type="radio"
                name="P16"
                value={option}
                checked={formData['P16 - Presupuesto'] === option}
                onChange={(e) => handleInputChange('P16 - Presupuesto', e.target.value)}
                className="w-4 h-4 text-[#C7AE6A] focus:ring-[#C7AE6A] border-gray-300"
              />
              <span className="ml-3 text-gray-700">{option}</span>
            </label>
          ))}
        </div>
        {errors['P16 - Presupuesto'] && (
          <p className="text-red-500 text-sm mt-1">{errors['P16 - Presupuesto']}</p>
        )}
      </div>
    </div>
  );

  const handleSubmit = async () => {
    if (!validateStep9()) return;

    setIsSubmitting(true);
    try {
      const response = await fetch('/.netlify/functions/digitalization-form', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        setSubmissionStatus('success');
        setCurrentStep(10); // Show success message
      } else {
        setSubmissionStatus('error');
      }
    } catch (error) {
      setSubmissionStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionStatus, setSubmissionStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const renderSuccessMessage = () => (
    <div className="text-center space-y-6">
      <div className="flex items-center justify-center mb-6">
        <CheckCircle className="w-16 h-16 text-green-500" />
      </div>
      
      <h2 className="text-3xl font-bold text-gray-800 mb-4">
        ¡Gracias!
      </h2>
      
      <div className="text-lg text-gray-700 space-y-4">
        <p>
          El equipo de Gialoma Life Solutions analizará las respuestas y te enviará el resultado de tu
        </p>
        <p className="font-semibold text-[#C7AE6A]">
          Evaluación de Madurez Digital y Bienestar Laboral
        </p>
        <p>
          al correo electrónico lo antes posible.
        </p>
      </div>
      
      <button
        onClick={onClose}
        className="mt-8 px-8 py-3 bg-[#C7AE6A] text-white rounded-lg font-medium hover:bg-[#B8A060] transition-colors"
      >
        Cerrar
      </button>
    </div>
  );

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg w-full max-w-2xl max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-200">
          <h1 className="text-xl font-semibold text-gray-800">
            Evaluación de Madurez Digital y Bienestar Laboral
          </h1>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Progress Bar */}
        <div className="p-6 pb-0">
          {renderProgressBar()}
        </div>

        {/* Form Content */}
        <div className="p-6">
          {currentStep === 1 && renderStep1()}
          {currentStep === 2 && renderStep2()}
          {currentStep === 3 && renderStep3()}
          {currentStep === 4 && renderStep4()}
          {currentStep === 5 && renderStep5()}
          {currentStep === 6 && renderStep6()}
          {currentStep === 7 && renderStep7()}
          {currentStep === 8 && renderStep8()}
          {currentStep === 9 && renderStep9()}
          {currentStep === 10 && renderSuccessMessage()}
          
          {/* Navigation Buttons */}
          {currentStep <= 9 && (
            <div className="flex justify-between mt-8 pt-6 border-t border-gray-200">
              <button
                onClick={handlePrevious}
                disabled={currentStep === 1}
                className={`flex items-center px-6 py-2 rounded-lg font-medium transition-colors ${
                  currentStep === 1
                    ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                }`}
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                Anterior
              </button>

              {currentStep < 9 ? (
                <button
                  onClick={handleNext}
                  className="flex items-center px-6 py-2 bg-[#C7AE6A] text-white rounded-lg font-medium hover:bg-[#B8A060] transition-colors"
                >
                  Siguiente
                  <ArrowRight className="w-4 h-4 ml-2" />
                </button>
              ) : (
                <button
                  onClick={handleSubmit}
                  disabled={isSubmitting}
                  className={`flex items-center px-6 py-2 rounded-lg font-medium transition-colors ${
                    isSubmitting
                      ? 'bg-gray-400 text-gray-200 cursor-not-allowed'
                      : 'bg-green-600 text-white hover:bg-green-700'
                  }`}
                >
                  {isSubmitting ? 'Enviando...' : 'Finalizar'}
                  {!isSubmitting && <CheckCircle className="w-4 h-4 ml-2" />}
                </button>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default DigitalizationForm;