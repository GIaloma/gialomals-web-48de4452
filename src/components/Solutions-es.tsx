
import React, { useRef, useEffect, useState } from 'react';
import { Clock, Users, ChartBar, Globe, HeartPulse, Lightbulb, ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const solutions = [
  {
    icon: <Clock className="h-12 w-12 text-gialoma-gold" />,
    title: "El tiempo de calidad no es un lujo, es una necesidad",
    description: "Recupera tu recurso más valioso: el tiempo. Nuestras soluciones optimizan procesos para que puedas enfocarte en lo que realmente importa.",
    benefits: [
      "Automatiza tareas repetitivas",
      "Implementación de IA para resultados precisos"
    ],
    link: "#contactos"
  },
  {
    icon: <Users className="h-12 w-12 text-gialoma-gold" />,
    title: "No busques la perfección técnica, busca la autenticidad humana",
    description: "Mejora la experiencia de tus clientes con herramientas que te permiten responder rápida, profesional y consistentemente en todos los canales.",
    benefits: [
      "Respuestas instantáneas con chatbots de IA",
      "Formularios y reservas online"
    ],
    link: "#contactos"
  },
  {
    icon: <ChartBar className="h-12 w-12 text-gialoma-gold" />,
    title: "Tecnología para la Realización Humana",
    description: "Mantente al día con tu negocio con información en tiempo real y paneles integrales que te dan visibilidad de todos los aspectos de tus operaciones.",
    benefits: [
      "Visibilidad en tiempo real de ventas, gastos y métricas",
      "Paneles intuitivos"
    ],
    link: "#contactos"
  },
  {
    icon: <Globe className="h-12 w-12 text-gialoma-gold" />,
    title: "La visibilidad online ya no es opcional",
    description: "Destácate en el panorama digital con una presencia online optimizada que ayude a los clientes potenciales a encontrar y confiar en tu negocio.",
    benefits: [
      "Sitios web optimizados que aparecen en Google",
      "Presencia activa en redes sociales y directorios empresariales"
    ],
    link: "#contactos"
  },
  {
    icon: <HeartPulse className="h-12 w-12 text-gialoma-gold" />,
    title: "No optimizamos procesos, optimizamos vidas",
    description: "Reduce la ansiedad empresarial y crea armonía organizacional con sistemas que centralizan la información y automatizan reportes.",
    benefits: [
      "Todos los datos centralizados y accesibles",
      "Reportes sin esfuerzo e insights automatizados"
    ],
    link: "#contactos"
  },
  {
    icon: <Lightbulb className="h-12 w-12 text-gialoma-gold" />,
    title: "No se trata de automatizar todo, sino de automatizar inteligentemente",
    description: "Ya sea que comiences desde cero o busques optimizar, nuestro enfoque se adapta a tu nivel de comodidad tecnológica y madurez empresarial.",
    benefits: [
      "Si eres analógico, te guiaremos paso a paso",
      "Si eres digital, te ayudaremos a escalar"
    ],
    link: "#contactos"
  }
];

const SolutionsEs = () => {
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
      const newIndex = currentIndex > 0 ? currentIndex - 1 : solutions.length - 1;
      setCurrentIndex(newIndex);
      scrollRef.current.scrollTo({ left: newIndex * 340, behavior: 'smooth' });
      
      // Resume auto scrolling after manual interaction
      setTimeout(() => setIsAutoScrolling(true), 2000);
    }
  };
  
  const handleScrollRight = () => {
    if (scrollRef.current) {
      setIsAutoScrolling(false);
      const newIndex = currentIndex < solutions.length - 1 ? currentIndex + 1 : 0;
      setCurrentIndex(newIndex);
      scrollRef.current.scrollTo({ left: newIndex * 340, behavior: 'smooth' });
      
      // Resume auto scrolling after manual interaction
      setTimeout(() => setIsAutoScrolling(true), 2000);
    }
  };

  const handleSolutionClick = (link: string) => {
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
    <section id="soluciones" className="section-padding bg-gradient-to-r from-gialoma-darkgold to-gialoma-gold overflow-hidden">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
            Hemos automatizado lo que se puede automatizar para humanizar lo que es humano
          </h2>
          <p className="text-lg text-white/90 max-w-3xl mx-auto">
            Nuestras soluciones generan un impacto real al resolver problemas concretos y proporcionar beneficios tangibles que transforman cómo trabajas y vives.
          </p>
        </div>

        <div className="relative">
          {/* Navigation Arrows */}
          <button 
            onClick={handleScrollLeft}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 bg-white/30 hover:bg-white/50 rounded-full p-2 text-white focus:outline-none -ml-4"
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
            {solutions.map((solution, index) => (
              <div 
                key={index} 
                className="bg-white/10 backdrop-blur-sm rounded-lg p-6 shadow-md border border-white/20 hover:bg-white/15 transition-all duration-300 min-w-[330px] flex flex-col"
                style={{ height: "560px" }}
              >
                {/* Top section with fixed height */}
                <div>
                  <div className="mb-5 flex justify-center">
                    <div className="bg-white/20 p-4 rounded-full">
                      {solution.icon}
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-semibold mb-3 text-white text-center flex items-center justify-center min-h-[80px]">
                    {solution.title}
                  </h3>
                  
                  <p className="text-white/90 mb-4 text-sm md:text-base">
                    {solution.description}
                  </p>
                </div>
                
                {/* Middle section with flex-grow */}
                <div className="flex-grow">
                  <ul className="space-y-2">
                    {solution.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-start">
                        <span className="text-white mr-2 flex-shrink-0">•</span>
                        <span className="text-white/90 text-sm md:text-base">
                          {benefit}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                {/* Bottom section with fixed position */}
                <div className="mt-auto pt-4">
                  <Button 
                    variant="outline" 
                    className="bg-white text-black hover:text-gialoma-gold border-white hover:border-white flex items-center w-full justify-center transition-colors"
                    onClick={() => handleSolutionClick(solution.link)}
                  >
                    Saber Más <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </div>
            ))}
          </div>
          
          <button 
            onClick={handleScrollRight}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 bg-white/30 hover:bg-white/50 rounded-full p-2 text-white focus:outline-none -mr-4"
            aria-label="Desplazar a la derecha"
          >
            <ChevronRight size={24} />
          </button>
        </div>
        
        <div className="mt-12 text-center">
          <p className="text-white/90 mb-6 max-w-2xl mx-auto">
            ¿Listo para experimentar estos beneficios en tu negocio? Comencemos con una conversación sobre tus necesidades.
          </p>
          <Button 
            className="bg-white text-gialoma-gold hover:bg-white/90"
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
