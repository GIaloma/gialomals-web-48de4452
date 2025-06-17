
import React, { useState, useRef } from 'react';
import { Star, CheckCircle, Clock, Shield, ChevronDown, ChevronUp, Users, MapPin } from 'lucide-react';

const testimonials = [
  // First 6 - diversified sectors (healthcare, beauty, hospitality, legal, restaurant, professional)
  {
    id: 1,
    quote: "La automatización de agendas de Gialoma transformó completamente mi consulta. Antes perdía 2 horas diarias gestionando citas entre diferentes plataformas. Ahora todo se sincroniza automáticamente con Google Calendar.",
    author: "Dr. Elena Martínez",
    position: "Psicóloga Clínica",
    rating: 5,
    highlight: "Ahorro de 2 horas diarias",
    icon: <Clock className="w-5 h-5" />,
    category: "healthcare"
  },
  {
    id: 2,
    quote: "Me sentía ahogada en mi propio negocio, entre gestionar citas por WhatsApp, proveedores y redes sociales. Gialoma me ayudó a implementar sistemas simples que liberaron 8 horas semanales. Ahora puedo volver a disfrutar de las conversaciones nocturnas con mi hija.",
    author: "Lucía Martínez",
    position: "Propietaria del Salón 'Esencia'",
    rating: 5,
    highlight: "8 horas semanales liberadas",
    icon: <Clock className="w-5 h-5" />,
    category: "beauty"
  },
  {
    id: 3,
    quote: "Nuestro hotel rural tenía reservas dispersas entre Booking, llamadas telefónicas y un cuaderno físico. El chatbot automático de Gialoma gestiona ahora el 70% de las consultas, y la sincronización con nuestro sistema interno es perfecta.",
    author: "Carmen Ruiz",
    position: "Directora, Hotel Rural Las Encinas",
    rating: 5,
    highlight: "70% consultas automatizadas",
    icon: <Users className="w-5 h-5" />,
    category: "hospitality"
  },
  {
    id: 4,
    quote: "Como despacho de abogados, manejamos información muy sensible. Gialoma automatizó nuestro sistema de citas y seguimiento de casos sin comprometer nunca la confidencialidad. El ahorro en tiempo administrativo ha sido del 60%.",
    author: "Roberto Vázquez",
    position: "Socio Director, Bufete Vázquez & Asociados",
    rating: 5,
    highlight: "60% menos tiempo administrativo",
    icon: <Shield className="w-5 h-5" />,
    category: "legal"
  },
  {
    id: 5,
    quote: "Nuestro restaurante familiar tenía pedidos a domicilio en cinco plataformas diferentes. Gialoma unificó todo en una tablet central. Los errores se redujeron un 85% y recuperamos 3 horas diarias para atender mejor a los clientes presenciales.",
    author: "Antonio Jiménez",
    position: "Propietario, Restaurante La Tradición",
    rating: 5,
    highlight: "85% menos errores",
    icon: <CheckCircle className="w-5 h-5" />,
    category: "restaurant"
  },
  {
    id: 6,
    quote: "Tenía miedo de que la tecnología complicara más mi pequeño negocio de contabilidad. Gialoma me demostró lo contrario: sistemas simples que mis clientes pueden usar sin formación. Mi productividad aumentó un 40% y puedo trabajar desde casa cuando lo necesito.",
    author: "Isabel Moreno",
    position: "Contable Autónoma",
    rating: 5,
    highlight: "40% más productividad",
    icon: <Clock className="w-5 h-5" />,
    category: "professional"
  },

  // Additional testimonials (collapsed by default) 
  {
    id: 7,
    quote: "Como profesional sanitario, la seguridad de los datos de mis pacientes es fundamental. Gialoma cumple estrictamente con el RGPD y nunca almacena información sensible. Trabajo tranquilo sabiendo que todo está protegido.",
    author: "Dr. Carlos Ruiz",
    position: "Médico Especialista",
    rating: 5,
    highlight: "Cumplimiento RGPD garantizado",
    icon: <Shield className="w-5 h-5" />,
    category: "healthcare"
  },
  {
    id: 8,
    quote: "Tenía mis citas distribuidas en Doctoralia, mi agenda física y recordatorios manuales. Gialoma unificó todo en una sola vista. Mis pacientes reciben confirmaciones automáticas y yo tengo más tiempo para lo importante.",
    author: "María González",
    position: "Fisioterapeuta",
    rating: 5,
    highlight: "Unificación total de agendas",
    icon: <CheckCircle className="w-5 h-5" />,
    category: "healthcare"
  },
  {
    id: 9,
    quote: "La integración fue seamless. En menos de una semana pasé del caos de múltiples calendarios a tener todo perfectamente organizado. El soporte técnico fue excepcional, me guiaron paso a paso.",
    author: "Dr. José Luis Fernández",
    position: "Dentista",
    rating: 5,
    highlight: "Implementación en 1 semana",
    icon: <CheckCircle className="w-5 h-5" />,
    category: "healthcare"
  },
  {
    id: 10,
    quote: "Gestiono tres consultas diferentes y cada una tenía su propio sistema. Gialoma conectó Quirónsalud, mi agenda privada y Doctoralia en un solo calendario. Revolucionario para mi práctica.",
    author: "Dr. Miguel Serrano",
    position: "Traumatólogo",
    rating: 5,
    highlight: "3 consultas unificadas",
    icon: <CheckCircle className="w-5 h-5" />,
    category: "healthcare"
  },
  {
    id: 11,
    quote: "Me sorprendió lo fácil que es revocar accesos si fuera necesario. En menos de 48 horas puedo cortar cualquier conexión. Esta flexibilidad me da total control sobre mis datos profesionales.",
    author: "Ana López",
    position: "Terapeuta Ocupacional",
    rating: 5,
    highlight: "Control total de accesos",
    icon: <Shield className="w-5 h-5" />,
    category: "healthcare"
  },
  {
    id: 12,
    quote: "Nuestro centro de fisioterapia tenía tres ubicaciones con sistemas incompatibles. Gialoma creó una solución que permite a los pacientes reservar en cualquier centro y a nosotros gestionar todo desde un panel unificado. Incrementamos un 25% la ocupación.",
    author: "Patricia Sánchez",
    position: "Directora, Centro FisioSalud",
    rating: 5,
    highlight: "25% más ocupación",
    icon: <MapPin className="w-5 h-5" />,
    category: "healthcare"
  },
  {
    id: 13,
    quote: "Mi consultorio odontológico maneja gran volumen de pacientes. La automatización de Gialoma me permite enviar recordatorios automáticos, gestionar cancelaciones y reprogramar citas sin perder tiempo. Mis pacientes están más satisfechos y yo más organizado.",
    author: "Dr. Fernando Castillo",
    position: "Odontólogo",
    rating: 5,
    highlight: "Gestión automática de recordatorios",
    icon: <Clock className="w-5 h-5" />,
    category: "healthcare"
  },
  {
    id: 14,
    quote: "Como propietaria de una academia de idiomas, tenía profesores freelance con horarios cambiantes y alumnos en múltiples modalidades. Gialoma sincronizó todo: clases presenciales, online, pruebas de nivel. Un cambio radical en nuestra eficiencia operativa.",
    author: "Sofía Morales",
    position: "Directora, Academia Lingua Plus",
    rating: 5,
    highlight: "Sincronización multi-modalidad",
    icon: <Users className="w-5 h-5" />,
    category: "education"
  },
  {
    id: 15,
    quote: "Mi centro de estética tenía problemas con dobles reservas y confusión de horarios entre mi equipo de tres especialistas. Con Gialoma cada profesional ve su agenda individual pero yo tengo una vista global. Zero conflictos desde hace 6 meses.",
    author: "Valentina Torres",
    position: "Propietaria, Centro Estético Bellezza",
    rating: 5,
    highlight: "Zero conflictos de horarios",
    icon: <CheckCircle className="w-5 h-5" />,
    category: "beauty"
  }
];

