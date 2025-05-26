
import React, { useEffect } from 'react';
import BookNavbarEs from '../components/BookNavbar-es';
import FooterEs from '../components/Footer-es';
import { Button } from '@/components/ui/button';
import { Check, Download, Star, Users, BookOpen, Clock, Mail } from 'lucide-react';
import CookieBannerEs from '../components/CookieBanner-es';

const BookEs = () => {
  useEffect(() => {
    // SEO Meta Tags
    document.title = "Transformación Digital Simplificada - Libro Digital | Gialoma Life Solutions";
    
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
      { name: 'description', content: 'Guía práctica para la transformación digital empresarial. Aprende a implementar IA y automatización sin conocimientos técnicos. Descarga inmediata por solo €5.99.' },
      { name: 'keywords', content: 'transformación digital, automatización empresarial, inteligencia artificial, IA para empresas, digitalización, tecnología empresarial, Gialoma, libro digital' },
      { property: 'og:title', content: 'Transformación Digital Simplificada - Libro Digital | Gialoma' },
      { property: 'og:description', content: 'Tu guía práctica para implementar tecnologías de vanguardia en tu empresa sin abrumarte técnicamente. Estrategias probadas de los fundadores de Gialoma.' },
      { property: 'og:image', content: '/lovable-uploads/book-cover-es.png' },
      { property: 'og:url', content: 'https://gialoma.com/libro' },
      { property: 'og:type', content: 'product' },
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:title', content: 'Transformación Digital Simplificada - Libro Digital' },
      { name: 'twitter:description', content: 'Guía práctica para implementar IA y automatización en tu empresa. Por solo €5.99.' },
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

    // Structured Data (JSON-LD)
    const structuredData = {
      "@context": "https://schema.org",
      "@type": "Book",
      "name": "Transformación Digital Simplificada",
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
      "genre": "Business Technology",
      "numberOfPages": 320,
      "bookFormat": "EBook",
      "offers": {
        "@type": "Offer",
        "price": "5.99",
        "priceCurrency": "EUR",
        "availability": "https://schema.org/InStock",
        "url": "https://gialoma.com/libro"
      },
      "description": "Tu guía práctica para aprovechar la IA y la automatización para transformar las operaciones de tu empresa y mejorar la eficiencia.",
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.8",
        "reviewCount": "74"
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

  return (
    <div className="min-h-screen flex flex-col">
      <BookNavbarEs />
      
      {/* Main Content */}
      <div className="flex-grow pt-32 md:pt-36">
        {/* Hero section */}
        <section className="bg-gradient-to-r from-gialoma-darkgold to-gialoma-gold py-16">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row items-center justify-between gap-8">
              <div className="md:w-1/2">
                <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
                  Transformación Digital Simplificada
                </h1>
                <p className="text-xl text-white/90 mb-6">
                  Tu guía práctica para aprovechar la IA y la automatización para transformar las operaciones de tu empresa y mejorar la eficiencia.
                </p>
                <div className="flex gap-2 mb-8">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} fill="white" className="text-white" size={20} />
                  ))}
                  <span className="text-white ml-2">Basado en 74 reseñas</span>
                </div>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button 
                    className="bg-white text-gialoma-gold hover:bg-gialoma-gold hover:text-white border border-white hover:border-white transition-colors px-8 py-6 text-lg"
                  >
                    Comprar Ahora - €5,99
                  </Button>
                  <Button 
                    className="bg-white text-gialoma-gold hover:bg-gialoma-gold hover:text-white border border-white hover:border-white transition-colors px-8 py-6 text-lg"
                  >
                    <Download className="mr-2" size={18} /> Vista Previa
                  </Button>
                </div>
              </div>
              <div className="md:w-1/3">
                <div className="rounded-lg shadow-2xl overflow-hidden transform rotate-3 hover:rotate-0 transition-transform duration-300">
                  <img 
                    src="/placeholder.svg" 
                    alt="Portada del libro Transformación Digital Simplificada" 
                    className="w-full h-auto"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Book details section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                <div className="bg-gray-50 p-6 rounded-lg text-center">
                  <BookOpen className="mx-auto mb-2 text-gialoma-gold" size={32} />
                  <h3 className="font-semibold text-lg mb-1">320 Páginas</h3>
                  <p className="text-gray-600 text-sm">Guía Completa</p>
                </div>
                <div className="bg-gray-50 p-6 rounded-lg text-center">
                  <Clock className="mx-auto mb-2 text-gialoma-gold" size={32} />
                  <h3 className="font-semibold text-lg mb-1">Publicado Abril 2025</h3>
                  <p className="text-gray-600 text-sm">Incluye Últimas Tendencias</p>
                </div>
                <div className="bg-gray-50 p-6 rounded-lg text-center">
                  <Users className="mx-auto mb-2 text-gialoma-gold" size={32} />
                  <h3 className="font-semibold text-lg mb-1">Para Todas las Empresas</h3>
                  <p className="text-gray-600 text-sm">Desde Startups a Corporaciones</p>
                </div>
              </div>
              
              <div className="mb-12">
                <h2 className="text-3xl font-bold text-gialoma-black mb-6">Sobre Este Libro</h2>
                <div className="prose max-w-none text-gialoma-darkgray space-y-4">
                  <p>
                    <span className="font-semibold">Transformación Digital Simplificada</span> es tu guía práctica para entender e implementar tecnologías de vanguardia en tu empresa sin abrumarte técnicamente.
                  </p>
                  <p>
                    Escrito por los fundadores de Gialoma, Paloma Firgaira y Gianro Compagno, este libro destila años de experiencia práctica ayudando a empresas de todos los tamaños a aprovechar la tecnología para mejorar la eficiencia y aumentar la rentabilidad.
                  </p>
                  <p>
                    Ya seas un empresario con conocimientos técnicos o un propietario de negocio que encuentra la tecnología intimidante, este libro ofrece explicaciones claras, ejemplos del mundo real y planes de implementación paso a paso que cualquiera puede seguir.
                  </p>
                </div>
              </div>
              
              <div className="mb-12">
                <h2 className="text-3xl font-bold text-gialoma-black mb-6">Lo Que Aprenderás</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {[
                    "Cómo identificar las tecnologías adecuadas para las necesidades específicas de tu negocio",
                    "Procesos paso a paso para automatizar tareas repetitivas en tu empresa",
                    "Enfoques prácticos para usar IA sin necesidad de conocimientos técnicos",
                    "Métodos para medir el ROI de las inversiones en tecnología",
                    "Estrategias para ayudar a tu equipo a adaptarse a nuevas tecnologías",
                    "Casos de estudio reales de empresas que transformaron sus operaciones",
                    "Errores comunes que evitar en proyectos de transformación digital",
                    "Cómo crear una hoja de ruta tecnológica sostenible para tu negocio"
                  ].map((item, index) => (
                    <div key={index} className="flex">
                      <Check className="text-gialoma-gold mr-3 flex-shrink-0 mt-1" size={18} />
                      <p className="text-gialoma-darkgray">{item}</p>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="mb-12">
                <h2 className="text-3xl font-bold text-gialoma-black mb-6">Sobre los Autores</h2>
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
                      Paloma es la líder visionaria detrás del enfoque innovador de Gialoma hacia la tecnología empresarial. Su enfoque en crear soluciones prácticas que devuelven tiempo valioso ha transformado cómo las empresas abordan la transformación digital.
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
                      Gianro aporta experiencia técnica en traducir conceptos complejos de IA en aplicaciones empresariales prácticas. Su talento para simplificar la tecnología hace que este libro sea accesible para lectores de todos los niveles técnicos.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="bg-gray-50 p-8 rounded-lg border border-gray-100">
                <div className="flex flex-col md:flex-row gap-8 items-center">
                  <div className="md:w-2/3">
                    <h2 className="text-2xl font-bold text-gialoma-black mb-4">¿Listo para Transformar Tu Negocio?</h2>
                    <p className="text-gialoma-darkgray mb-6">
                      Obtén tu copia de <span className="font-semibold">Transformación Digital Simplificada</span> hoy y comienza a implementar estrategias tecnológicas poderosas en tu empresa inmediatamente.
                    </p>
                    <div className="flex items-center gap-4 mb-6">
                      <div>
                        <p className="text-sm text-gray-500">Precio de Lanzamiento Especial</p>
                        <p className="text-3xl font-bold text-gialoma-gold">€5,99</p>
                      </div>
                      <p className="text-md text-gray-500 line-through">€15,99</p>
                      <p className="text-sm bg-red-100 text-red-800 px-2 py-1 rounded">Ahorra 63%</p>
                    </div>
                    <div className="flex gap-4">
                      <Button 
                        className="bg-white text-gialoma-gold hover:bg-gialoma-gold hover:text-white border border-gialoma-gold hover:border-gialoma-gold transition-colors px-8 py-6 text-lg"
                      >
                        Comprar Copia Digital
                      </Button>
                    </div>
                    <p className="text-sm text-gray-500 mt-4">
                      ¿Preguntas? Contáctanos en gialomals@gmail.com
                    </p>
                  </div>
                  <div className="md:w-1/3">
                    <div className="flex items-center justify-center bg-white p-4 rounded-lg shadow-md">
                      <div className="flex flex-col">
                        <p className="text-center mb-2">Formato Disponible:</p>
                        <div className="bg-gray-100 p-2 rounded text-center">
                          eBook PDF
                        </div>
                        <p className="text-xs text-center mt-4 text-gray-500">
                          Descarga instantánea tras la compra
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Testimonials */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center text-gialoma-black mb-12">Lo Que Dicen los Lectores</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {[
                {
                  quote: "Este libro transformó cómo abordo la tecnología en mi negocio. Solo el marco de ROI nos ahorró miles en inversiones tecnológicas innecesarias.",
                  author: "Sarah J., Propietaria de Pequeña Empresa"
                },
                {
                  quote: "¡Por fin, un libro de tecnología que no requiere un título en ingeniería para entender! Claro, práctico e inmediatamente aplicable a mi negocio.",
                  author: "Michael T., Director de Marketing"
                },
                {
                  quote: "Como alguien que siempre se sintió intimidada por la IA, este libro desglosó conceptos complejos en pasos que todo nuestro equipo pudo implementar.",
                  author: "Elena R., Gerente de Operaciones"
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
        
        {/* FAQ */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center text-gialoma-black mb-12">Preguntas Frecuentes</h2>
            <div className="max-w-3xl mx-auto space-y-6">
              {[
                {
                  question: "¿Es este libro adecuado para propietarios de empresas no técnicos?",
                  answer: "¡Absolutamente! Este libro fue escrito específicamente para propietarios de empresas y gerentes que pueden no tener conocimientos técnicos pero quieren aprovechar la tecnología de manera efectiva."
                },
                {
                  question: "¿En qué formato está disponible el libro?",
                  answer: "Actualmente, el libro está disponible solo como descarga digital en PDF. Esto te permite leerlo en cualquier dispositivo y tener acceso instantáneo al contenido después de la compra."
                },
                {
                  question: "¿Qué pasa si tengo problemas con mi compra?",
                  answer: "Si tienes algún problema con tu compra o descarga, por favor contáctanos en gialomals@gmail.com y estaremos encantados de ayudarte."
                },
                {
                  question: "¿Cómo se entrega la versión digital?",
                  answer: "Inmediatamente después de la compra, recibirás un email con enlaces de descarga para el PDF. Si tienes algún problema con la entrega, por favor contáctanos en gialomals@gmail.com."
                },
                {
                  question: "¿Hay copias físicas disponibles?",
                  answer: "No, el libro está actualmente disponible solo en formato digital (PDF). Esto nos permite ofrecerlo a un precio mucho más bajo y proporcionar acceso instantáneo."
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
        
        {/* Final CTA */}
        <section className="py-16 bg-gialoma-gold">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold text-white mb-6">Comienza Tu Viaje de Transformación Digital Hoy</h2>
            <p className="text-white/90 max-w-2xl mx-auto mb-8">
              Únete a miles de propietarios de empresas que han transformado exitosamente sus operaciones con las estrategias prácticas de este libro.
            </p>
            <Button 
              className="bg-white text-gialoma-gold hover:bg-gialoma-gold hover:text-white border border-white hover:border-white transition-colors px-8 py-6 text-lg"
            >
              Obtén Tu Copia Ahora - €5,99
            </Button>
            <p className="text-white/80 mt-4 text-sm">
              Formato PDF • Descarga instantánea
            </p>
          </div>
        </section>
      </div>
      
      <FooterEs />
      <CookieBannerEs />
    </div>
  );
};

export default BookEs;
