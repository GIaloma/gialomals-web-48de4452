import React from 'react';
import { Mail } from 'lucide-react';

const BookFAQ: React.FC = () => {
  const faqs = [
    {
      question: "¿Es realmente gratis? ¿No hay costos ocultos?",
      answer: "Sí, es completamente gratis. Solo necesitas tu email para recibir el PDF. No hay costos ocultos, no se guardará tu tarjeta de crédito, y puedes darte de baja de nuestros emails en cualquier momento."
    },
    {
      question: "¿Cuánto tardaré en recibir el PDF?",
      answer: "Recibirás el PDF inmediatamente en tu email después de completar el formulario. Si no lo ves en tu bandeja de entrada, revisa tu carpeta de spam."
    },
    {
      question: "¿Es adecuado para empresas pequeñas?",
      answer: "Absolutamente. Los conceptos están diseñados para ser aplicables tanto en startups de 2 personas como en empresas de 200+ empleados. Los ejemplos cubren todo tipo de industrias y tamaños."
    },
    {
      question: "¿Recibiré spam después de descargar?",
      answer: "No. Solo recibirás contenido relevante sobre automatización empresarial aproximadamente una vez por semana. Puedes darte de baja en cualquier momento con un solo clic."
    },
    {
      question: "¿Habrá más capítulos disponibles después?",
      answer: "Sí, eventualmente publicaremos el libro completo. Los lectores del capítulo gratuito serán los primeros en enterarse y recibirán ofertas especiales."
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-gialoma-black mb-12">Preguntas Frecuentes</h2>
        <div className="max-w-3xl mx-auto space-y-6">
          {faqs.map((faq, index) => (
            <div key={index} className="border-b border-gray-200 pb-4">
              <h3 className="font-semibold text-gialoma-black text-lg mb-2">{faq.question}</h3>
              <p className="text-gialoma-darkgray">{faq.answer}</p>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <p className="text-gialoma-darkgray mb-4">¿Tienes más preguntas?</p>
          <div className="flex justify-center items-center">
            <Mail className="mr-2 text-gialoma-gold" size={20} />
            <a href="mailto:gialomals@gmail.com" className="text-gialoma-gold hover:text-gialoma-darkgold">
              gialomals@gmail.com
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookFAQ;