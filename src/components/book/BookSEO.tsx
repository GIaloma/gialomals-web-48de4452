import React, { useEffect } from 'react';

const BookSEO: React.FC = () => {
  useEffect(() => {
    // SEO Meta Tags - Updated with correct book information
    document.title = "Descarga Gratis: Alquimia Digital - El Puente entre la Sabiduría Ancestral y la Era Tecnológica | Gialoma";
    
    // Remove existing meta tags
    const existingDescription = document.querySelector('meta[name="description"]');
    const existingKeywords = document.querySelector('meta[name="keywords"]');
    const existingOgTitle = document.querySelector('meta[property="og:title"]');
    const existingOgDescription = document.querySelector('meta[property="og:description"]');
    const existingOgImage = document.querySelector('meta[property="og:image"]');
    const existingTwitterCard = document.querySelector('meta[name="twitter:card"]');
    const existingCanonical = document.querySelector('link[rel="canonical"]');
    
    [existingDescription, existingKeywords, existingOgTitle, existingOgDescription, existingOgImage, existingTwitterCard, existingCanonical].forEach(el => {
      if (el) el.remove();
    });

    // Add new meta tags
    const metaTags = [
      { name: 'description', content: 'Descarga GRATIS "Alquimia Digital: El Puente entre la Sabiduría Ancestral y la Era Tecnológica" - Capítulo 0: El Propósito de Gialoma. Tecnología consciente para la plenitud humana.' },
      { name: 'keywords', content: 'descarga gratis, alquimia digital, tecnología consciente, automatización empresarial, equilibrio digital, Gialoma, transformación digital humana, PDF gratis' },
      { property: 'og:title', content: 'Descarga Gratis: Alquimia Digital - El Puente entre la Sabiduría Ancestral y la Era Tecnológica' },
      { property: 'og:description', content: 'Obtén GRATIS el Capítulo 0 de "Alquimia Digital" sobre tecnología consciente que libera tu tiempo y amplifica tu humanidad.' },
      { property: 'og:image', content: '/lovable-uploads/Portada Libro Alquimia DIgital.png' },
      { property: 'og:url', content: 'https://gialoma.com/libro' },
      { property: 'og:type', content: 'website' },
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:title', content: 'Descarga Gratis: Alquimia Digital - Tecnología Consciente para la Plenitud Humana' },
      { name: 'twitter:description', content: 'Obtén GRATIS el Capítulo 0 sobre cómo la tecnología puede liberarte para ser más humano.' },
      { name: 'robots', content: 'index, follow' },
      { name: 'author', content: 'Paloma Firgaira, Gianro Compagno' },
      { name: 'language', content: 'es' }
    ];

    metaTags.forEach(tag => {
      const meta = document.createElement('meta');
      if (tag.property) {
        meta.setAttribute('property', tag.property);
      } else {
        meta.setAttribute('name', tag.name);
      }
      meta.setAttribute('content', tag.content);
      document.head.appendChild(meta);
    });

    // Add canonical link
    const canonical = document.createElement('link');
    canonical.rel = 'canonical';
    canonical.href = 'https://gialoma.com/libro';
    document.head.appendChild(canonical);

    // Structured Data (JSON-LD) - Updated for correct book info
    const structuredData = {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "name": "Alquimia Digital - Descarga Gratuita",
      "description": "Descarga gratuita del Capítulo 0 del libro 'Alquimia Digital: El Puente entre la Sabiduría Ancestral y la Era Tecnológica'.",
      "author": [
        {
          "@type": "Person",
          "name": "Paloma Firgaira"
        },
        {
          "@type": "Person", 
          "name": "Gianro Compagno"
        }
      ],
      "publisher": {
        "@type": "Organization",
        "name": "Gialoma Life Solutions"
      },
      "datePublished": "2025-04-01",
      "inLanguage": "es",
      "url": "https://gialoma.com/libro",
      "mainEntity": {
        "@type": "DigitalDocument",
        "name": "Alquimia Digital: Capítulo 0 - El Propósito de Gialoma",
        "description": "Capítulo gratuito sobre tecnología consciente que libera tu tiempo para la plenitud humana",
        "encodingFormat": "application/pdf",
        "offers": {
          "@type": "Offer",
          "price": "0",
          "priceCurrency": "EUR",
          "availability": "https://schema.org/InStock"
        }
      }
    };

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify(structuredData);
    document.head.appendChild(script);

    return () => {
      // Cleanup
      const addedElements = document.querySelectorAll('meta[name], meta[property], link[rel="canonical"], script[type="application/ld+json"]');
      addedElements.forEach(el => el.remove());
    };
  }, []);

  return null;
};

export default BookSEO;