import React, { useState, useEffect } from 'react';
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
    analytics: false,
    marketing: false,
    timestamp: null
  });

  useEffect(() => {
    checkExistingConsent();
    respectDoNotTrack();
  }, []);

  const checkExistingConsent = () => {
    const hasConsent = getCookie('gialoma_cookie_consent');
    
    if (!hasConsent) {
      // Mostrar banner después de 1 segundo
      setTimeout(() => setIsVisible(true), 1000);
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
        setIsVisible(true);
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

  const acceptAllCookies = () => {
    const consent = {
      necessary: true,
      analytics: true,
      marketing: true,
      timestamp: Date.now()
    };
    
    saveConsent(consent);
    loadGoogleAnalytics();
    setIsVisible(false);
    trackEvent('cookie_consent', { consent_type: 'all' });
  };

  const rejectOptionalCookies = () => {
    const consent = {
      necessary: true,
      analytics: false,
      marketing: false,
      timestamp: Date.now()
    };
    
    saveConsent(consent);
    setIsVisible(false);
    console.log('Solo cookies necesarias aceptadas');
  };

  const acceptAnalyticsOnly = () => {
    const consent = {
      necessary: true,
      analytics: true,
      marketing: false,
      timestamp: Date.now()
    };
    
    saveConsent(consent);
    loadGoogleAnalytics();
    setIsVisible(false);
    trackEvent('cookie_consent', { consent_type: 'analytics_only' });
  };

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const saveAndCloseModal = () => {
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
    
    setShowModal(false);
    setIsVisible(false);
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
      {/* Banner Principal */}
      <div className="fixed bottom-0 left-0 right-0 z-50 bg-gradient-to-r from-gialoma-black to-gray-800 text-white shadow-lg border-t-3 border-gialoma-gold">
        <div className="container mx-auto px-4 py-4 max-w-7xl">
          <div className="flex flex-col lg:flex-row items-start lg:items-center gap-4">
            <div className="flex items-center gap-3 mb-2 lg:mb-0">
              <Cookie className="text-gialoma-gold h-6 w-6 flex-shrink-0" />
              <h3 className="text-lg font-semibold text-gialoma-gold">🍪 Configuración de Cookies</h3>
            </div>
            
            <div className="flex-1 min-w-0">
              <p className="text-sm text-gray-300 mb-2">
                Utilizamos cookies para mejorar tu experiencia. Puedes aceptar todas, elegir solo analíticas, 
                rechazar las opcionales o{' '}
                <button 
                  onClick={openModal} 
                  className="text-gialoma-gold hover:text-gialoma-lightgold underline font-medium"
                >
                  configurar tus preferencias
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
                onClick={acceptAllCookies}
                className="bg-gialoma-gold hover:bg-gialoma-darkgold text-gialoma-black font-medium transition-all duration-200 hover:scale-105 text-sm px-3 py-2"
              >
                Aceptar todas
              </Button>
              <Button
                onClick={acceptAnalyticsOnly}
                className="bg-blue-600 hover:bg-blue-700 text-white font-medium transition-all duration-200 text-sm px-3 py-2"
              >
                Solo analíticas
              </Button>
              <Button
                onClick={rejectOptionalCookies}
                variant="outline"
                className="border-gray-400 text-gray-300 hover:bg-gray-700 hover:text-white transition-all duration-200 text-sm px-3 py-2"
              >
                Solo necesarias
              </Button>
              <Button
                onClick={openModal}
                variant="outline"
                className="border-gialoma-gold text-gialoma-gold hover:bg-gialoma-gold hover:text-gialoma-black transition-all duration-200 text-sm px-3 py-2"
              >
                <Settings className="h-4 w-4 mr-1" />
                Configurar
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
                <h2 className="text-2xl font-bold text-gialoma-black">Configuración de Cookies</h2>
                <button
                  onClick={closeModal}
                  className="p-2 text-gray-400 hover:text-gray-600 transition-colors"
                >
                  <X className="h-6 w-6" />
                </button>
              </div>
              <p className="text-gialoma-darkgray mt-2">
                Elige qué cookies quieres permitir. Puedes cambiar estas preferencias en cualquier momento.
              </p>
            </div>

            {/* Contenido del Modal */}
            <div className="p-6 space-y-6">
              {/* Cookies Técnicas */}
              <div className="border border-gray-200 rounded-lg overflow-hidden">
                <div className="bg-gray-50 px-4 py-3 border-b border-gray-200 flex justify-between items-center">
                  <h3 className="font-semibold text-gialoma-black">Cookies Técnicas</h3>
                  <span className="bg-green-500 text-white px-2 py-1 rounded text-xs font-medium">
                    NECESARIAS
                  </span>
                </div>
                <div className="p-4">
                  <p className="text-sm text-gialoma-darkgray">
                    Estas cookies son esenciales para el funcionamiento básico del sitio web. Incluyen funciones como 
                    navegación, acceso a áreas seguras y funcionalidades básicas. El sitio web no puede funcionar 
                    correctamente sin estas cookies.
                  </p>
                </div>
              </div>

              {/* Cookies de Análisis */}
              <div className="border border-gray-200 rounded-lg overflow-hidden">
                <div className="bg-gray-50 px-4 py-3 border-b border-gray-200 flex justify-between items-center">
                  <h3 className="font-semibold text-gialoma-black">Cookies de Análisis (Google Analytics)</h3>
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
                    Estas cookies nos ayudan a entender cómo interactúas con nuestro sitio web, proporcionándonos 
                    información sobre las páginas visitadas, el tiempo de permanencia y otros datos analíticos. 
                    Utilizamos Google Analytics 4 para este propósito.
                  </p>
                  <div className="text-xs text-gialoma-darkgray space-y-1">
                    <p><strong>Datos recopilados:</strong> Páginas visitadas, tiempo en el sitio, origen del tráfico, datos demográficos generales.</p>
                    <p><strong>Finalidad:</strong> Mejorar la experiencia del usuario y optimizar nuestros servicios.</p>
                    <p><strong>Conservación:</strong> Hasta 26 meses.</p>
                  </div>
                </div>
              </div>

              {/* Cookies de Marketing */}
              <div className="border border-gray-200 rounded-lg overflow-hidden">
                <div className="bg-gray-50 px-4 py-3 border-b border-gray-200 flex justify-between items-center">
                  <h3 className="font-semibold text-gialoma-black">Cookies de Marketing y Publicidad</h3>
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
                    Estas cookies se utilizan para rastrear visitantes a través de sitios web. La intención es mostrar 
                    anuncios que sean relevantes y atractivos para el usuario individual y, por lo tanto, más valiosos 
                    para editores y anunciantes de terceros.
                  </p>
                  <div className="text-xs text-gialoma-darkgray space-y-1">
                    <p><strong>Datos recopilados:</strong> Comportamiento del usuario, interacciones con anuncios, seguimiento de conversiones.</p>
                    <p><strong>Finalidad:</strong> Publicidad personalizada y campañas de remarketing.</p>
                    <p><strong>Conservación:</strong> Hasta 2 años.</p>
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
                variant="outline"
                className="border-gray-300 text-gray-600 hover:bg-gray-50"
              >
                Solo necesarias
              </Button>
              <Button
                onClick={saveAndCloseModal}
                className="bg-gialoma-gold hover:bg-gialoma-darkgold text-gialoma-black"
              >
                Guardar preferencias
              </Button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default CookieBannerEs;