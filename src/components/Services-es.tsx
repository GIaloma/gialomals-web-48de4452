
import React, { useRef, useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Cog, Monitor, Bot, Briefcase, FileSpreadsheet, Search, ChevronLeft, ChevronRight } from 'lucide-react';

const services = [
  {
    id: 1,
    title: "Automatización de Procesos",
    description: "Optimiza tus operaciones con soluciones de automatización inteligente que eliminan tareas repetitivas, reducen errores y aumentan la eficiencia.",
    features: [
      "Creación de flujos de trabajo automatizados",
      "Control de facturas y albaranes",
      "Automatización de reservas, horarios y citas"
    ],
    icon: <Cog className="h-14 w-14 text-gialoma-gold" />,
    link: "#contactos"
  },
  {
    id: 2,
    title: "Diseño y Desarrollo Web",
    description: "Obtén una presencia online profesional con nuestros sitios web personalizados que son responsivos, fáciles de usar y diseñados para convertir visitantes en clientes.",
    features: [
      "Sitios web corporativos responsivos",
      "Páginas de aterrizaje",
      "Integración de formularios inteligentes"
    ],
    icon: <Monitor className="h-14 w-14 text-gialoma-gold" />,
    link: "#contactos"
  },
  {
    id: 3,
    title: "Asistentes Virtuales IA y Chatbots",
    description: "Mejora el servicio al cliente y la eficiencia operacional con asistentes inteligentes que manejan consultas, citas y soporte las 24 horas.",
    features: [
      "Asistentes básicos, avanzados o completos",
      "Soporte multicanal",
      "Integración con WhatsApp, web y redes sociales"
    ],
    icon: <Bot className="h-14 w-14 text-gialoma-gold" />,
    link: "#contactos"
  },
  {
    id: 4,
    title: "Consultoría Tecnológica Personalizada",
    description: "Obtén orientación experta adaptada a las necesidades de tu negocio con nuestros servicios de consultoría. Te ayudaremos a navegar el panorama digital e implementar las soluciones correctas.",
    features: [
      "Diagnóstico inicial gratuito",
      "Análisis de procesos actuales",
      "Diseño de plan de transformación digital"
    ],
    icon: <Briefcase className="h-14 w-14 text-gialoma-gold" />,
    link: "#contactos"
  },
  {
    id: 5,
    title: "Optimización e Informes de Negocio",
    description: "Obtén información valiosa sobre el rendimiento de tu negocio con nuestras soluciones de reportes personalizados, ayudándote a tomar decisiones basadas en datos con confianza.",
    features: [
      "Paneles interactivos",
      "Control de KPIs y métricas",
      "Reportes automatizados"
    ],
    icon: <FileSpreadsheet className="h-14 w-14 text-gialoma-gold" />,
    link: "#contactos"
  },
  {
    id: 6,
    title: "Visibilidad Digital",
    description: "Aumenta tu presencia online y alcanza más clientes potenciales con nuestros servicios de visibilidad digital que te ayudan a destacar en un mercado competitivo.",
    features: [
      "SEO básico para sitios web",
      "Configuración de Google My Business",
      "Integración de analíticas web"
    ],
    icon: <Search className="h-14 w-14 text-gialoma-gold" />,
    link: "#contactos"
  }
];

