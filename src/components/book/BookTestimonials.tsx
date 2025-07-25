import React from 'react';
import { Star } from 'lucide-react';

const BookTestimonials: React.FC = () => {
  const testimonials = [
    {
      quote: "En solo los primeros dos capítulos ya identifiqué 3 procesos que puedo automatizar. ¡Y eso que es gratis!",
      author: "María González, Directora de Operaciones"
    },
    {
      quote: "Finalmente un enfoque de IA que no requiere ser ingeniero para entender. Las plantillas son oro puro.",
      author: "Carlos Mendoza, CEO Startup"
    },
    {
      quote: "Lo descargué por curiosidad y terminé implementando sus consejos. Ya ahorré 5 horas semanales en mi empresa.",
      author: "Laura Vázquez, Consultora"
    },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-gialoma-black mb-12">
          Lo Que Dicen Quienes Ya lo Descargaron
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
              <div className="flex mb-4">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} fill="#FFC107" className="text-yellow-400" size={16} />
                ))}
              </div>
              <p className="text-gialoma-darkgray mb-4 italic">"{testimonial.quote}"</p>
              <p className="font-medium text-gialoma-black">{testimonial.author}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BookTestimonials;