
import React from 'react';
import { Star, CheckCircle, Clock, Shield } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    quote: "La automatización de agendas de Gialoma transformó completamente mi consulta. Antes perdía 2 horas diarias gestionando citas entre diferentes plataformas. Ahora todo se sincroniza automáticamente con Google Calendar.",
    author: "Dr. Elena Martínez",
    position: "Psicóloga Clínica",
    rating: 5,
    highlight: "Ahorro de 2 horas diarias",
    icon: <Clock className="w-5 h-5" />
  },
  {
    id: 2,
    quote: "Como profesional sanitario, la seguridad de los datos de mis pacientes es fundamental. Gialoma cumple estrictamente con el RGPD y nunca almacena información sensible. Trabajo tranquilo sabiendo que todo está protegido.",
    author: "Dr. Carlos Ruiz",
    position: "Médico Especialista",
    rating: 5,
    highlight: "Cumplimiento RGPD garantizado",
    icon: <Shield className="w-5 h-5" />
  },
  {
    id: 3,
    quote: "Tenía mis citas distribuidas en Doctoralia, mi agenda física y recordatorios manuales. Gialoma unificó todo en una sola vista. Mis pacientes reciben confirmaciones automáticas y yo tengo más tiempo para lo importante.",
    author: "María González",
    position: "Fisioterapeuta",
    rating: 5,
    highlight: "Unificación total de agendas",
    icon: <CheckCircle className="w-5 h-5" />
  },
  {
    id: 4,
    quote: "La integración fue seamless. En menos de una semana pasé del caos de múltiples calendarios a tener todo perfectamente organizado. El soporte técnico fue excepcional, me guiaron paso a paso.",
    author: "Dr. José Luis Fernández",
    position: "Dentista",
    rating: 5,
    highlight: "Implementación en 1 semana",
    icon: <CheckCircle className="w-5 h-5" />
  },
  {
    id: 5,
    quote: "Me sorprendió lo fácil que es revocar accesos si fuera necesario. En menos de 48 horas puedo cortar cualquier conexión. Esta flexibilidad me da total control sobre mis datos profesionales.",
    author: "Ana López",
    position: "Terapeuta Ocupacional",
    rating: 5,
    highlight: "Control total de accesos",
    icon: <Shield className="w-5 h-5" />
  },
  {
    id: 6,
    quote: "Gestiono tres consultas diferentes y cada una tenía su propio sistema. Gialoma conectó Quirónsalud, mi agenda privada y Doctoralia en un solo calendario. Revolucionario para mi práctica.",
    author: "Dr. Miguel Serrano",
    position: "Traumatólogo",
    rating: 5,
    highlight: "3 consultas unificadas",
    icon: <CheckCircle className="w-5 h-5" />
  }
];

const TestimonialsEs = () => {
  return (
    <section id="testimonios" className="section-padding bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gialoma-black">
            Profesionales Sanitarios Confían en Nosotros
          </h2>
          <p className="text-lg text-gialoma-darkgray max-w-3xl mx-auto mb-8">
            Más de 150 profesionales sanitarios han transformado su gestión de agendas con nuestras soluciones. 
            Descubre cómo hemos simplificado sus procesos manteniendo la máxima seguridad.
          </p>
          <div className="flex justify-center items-center gap-2 text-yellow-500">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-6 h-6 fill-current" />
            ))}
            <span className="text-lg font-semibold text-gialoma-black ml-2">4.9/5</span>
            <span className="text-gray-500 text-sm">(150+ opiniones)</span>
          </div>
        </div>

        {/* Gallery Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {testimonials.map((testimonial) => (
            <div 
              key={testimonial.id} 
              className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group"
            >
              {/* Header with rating */}
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <div className="text-2xl">"</div>
              </div>

              {/* Quote */}
              <p className="text-gialoma-darkgray mb-6 leading-relaxed line-clamp-4 group-hover:line-clamp-none transition-all duration-300">
                {testimonial.quote}
              </p>

              {/* Highlight Feature */}
              <div className="bg-gialoma-beige rounded-lg p-3 mb-4 flex items-center gap-2">
                <div className="text-gialoma-gold">
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

        {/* Trust Indicators */}
        <div className="bg-white rounded-xl p-8 shadow-lg">
          <h3 className="text-xl font-bold text-center mb-6 text-gialoma-black">
            Garantías para Profesionales Sanitarios
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
              <h4 className="font-semibold text-gialoma-black mb-2">Revocación < 48h</h4>
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
