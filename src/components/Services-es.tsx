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
    <section id="servicios" className="section-padding bg-white pb-8">
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

        {/* Filter Buttons */}
        <div className="flex justify-center mb-12">
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

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {filteredServices.map((service) => (
            <div 
              key={service.id} 
              className={`service-card bg-gray-50 rounded-lg shadow-sm hover:shadow-lg transition-all duration-300 p-6 flex flex-col relative overflow-hidden border-2 ${
                service.highlight ? 'border-gialoma-gold bg-white' : 'border-gray-100'
              }`}
              onMouseEnter={() => setHoveredCard(service.id)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              {service.highlight && (
                <div className="absolute top-0 right-0 bg-gialoma-gold text-white text-xs px-3 py-1 rounded-bl-lg font-medium">
                  Popular
                </div>
              )}
              
              <div className="flex justify-center mb-6">
                <div className={`transition-all duration-300 ${
                  hoveredCard === service.id ? 'transform scale-110' : ''
                }`}>
                  {service.icon}
                </div>
              </div>
              
              <h3 className="text-xl font-semibold text-center mb-4 text-gialoma-black min-h-[3.5rem] flex items-center justify-center">
                {service.title}
              </h3>
              
              <p className="text-gialoma-darkgray mb-5 text-center text-sm md:text-base flex-grow">
                {service.description}
              </p>
              
              <div className="mb-6">
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start">
                      <span className="text-gialoma-gold mr-2">•</span>
                      <span className="text-gialoma-darkgray text-sm md:text-base">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
              
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
          ))}
        </div>
        
        <div className="mt-8 text-center">
          <p className="text-xl text-gialoma-darkgray mb-8 max-w-3xl mx-auto font-medium">
            ¿Necesitas una solución especializada? Ofrecemos servicios personalizados adaptados a las necesidades específicas de tu negocio.
          </p>
          <Button 
            className="bg-gialoma-gold hover:bg-gialoma-darkgold text-white text-lg px-8 py-3"
            onClick={scrollToContact}
          >
            Solicita una Consulta
          </Button>
        </div>
      </div>

      <style jsx>{`
        .container {
          max-width: 1200px;
          padding-left: 1rem;
          padding-right: 1rem;
          margin: 0 auto;
        }
        
        .section-padding {
          padding-top: 4rem;
          padding-bottom: 4rem;
        }
        
        .service-card {
          min-height: 32rem;
        }
        
        .text-gradient {
          background: linear-gradient(135deg, #d4af37 0%, #b8941f 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          color: #d4af37; /* Fallback for browsers that don't support background-clip */
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
        
        @media (max-width: 1024px) {
          .grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }
        
        @media (max-width: 768px) {
          .container {
            padding-left: 0.5rem;
            padding-right: 0.5rem;
          }
          
          .section-padding {
            padding-top: 2rem;
            padding-bottom: 2rem;
          }
          
          .grid {
            grid-template-columns: 1fr;
          }
          
          .service-card {
            min-height: 28rem;
          }
          
          .flex-wrap {
            flex-wrap: wrap;
          }
        }
        
        @media (max-width: 640px) {
          .text-sm {
            font-size: 0.875rem;
          }
          
          .md\\:text-base {
            font-size: 0.875rem;
          }
        }
      `}</style>
    </section>
  );
};

export default ServicesEs;