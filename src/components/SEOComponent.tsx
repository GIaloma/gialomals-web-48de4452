
import { useEffect } from 'react';

interface SEOMetaTags {
  title: string;
  description: string;
  keywords?: string;
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: string;
  ogUrl?: string;
  ogType?: string;
  twitterTitle?: string;
  twitterDescription?: string;
  twitterCard?: string;
  canonical?: string;
  robots?: string;
  author?: string;
  language?: string;
  structuredData?: object;
}

interface SEOComponentProps {
  meta: SEOMetaTags;
}

const SEOComponent: React.FC<SEOComponentProps> = ({ meta }) => {
  useEffect(() => {
    // Set document title
    document.title = meta.title;
    
    // Remove existing meta tags
    const existingTags = document.querySelectorAll('meta[name], meta[property], link[rel="canonical"], script[type="application/ld+json"]');
    existingTags.forEach(tag => {
      const name = tag.getAttribute('name') || tag.getAttribute('property') || tag.getAttribute('rel');
      if (name && [
        'description', 'keywords', 'og:title', 'og:description', 'og:image', 'og:url', 'og:type',
        'twitter:card', 'twitter:title', 'twitter:description', 'robots', 'author', 'language',
        'canonical'
      ].includes(name)) {
        tag.remove();
      }
    });

    // Add new meta tags
    const metaTags = [
      { name: 'description', content: meta.description },
      ...(meta.keywords ? [{ name: 'keywords', content: meta.keywords }] : []),
      { property: 'og:title', content: meta.ogTitle || meta.title },
      { property: 'og:description', content: meta.ogDescription || meta.description },
      ...(meta.ogImage ? [{ property: 'og:image', content: meta.ogImage }] : []),
      ...(meta.ogUrl ? [{ property: 'og:url', content: meta.ogUrl }] : []),
      { property: 'og:type', content: meta.ogType || 'website' },
      { name: 'twitter:card', content: meta.twitterCard || 'summary_large_image' },
      { name: 'twitter:title', content: meta.twitterTitle || meta.title },
      { name: 'twitter:description', content: meta.twitterDescription || meta.description },
      { name: 'robots', content: meta.robots || 'index, follow' },
      ...(meta.author ? [{ name: 'author', content: meta.author }] : []),
      ...(meta.language ? [{ name: 'language', content: meta.language }] : []),
    ];

    metaTags.forEach(tag => {
      const metaElement = document.createElement('meta');
      if (tag.property) {
        metaElement.setAttribute('property', tag.property);
      } else {
        metaElement.setAttribute('name', tag.name);
      }
      metaElement.setAttribute('content', tag.content);
      document.head.appendChild(metaElement);
    });

    // Add canonical link
    if (meta.canonical) {
      const canonical = document.createElement('link');
      canonical.rel = 'canonical';
      canonical.href = meta.canonical;
      document.head.appendChild(canonical);
    }

    // Add structured data
    if (meta.structuredData) {
      const script = document.createElement('script');
      script.type = 'application/ld+json';
      script.text = JSON.stringify(meta.structuredData);
      document.head.appendChild(script);
    }

    // Cleanup function
    return () => {
      const addedElements = document.querySelectorAll('meta[name], meta[property], link[rel="canonical"], script[type="application/ld+json"]');
      addedElements.forEach(el => {
        const name = el.getAttribute('name') || el.getAttribute('property') || el.getAttribute('rel');
        if (name && [
          'description', 'keywords', 'og:title', 'og:description', 'og:image', 'og:url', 'og:type',
          'twitter:card', 'twitter:title', 'twitter:description', 'robots', 'author', 'language',
          'canonical'
        ].includes(name)) {
          el.remove();
        }
      });
    };
  }, [meta]);

  return null; // This component doesn't render anything
};

export default SEOComponent;

// Predefined SEO configurations for common pages
export const commonSEOConfigs = {
  // Spanish configurations
  homeEs: {
    title: "Gialoma Life Solutions - Automatización y Digitalización Empresarial",
    description: "Transformamos tu negocio con soluciones de automatización y digitalización personalizadas. Aumenta la eficiencia y reduce costos con IA y tecnología avanzada.",
    keywords: "automatización empresarial, digitalización, inteligencia artificial, IA para empresas, transformación digital, soluciones tecnológicas, eficiencia empresarial",
    ogImage: "/lovable-uploads/gialoma-og-image-es.png",
    ogUrl: "https://gialoma.com",
    canonical: "https://gialoma.com",
    language: "es",
    structuredData: {
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "Gialoma Life Solutions",
      "description": "Especialistas en automatización y digitalización empresarial",
      "url": "https://gialoma.com",
      "logo": "https://gialoma.com/lovable-uploads/d3975bb5-3e96-450e-a77f-7fd8af9e04de.png",
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+34-900-000-000",
        "contactType": "customer service",
        "availableLanguage": ["Spanish", "English", "Italian"]
      },
      "founder": [
        {
          "@type": "Person",
          "name": "Paloma Firgaira"
        },
        {
          "@type": "Person",
          "name": "Gianro Compagno"
        }
      ]
    }
  },

  // English configurations
  homeEn: {
    title: "Gialoma Life Solutions - Business Automation & Digitalization",
    description: "Transform your business with customized automation and digitalization solutions. Increase efficiency and reduce costs with AI and advanced technology.",
    keywords: "business automation, digitalization, artificial intelligence, AI for business, digital transformation, technology solutions, business efficiency",
    ogImage: "/lovable-uploads/gialoma-og-image-en.png",
    ogUrl: "https://gialoma.com/en",
    canonical: "https://gialoma.com/en",
    language: "en",
    structuredData: {
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "Gialoma Life Solutions",
      "description": "Specialists in business automation and digitalization",
      "url": "https://gialoma.com/en",
      "logo": "https://gialoma.com/lovable-uploads/d3975bb5-3e96-450e-a77f-7fd8af9e04de.png",
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+34-900-000-000",
        "contactType": "customer service",
        "availableLanguage": ["Spanish", "English", "Italian"]
      },
      "founder": [
        {
          "@type": "Person",
          "name": "Paloma Firgaira"
        },
        {
          "@type": "Person",
          "name": "Gianro Compagno"
        }
      ]
    }
  },

  // Blog configurations
  blogEs: {
    title: "Blog de Gialoma - Insights sobre Automatización y Digitalización",
    description: "Descubre las últimas tendencias en automatización empresarial, IA y digitalización. Consejos prácticos y casos de estudio para transformar tu negocio.",
    keywords: "blog automatización, tendencias IA, digitalización empresarial, casos de estudio, consejos tecnología empresarial",
    ogUrl: "https://gialoma.com/es/blog",
    canonical: "https://gialoma.com/es/blog",
    language: "es"
  },

  blogEn: {
    title: "Gialoma Blog - Automation & Digitalization Insights",
    description: "Discover the latest trends in business automation, AI and digitalization. Practical tips and case studies to transform your business.",
    keywords: "automation blog, AI trends, business digitalization, case studies, business technology tips",
    ogUrl: "https://gialoma.com/blog",
    canonical: "https://gialoma.com/blog",
    language: "en"
  }
};
