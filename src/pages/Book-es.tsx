
import React, { useEffect, useState } from 'react';
import BookNavbarEs from '../components/BookNavbar-es';
import FooterEs from '../components/Footer-es';
import BookLeadForm from '../components/BookLeadForm';
import { Button } from '@/components/ui/button';
import { Check, Download, Star, Users, BookOpen, Clock, Mail, Gift, Zap, Target } from 'lucide-react';
import CookieBannerEs from '../components/CookieBanner-es';

const BookEs = () => {
  const [showLeadForm, setShowLeadForm] = useState(false);

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
      { property: 'og:image', content: '/lovable-uploads/book-cover-es.png' },
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

  const handleDownloadClick = () => {
    setShowLeadForm(true);
    
    // Track the download button click
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'download_click', {
        event_category: 'Book',
        event_label: 'Free PDF Download Button',
      });
    }
  };

  const handleFormSuccess = () => {
    // Additional success tracking if needed
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'conversion', {
        event_category: 'Lead Generation',
        event_label: 'Book PDF Download Completed',
        value: 1
      });
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <BookNavbarEs />
      
      {/* Main Content */}
      <div className="flex-grow pt-32 md:pt-36">
        {/* Hero section - Updated with correct book information */}
        <section className="bg-gradient-to-r from-gialoma-darkgold to-gialoma-gold py-16">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row items-center justify-between gap-8">
              <div className="md:w-1/2">
                <div className="flex items-center gap-3 mb-4">
                  <Gift className="text-white" size={32} />
                  <span className="bg-white text-gialoma-gold px-3 py-1 rounded-full font-bold text-sm">
                    DESCARGA GRATUITA
                  </span>
                </div>
                <h1 className="text-4xl md:text-5xl font-bold text-white mb-2">
                  Alquimia Digital
                </h1>
                <h2 className="text-2xl md:text-3xl text-white/90 mb-4 font-light italic">
                  El Puente entre la Sabiduría Ancestral y la Era Tecnológica
                </h2>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 mb-6">
                  <h3 className="text-xl font-semibold text-white mb-2">
                    Capítulo 0: El Propósito de Gialoma
                  </h3>
                  <p className="text-white/90 text-sm leading-relaxed">
                    Descubre cómo la tecnología puede liberarte para ser más humano. Un viaje desde la resistencia 
                    hasta la liberación, donde aprenderás a crear equilibrio entre lo digital y lo esencial.
                  </p>
                </div>
                <p className="text-lg text-white/90 mb-6">
                  Obtén GRATIS el primer capítulo donde Paloma comparte su transformación personal y 
                  cómo nació una nueva forma de entender la tecnología: como herramienta de plenitud humana, no de esclavitud digital.
                </p>
                <div className="flex gap-2 mb-8">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} fill="white" className="text-white" size={20} />
                  ))}
                  <span className="text-white ml-2">Más de 1,000 empresarios ya lo descargaron</span>
                </div>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button 
                    onClick={handleDownloadClick}
                    className="bg-white text-gialoma-gold hover:bg-gialoma-gold hover:text-white border border-white hover:border-white transition-colors px-8 py-6 text-lg font-bold"
                  >
                    <Download className="mr-2" size={18} />
                    Obtener PDF Gratis
                  </Button>
                </div>
              </div>
              <div className="md:w-1/3">
                <div className="rounded-lg shadow-2xl overflow-hidden transform rotate-3 hover:rotate-0 transition-transform duration-300">
                  <img 
                    src="/placeholder.svg" 
                    alt="Portada del libro Alquimia Digital - El Puente entre la Sabiduría Ancestral y la Era Tecnológica" 
                    className="w-full h-auto"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Value Proposition section - Made bigger and more visible */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto text-center">
              <h2 className="text-4xl md:text-5xl font-bold text-gialoma-black mb-8">
                ¿Por Qué Más de 1,000 Empresarios Ya Descargaron Este Capítulo?
              </h2>
              <p className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed">
                Porque ofrece una perspectiva completamente nueva sobre la tecnología empresarial: 
                una que pone la humanidad en el centro, no los algoritmos.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mt-16">
                <div className="text-center">
                  <div className="bg-gialoma-gold/10 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Target className="text-gialoma-gold" size={32} />
                  </div>
                  <h3 className="font-bold text-2xl mb-4 text-gialoma-black">Sin Tecnicismos</h3>
                  <p className="text-lg text-gray-600 leading-relaxed">
                    Explicaciones claras y prácticas que cualquier empresario puede entender y aplicar inmediatamente. 
                    Lenguaje humano para soluciones tecnológicas.
                  </p>
                </div>
                <div className="text-center">
                  <div className="bg-gialoma-gold/10 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Zap className="text-gialoma-gold" size={32} />
                  </div>
                  <h3 className="font-bold text-2xl mb-4 text-gialoma-black">Resultados Rápidos</h3>
                  <p className="text-lg text-gray-600 leading-relaxed">
                    Estrategias que puedes implementar esta misma semana para empezar a recuperar tiempo valioso 
                    y reducir el estrés tecnológico en tu empresa.
                  </p>
                </div>
                <div className="text-center">
                  <div className="bg-gialoma-gold/10 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Check className="text-gialoma-gold" size={32} />
                  </div>
                  <h3 className="font-bold text-2xl mb-4 text-gialoma-black">Casos Reales</h3>
                  <p className="text-lg text-gray-600 leading-relaxed">
                    Historias auténticas de transformación personal y empresarial. No teorías abstractas, 
                    sino experiencias vividas y resultados medibles.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* What's included section - Made bigger and more visible */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <h2 className="text-4xl md:text-5xl font-bold text-center text-gialoma-black mb-8">
                Qué Incluye Tu Descarga Gratuita
              </h2>
              <p className="text-xl text-gray-600 text-center mb-16 max-w-3xl mx-auto leading-relaxed">
                Más que un simple capítulo: una guía completa para comenzar tu transformación 
                hacia una relación más consciente con la tecnología.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                <div className="bg-white p-8 rounded-lg shadow-lg border border-gray-100">
                  <div className="flex items-center mb-6">
                    <BookOpen className="text-gialoma-gold mr-4" size={32} />
                    <h3 className="font-bold text-2xl text-gialoma-black">Capítulo 0: El Propósito</h3>
                  </div>
                  <ul className="space-y-4 text-gray-700">
                    <li className="flex items-start">
                      <Check className="text-gialoma-gold mr-3 flex-shrink-0 mt-1" size={20} />
                      <span className="text-lg">La historia personal de Paloma: de la resistencia a la liberación tecnológica</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="text-gialoma-gold mr-3 flex-shrink-0 mt-1" size={20} />
                      <span className="text-lg">Cómo nació Gialoma y el modelo de "Tecnología Consciente"</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="text-gialoma-gold mr-3 flex-shrink-0 mt-1" size={20} />
                      <span className="text-lg">Las herramientas que realmente liberan tu tiempo (sin crear nueva esclavitud)</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="text-gialoma-gold mr-3 flex-shrink-0 mt-1" size={20} />
                      <span className="text-lg">El futuro de la tecnología orientada a la plenitud humana</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-white p-8 rounded-lg shadow-lg border border-gray-100">
                  <div className="flex items-center mb-6">
                    <Zap className="text-gialoma-gold mr-4" size={32} />
                    <h3 className="font-bold text-2xl text-gialoma-black">Capítulo 1: Mentalidad</h3>
                  </div>
                  <ul className="space-y-4 text-gray-700">
                    <li className="flex items-start">
                      <Check className="text-gialoma-gold mr-3 flex-shrink-0 mt-1" size={20} />
                      <span className="text-lg">El caso de Sofía: cuando el mapa mental ya no coincide con el territorio</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="text-gialoma-gold mr-3 flex-shrink-0 mt-1" size={20} />
                      <span className="text-lg">El principio de la plasticidad mental aplicado a la tecnología</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="text-gialoma-gold mr-3 flex-shrink-0 mt-1" size={20} />
                      <span className="text-lg">Espejos cognitivos: cómo lo digital refleja y amplifica nuestros patrones mentales</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="text-gialoma-gold mr-3 flex-shrink-0 mt-1" size={20} />
                      <span className="text-lg">El ejercicio de inversión de perspectiva para la transformación real</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="bg-gradient-to-r from-gialoma-gold/10 to-gialoma-darkgold/10 p-8 rounded-lg border border-gialoma-gold/30 mt-12">
                <div className="flex items-center justify-center mb-6">
                  <Gift className="text-gialoma-gold mr-4" size={32} />
                  <h3 className="font-bold text-2xl text-gialoma-black">Bonus Incluido</h3>
                </div>
                <div className="text-center">
                  <p className="text-lg text-gialoma-darkgray mb-6 leading-relaxed">
                    También recibirás acceso a nuestro newsletter exclusivo "Alquimia Semanal" con casos de estudio reales, 
                    reflexiones sobre tecnología consciente y las últimas tendencias en automatización que respeta la humanidad.
                  </p>
                  <p className="text-base text-gray-600">
                    * Contenido de alta calidad, una vez por semana. Puedes darte de baja en cualquier momento con un clic.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* About the authors - Updated */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-center text-gialoma-black mb-12">
                Conoce a los Autores
              </h2>
              <div className="flex flex-col md:flex-row gap-8">
                <div className="md:w-1/2">
                  <div className="flex items-center mb-4">
                    <div className="w-16 h-16 rounded-full bg-gray-200 mr-4"></div>
                    <div>
                      <h3 className="font-bold text-gialoma-black text-xl">Paloma Firgaira</h3>
                      <p className="text-gialoma-darkgray">Co-fundadora y CEO, Gialoma Life Solutions</p>
                    </div>
                  </div>
                  <p className="text-gialoma-darkgray">
                    Paloma ha ayudado a más de 200 empresas a implementar tecnologías de automatización 
                    que les han ahorrado cientos de horas mensuales. Su enfoque práctico y sin tecnicismos 
                    ha transformado cómo los empresarios ven la tecnología.
                  </p>
                </div>
                <div className="md:w-1/2">
                  <div className="flex items-center mb-4">
                    <div className="w-16 h-16 rounded-full bg-gray-200 mr-4"></div>
                    <div>
                      <h3 className="font-bold text-gialoma-black text-xl">Gianro Compagno</h3>
                      <p className="text-gialoma-darkgray">Co-fundador y CTO, Gialoma Life Solutions</p>
                    </div>
                  </div>
                  <p className="text-gialoma-darkgray">
                    Gianro traduce conceptos técnicos complejos en soluciones simples y aplicables. 
                    Su experiencia implementando sistemas de IA en empresas reales hace que este libro 
                    sea extraordinariamente práctico y orientado a resultados.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Testimonials - Updated for free version */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center text-gialoma-black mb-12">
              Lo Que Dicen Quienes Ya lo Descargaron
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {[
                {
                  quote: "En solo los primeros dos capítulos ya identifiqué 3 procesos que puedo automatizar. ¡Y eso que es gratis!",
                  author: "María González, Directora de Operaciones"
                },
                {
                  quote: "Finalmente un enfoque de IA que no requiere ser ingeniero para entender. Las plantillas son oro puro.",
                  author: "Carlos Mendoza, CEO Startup"
                },
                {
                  quote: "Lo descargué por curiosidad y terminé implementando sus consejos. Ya ahorré 5 horas semanales en mi empresa.",
                  author: "Laura Vázquez, Consultora"
                },
              ].map((testimonial, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                  <div className="flex mb-4">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star key={star} fill="#FFC107" className="text-yellow-400" size={16} />
                    ))}
                  </div>
                  <p className="text-gialoma-darkgray mb-4 italic">"{testimonial.quote}"</p>
                  <p className="font-medium text-gialoma-black">{testimonial.author}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        {/* FAQ - Updated */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center text-gialoma-black mb-12">Preguntas Frecuentes</h2>
            <div className="max-w-3xl mx-auto space-y-6">
              {[
                {
                  question: "¿Es realmente gratis? ¿No hay costos ocultos?",
                  answer: "Sí, es completamente gratis. Solo necesitas tu email para recibir el PDF. No hay costos ocultos, no se guardará tu tarjeta de crédito, y puedes darte de baja de nuestros emails en cualquier momento."
                },
                {
                  question: "¿Cuánto tardaré en recibir el PDF?",
                  answer: "Recibirás el PDF inmediatamente en tu email después de completar el formulario. Si no lo ves en tu bandeja de entrada, revisa tu carpeta de spam."
                },
                {
                  question: "¿Es adecuado para empresas pequeñas?",
                  answer: "Absolutamente. Los conceptos están diseñados para ser aplicables tanto en startups de 2 personas como en empresas de 200+ empleados. Los ejemplos cubren todo tipo de industrias y tamaños."
                },
                {
                  question: "¿Recibiré spam después de descargar?",
                  answer: "No. Solo recibirás contenido relevante sobre automatización empresarial aproximadamente una vez por semana. Puedes darte de baja en cualquier momento con un solo clic."
                },
                {
                  question: "¿Habrá más capítulos disponibles después?",
                  answer: "Sí, eventualmente publicaremos el libro completo. Los lectores del capítulo gratuito serán los primeros en enterarse y recibirán ofertas especiales."
                },
              ].map((faq, index) => (
                <div key={index} className="border-b border-gray-200 pb-4">
                  <h3 className="font-semibold text-gialoma-black text-lg mb-2">{faq.question}</h3>
                  <p className="text-gialoma-darkgray">{faq.answer}</p>
                </div>
              ))}
            </div>
            
            <div className="text-center mt-12">
              <p className="text-gialoma-darkgray mb-4">¿Tienes más preguntas?</p>
              <div className="flex justify-center items-center">
                <Mail className="mr-2 text-gialoma-gold" size={20} />
                <a href="mailto:gialomals@gmail.com" className="text-gialoma-gold hover:text-gialoma-darkgold">
                  gialomals@gmail.com
                </a>
              </div>
            </div>
          </div>
        </section>
        
        {/* Final CTA - Updated */}
        <section className="py-16 bg-gialoma-gold">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold text-white mb-6">
              ¡No Esperes Más! Descarga Tu Copia Gratuita Ahora
            </h2>
            <p className="text-white/90 max-w-2xl mx-auto mb-8">
              Únete a los miles de empresarios que ya están transformando sus operaciones 
              con las estrategias prácticas de "Alquimia Digital".
            </p>
            <Button 
              onClick={handleDownloadClick}
              className="bg-white text-gialoma-gold hover:bg-gialoma-gold hover:text-white border border-white hover:border-white transition-colors px-8 py-6 text-lg font-bold"
            >
              <Download className="mr-2" size={18} />
              Obtener PDF Gratis Ahora
            </Button>
            <p className="text-white/80 mt-4 text-sm">
              Formato PDF • Descarga instantánea • 100% Gratis
            </p>
          </div>
        </section>
      </div>
      
      {/* Lead Form Modal */}
      <BookLeadForm 
        isOpen={showLeadForm}
        onClose={() => setShowLeadForm(false)}
        onSuccess={handleFormSuccess}
      />
      
      <FooterEs />
      <CookieBannerEs />
    </div>
  );
};

export default BookEs;
