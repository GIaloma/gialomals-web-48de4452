import React, { useState } from 'react';
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

  const scrollToContact = () => {
    const contactSection = document.getElementById('contactos');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const filteredServices = activeFilter === 'all' 
    ? services 
    : services.filter(service => service.category === activeFilter);

  return (
    <section id="servicios" className="section-padding-responsive bg-white overflow-hidden">
      <div className="container-adaptive mx-auto">
        <div className="text-center mb-12 xl:mb-16">
          <h2 className="heading-responsive font-bold mb-6">
            <span className="text-gradient">La automatización sin supervisión es como un coche sin conductor</span>
          </h2>
          <p className="text-responsive-xl text-gialoma-darkgray max-w-4xl xl:max-w-5xl mx-auto">
            Ofrecemos una gama de servicios especializados diseñados para optimizar las operaciones de tu negocio 
            y mejorar tu presencia digital.
          </p>
        </div>

        {/* Filter Buttons - Enhanced for larger screens */}
        <div className="relative mb-6 xl:mb-8">
          <div className="flex justify-center">
            <div className="bg-gray-100 rounded-lg p-1 xl:p-2 flex flex-wrap gap-1 xl:gap-2 justify-center">
              {Object.entries(categories).map(([key, label]) => (
                <button
                  key={key}
                  onClick={() => setActiveFilter(key)}
                  className={`px-4 md:px-6 xl:px-8 py-2 xl:py-3 rounded-md font-medium transition-all duration-300 text-sm md:text-base xl:text-lg ${
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

        {/* Services Grid - Enhanced responsive grid */}
        <div className="relative">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-3 gap-6 xl:gap-8 2xl:gap-12">
            {filteredServices.map((service) => (
              <div 
                key={service.id} 
                className={`bg-gray-50 rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col h-auto min-h-[560px] xl:min-h-[600px] ${
                  service.highlight ? 'border-2 border-gialoma-gold bg-white' : ''
                }`}
                onMouseEnter={() => setHoveredCard(service.id)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                {service.highlight && (
                  <div className="absolute top-0 right-0 bg-gialoma-gold text-white text-xs xl:text-sm px-3 xl:px-4 py-1 xl:py-2 rounded-bl-lg font-medium relative">
                    Popular
                  </div>
                )}
                
                <div className="p-6 xl:p-8 flex flex-col h-full">
                  <div className="flex justify-center mb-6 xl:mb-8">
                    <div className={`transition-all duration-300 ${
                      hoveredCard === service.id ? 'transform scale-110' : ''
                    }`}>
                      <div className="xl:scale-125">
                        {service.icon}
                      </div>
                    </div>
                  </div>
                  
                  {/* Title - Enhanced responsive sizing */}
                  <h3 className="text-xl xl:text-2xl 2xl:text-3xl font-semibold text-center mb-4 xl:mb-6 text-gialoma-black flex items-center justify-center" 
                      style={{ minHeight: '60px', height: 'auto', wordBreak: 'break-word' }}>
                    {service.title}
                  </h3>
                  
                  {/* Description - Enhanced text sizing */}
                  <p className="text-gialoma-darkgray mb-5 xl:mb-6 text-justify text-sm md:text-base xl:text-lg overflow-visible" 
                     style={{ minHeight: '100px', height: 'auto', wordBreak: 'break-word' }}>
                    {service.description}
                  </p>
                  
                  {/* Features section - Enhanced spacing and text */}
                  <div className="flex-grow mb-4 xl:mb-6">
                    <ul className="space-y-2 xl:space-y-3">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start">
                          <span className="text-gialoma-gold mr-2 xl:mr-3 text-lg xl:text-xl">•</span>
                          <span className="text-gialoma-darkgray text-sm md:text-base xl:text-lg text-justify" style={{ wordBreak: 'break-word' }}>
                            {feature}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  {/* Button - Enhanced sizing */}
                  <div className="mt-auto">
                    <Button 
                      variant="outline" 
                      className={`transition-all duration-300 flex items-center w-full justify-center group text-base xl:text-lg py-3 xl:py-4 ${
                        service.highlight 
                          ? 'bg-gialoma-gold text-white border-gialoma-gold hover:bg-gialoma-darkgold' 
                          : 'text-gialoma-gold border-gialoma-gold hover:bg-gialoma-gold hover:text-white'
                      }`}
                      onClick={() => handleServiceClick(service.link)}
                    >
                      Saber Más 
                      <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform xl:h-5 xl:w-5" size={16} />
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Bottom section - Enhanced responsive spacing */}
        <div className="mt-12 xl:mt-16 text-center">
          <p className="text-xl xl:text-2xl 2xl:text-3xl text-gialoma-darkgray mb-8 xl:mb-10 max-w-4xl xl:max-w-5xl mx-auto font-medium">
            ¿Necesitas una solución especializada? Ofrecemos servicios personalizados adaptados a las necesidades específicas de tu negocio.
          </p>
          <Button 
            className="bg-gialoma-gold hover:bg-gialoma-darkgold text-white text-lg xl:text-xl 2xl:text-2xl px-8 xl:px-12 py-3 xl:py-4"
            onClick={scrollToContact}
          >
            Solicita una Consulta
          </Button>
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
        
        /* Enhanced responsive adjustments */
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