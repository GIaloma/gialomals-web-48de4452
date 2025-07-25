import React from 'react';
import { Heart, Lightbulb, Shield } from 'lucide-react';

const BookValueProposition: React.FC = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-gialoma-black mb-8">
            ¿Por Qué Más de 1,000 Empresarios Ya Descargaron Este Capítulo?
          </h2>
          <p className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed">
            Porque descubrieron que existe una manera completamente nueva de relacionarse con la tecnología: 
            una que amplifica su humanidad en lugar de comprometerla.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mt-16">
            <div className="text-center">
              <div className="bg-gialoma-gold/10 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Heart className="text-gialoma-gold" size={32} />
              </div>
              <h3 className="font-bold text-2xl mb-4 text-gialoma-black">Tecnología Consciente</h3>
              <p className="text-lg text-gray-600 leading-relaxed">
                Aprende el "Modelo de Tecnología Consciente" que pone los valores humanos en el centro. 
                No se trata de hacer más, sino de vivir mejor.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-gialoma-gold/10 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Lightbulb className="text-gialoma-gold" size={32} />
              </div>
              <h3 className="font-bold text-2xl mb-4 text-gialoma-black">Sabiduría Ancestral + Era Digital</h3>
              <p className="text-lg text-gray-600 leading-relaxed">
                Descubre cómo fusionar principios atemporales de bienestar humano con las herramientas 
                más avanzadas de nuestra época.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-gialoma-gold/10 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Shield className="text-gialoma-gold" size={32} />
              </div>
              <h3 className="font-bold text-2xl mb-4 text-gialoma-black">Liberación del Tiempo</h3>
              <p className="text-lg text-gray-600 leading-relaxed">
                Conoce las "Herramientas que Liberan tu Tiempo" y cómo Paloma recuperó la conexión 
                con sus hijos tras años de sacrificio innecesario.
              </p>
            </div>
          </div>
          
          <div className="mt-16 bg-gialoma-gold/5 rounded-lg p-8 border-l-4 border-gialoma-gold">
            <blockquote className="text-xl italic text-gialoma-darkgray mb-4">
              "La verdadera revolución tecnológica no está en los dispositivos o algoritmos, sino en cómo 
              estos pueden liberarnos para ser más plenamente humanos."
            </blockquote>
            <cite className="text-gialoma-gold font-semibold">— Paloma Firgaira, Capítulo 0</cite>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookValueProposition;