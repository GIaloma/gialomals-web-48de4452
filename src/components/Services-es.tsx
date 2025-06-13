import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Cog, Monitor, Bot, Briefcase, FileSpreadsheet, Search } from 'lucide-react';

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
    link: "#contactos",
    category: "automation",
    highlight: true
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
    link: "#contactos",
    category: "automation",
    highlight: true
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
    link: "#contactos",
    category: "digital"
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
    link: "#contactos",
    category: "consulting"
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
    link: "#contactos",
    category: "consulting"
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
    link: "#contactos",
    category: "digital"
  }
];

const categories = {
  all: "Todos los Servicios",
  automation: "Automatización",
  digital: "Presencia Digital",
  consulting: "Consultoría"
};

const ServicesEs = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [hoveredCard, setHoveredCard] = useState(null);
  const [showTidyCal, setShowTidyCal] = useState(false);

  // Load TidyCal script when component mounts
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://asset-tidycal.b-cdn.net/js/embed.js';
    script.async = true;
    document.head.appendChild(script);

    return () => {
      // Cleanup script when component unmounts
      document.head.removeChild(script);
    };
  }, []);

  const handleServiceClick = (link) => {
    if (link.startsWith('#')) {
      const element = document.querySelector(link);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      window.location.href = link;
    }
  };

  const handleConsultaClick = () => {
    setShowTidyCal(true);
  };

  const filteredServices = activeFilter === 'all' 
    ? services 
    : services.filter(service => service.category === activeFilter);

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

        {/* Filter Buttons - Same height as original carousel navigation area */}
        <div className="relative mb-4">
          <div className="flex justify-center">
            <div className="bg-gray-100 rounded-lg p-1 flex flex-wrap gap-1 justify-center">
              {Object.entries(categories).map(([key, label]) => (
                <button
                  key={key}
                  onClick={() => setActiveFilter(key)}
                  className={`px-4 md:px-6 py-2 rounded-md font-medium transition-all duration-300 text-sm md:text-base ${
                    activeFilter === key
                      ? 'bg-gialoma-gold text-white shadow-md'
                      : 'text-gray-600 hover:bg-gray-200'
                  }`}
                >
                  {label}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Services Grid - Maintains same content area height as carousel */}
        <div className="relative" style={{ minHeight: '560px' }}>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 pb-4">
            {filteredServices.map((service) => (
              <div 
                key={service.id} 
                className={`bg-gray-50 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 flex flex-col h-[560px] ${
                  service.highlight ? 'border-2 border-gialoma-gold bg-white' : ''
                }`}
                onMouseEnter={() => setHoveredCard(service.id)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                {service.highlight && (
                  <div className="absolute top-0 right-0 bg-gialoma-gold text-white text-xs px-3 py-1 rounded-bl-lg font-medium relative">
                    Popular
                  </div>
                )}
                
                <div className="p-6 flex flex-col h-full">
                  <div className="flex justify-center mb-6">
                    <div className={`transition-all duration-300 ${
                      hoveredCard === service.id ? 'transform scale-110' : ''
                    }`}>
                      {service.icon}
                    </div>
                  </div>
                  
                  {/* Title - Justified text */}
                  <h3 className="text-xl font-semibold text-center mb-4 text-gialoma-black flex items-center justify-center" 
                      style={{ minHeight: '60px', height: 'auto', wordBreak: 'break-word' }}>
                    {service.title}
                  </h3>
                  
                  {/* Description - Justified text */}
                  <p className="text-gialoma-darkgray mb-5 text-justify text-sm md:text-base overflow-visible" 
                     style={{ minHeight: '100px', height: 'auto', wordBreak: 'break-word' }}>
                    {service.description}
                  </p>
                  
                  {/* Features section - Justified text */}
                  <div className="flex-grow mb-4">
                    <ul className="space-y-2">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start">
                          <span className="text-gialoma-gold mr-2">•</span>
                          <span className="text-gialoma-darkgray text-sm md:text-base text-justify" style={{ wordBreak: 'break-word' }}>
                            {feature}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  {/* Button - Same styling as original */}
                  <div className="mt-auto">
                    <Button 
                      variant="outline" 
                      className={`transition-all duration-300 flex items-center w-full justify-center group ${
                        service.highlight 
                          ? 'bg-gialoma-gold text-white border-gialoma-gold hover:bg-gialoma-darkgold' 
                          : 'text-gialoma-gold border-gialoma-gold hover:bg-gialoma-gold hover:text-white'
                      }`}
                      onClick={() => handleServiceClick(service.link)}
                    >
                      Saber Más 
                      <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={16} />
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Bottom section - Exact same spacing as original */}
        <div className="mt-8 text-center">
          <p className="text-xl text-gialoma-darkgray mb-8 max-w-3xl mx-auto font-medium">
            ¿Necesitas una solución especializada? Ofrecemos servicios personalizados adaptados a las necesidades específicas de tu negocio.
          </p>
          
          {/* TidyCal embed or button */}
          {showTidyCal ? (
            <div className="max-w-2xl mx-auto">
              <div className="tidycal-embed" data-path="gialomals/solicita-una-consulta"></div>
            </div>
          ) : (
            <Button 
              className="bg-gialoma-gold hover:bg-gialoma-darkgold text-white text-lg px-8 py-3"
              onClick={handleConsultaClick}
            >
              Solicita una Consulta
            </Button>
          )}
        </div>
      </div>

      <style jsx>{`
        /* Preserve all original CSS custom properties and classes */
        .text-gradient {
          background: linear-gradient(135deg, #d4af37 0%, #b8941f 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          color: #d4af37;
        }
        
        .text-gialoma-gold {
          color: #d4af37;
        }
        
        .text-gialoma-darkgray {
          color: #6b7280;
        }
        
        .text-gialoma-black {
          color: #1f2937;
        }
        
        .bg-gialoma-gold {
          background-color: #d4af37;
        }
        
        .bg-gialoma-darkgold {
          background-color: #b8941f;
        }
        
        .border-gialoma-gold {
          border-color: #d4af37;
        }
        
        .hover\\:bg-gialoma-gold:hover {
          background-color: #d4af37;
        }
        
        .hover\\:bg-gialoma-darkgold:hover {
          background-color: #b8941f;
        }
        
        .hover\\:bg-gray-200:hover {
          background-color: #e5e7eb;
        }
        
        /* Responsive adjustments matching original */
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
          
          .grid {
            grid-template-columns: 1fr;
          }
        }
        
        @media (max-width: 1024px) and (min-width: 641px) {
          .grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }
      `}</style>
    </section>
  );
};

export default ServicesEs;