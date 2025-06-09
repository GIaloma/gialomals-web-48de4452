
import React, { useState } from 'react';
import { Star, CheckCircle, Clock, Shield, ChevronDown, ChevronUp, Users, MapPin } from 'lucide-react';

const testimonials = [
  // Healthcare professionals (first section - always visible)
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
    quote: "Como profesional sanitario, la seguridad de los datos de mis pacientes es fundamental. Gialoma cumple estrictamente con el RGPD y nunca almacena información sensible. Trabajo tranquilo sabiendo que todo está protegido.",
    author: "Dr. Carlos Ruiz",
    position: "Médico Especialista",
    rating: 5,
    highlight: "Cumplimiento RGPD garantizado",
    icon: <Shield className="w-5 h-5" />,
    category: "healthcare"
  },
  {
    id: 3,
    quote: "Tenía mis citas distribuidas en Doctoralia, mi agenda física y recordatorios manuales. Gialoma unificó todo en una sola vista. Mis pacientes reciben confirmaciones automáticas y yo tengo más tiempo para lo importante.",
    author: "María González",
    position: "Fisioterapeuta",
    rating: 5,
    highlight: "Unificación total de agendas",
    icon: <CheckCircle className="w-5 h-5" />,
    category: "healthcare"
  },

  // Extended testimonials (collapsed by default) - Based on book characters
  {
    id: 4,
    quote: "Me sentía ahogada en mi propio negocio, entre gestionar citas por WhatsApp, proveedores y redes sociales. Gialoma me ayudó a implementar sistemas simples que liberaron 8 horas semanales. Ahora puedo volver a disfrutar de las conversaciones nocturnas con mi hija.",
    author: "Lucía Martínez",
    position: "Propietaria del Salón 'Esencia'",
    rating: 5,
    highlight: "8 horas semanales liberadas",
    icon: <Clock className="w-5 h-5" />,
    category: "beauty"
  },
  {
    id: 5,
    quote: "La integración fue seamless. En menos de una semana pasé del caos de múltiples calendarios a tener todo perfectamente organizado. El soporte técnico fue excepcional, me guiaron paso a paso.",
    author: "Dr. José Luis Fernández",
    position: "Dentista",
    rating: 5,
    highlight: "Implementación en 1 semana",
    icon: <CheckCircle className="w-5 h-5" />,
    category: "healthcare"
  },
  {
    id: 6,
    quote: "Gestiono tres consultas diferentes y cada una tenía su propio sistema. Gialoma conectó Quirónsalud, mi agenda privada y Doctoralia en un solo calendario. Revolucionario para mi práctica.",
    author: "Dr. Miguel Serrano",
    position: "Traumatólogo",
    rating: 5,
    highlight: "3 consultas unificadas",
    icon: <CheckCircle className="w-5 h-5" />,
    category: "healthcare"
  },
  {
    id: 7,
    quote: "Nuestro hotel rural tenía reservas dispersas entre Booking, llamadas telefónicas y un cuaderno físico. El chatbot automático de Gialoma gestiona ahora el 70% de las consultas, y la sincronización con nuestro sistema interno es perfecta.",
    author: "Carmen Ruiz",
    position: "Directora, Hotel Rural Las Encinas",
    rating: 5,
    highlight: "70% consultas automatizadas",
    icon: <Users className="w-5 h-5" />,
    category: "hospitality"
  },
  {
    id: 8,
    quote: "Me sorprendió lo fácil que es revocar accesos si fuera necesario. En menos de 48 horas puedo cortar cualquier conexión. Esta flexibilidad me da total control sobre mis datos profesionales.",
    author: "Ana López",
    position: "Terapeuta Ocupacional",
    rating: 5,
    highlight: "Control total de accesos",
    icon: <Shield className="w-5 h-5" />,
    category: "healthcare"
  },
  {
    id: 9,
    quote: "Como despacho de abogados, manejamos información muy sensible. Gialoma automatizó nuestro sistema de citas y seguimiento de casos sin comprometer nunca la confidencialidad. El ahorro en tiempo administrativo ha sido del 60%.",
    author: "Roberto Vázquez",
    position: "Socio Director, Bufete Vázquez & Asociados",
    rating: 5,
    highlight: "60% menos tiempo administrativo",
    icon: <Shield className="w-5 h-5" />,
    category: "legal"
  },
  {
    id: 10,
    quote: "Nuestro restaurante familiar tenía pedidos a domicilio en cinco plataformas diferentes. Gialoma unificó todo en una tablet central. Los errores se redujeron un 85% y recuperamos 3 horas diarias para atender mejor a los clientes presenciales.",
    author: "Antonio Jiménez",
    position: "Propietario, Restaurante La Tradición",
    rating: 5,
    highlight: "85% menos errores",
    icon: <CheckCircle className="w-5 h-5" />,
    category: "restaurant"
  },
  {
    id: 11,
    quote: "Tenía miedo de que la tecnología complicara más mi pequeño negocio de contabilidad. Gialoma me demostró lo contrario: sistemas simples que mis clientes pueden usar sin formación. Mi productividad aumentó un 40% y puedo trabajar desde casa cuando lo necesito.",
    author: "Isabel Moreno",
    position: "Contable Autónoma",
    rating: 5,
    highlight: "40% más productividad",
    icon: <Clock className="w-5 h-5" />,
    category: "professional"
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
  }
];

const TestimonialsEs = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  
  const visibleTestimonials = isExpanded ? testimonials : testimonials.slice(0, 3);

  const getCategoryColor = (category: string) => {
    const colors = {
      healthcare: 'text-blue-600',
      beauty: 'text-pink-600',
      hospitality: 'text-green-600', 
      legal: 'text-purple-600',
      restaurant: 'text-orange-600',
      professional: 'text-indigo-600'
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
      professional: 'bg-indigo-100'
    };
    return backgrounds[category as keyof typeof backgrounds] || 'bg-gray-100';
  };

  return (
    <section id="testimonios" className="section-padding bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gialoma-black">
            Profesionales de Todo Tipo Confían en Nosotros
          </h2>
          <p className="text-lg text-gialoma-darkgray max-w-3xl mx-auto mb-8">
            Más de 300 profesionales y pequeños negocios han transformado su gestión con nuestras soluciones. 
            Desde consultas médicas hasta hoteles rurales, descubre cómo hemos simplificado procesos manteniendo la máxima seguridad.
          </p>
          <div className="flex justify-center items-center gap-2 text-yellow-500">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-6 h-6 fill-current" />
            ))}
            <span className="text-lg font-semibold text-gialoma-black ml-2">4.9/5</span>
            <span className="text-gray-500 text-sm">(300+ opiniones)</span>
          </div>
        </div>

        {/* Gallery Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {visibleTestimonials.map((testimonial) => (
            <div 
              key={testimonial.id} 
              className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group"
            >
              {/* Header with rating and category */}
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <div className="text-2xl">"</div>
              </div>

              {/* Quote */}
              <p className="text-gialoma-darkgray mb-6 leading-relaxed">
                {testimonial.quote}
              </p>

              {/* Highlight Feature */}
              <div className={`${getCategoryBg(testimonial.category)} rounded-lg p-3 mb-4 flex items-center gap-2`}>
                <div className={getCategoryColor(testimonial.category)}>
                  {testimonial.icon}
                </div>
                <span className="text-sm font-semibold text-gialoma-black">
                  {testimonial.highlight}
                </span>
              </div>

              {/* Author */}
              <div className="border-t pt-4">
                <p className="font-semibold text-gialoma-black">{testimonial.author}</p>
                <p className="text-sm text-gray-500">{testimonial.position}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Expand/Collapse Button */}
        <div className="text-center mb-12">
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="inline-flex items-center gap-2 px-6 py-3 bg-gialoma-gold text-white rounded-lg hover:bg-gialoma-gold/90 transition-colors duration-200 font-semibold"
          >
            {isExpanded ? (
              <>
                Ver menos testimonios
                <ChevronUp className="w-5 h-5" />
              </>
            ) : (
              <>
                Ver más testimonios ({testimonials.length - 3} adicionales)
                <ChevronDown className="w-5 h-5" />
              </>
            )}
          </button>
        </div>

        {/* Business Categories */}
        {isExpanded && (
          <div className="bg-white rounded-xl p-8 shadow-lg mb-12">
            <h3 className="text-xl font-bold text-center mb-6 text-gialoma-black">
              Sectores que Hemos Transformado
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              <div className="text-center">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-2">
                  <Shield className="w-6 h-6 text-blue-600" />
                </div>
                <span className="text-sm font-medium text-gray-700">Salud</span>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-2">
                  <Star className="w-6 h-6 text-pink-600" />
                </div>
                <span className="text-sm font-medium text-gray-700">Belleza</span>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-2">
                  <MapPin className="w-6 h-6 text-green-600" />
                </div>
                <span className="text-sm font-medium text-gray-700">Hostelería</span>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-2">
                  <CheckCircle className="w-6 h-6 text-purple-600" />
                </div>
                <span className="text-sm font-medium text-gray-700">Legal</span>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-2">
                  <Users className="w-6 h-6 text-orange-600" />
                </div>
                <span className="text-sm font-medium text-gray-700">Restauración</span>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-2">
                  <Clock className="w-6 h-6 text-indigo-600" />
                </div>
                <span className="text-sm font-medium text-gray-700">Servicios</span>
              </div>
            </div>
          </div>
        )}

        {/* Trust Indicators */}
        <div className="bg-white rounded-xl p-8 shadow-lg">
          <h3 className="text-xl font-bold text-center mb-6 text-gialoma-black">
            Garantías para Todos los Sectores
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <Shield className="w-6 h-6 text-green-600" />
              </div>
              <h4 className="font-semibold text-gialoma-black mb-2">RGPD Compliant</h4>
              <p className="text-sm text-gray-600">Cumplimiento estricto de normativas de protección de datos</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <Clock className="w-6 h-6 text-blue-600" />
              </div>
              <h4 className="font-semibold text-gialoma-black mb-2">Revocación &lt; 48h</h4>
              <p className="text-sm text-gray-600">Control total sobre accesos con revocación inmediata</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <CheckCircle className="w-6 h-6 text-purple-600" />
              </div>
              <h4 className="font-semibold text-gialoma-black mb-2">Sin Almacenamiento</h4>
              <p className="text-sm text-gray-600">Procesamiento en tiempo real sin guardar datos sensibles</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsEs;