const TestimonialsEs = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const buttonRef = useRef<HTMLButtonElement>(null);
  
  const visibleTestimonials = isExpanded ? testimonials : testimonials.slice(0, 6);

  const handleToggleExpand = () => {
    if (isExpanded && buttonRef.current) {
      // Store the current button position before collapsing
      const buttonPosition = buttonRef.current.getBoundingClientRect().top + window.pageYOffset;
      
      setIsExpanded(false);
      
      // After the state updates and content collapses, scroll to maintain button position
      setTimeout(() => {
        const newButtonPosition = buttonRef.current?.getBoundingClientRect().top + window.pageYOffset;
        if (newButtonPosition && newButtonPosition !== buttonPosition) {
          window.scrollTo({
            top: window.pageYOffset + (newButtonPosition - buttonPosition),
            behavior: 'smooth'
          });
        }
      }, 100);
    } else {
      setIsExpanded(true);
    }
  };

  const getCategoryColor = (category: string) => {
    const colors = {
      healthcare: 'text-blue-600',
      beauty: 'text-pink-600',
      hospitality: 'text-green-600', 
      legal: 'text-purple-600',
      restaurant: 'text-orange-600',
      professional: 'text-indigo-600',
      education: 'text-teal-600'
    };
    return colors[category as keyof typeof colors] || 'text-gray-600';
  };

  const getCategoryBg = (category: string) => {
    const backgrounds = {
      healthcare: 'bg-blue-100',
      beauty: 'bg-pink-100',
      hospitality: 'bg-green-100',
      legal: 'bg-purple-100', 
      restaurant: 'bg-orange-100',
      professional: 'bg-indigo-100',
      education: 'bg-teal-100'
    };
    return backgrounds[category as keyof typeof backgrounds] || 'bg-gray-100';
  };

  return (
    <section id="testimonios" className="section-padding bg-gialoma-beige overflow-hidden">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gialoma-darkgray-accessible">
            Profesionales de Todo Tipo Confían en Nosotros
          </h2>
          <p className="text-lg text-gialoma-text-on-gray max-w-3xl mx-auto mb-8">
            Más de 300 profesionales y pequeños negocios han transformado su gestión con nuestras soluciones. 
            Desde consultas médicas hasta hoteles rurales, descubre cómo hemos simplificado procesos manteniendo la máxima seguridad.
          </p>
          <div className="flex justify-center items-center gap-2 text-gialoma-gold-accessible">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-6 h-6 fill-current" />
            ))}
            <span className="text-lg font-semibold text-gialoma-darkgray-accessible ml-2">4.9/5</span>
            <span className="text-gialoma-text-on-gray text-sm">(300+ opiniones)</span>
          </div>
        </div>

        {/* Gallery Grid Layout - 6 cards visible on desktop/tablet, responsive to 3-2-1 columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {visibleTestimonials.map((testimonial) => (
            <div 
              key={testimonial.id} 
              className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group flex flex-col h-full"
            >
              {/* Header with rating and category */}
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <div className="text-2xl">\"</div>
              </div>

              {/* Quote - justified text, flexible growth */}
              <p className="text-gialoma-darkgray-accessible mb-6 leading-relaxed text-justify flex-grow">
                {testimonial.quote}
              </p>

              {/* Bottom section - Highlight Feature + Author aligned to bottom */}
              <div className="mt-auto">
                {/* Highlight Feature */}
                <div className={`${getCategoryBg(testimonial.category)} rounded-lg p-3 mb-4 flex items-center gap-2`}>
                  <div className={getCategoryColor(testimonial.category)}>
                    {testimonial.icon}
                  </div>
                  <span className="text-sm font-semibold text-gialoma-darkgray-accessible">
                    {testimonial.highlight}
                  </span>
                </div>

                {/* Author */}
                <div className="border-t pt-4">
                  <p className="font-semibold text-gialoma-darkgray-accessible">{testimonial.author}</p>
                  <p className="text-sm text-gray-500">{testimonial.position}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Expand/Collapse Button */}
        <div className="text-center mb-12">
          <button
            ref={buttonRef}
            onClick={handleToggleExpand}
            className="inline-flex items-center gap-2 px-6 py-3 bg-gialoma-gold text-white rounded-lg hover:bg-gialoma-darkgold transition-colors duration-200 font-semibold shadow-lg"
          >
            {isExpanded ? (
              <>
                Ver menos testimonios
                <ChevronUp className="w-5 h-5" />
              </>
            ) : (
              <>
                Ver más testimonios ({testimonials.length - 6} adicionales)
                <ChevronDown className="w-5 h-5" />
              </>
            )}
          </button>
        </div>

        {/* Business Categories */}
        {isExpanded && (
          <div className="bg-white/20 backdrop-blur-sm rounded-xl p-8 shadow-lg mb-12 border border-gialoma-gold/20">
            <h3 className="text-xl font-bold text-center mb-6 text-gialoma-darkgray-accessible">
              Sectores que Hemos Transformado
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              <div className="text-center">
                <div className="w-12 h-12 bg-gialoma-gold/20 rounded-full flex items-center justify-center mx-auto mb-2">
                  <Shield className="w-6 h-6 text-gialoma-gold-accessible" />
                </div>
                <span className="text-sm font-medium text-gialoma-darkgray-accessible">Salud</span>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-gialoma-gold/20 rounded-full flex items-center justify-center mx-auto mb-2">
                  <Star className="w-6 h-6 text-gialoma-gold-accessible" />
                </div>
                <span className="text-sm font-medium text-gialoma-darkgray-accessible">Belleza</span>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-gialoma-gold/20 rounded-full flex items-center justify-center mx-auto mb-2">
                  <MapPin className="w-6 h-6 text-gialoma-gold-accessible" />
                </div>
                <span className="text-sm font-medium text-gialoma-darkgray-accessible">Hostelería</span>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-gialoma-gold/20 rounded-full flex items-center justify-center mx-auto mb-2">
                  <CheckCircle className="w-6 h-6 text-gialoma-gold-accessible" />
                </div>
                <span className="text-sm font-medium text-gialoma-darkgray-accessible">Legal</span>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-gialoma-gold/20 rounded-full flex items-center justify-center mx-auto mb-2">
                  <Users className="w-6 h-6 text-gialoma-gold-accessible" />
                </div>
                <span className="text-sm font-medium text-gialoma-darkgray-accessible">Restauración</span>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-gialoma-gold/20 rounded-full flex items-center justify-center mx-auto mb-2">
                  <Clock className="w-6 h-6 text-gialoma-gold-accessible" />
                </div>
                <span className="text-sm font-medium text-gialoma-darkgray-accessible">Servicios</span>
              </div>
            </div>
          </div>
        )}

        {/* Trust Indicators */}
        <div className="bg-white/20 backdrop-blur-sm rounded-xl p-8 shadow-lg border border-gialoma-gold/20">
          <h3 className="text-xl font-bold text-center mb-6 text-gialoma-darkgray-accessible">
            Garantías para Todos los Sectores
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-12 h-12 bg-gialoma-gold/20 rounded-full flex items-center justify-center mx-auto mb-3">
                <Shield className="w-6 h-6 text-gialoma-gold-accessible" />
              </div>
              <h4 className="font-semibold text-gialoma-darkgray-accessible mb-2">RGPD Compliant</h4>
              <p className="text-sm text-gialoma-text-on-gray">Cumplimiento estricto de normativas de protección de datos</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-gialoma-gold/20 rounded-full flex items-center justify-center mx-auto mb-3">
                <Clock className="w-6 h-6 text-gialoma-gold-accessible" />
              </div>
              <h4 className="font-semibold text-gialoma-darkgray-accessible mb-2">Revocación &lt; 48h</h4>
              <p className="text-sm text-gialoma-text-on-gray">Control total sobre accesos con revocación inmediata</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-gialoma-gold/20 rounded-full flex items-center justify-center mx-auto mb-3">
                <CheckCircle className="w-6 h-6 text-gialoma-gold-accessible" />
              </div>
              <h4 className="font-semibold text-gialoma-darkgray-accessible mb-2">Sin Almacenamiento</h4>
              <p className="text-sm text-gialoma-text-on-gray">Procesamiento en tiempo real sin guardar datos sensibles</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsEs;
