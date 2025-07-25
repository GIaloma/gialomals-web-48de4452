import React from 'react';
import { BookOpen, Gift, Check } from 'lucide-react';

const BookContent: React.FC = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-gialoma-black mb-8">
            Qué Incluye Tu Descarga Gratuita
          </h2>
          <p className="text-xl text-gray-600 text-center mb-16 max-w-3xl mx-auto leading-relaxed">
            Un capítulo completo y sustancial que transformará tu perspectiva 
            sobre la tecnología y su verdadero propósito en tu vida.
          </p>
          
          <div className="max-w-4xl mx-auto">
            <div className="bg-white p-10 rounded-lg shadow-lg border border-gray-100">
              <div className="flex items-center mb-8 justify-center">
                <BookOpen className="text-gialoma-gold mr-4" size={40} />
                <h3 className="font-bold text-3xl text-gialoma-black">Capítulo 0: El Propósito de Gialoma</h3>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h4 className="font-semibold text-xl text-gialoma-black mb-4">La Historia Personal</h4>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start">
                      <Check className="text-gialoma-gold mr-3 flex-shrink-0 mt-1" size={18} />
                      <span>El viaje de Paloma: 20 años de malabarismo hasta descubrir la liberación</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="text-gialoma-gold mr-3 flex-shrink-0 mt-1" size={18} />
                      <span>Cómo recuperó la conexión con sus hijos tras años de sacrificio innecesario</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="text-gialoma-gold mr-3 flex-shrink-0 mt-1" size={18} />
                      <span>El encuentro que cambió todo: la alianza entre Paloma y Gianro</span>
                    </li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-semibold text-xl text-gialoma-black mb-4">Frameworks Prácticos</h4>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start">
                      <Check className="text-gialoma-gold mr-3 flex-shrink-0 mt-1" size={18} />
                      <span>El Modelo de Tecnología Consciente: framework completo de 5 capas</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="text-gialoma-gold mr-3 flex-shrink-0 mt-1" size={18} />
                      <span>Sistema de Implementación Integrada (5 fases detalladas)</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="text-gialoma-gold mr-3 flex-shrink-0 mt-1" size={18} />
                      <span>Las 5 categorías de herramientas que realmente liberan tiempo</span>
                    </li>
                  </ul>
                </div>
              </div>
              
              <div className="mt-8 pt-6 border-t border-gray-200">
                <h4 className="font-semibold text-xl text-gialoma-black mb-4 text-center">Herramientas Específicas Incluidas</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start">
                      <Check className="text-gialoma-gold mr-3 flex-shrink-0 mt-1" size={16} />
                      <span className="text-sm">Asistentes Virtuales Aumentados con IA</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="text-gialoma-gold mr-3 flex-shrink-0 mt-1" size={16} />
                      <span className="text-sm">Sistemas de Automatización a Medida</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="text-gialoma-gold mr-3 flex-shrink-0 mt-1" size={16} />
                      <span className="text-sm">Plataformas de Presencia Digital Integrada</span>
                    </li>
                  </ul>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start">
                      <Check className="text-gialoma-gold mr-3 flex-shrink-0 mt-1" size={16} />
                      <span className="text-sm">Herramientas de Bienestar Digital</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="text-gialoma-gold mr-3 flex-shrink-0 mt-1" size={16} />
                      <span className="text-sm">Plataformas de Conocimiento Colectivo</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="text-gialoma-gold mr-3 flex-shrink-0 mt-1" size={16} />
                      <span className="text-sm">Casos de éxito reales con resultados medibles</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-gialoma-gold/10 to-gialoma-darkgold/10 p-8 rounded-lg border border-gialoma-gold/30 mt-12">
            <div className="flex items-center justify-center mb-6">
              <Gift className="text-gialoma-gold mr-4" size={32} />
              <h3 className="font-bold text-2xl text-gialoma-black">Bonus Incluido</h3>
            </div>
            <div className="text-center">
              <p className="text-lg text-gialoma-darkgray mb-6 leading-relaxed">
                También recibirás acceso a nuestro newsletter exclusivo con casos de estudio reales, 
                reflexiones sobre tecnología consciente y las últimas tendencias en automatización que respeta la humanidad. 
                Contenido de alta calidad, sin spam.
              </p>
              <p className="text-base text-gray-600">
                * Puedes darte de baja en cualquier momento con un clic.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookContent;