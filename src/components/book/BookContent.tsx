import React from 'react';
import { BookOpen, Zap, Gift, Check } from 'lucide-react';

const BookContent: React.FC = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-gialoma-black mb-8">
            Qué Incluye Tu Descarga Gratuita
          </h2>
          <p className="text-xl text-gray-600 text-center mb-16 max-w-3xl mx-auto leading-relaxed">
            Una introducción completa más dos capítulos íntegros que transformarán tu perspectiva 
            sobre la tecnología y su verdadero propósito en tu vida.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div className="bg-white p-8 rounded-lg shadow-lg border border-gray-100">
              <div className="flex items-center mb-6">
                <BookOpen className="text-gialoma-gold mr-4" size={32} />
                <h3 className="font-bold text-2xl text-gialoma-black">Capítulo 0: El Propósito</h3>
              </div>
              <ul className="space-y-4 text-gray-700">
                <li className="flex items-start">
                  <Check className="text-gialoma-gold mr-3 flex-shrink-0 mt-1" size={20} />
                  <span className="text-lg">El viaje personal de Paloma: 20 años de malabarismo hasta descubrir la liberación</span>
                </li>
                <li className="flex items-start">
                  <Check className="text-gialoma-gold mr-3 flex-shrink-0 mt-1" size={20} />
                  <span className="text-lg">Cómo nació Gialoma Life Solutions y el encuentro entre Paloma y Gianro</span>
                </li>
                <li className="flex items-start">
                  <Check className="text-gialoma-gold mr-3 flex-shrink-0 mt-1" size={20} />
                  <span className="text-lg">Las 5 categorías de herramientas que realmente liberan tiempo (con ejemplos prácticos)</span>
                </li>
                <li className="flex items-start">
                  <Check className="text-gialoma-gold mr-3 flex-shrink-0 mt-1" size={20} />
                  <span className="text-lg">El Modelo de Tecnología Consciente: framework completo con 5 capas</span>
                </li>
                <li className="flex items-start">
                  <Check className="text-gialoma-gold mr-3 flex-shrink-0 mt-1" size={20} />
                  <span className="text-lg">Sistema de Implementación Integrada (5 fases detalladas)</span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg border border-gray-100">
              <div className="flex items-center mb-6">
                <Zap className="text-gialoma-gold mr-4" size={32} />
                <h3 className="font-bold text-2xl text-gialoma-black">Capítulo 1: La Mentalidad</h3>
              </div>
              <ul className="space-y-4 text-gray-700">
                <li className="flex items-start">
                  <Check className="text-gialoma-gold mr-3 flex-shrink-0 mt-1" size={20} />
                  <span className="text-lg">El caso completo de Sofía: transformación mental ante el cambio tecnológico</span>
                </li>
                <li className="flex items-start">
                  <Check className="text-gialoma-gold mr-3 flex-shrink-0 mt-1" size={20} />
                  <span className="text-lg">El Principio de Plasticidad Mental aplicado a la adopción tecnológica</span>
                </li>
                <li className="flex items-start">
                  <Check className="text-gialoma-gold mr-3 flex-shrink-0 mt-1" size={20} />
                  <span className="text-lg">Espejos Cognitivos: cómo lo digital amplifica nuestros patrones mentales</span>
                </li>
                <li className="flex items-start">
                  <Check className="text-gialoma-gold mr-3 flex-shrink-0 mt-1" size={20} />
                  <span className="text-lg">El Ejercicio de Inversión de Perspectiva (paso a paso aplicable)</span>
                </li>
              </ul>
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
                Porque creemos en el respeto mutuo, nunca saturaremos tu bandeja de entrada con contenido irrelevante.
              </p>
              <p className="text-base text-gray-600">
                * Contenido de alta calidad. Puedes darte de baja en cualquier momento con un clic cuando empezarás a recibir nuestra newsletter.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookContent;