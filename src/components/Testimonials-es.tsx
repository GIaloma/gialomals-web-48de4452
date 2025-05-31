import React, { useRef, useEffect, useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    quote: "Las soluciones de Gialoma han transformado nuestras operaciones, ahorrándonos incontables horas cada semana. Su tecnología es intuitiva y efectiva.",
    author: "Sarah Johnson",
    position: "Directora de Operaciones, TechCorp"
  },
  {
    id: 2,
    quote: "Trabajar con Gialoma ha sido un cambio revolucionario para nuestro negocio. Su software personalizado ha automatizado nuestras tareas más laboriosas.",
    author: "Michael Chen",
    position: "CEO, Innovate Inc."
  },
  {
    id: 3,
    quote: "El equipo de Gialoma realmente entiende cómo aprovechar la tecnología para ahorrar tiempo. Nuestra productividad ha aumentado un 40% desde implementar sus soluciones.",
    author: "Alexandra Rivera",
    position: "CTO, Global Solutions"
  },
  {
    id: 4,
    quote: "El chatbot que Gialoma desarrolló para nosotros ha revolucionado nuestro servicio al cliente. Maneja más del 70% de las consultas sin intervención humana.",
    author: "David Patel",
    position: "Gerente de Servicio al Cliente, RetailPlus"
  },
  {
    id: 5,
    quote: "Como propietario de una pequeña empresa con conocimientos técnicos limitados, aprecié la orientación paciente de Gialoma. Hicieron accesible la transformación digital.",
    author: "María González",
    position: "Propietaria, Panadería Artesanal"
  }
];

const TestimonialsEs = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isAutoScrolling, setIsAutoScrolling] = useState(true);
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
        } else {
          // Increment scroll position (increased by 15%)
          scrollRef.current.scrollLeft += 1.15;
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
      scrollRef.current.scrollBy({ left: -340, behavior: 'smooth' });
      
      // Resume auto scrolling after manual interaction
      setTimeout(() => setIsAutoScrolling(true), 2000);
    }
  };
  
  const handleScrollRight = () => {
    if (scrollRef.current) {
      setIsAutoScrolling(false);
      scrollRef.current.scrollBy({ left: 340, behavior: 'smooth' });
      
      // Resume auto scrolling after manual interaction
      setTimeout(() => setIsAutoScrolling(true), 2000);
    }
  };
  
  return (
    <section id="testimonios" className="section-padding bg-gialoma-beige overflow-hidden">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gialoma-black">Lo Que Dicen Nuestros Clientes</h2>
          <p className="text-lg text-gialoma-darkgray max-w-2xl mx-auto">
            No solo confíes en nuestra palabra — escucha a las empresas a las que hemos ayudado.
          </p>
        </div>

        <div className="relative">
          {/* Navigation Arrows */}
          <button 
            onClick={handleScrollLeft}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 bg-white hover:bg-gray-100 rounded-full p-2 text-gialoma-gold shadow-sm focus:outline-none -ml-4"
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
            {testimonials.map((testimonial) => (
              <div 
                key={testimonial.id} 
                className="bg-white p-8 rounded-lg shadow-sm border border-gray-100 min-w-[320px] md:min-w-[350px] flex flex-col h-[400px]"
              >
                <div className="mb-4">
                  <svg className="h-8 w-8 text-gialoma-gold" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                  </svg>
                </div>
                <p className="text-gialoma-darkgray mb-6 italic flex-grow">{testimonial.quote}</p>
                <div className="mt-auto">
                  <p className="font-semibold text-gialoma-black">{testimonial.author}</p>
                  <p className="text-sm text-gray-500">{testimonial.position}</p>
                </div>
              </div>
            ))}
          </div>
          
          <button 
            onClick={handleScrollRight}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 bg-white hover:bg-gray-100 rounded-full p-2 text-gialoma-gold shadow-sm focus:outline-none -mr-4"
            aria-label="Desplazar a la derecha"
          >
            <ChevronRight size={24} />
          </button>
        </div>
      </div>

      <style>{`
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

export default TestimonialsEs;
