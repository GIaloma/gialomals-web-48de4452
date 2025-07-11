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

  const handleProgramaConsulta = () => {
    // Open TidyCal booking page in a new tab
    window.open('https://tidycal.com/gialomals/programa-una-consulta', '_blank');
  };

  const filteredSolutions = solutions.filter(solution => solution.category === activeTab);

  return (
    <section id="soluciones" className="section-padding bg-gradient-to-r from-gialoma-darkgold to-gialoma-gold overflow-hidden">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            Hemos automatizado lo que se puede automatizar para humanizar lo que es humano
          </h2>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            Nuestras soluciones generan un impacto real al resolver problemas concretos y proporcionar beneficios tangibles que transforman cómo trabajas y vives.
          </p>
        </div>

        <div className="relative">
          {/* Tab Navigation - Replaces the navigation arrows area */}
          <div className="flex justify-center mb-6">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-1 flex flex-wrap gap-1 justify-center">
              {Object.entries(categories).map(([key, category]) => (
                <button
                  key={key}
                  onClick={() => setActiveTab(key)}
                  className={`px-4 md:px-6 py-3 rounded-md font-medium transition-all duration-300 flex items-center gap-2 ${
                    activeTab === key
                      ? 'bg-white text-gialoma-gold shadow-md'
                      : 'text-white hover:bg-white/10'
                  }`}
                >
                  {category.icon}
                  <div className="text-center">
                    <div className="font-semibold text-base md:text-lg">{category.name}</div>
                    <div className="text-sm opacity-80 hidden md:block">{category.description}</div>
                  </div>
                </button>
              ))}
            </div>
          </div>
          
          {/* Content area - Centered cards taking full space */}
          <div className="flex justify-center">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-7xl w-full px-8">
              {filteredSolutions.map((solution, index) => (
                <div 
                  key={index} 
                  className="bg-white/10 backdrop-blur-sm rounded-lg p-8 shadow-md border border-white/20 hover:bg-white/15 transition-all duration-300 flex flex-col"
                  style={{ 
                    minHeight: "650px",
                    height: "650px" 
                  }}
                >
                  {/* Icon section - fixed height */}
                  <div className="flex justify-center mb-6">
                    <div className="bg-white/20 p-5 rounded-full">
                      {solution.icon}
                    </div>
                  </div>
                  
                  {/* Title section - fixed height */}
                  <div className="h-24 flex items-center justify-center mb-6">
                    <h3 className="text-2xl md:text-3xl font-semibold text-white text-center leading-tight">
                      {solution.title}
                    </h3>
                  </div>
                  
                  {/* Description section - fixed height */}
                  <div className="h-28 mb-6">
                    <p className="text-white/90 text-base md:text-lg text-justify leading-relaxed">
                      {solution.description}
                    </p>
                  </div>
                  
                  {/* Benefits section - flexible height but contained */}
                  <div className="flex-grow mb-6">
                    <ul className="space-y-4">
                      {solution.benefits.map((benefit, idx) => (
                        <li key={idx} className="flex items-start">
                          <span className="text-white mr-3 flex-shrink-0 text-lg">•</span>
                          <span className="text-white/90 text-base md:text-lg text-justify leading-relaxed">
                            {benefit}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  {/* Button section - fixed at bottom */}
                  <div className="mt-auto">
                    <Button 
                      variant="outline" 
                      className="bg-white text-black hover:text-gialoma-gold border-white hover:border-white flex items-center w-full justify-center transition-colors text-base py-6"
                      onClick={() => handleSolutionClick(solution.link)}
                    >
                      Saber Más <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        <div className="mt-8 text-center">
          <p className="text-xl md:text-2xl text-white/95 mb-6 max-w-3xl mx-auto font-medium">
            ¿Listo para experimentar estos beneficios en tu negocio? Comencemos con una conversación sobre tus necesidades.
          </p>
          <Button 
            className="bg-white text-gialoma-gold hover:bg-white/90 text-lg md:text-xl px-8 py-4"
            onClick={handleProgramaConsulta}
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