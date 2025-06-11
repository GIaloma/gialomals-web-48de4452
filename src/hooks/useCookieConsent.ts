import { useState, useEffect } from 'react';

interface CookieConsent {
  necessary: boolean;
  analytics: boolean;
  timestamp: number | null;
}

export const useCookieConsent = () => {
  const [consent, setConsent] = useState<CookieConsent>({
    necessary: true,
    analytics: false,
    timestamp: null
  });

  useEffect(() => {
    const savedConsent = getCookie('gialoma_cookie_consent');
    if (savedConsent) {
      try {
        const parsed = JSON.parse(savedConsent);
        setConsent(parsed);
      } catch (error) {
        console.error('Error parsing saved consent:', error);
      }
    }
  }, []);

  const getCookie = (name: string): string | null => {
    const nameEQ = name + "=";
    const ca = document.cookie.split(';');
    for(let i = 0; i < ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) === ' ') c = c.substring(1, c.length);
      if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length);
    }
    return null;
  };

  const trackEvent = (eventName: string, parameters: any = {}) => {
    if (consent.analytics && typeof (window as any).gtag !== 'undefined') {
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

  const trackButtonClick = (buttonName: string, location: string) => {
    trackEvent('button_click', {
      event_category: 'engagement',
      button_name: buttonName,
      location: location
    });
  };

  const trackPageView = (pageName: string) => {
    trackEvent('page_view', {
      event_category: 'navigation',
      page_name: pageName
    });
  };

  return {
    consent,
    hasAnalyticsConsent: consent.analytics,
    trackEvent,
    trackContactForm,
    trackServiceInquiry,
    trackResourceDownload,
    trackButtonClick,
    trackPageView
  };
};

export default useCookieConsent;