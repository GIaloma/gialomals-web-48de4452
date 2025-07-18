import React, { useState, useEffect, useRef } from 'react';
import { X, Settings, Cookie } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

// IMPORTANTE: Reemplaza con tu ID real de Google Analytics
const GA_MEASUREMENT_ID = 'G-G15VKZG5HH'; // Tu ID real de Google Analytics

interface CookieConsent {
  necessary: boolean;
  analytics: boolean;
  marketing: boolean;
  timestamp: number | null;
}

// Declare global gtag consent functions
declare global {
  interface Window {
    gtagConsent: {
      grantAll: () => void;
      grantAnalytics: () => void;
      denyAll: () => void;
      update: (consentObj: any) => void;
    };
  }
}

const CookieBannerEs = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [cookieConsent, setCookieConsent] = useState<CookieConsent>({
    necessary: true,
    analytics: true, // Por defecto habilitado (modelo opt-out)
    marketing: true, // Por defecto habilitado (modelo opt-out)
    timestamp: null
  });

  // Use ref to prevent multiple rapid clicks
  const isProcessingRef = useRef(false);

  useEffect(() => {
    checkExistingConsent();
    respectDoNotTrack();
  }, []);

  const checkExistingConsent = () => {
    const hasConsent = getCookie('gialoma_cookie_consent');
    const hasOptedOut = getCookie('gialoma_cookies_declined');
    
    // Si el usuario ha optado por no usar cookies, respetar su elección
    if (hasOptedOut === 'true') {
      setCookieConsent({
        necessary: true,
        analytics: false,
        marketing: false,
        timestamp: Date.now()
      });
      // No mostrar banner si ya ha rechazado
      return;
    }
    
    if (!hasConsent) {
      // Mostrar banner informativo para nuevos visitantes (modelo opt-out)
      setTimeout(() => setIsVisible(true), 2000); // Retrasado para no interrumpir UX
    } else {
      try {
        const consent = JSON.parse(hasConsent);
        setCookieConsent(consent);
        updateGoogleConsent(consent);
        if (consent.analytics) {
          loadGoogleAnalytics();
        }
      } catch (error) {
        console.error('Error parsing cookie consent:', error);
        // Por defecto habilitado (modelo opt-out)
        setCookieConsent({
          necessary: true,
          analytics: true,
          marketing: true,
          timestamp: Date.now()
        });
      }
    }
  };

  const respectDoNotTrack = () => {
    if (navigator.doNotTrack === "1" || 
        navigator.doNotTrack === "yes" || 
        (navigator as any).msDoNotTrack === "1") {
      setCookieConsent(prev => ({ ...prev, analytics: false, marketing: false }));
      console.log('Do Not Track detectado - análisis deshabilitado');
      return true;
    }
    return false;
  };

  const updateGoogleConsent = (consent: CookieConsent) => {
    // Actualizar Google Consent Mode v2
    if (window.gtagConsent) {
      if (consent.marketing && consent.analytics) {
        window.gtagConsent.grantAll();
      } else if (consent.analytics && !consent.marketing) {
        window.gtagConsent.grantAnalytics();
      } else {
        window.gtagConsent.denyAll();
      }
    }
  };

  const loadGoogleAnalytics = () => {
    if (!cookieConsent.analytics || document.querySelector(`script[src*="googletagmanager"]`)) return;
    
    // Cargar gtag
    const script = document.createElement('script');
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`;
    document.head.appendChild(script);
    
    // Configurar gtag
    script.onload = () => {
      (window as any).dataLayer = (window as any).dataLayer || [];
      function gtag(...args: any[]) {
        (window as any).dataLayer.push(args);
      }
      gtag('js', new Date());
      gtag('config', GA_MEASUREMENT_ID, {
        'anonymize_ip': true,
        'cookie_flags': 'SameSite=Secure',
        'allow_google_signals': cookieConsent.marketing || false,
        'allow_ad_personalization_signals': cookieConsent.marketing || false
      });
      
      console.log('📊 Google Analytics cargado con consentimiento');
    };
  };

  const saveConsent = (consent: CookieConsent) => {
    setCookie('gialoma_cookie_consent', JSON.stringify(consent), 365);
    setCookieConsent(consent);
    updateGoogleConsent(consent);
  };

  const handleAction = (action: () => void) => {
    // Prevent multiple rapid clicks
    if (isProcessingRef.current) return;
    
    isProcessingRef.current = true;
    
    // Execute the action
    action();
    
    // Hide banner immediately
    setIsVisible(false);
    setShowModal(false);
    
    // Reset processing flag after a short delay
    setTimeout(() => {
      isProcessingRef.current = false;
    }, 500);
  };

  const continueWithCurrentSettings = () => {
    handleAction(() => {
      // Usuario está conforme con la configuración por defecto (todo habilitado)
      const consent = {
        necessary: true,
        analytics: true,
        marketing: true,
        timestamp: Date.now()
      };
      
      saveConsent(consent);
      trackEvent('cookie_consent', { consent_type: 'continue_default' });
    });
  };

  const optOutAll = () => {
    handleAction(() => {
      // Usuario quiere rechazar todas las cookies opcionales
      const consent = {
        necessary: true,
        analytics: false,
        marketing: false,
        timestamp: Date.now()
      };
      
      // Establecer cookie de rechazo
      setCookie('gialoma_cookies_declined', 'true', 365);
      saveConsent(consent);
      console.log('Usuario rechazó todas las cookies opcionales');
    });
  };

  const acceptAnalyticsOnly = () => {
    handleAction(() => {
      const consent = {
        necessary: true,
        analytics: true,
        marketing: false,
        timestamp: Date.now()
      };
      
      saveConsent(consent);
      loadGoogleAnalytics();
      trackEvent('cookie_consent', { consent_type: 'analytics_only' });
    });
  };

  const openModal = () => {
    if (isProcessingRef.current) return;
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    // No ocultar el banner cuando solo se cierra el modal sin guardar
  };

  const saveAndCloseModal = () => {
    handleAction(() => {
      const consent = {
        ...cookieConsent,
        timestamp: Date.now()
      };
      
      saveConsent(consent);
      
      if (consent.analytics) {
        loadGoogleAnalytics();
        trackEvent('cookie_consent', { 
          consent_type: 'custom',
          analytics: consent.analytics,
          marketing: consent.marketing
        });
      }
    });
  };

  const toggleAnalytics = () => {
    setCookieConsent(prev => ({
      ...prev,
      analytics: !prev.analytics
    }));
  };

  const toggleMarketing = () => {
    setCookieConsent(prev => ({
      ...prev,
      marketing: !prev.marketing
    }));
  };

  // Utilidades para cookies
  const setCookie = (name: string, value: string, days: number) => {
    const expires = new Date();
    expires.setTime(expires.getTime() + (days * 24 * 60 * 60 * 1000));
    document.cookie = `${name}=${value};expires=${expires.toUTCString()};path=/;Secure;SameSite=Strict`;
  };

  const getCookie = (name: string) => {
    const nameEQ = name + "=";
    const ca = document.cookie.split(';');
    for(let i = 0; i < ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) === ' ') c = c.substring(1, c.length);
      if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length);
    }
    return null;
  };

  // Función para tracking de eventos
  const trackEvent = (eventName: string, parameters: any = {}) => {
    if (cookieConsent.analytics && typeof (window as any).gtag !== 'undefined') {
      (window as any).gtag('event', eventName, parameters);
      console.log('Evento tracked:', eventName, parameters);
    }
  };

  // Eventos específicos para Gialoma Life Solutions
  const trackContactForm = () => {
    trackEvent('contact_form_submit', {
      event_category: 'engagement',
      event_label: 'contact_form'
    });
  };

  const trackServiceInquiry = (serviceType: string) => {
    trackEvent('service_inquiry', {
      event_category: 'lead_generation',
      service_type: serviceType
    });
  };

  const trackResourceDownload = (resourceName: string) => {
    trackEvent('resource_download', {
      event_category: 'engagement',
      resource_name: resourceName
    });
  };

  // Exponer funciones globalmente para uso en otros componentes
  useEffect(() => {
    (window as any).GialomaCookies = {
      getConsent: () => cookieConsent,
      updatePreferences: openModal,
      trackEvent,
      trackContactForm,
      trackServiceInquiry,
      trackResourceDownload,
      hasAnalyticsConsent: () => cookieConsent.analytics,
      hasMarketingConsent: () => cookieConsent.marketing
    };
  }, [cookieConsent]);

  if (!isVisible) return null;

  return (
    <>
      {/* Banner Principal - Modelo Opt-out */}
      <div className="fixed bottom-0 left-0 right-0 z-50 bg-gradient-to-r from-gialoma-black to-gray-800 text-white shadow-lg border-t-3 border-gialoma-gold">
        <div className="container mx-auto px-4 py-4 max-w-7xl">
          <div className="flex flex-col lg:flex-row items-start lg:items-center gap-4">
            <div className="flex items-center gap-3 mb-2 lg:mb-0">
              <Cookie className="text-gialoma-gold h-6 w-6 flex-shrink-0" />
              <h3 className="text-lg font-semibold text-gialoma-gold">🍪 Experiencia Mejorada</h3>
            </div>
            
            <div className="flex-1 min-w-0">
              <p className="text-sm text-gray-300 mb-2">
                Utilizamos cookies para brindarte la mejor experiencia y analíticas para mejorar nuestros servicios. 
                Puedes continuar con nuestra configuración recomendada o{' '}
                <button 
                  onClick={openModal} 
                  className="text-gialoma-gold hover:text-gialoma-lightgold underline font-medium"
                >
                  personalizar tus preferencias
                </button>.
              </p>
              <p className="text-xs text-gray-400">
                Consulta nuestra{' '}
                <Link to="/politica-cookies" className="text-gialoma-gold hover:text-gialoma-lightgold underline">
                  Política de Cookies
                </Link>{' '}
                y{' '}
                <Link to="/politica-privacidad" className="text-gialoma-gold hover:text-gialoma-lightgold underline">
                  Política de Privacidad
                </Link>.
              </p>
            </div>
            
            <div className="flex flex-wrap items-center gap-2 lg:flex-nowrap">
              <Button
                onClick={continueWithCurrentSettings}
                disabled={isProcessingRef.current}
                className="bg-gialoma-gold hover:bg-gialoma-darkgold text-gialoma-black font-medium transition-all duration-200 hover:scale-105 text-sm px-4 py-2 disabled:opacity-50"
              >
                ✓ Continuar
              </Button>
              <Button
                onClick={acceptAnalyticsOnly}
                disabled={isProcessingRef.current}
                className="bg-blue-600 hover:bg-blue-700 text-white font-medium transition-all duration-200 text-sm px-3 py-2 disabled:opacity-50"
              >
                Solo Analíticas
              </Button>
              <Button
                onClick={optOutAll}
                disabled={isProcessingRef.current}
                variant="outline"
                className="border-gray-400 text-gray-300 hover:bg-gray-700 hover:text-white transition-all duration-200 text-sm px-3 py-2 disabled:opacity-50"
              >
                Rechazar
              </Button>
              <Button
                onClick={openModal}
                disabled={isProcessingRef.current}
                variant="outline"
                className="border-gialoma-gold text-gialoma-gold hover:bg-gialoma-gold hover:text-gialoma-black transition-all duration-200 text-sm px-3 py-2 disabled:opacity-50"
              >
                <Settings className="h-4 w-4 mr-1" />
                Personalizar
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Modal de Configuración */}
      {showModal && (
        <div className="fixed inset-0 z-[60] bg-black bg-opacity-60 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white rounded-lg shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            {/* Header del Modal */}
            <div className="p-6 border-b border-gray-200">
              <div className="flex items-center justify-between">
                <h2 className="text-2xl font-bold text-gialoma-black">Preferencias de Cookies</h2>
                <button
                  onClick={closeModal}
                  className="p-2 text-gray-400 hover:text-gray-600 transition-colors"
                >
                  <X className="h-6 w-6" />
                </button>
              </div>
              <p className="text-gialoma-darkgray mt-2">
                Personaliza qué cookies quieres permitir. Nuestra configuración recomendada ya está seleccionada para la mejor experiencia.
              </p>
            </div>

            {/* Contenido del Modal */}
            <div className="p-6 space-y-6">
              {/* Cookies Esenciales */}
              <div className="border border-gray-200 rounded-lg overflow-hidden">
                <div className="bg-gray-50 px-4 py-3 border-b border-gray-200 flex justify-between items-center">
                  <h3 className="font-semibold text-gialoma-black">Cookies Esenciales</h3>
                  <span className="bg-green-500 text-white px-2 py-1 rounded text-xs font-medium">
                    SIEMPRE ACTIVAS
                  </span>
                </div>
                <div className="p-4">
                  <p className="text-sm text-gialoma-darkgray">
                    Estas cookies son esenciales para que el sitio web funcione correctamente. Permiten funciones básicas como 
                    navegación, seguridad y accesibilidad. El sitio web no puede funcionar correctamente sin estas cookies.
                  </p>
                </div>
              </div>

              {/* Cookies de Análisis */}
              <div className="border border-gray-200 rounded-lg overflow-hidden">
                <div className="bg-gray-50 px-4 py-3 border-b border-gray-200 flex justify-between items-center">
                  <div>
                    <h3 className="font-semibold text-gialoma-black">Cookies de Análisis</h3>
                    <span className="text-xs text-green-600 font-medium">✓ Recomendado</span>
                  </div>
                  <button
                    onClick={toggleAnalytics}
                    className={`relative w-12 h-6 rounded-full transition-colors ${
                      cookieConsent.analytics ? 'bg-gialoma-gold' : 'bg-gray-300'
                    }`}
                  >
                    <div
                      className={`absolute top-1 left-1 w-4 h-4 bg-white rounded-full shadow transition-transform ${
                        cookieConsent.analytics ? 'translate-x-6' : 'translate-x-0'
                      }`}
                    />
                  </button>
                </div>
                <div className="p-4">
                  <p className="text-sm text-gialoma-darkgray mb-3">
                    Nos ayudan a entender cómo los visitantes interactúan con nuestro sitio web recopilando información de forma anónima. 
                    Estos datos nos ayudan a mejorar tu experiencia y optimizar nuestros servicios.
                  </p>
                  <div className="text-xs text-gialoma-darkgray space-y-1">
                    <p><strong>Qué recopilamos:</strong> Páginas visitadas, tiempo en el sitio, fuentes de tráfico, ubicación general (país)</p>
                    <p><strong>Finalidad:</strong> Mejora del sitio web y optimización de la experiencia del usuario</p>
                    <p><strong>Conservación:</strong> Hasta 26 meses, anonimizado después de 14 meses</p>
                  </div>
                </div>
              </div>

              {/* Cookies de Marketing */}
              <div className="border border-gray-200 rounded-lg overflow-hidden">
                <div className="bg-gray-50 px-4 py-3 border-b border-gray-200 flex justify-between items-center">
                  <div>
                    <h3 className="font-semibold text-gialoma-black">Marketing y Personalización</h3>
                    <span className="text-xs text-blue-600 font-medium">◐ Opcional</span>
                  </div>
                  <button
                    onClick={toggleMarketing}
                    className={`relative w-12 h-6 rounded-full transition-colors ${
                      cookieConsent.marketing ? 'bg-gialoma-gold' : 'bg-gray-300'
                    }`}
                  >
                    <div
                      className={`absolute top-1 left-1 w-4 h-4 bg-white rounded-full shadow transition-transform ${
                        cookieConsent.marketing ? 'translate-x-6' : 'translate-x-0'
                      }`}
                    />
                  </button>
                </div>
                <div className="p-4">
                  <p className="text-sm text-gialoma-darkgray mb-3">
                    Permiten contenido personalizado y publicidad relevante. Estas cookies nos ayudan a mostrarte 
                    contenido más relevante y medir la efectividad de nuestras campañas de marketing.
                  </p>
                  <div className="text-xs text-gialoma-darkgray space-y-1">
                    <p><strong>Qué recopilamos:</strong> Intereses, interacciones con anuncios, seguimiento de conversiones</p>
                    <p><strong>Finalidad:</strong> Contenido personalizado y publicidad relevante</p>
                    <p><strong>Conservación:</strong> Hasta 2 años</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Footer del Modal */}
            <div className="p-6 border-t border-gray-200 flex justify-end gap-3">
              <Button
                onClick={() => {
                  setCookieConsent(prev => ({ ...prev, analytics: false, marketing: false }));
                  saveAndCloseModal();
                }}
                disabled={isProcessingRef.current}
                variant="outline"
                className="border-gray-300 text-gray-600 hover:bg-gray-50 disabled:opacity-50"
              >
                Solo Esenciales
              </Button>
              <Button
                onClick={saveAndCloseModal}
                disabled={isProcessingRef.current}
                className="bg-gialoma-gold hover:bg-gialoma-darkgold text-gialoma-black disabled:opacity-50"
              >
                Guardar Preferencias
              </Button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default CookieBannerEs;