const ServicesEs = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isAutoScrolling, setIsAutoScrolling] = useState(true);
  const [currentIndex, setCurrentIndex] = useState(0);
  const scrollIntervalRef = useRef<NodeJS.Timeout | null>(null);
  
  const startAutoScroll = () => {
    if (scrollIntervalRef.current) {
      clearInterval(scrollIntervalRef.current);
    }
    
    scrollIntervalRef.current = setInterval(() => {
      if (scrollRef.current && isAutoScrolling) {
        const scrollLeft = scrollRef.current.scrollLeft;
        const maxScroll = scrollRef.current.scrollWidth - scrollRef.current.clientWidth;
        
        if (scrollLeft >= maxScroll) {
          // Reset to beginning when reaching the end
          scrollRef.current.scrollLeft = 0;
          setCurrentIndex(0);
        } else {
          // Increment scroll position (increased by 15%)
          scrollRef.current.scrollLeft += 1.15;
          // Update current index based on scroll position
          const cardWidth = 340; // approximate card width + gap
          setCurrentIndex(Math.round(scrollLeft / cardWidth));
        }
      }
    }, 50);
  };
  
  useEffect(() => {
    startAutoScroll();
    return () => {
      if (scrollIntervalRef.current) {
        clearInterval(scrollIntervalRef.current);
      }
    };
  }, [isAutoScrolling]);
  
  const handleScrollLeft = () => {
    if (scrollRef.current) {
      setIsAutoScrolling(false);
      const newIndex = currentIndex > 0 ? currentIndex - 1 : services.length - 1;
      setCurrentIndex(newIndex);
      scrollRef.current.scrollTo({ left: newIndex * 340, behavior: 'smooth' });
      
      // Resume auto scrolling after manual interaction
      setTimeout(() => setIsAutoScrolling(true), 2000);
    }
  };
  
  const handleScrollRight = () => {
    if (scrollRef.current) {
      setIsAutoScrolling(false);
      const newIndex = currentIndex < services.length - 1 ? currentIndex + 1 : 0;
      setCurrentIndex(newIndex);
      scrollRef.current.scrollTo({ left: newIndex * 340, behavior: 'smooth' });
      
      // Resume auto scrolling after manual interaction
      setTimeout(() => setIsAutoScrolling(true), 2000);
    }
  };

  const handleServiceClick = (link: string) => {
    if (link.startsWith('#')) {
      const element = document.querySelector(link);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      window.location.href = link;
    }
  };

  const scrollToContact = () => {
    const contactSection = document.getElementById('contactos');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="servicios" className="section-padding bg-white overflow-hidden pb-8">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-gradient">La automatización sin supervisión es como un coche sin conductor</span>
          </h2>
          <p className="text-lg text-gialoma-darkgray max-w-3xl mx-auto">
            Ofrecemos una gama de servicios especializados diseñados para optimizar las operaciones de tu negocio 
            y mejorar tu presencia digital.
          </p>
        </div>

        <div className="relative">
          {/* Navigation Arrows */}
          <button 
            onClick={handleScrollLeft}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 bg-gray-100 hover:bg-gray-200 rounded-full p-2 text-gray-600 focus:outline-none -ml-4"
            aria-label="Desplazar a la izquierda"
          >
            <ChevronLeft size={24} />
          </button>
          
          <div 
            ref={scrollRef}
            className="flex overflow-x-auto gap-6 pb-4 hide-scrollbar px-4"
            style={{ scrollBehavior: 'smooth' }}
            onMouseEnter={() => setIsAutoScrolling(false)}
            onMouseLeave={() => setIsAutoScrolling(true)}
          >
            {services.map((service) => (
              <div 
                key={service.id} 
                className="bg-gray-50 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 min-w-[330px] flex flex-col h-[560px]"
              >
                <div className="p-6 flex flex-col h-full">
                  <div className="flex justify-center mb-6">
                    {service.icon}
                  </div>
                  
                  {/* Title - Allow text to shrink if needed */}
                  <h3 className="text-xl font-semibold text-center mb-4 text-gialoma-black flex items-center justify-center" 
                      style={{ minHeight: '60px', height: 'auto', wordBreak: 'break-word' }}>
                    {service.title}
                  </h3>
                  
                  {/* Description - Allow text to adjust with smaller font on overflow */}
                  <p className="text-gialoma-darkgray mb-5 text-center text-sm md:text-base overflow-visible" 
                     style={{ minHeight: '100px', height: 'auto', wordBreak: 'break-word' }}>
                    {service.description}
                  </p>
                  
                  {/* Features section with flex-grow to push button to bottom */}
                  <div className="flex-grow mb-4">
                    <ul className="space-y-2">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start">
                          <span className="text-gialoma-gold mr-2">•</span>
                          <span className="text-gialoma-darkgray text-sm md:text-base" style={{ wordBreak: 'break-word' }}>
                            {feature}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  {/* Button container with fixed position at bottom */}
                  <div className="mt-auto">
                    <Button 
                      variant="outline" 
                      className="text-gialoma-gold border-gialoma-gold hover:bg-gialoma-gold hover:text-white transition-colors flex items-center w-full justify-center"
                      onClick={() => handleServiceClick(service.link)}
                    >
                      Saber Más <ArrowRight className="ml-2" size={16} />
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <button 
            onClick={handleScrollRight}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 bg-gray-100 hover:bg-gray-200 rounded-full p-2 text-gray-600 focus:outline-none -mr-4"
            aria-label="Desplazar a la derecha"
          >
            <ChevronRight size={24} />
          </button>
        </div>
        
        <div className="mt-8 text-center">
          <p className="text-gialoma-darkgray mb-6 max-w-2xl mx-auto">
            ¿Necesitas una solución especializada? Ofrecemos servicios personalizados adaptados a las necesidades específicas de tu negocio.
          </p>
          <Button 
            className="bg-gialoma-gold hover:bg-gialoma-darkgold text-white"
            onClick={scrollToContact}
          >
            Solicita una Consulta
          </Button>
        </div>
      </div>

      <style jsx>{`
        .hide-scrollbar {
          -ms-overflow-style: none;  /* Internet Explorer and Edge */
          scrollbar-width: none;  /* Firefox */
        }
        .hide-scrollbar::-webkit-scrollbar {
          display: none;  /* Chrome, Safari, Opera */
        }
        
        /* Responsive font-size adjustments */
        @media (max-width: 640px) {
          .service-card-title {
            font-size: 1.1rem;
          }
          .service-card-description {
            font-size: 0.9rem;
          }
          .service-card-feature {
            font-size: 0.9rem;
          }
        }
      `}</style>
    </section>
  );
};

export default ServicesEs;
