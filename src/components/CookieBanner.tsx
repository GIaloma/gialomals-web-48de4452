
import React, { useState, useEffect } from 'react';
import { X, Settings, Cookie } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

// Google Analytics Measurement ID
const GA_MEASUREMENT_ID = 'G-G15VKZG5HH';

interface CookieConsent {
  necessary: boolean;
  analytics: boolean;
  timestamp: number | null;
}

const CookieBanner = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [cookieConsent, setCookieConsent] = useState<CookieConsent>({
    necessary: true,
    analytics: false,
    timestamp: null
  });

  useEffect(() => {
    checkExistingConsent();
    respectDoNotTrack();
  }, []);

  const checkExistingConsent = () => {
    const hasConsent = getCookie('gialoma_cookie_consent_en');
    
    if (!hasConsent) {
      // Show banner after 1 second
      setTimeout(() => setIsVisible(true), 1000);
    } else {
      try {
        const consent = JSON.parse(hasConsent);
        setCookieConsent(consent);
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
      setCookieConsent(prev => ({ ...prev, analytics: false }));
      console.log('Do Not Track detected - analytics disabled');
      return true;
    }
    return false;
  };

  const loadGoogleAnalytics = () => {
    if (!cookieConsent.analytics || document.querySelector(`script[src*="googletagmanager"]`)) return;
    
    // Load gtag script
    const script = document.createElement('script');
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`;
    document.head.appendChild(script);
    
    // Configure gtag
    script.onload = () => {
      (window as any).dataLayer = (window as any).dataLayer || [];
      function gtag(...args: any[]) {
        (window as any).dataLayer.push(args);
      }
      gtag('js', new Date());
      gtag('config', GA_MEASUREMENT_ID, {
        'anonymize_ip': true,
        'cookie_flags': 'SameSite=Secure',
        'allow_google_signals': false
      });
      
      console.log('Google Analytics loaded with consent');
    };
  };

  const saveConsent = (consent: CookieConsent) => {
    setCookie('gialoma_cookie_consent_en', JSON.stringify(consent), 365);
    setCookieConsent(consent);
  };

  const acceptAllCookies = () => {
    const consent = {
      necessary: true,
      analytics: true,
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
      timestamp: Date.now()
    };
    
    saveConsent(consent);
    setIsVisible(false);
    console.log('Only necessary cookies accepted');
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
      trackEvent('cookie_consent', { consent_type: 'custom_analytics' });
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

  // Cookie utilities
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

  // Event tracking function
  const trackEvent = (eventName: string, parameters: any = {}) => {
    if (cookieConsent.analytics && typeof (window as any).gtag !== 'undefined') {
      (window as any).gtag('event', eventName, parameters);
      console.log('Event tracked:', eventName, parameters);
    }
  };

  // Specific events for Gialoma Life Solutions
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

  // Expose functions globally for use in other components
  useEffect(() => {
    (window as any).GialomaCookiesEn = {
      getConsent: () => cookieConsent,
      updatePreferences: openModal,
      trackEvent,
      trackContactForm,
      trackServiceInquiry,
      trackResourceDownload,
      hasAnalyticsConsent: () => cookieConsent.analytics
    };
  }, [cookieConsent]);

  if (!isVisible) return null;

  return (
    <>
      {/* Main Banner */}
      <div className="fixed bottom-0 left-0 right-0 z-50 bg-gradient-to-r from-gialoma-black to-gray-800 text-white shadow-lg border-t-3 border-gialoma-gold">
        <div className="container mx-auto px-4 py-4 max-w-7xl">
          <div className="flex flex-col lg:flex-row items-start lg:items-center gap-4">
            <div className="flex items-center gap-3 mb-2 lg:mb-0">
              <Cookie className="text-gialoma-gold h-6 w-6 flex-shrink-0" />
              <h3 className="text-lg font-semibold text-gialoma-gold">🍪 Cookie Settings</h3>
            </div>
            
            <div className="flex-1 min-w-0">
              <p className="text-sm text-gray-300 mb-2">
                We use necessary cookies for site functionality and analytics cookies to improve your experience. 
                You can accept all, reject optional ones, or{' '}
                <button 
                  onClick={openModal} 
                  className="text-gialoma-gold hover:text-gialoma-lightgold underline font-medium"
                >
                  configure your preferences
                </button>.
              </p>
              <p className="text-xs text-gray-400">
                Check our{' '}
                <Link to="/cookie-policy" className="text-gialoma-gold hover:text-gialoma-lightgold underline">
                  Cookie Policy
                </Link>{' '}
                and{' '}
                <Link to="/privacy-policy" className="text-gialoma-gold hover:text-gialoma-lightgold underline">
                  Privacy Policy
                </Link>.
              </p>
            </div>
            
            <div className="flex flex-wrap items-center gap-3 lg:flex-nowrap">
              <Button
                onClick={acceptAllCookies}
                className="bg-gialoma-gold hover:bg-gialoma-darkgold text-gialoma-black font-medium transition-all duration-200 hover:scale-105"
              >
                Accept All
              </Button>
              <Button
                onClick={rejectOptionalCookies}
                variant="outline"
                className="border-gray-400 text-gray-300 hover:bg-gray-700 hover:text-white transition-all duration-200"
              >
                Essential Only
              </Button>
              <Button
                onClick={openModal}
                variant="outline"
                className="border-gialoma-gold text-gialoma-gold hover:bg-gialoma-gold hover:text-gialoma-black transition-all duration-200"
              >
                <Settings className="h-4 w-4 mr-2" />
                Configure
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Configuration Modal */}
      {showModal && (
        <div className="fixed inset-0 z-[60] bg-black bg-opacity-60 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white rounded-lg shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            {/* Modal Header */}
            <div className="p-6 border-b border-gray-200">
              <div className="flex items-center justify-between">
                <h2 className="text-2xl font-bold text-gialoma-black">Cookie Settings</h2>
                <button
                  onClick={closeModal}
                  className="p-2 text-gray-400 hover:text-gray-600 transition-colors"
                >
                  <X className="h-6 w-6" />
                </button>
              </div>
              <p className="text-gialoma-darkgray mt-2">
                Choose which cookies you want to allow. You can change these preferences at any time.
              </p>
            </div>

            {/* Modal Content */}
            <div className="p-6 space-y-6">
              {/* Technical Cookies */}
              <div className="border border-gray-200 rounded-lg overflow-hidden">
                <div className="bg-gray-50 px-4 py-3 border-b border-gray-200 flex justify-between items-center">
                  <h3 className="font-semibold text-gialoma-black">Technical Cookies</h3>
                  <span className="bg-green-500 text-white px-2 py-1 rounded text-xs font-medium">
                    NECESSARY
                  </span>
                </div>
                <div className="p-4">
                  <p className="text-sm text-gialoma-darkgray">
                    These cookies are essential for the basic functioning of the website. They include features like 
                    navigation, access to secure areas and basic functionalities. The website cannot function 
                    properly without these cookies.
                  </p>
                </div>
              </div>

              {/* Analytics Cookies */}
              <div className="border border-gray-200 rounded-lg overflow-hidden">
                <div className="bg-gray-50 px-4 py-3 border-b border-gray-200 flex justify-between items-center">
                  <h3 className="font-semibold text-gialoma-black">Analytics Cookies (Google Analytics)</h3>
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
                    These cookies help us understand how you interact with our website, providing us with 
                    information about pages visited, time spent and other analytical data. 
                    We use Google Analytics 4 for this purpose.
                  </p>
                  <div className="text-xs text-gialoma-darkgray space-y-1">
                    <p><strong>Data collected:</strong> Pages visited, time on site, traffic source, general demographic data.</p>
                    <p><strong>Purpose:</strong> Improve user experience and optimize our services.</p>
                    <p><strong>Retention:</strong> Up to 26 months.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Modal Footer */}
            <div className="p-6 border-t border-gray-200 flex justify-end gap-3">
              <Button
                onClick={() => {
                  setCookieConsent(prev => ({ ...prev, analytics: false }));
                  saveAndCloseModal();
                }}
                variant="outline"
                className="border-gray-300 text-gray-600 hover:bg-gray-50"
              >
                Essential Only
              </Button>
              <Button
                onClick={saveAndCloseModal}
                className="bg-gialoma-gold hover:bg-gialoma-darkgold text-gialoma-black"
              >
                Save Preferences
              </Button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default CookieBanner;
