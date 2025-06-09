import React, { useState } from 'react';
import { Clock, Users, BarChart3, Globe, Heart, Lightbulb, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const solutions = [
  {
    icon: <Clock className="h-12 w-12 text-white" />,
    title: "El tiempo de calidad no es un lujo, es una necesidad",
    description: "Recupera tu recurso más valioso: el tiempo. Nuestras soluciones optimizan procesos para que puedas enfocarte en lo que realmente importa.",
    benefits: [
      "Automatiza tareas repetitivas",
      "Implementación de IA para resultados precisos"
    ],
    link: "#contactos",
    category: "efficiency"
  },
  {
    icon: <Users className="h-12 w-12 text-white" />,
    title: "No busques la perfección técnica, busca la autenticidad humana",
    description: "Mejora la experiencia de tus clientes con herramientas que te permiten responder rápida, profesional y consistentemente en todos los canales.",
    benefits: [
      "Respuestas instantáneas con chatbots de IA",
      "Formularios y reservas online"
    ],
    link: "#contactos",
    category: "experience"
  },
  {
    icon: <BarChart3 className="h-12 w-12 text-white" />,
    title: "Tecnología para la Realización Humana",
    description: "Mantente al día con tu negocio con información en tiempo real y paneles integrales que te dan visibilidad de todos los aspectos de tus operaciones.",
    benefits: [
      "Visibilidad en tiempo real de ventas, gastos y métricas",
      "Paneles intuitivos"
    ],
    link: "#contactos",
    category: "growth"
  },
  {
    icon: <Globe className="h-12 w-12 text-white" />,
    title: "La visibilidad online ya no es opcional",
    description: "Destácate en el panorama digital con una presencia online optimizada que ayude a los clientes potenciales a encontrar y confiar en tu negocio.",
    benefits: [
      "Sitios web optimizados que aparecen en Google",
      "Presencia activa en redes sociales y directorios empresariales"
    ],
    link: "#contactos",
    category: "experience"
  },
  {
    icon: <Heart className="h-12 w-12 text-white" />,
    title: "No optimizamos procesos, optimizamos vidas",
    description: "Reduce la ansiedad empresarial y crea armonía organizacional con sistemas que centralizan la información y automatizan reportes.",
    benefits: [
      "Todos los datos centralizados y accesibles",
      "Reportes sin esfuerzo e insights automatizados"
    ],
    link: "#contactos",
    category: "growth"
  },
  {
    icon: <Lightbulb className="h-12 w-12 text-white" />,
    title: "No se trata de automatizar todo, sino de automatizar inteligentemente",
    description: "Ya sea que comiences desde cero o busques optimizar, nuestro enfoque se adapta a tu nivel de comodidad tecnológica y madurez empresarial.",
    benefits: [
      "Si eres analógico, te guiaremos paso a paso",
      "Si eres digital, te ayudaremos a escalar"
    ],
    link: "#contactos",
    category: "efficiency"
  }
];

const categories = {
  efficiency: {
    name: "Eficiencia",
    description: "Optimiza tu tiempo y procesos",
    icon: <Clock className="h-5 w-5" />
  },
  experience: {
    name: "Experiencia",
    description: "Mejora la experiencia del cliente", 
    icon: <Users className="h-5 w-5" />
  },
  growth: {
    name: "Crecimiento",
    description: "Impulsa el crecimiento de tu negocio",
    icon: <BarChart3 className="h-5 w-5" />
  }
};

const SolutionsEs = () => {
  const [activeTab, setActiveTab] = useState('efficiency');

  const handleSolutionClick = (link) => {
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

  const filteredSolutions = solutions.filter(solution => solution.category === activeTab);

  return (
    <section id="soluciones" className="section-padding-responsive bg-gradient-to-r from-gialoma-darkgold to-gialoma-gold overflow-hidden">
      <div className="container-adaptive mx-auto">
        <div className="text-center mb-12 xl:mb-16">
          <h2 className="heading-responsive font-bold mb-6 text-white">
            Hemos automatizado lo que se puede automatizar para humanizar lo que es humano
          </h2>
          <p className="text-responsive-xl text-white/90 max-w-4xl xl:max-w-5xl mx-auto">
            Nuestras soluciones generan un impacto real al resolver problemas concretos y proporcionar beneficios tangibles que transforman cómo trabajas y vives.
          </p>
        </div>

        <div className="relative">
          {/* Tab Navigation - Enhanced for larger screens */}
          <div className="flex justify-center mb-8 xl:mb-12">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-1 xl:p-2 flex flex-wrap gap-1 xl:gap-2 justify-center">
              {Object.entries(categories).map(([key, category]) => (
                <button
                  key={key}
                  onClick={() => setActiveTab(key)}
                  className={`px-4 md:px-6 xl:px-8 py-3 xl:py-4 rounded-md font-medium transition-all duration-300 flex items-center gap-2 xl:gap-3 ${
                    activeTab === key
                      ? 'bg-white text-gialoma-gold shadow-md'
                      : 'text-white hover:bg-white/10'
                  }`}
                >
                  {category.icon}
                  <div className="text-center">
                    <div className="font-semibold text-base md:text-lg xl:text-xl">{category.name}</div>
                    <div className="text-sm xl:text-base opacity-80 hidden md:block">{category.description}</div>
                  </div>
                </button>
              ))}
            </div>
          </div>
          
          {/* Content area - Enhanced responsive grid */}
          <div className="flex justify-center">
            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-2 gap-8 xl:gap-12 max-w-8xl w-full">
              {filteredSolutions.map((solution, index) => (
                <div 
                  key={index} 
                  className="bg-white/10 backdrop-blur-sm rounded-lg p-8 xl:p-10 shadow-md border border-white/20 hover:bg-white/15 transition-all duration-300 flex flex-col"
                  style={{ 
                    minHeight: "650px",
                    height: "auto" 
                  }}
                >
                  {/* Icon section - enhanced for larger screens */}
                  <div className="flex justify-center mb-6 xl:mb-8">
                    <div className="bg-white/20 p-5 xl:p-6 rounded-full">
                      <div className="xl:scale-125">
                        {solution.icon}
                      </div>
                    </div>
                  </div>
                  
                  {/* Title section - responsive height */}
                  <div className="min-h-24 xl:min-h-28 flex items-center justify-center mb-6 xl:mb-8">
                    <h3 className="text-2xl md:text-3xl xl:text-4xl font-semibold text-white text-center leading-tight">
                      {solution.title}
                    </h3>
                  </div>
                  
                  {/* Description section - enhanced text */}
                  <div className="mb-6 xl:mb-8">
                    <p className="text-white/90 text-base md:text-lg xl:text-xl text-justify leading-relaxed">
                      {solution.description}
                    </p>
                  </div>
                  
                  {/* Benefits section - enhanced spacing */}
                  <div className="flex-grow mb-6 xl:mb-8">
                    <ul className="space-y-4 xl:space-y-6">
                      {solution.benefits.map((benefit, idx) => (
                        <li key={idx} className="flex items-start">
                          <span className="text-white mr-3 xl:mr-4 flex-shrink-0 text-lg xl:text-xl">•</span>
                          <span className="text-white/90 text-base md:text-lg xl:text-xl text-justify leading-relaxed">
                            {benefit}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  {/* Button section - enhanced sizing */}
                  <div className="mt-auto">
                    <Button 
                      variant="outline" 
                      className="bg-white text-black hover:text-gialoma-gold border-white hover:border-white flex items-center w-full justify-center transition-colors text-base xl:text-lg py-6 xl:py-7"
                      onClick={() => handleSolutionClick(solution.link)}
                    >
                      Saber Más <ArrowRight className="ml-2 h-4 w-4 xl:h-5 xl:w-5" />
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        <div className="mt-12 xl:mt-16 text-center">
          <p className="text-xl md:text-2xl xl:text-3xl text-white/95 mb-6 xl:mb-8 max-w-4xl xl:max-w-5xl mx-auto font-medium">
            ¿Listo para experimentar estos beneficios en tu negocio? Comencemos con una conversación sobre tus necesidades.
          </p>
          <Button 
            className="bg-white text-gialoma-gold hover:bg-white/90 text-lg md:text-xl xl:text-2xl px-8 xl:px-12 py-4 xl:py-6"
            onClick={scrollToContact}
          >
            Programa una Consulta
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
      `}</style>
    </section>
  );
};

export default SolutionsEs;