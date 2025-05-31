
import React, { useRef, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Clock, User, Tag, ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';

const featuredPosts = [
  {
    id: 1,
    title: "Aprovechando la IA para el Crecimiento de Pequeñas Empresas",
    excerpt: "Descubre cómo las pequeñas empresas pueden implementar soluciones de IA sin quebrar el presupuesto. Exploramos aplicaciones prácticas que ofrecen ROI real.",
    coverImage: "/placeholder.svg",
    date: "12 de abril, 2025",
    author: "Paloma Firgaira",
    category: "IA y Automatización",
    tags: ["IA", "Pequeñas Empresas", "Productividad"],
    readTime: "5 min de lectura",
    slug: "aprovechando-ia-pequenas-empresas"
  },
  {
    id: 2,
    title: "El Futuro de la Transformación Digital en 2025",
    excerpt: "Explora las últimas tendencias en transformación digital y cómo están remodelando las industrias. Aprende qué están haciendo diferente las organizaciones exitosas.",
    coverImage: "/placeholder.svg",
    date: "5 de abril, 2025",
    author: "Gianro Compagno",
    category: "Transformación Digital",
    tags: ["Estrategia Digital", "Innovación", "Tendencias Tecnológicas"],
    readTime: "8 min de lectura",
    slug: "futuro-transformacion-digital-2025"
  },
  {
    id: 3,
    title: "5 Formas de Optimizar la Productividad de tu Equipo",
    excerpt: "Estrategias prácticas para mejorar la eficiencia y el rendimiento del equipo sin agotamiento. Estos métodos probados pueden transformar cómo colabora tu equipo.",
    coverImage: "/placeholder.svg",
    date: "28 de marzo, 2025",
    author: "Paloma Firgaira",
    category: "Productividad",
    tags: ["Gestión de Equipos", "Eficiencia", "Lugar de Trabajo"],
    readTime: "6 min de lectura",
    slug: "optimizar-productividad-equipo"
  },
  {
    id: 4,
    title: "Fundamentos de Ciberseguridad para Empresas Modernas",
    excerpt: "Protege tu negocio con estas prácticas fundamentales de ciberseguridad. Incluso las pequeñas empresas pueden implementar estas medidas costo-efectivas.",
    coverImage: "/placeholder.svg",
    date: "21 de marzo, 2025",
    author: "Gianro Compagno",
    category: "Seguridad",
    tags: ["Ciberseguridad", "Protección de Datos", "Gestión de Riesgos"],
    readTime: "7 min de lectura",
    slug: "fundamentos-ciberseguridad"
  },
  {
    id: 5,
    title: "Cómo Construir una Cultura de Decisiones Basadas en Datos",
    excerpt: "Transforma tu organización adoptando la toma de decisiones basada en datos. Aprende los marcos que hacen la información accesible para todos.",
    coverImage: "/placeholder.svg",
    date: "14 de marzo, 2025",
    author: "Paloma Firgaira",
    category: "Inteligencia de Negocios",
    tags: ["Analítica de Datos", "Estrategia Empresarial", "Toma de Decisiones"],
    readTime: "9 min de lectura",
    slug: "cultura-decisiones-basadas-datos"
  }
];

const BlogEs = () => {
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
    <section id="blog" className="section-padding bg-white overflow-hidden">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-gradient">Últimas Perspectivas</span>
          </h2>
          <p className="text-lg text-gialoma-darkgray max-w-2xl mx-auto">
            Explora nuestros últimos artículos, guías y perspectivas de la industria para mantenerte informado sobre IA, automatización y transformación digital.
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
            {featuredPosts.map((post) => (
              <div key={post.id} className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-100 hover:shadow-lg transition-shadow duration-300 min-w-[330px] flex flex-col">
                <img 
                  src={post.coverImage} 
                  alt={post.title} 
                  className="w-full h-48 object-cover"
                />
                <div className="p-6 flex flex-col h-full">
                  <div className="flex items-center mb-3">
                    <span className="text-sm bg-gialoma-lightgold/20 text-gialoma-darkgold px-3 py-1 rounded-full">
                      {post.category}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-gialoma-black hover:text-gialoma-gold transition-colors h-16">
                    <a href={`/blog/${post.slug}`} target="_blank" rel="noopener noreferrer">{post.title}</a>
                  </h3>
                  <p className="text-gialoma-darkgray mb-4 line-clamp-3 flex-grow">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex items-center text-sm text-gialoma-darkgray mb-4">
                    <User size={14} className="mr-1" />
                    <span className="mr-4">{post.author}</span>
                    <Clock size={14} className="mr-1" />
                    <span>{post.readTime}</span>
                  </div>
                  
                  <a href={`/blog/${post.slug}`} target="_blank" rel="noopener noreferrer">
                    <Button 
                      variant="ghost" 
                      className="p-0 text-gialoma-gold hover:text-gialoma-darkgold hover:bg-transparent flex items-center"
                    >
                      Leer Más <ArrowRight size={16} className="ml-2" />
                    </Button>
                  </a>
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
        
        <div className="mt-12 text-center">
          <a href="/blog" target="_blank" rel="noopener noreferrer">
            <Button 
              className="bg-gialoma-gold hover:bg-gialoma-darkgold text-white"
            >
              Ver Todos los Artículos
            </Button>
          </a>
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

export default BlogEs;
