
import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const AboutEs = () => {
  const [activeContent, setActiveContent] = useState(0);

  const philosophyContents = [
    {
      title: "Nuestra Ética",
      content: "Humanizando la tecnología: creemos que la IA está para servirnos, no para sustituirnos. Nuestro objetivo es que trabajes menos en tareas repetitivas y más en lo que importa."
    },
    {
      title: "Nuestra Filosofía",
      content: "Gialoma Life Solutions cree que cuando las personas recuperan su tiempo, suceden cosas increíbles: sus negocios no solo crecen, explotan. No somos solo tecnología, somos el catalizador que convierte el tiempo perdido en ingresos multiplicados y vidas plenas."
    }
  ];

  const nextContent = () => {
    setActiveContent((prev) => (prev + 1) % philosophyContents.length);
  };

  const prevContent = () => {
    setActiveContent((prev) => (prev - 1 + philosophyContents.length) % philosophyContents.length);
  };

  const currentContent = philosophyContents[activeContent];

  return (
    <section id="acerca" className="section-padding bg-gray-100">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gialoma-black">
              Nuestro Nombre, Nuestra Visión
            </h2>
            <div className="w-24 h-1 bg-gialoma-gold mx-auto mb-8"></div>
            <p className="text-xl text-gialoma-text-on-gray max-w-3xl mx-auto">
              Descubre la historia detrás de Gialoma y cómo nuestra misión se refleja en cada aspecto de lo que hacemos
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            {/* Left Side - Story Cards */}
            <div className="space-y-6">
              <div className="bg-white rounded-lg p-6 shadow-md border border-gray-100 transform transition-all duration-300 hover:scale-105 hover:shadow-xl hover:bg-gray-50/50">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-3 h-3 bg-gialoma-gold rounded-full animate-pulse"></div>
                  <span className="text-gialoma-black font-semibold text-lg">Los Nombres</span>
                </div>
                <p className="text-gialoma-darkgray-accessible text-lg">
                  <span className="text-gialoma-black font-bold">Gianro</span> + <span className="text-gialoma-darkgray-accessible font-bold">Paloma</span> = <span className="text-gialoma-gold-accessible font-bold text-xl">GIALOMA</span>
                </p>
              </div>
              
              <div className="bg-white rounded-lg p-6 shadow-md border border-gray-100 transform transition-all duration-300 hover:scale-105 hover:shadow-xl hover:bg-gray-50/50">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-3 h-3 bg-gialoma-gold rounded-full animate-pulse"></div>
                  <span className="text-gialoma-black font-semibold text-lg">La Base</span>
                </div>
                <p className="text-gialoma-darkgray-accessible text-lg">
                  "<span className="text-gialoma-gold-accessible font-bold">Loma</span>" representa <span className="text-gialoma-darkgray-accessible">estabilidad</span> y <span className="text-gialoma-darkgray-accessible">crecimiento</span>
                </p>
              </div>
              
              <div className="bg-white rounded-lg p-6 shadow-md border border-gray-100 transform transition-all duration-300 hover:scale-105 hover:shadow-xl hover:bg-gray-50/50">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-3 h-3 bg-gialoma-gold rounded-full animate-pulse"></div>
                  <span className="text-gialoma-black font-semibold text-lg">La Misión</span>
                </div>
                <p className="text-gialoma-darkgray-accessible text-lg">
                  <span className="text-gialoma-black">IA</span> + <span className="text-gialoma-darkgray-accessible">Diseño Humano</span> = <span className="text-gialoma-gold-accessible font-bold">Soluciones de Vida</span>
                </p>
              </div>
            </div>
            
            {/* Right Side - Brand Display */}
            <div className="relative">
              <div className="bg-white rounded-xl p-8 shadow-lg border border-gray-100 transform transition-all duration-300 hover:scale-105 hover:shadow-xl hover:bg-gray-50/50">
                <div className="text-center text-gialoma-black">
                  <div className="text-6xl font-bold mb-4 tracking-wider">
                    G<span className="text-gialoma-gold-accessible font-bold">IA</span>LOMA
                  </div>
                  <div className="text-2xl text-gialoma-darkgray-accessible mb-8">
                    Life Solutions
                  </div>
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div className="bg-gray-50 rounded p-4 border border-gray-200">
                      <div className="text-gialoma-black font-semibold">Tecnología IA</div>
                    </div>
                    <div className="bg-gray-50 rounded p-4 border border-gray-200">
                      <div className="text-gialoma-darkgray-accessible font-semibold">Enfoque Humano</div>
                    </div>
                    <div className="bg-gray-50 rounded p-4 border border-gray-200">
                      <div className="text-gialoma-darkgray-accessible font-semibold">Automatización</div>
                    </div>
                    <div className="bg-gradient-to-br from-gialoma-gold/10 to-gialoma-gold/20 rounded p-4 border border-gialoma-gold">
                      <div className="text-gialoma-gold-accessible font-semibold">Libertad</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Philosophy Section with Content Switcher */}
          <div className="text-center">
            <div className="bg-white rounded-xl p-8 shadow-lg max-w-4xl mx-auto border border-gray-100 transform transition-all duration-300 hover:scale-105 hover:shadow-xl hover:bg-gray-50/50">
              <div className="flex items-center justify-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-gialoma-gold/20 to-gialoma-gold/40 rounded-full flex items-center justify-center">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-gialoma-gold">
                    <circle cx="12" cy="12" r="10"></circle>
                    <path d="M8 14s1.5 2 4 2 4-2 4-2"></path>
                    <line x1="9" y1="9" x2="9.01" y2="9"></line>
                    <line x1="15" y1="9" x2="15.01" y2="9"></line>
                  </svg>
                </div>
              </div>
              
              {/* Content Header with Navigation */}
              <div className="flex items-center justify-center mb-4">
                <button
                  onClick={prevContent}
                  className="bg-gialoma-gold hover:bg-yellow-600 text-white rounded-full p-2 shadow-lg transition-all duration-200 hover:scale-110 mr-4"
                  aria-label="Contenido anterior"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                
                <h3 className="text-2xl font-bold text-gialoma-black">
                  {currentContent.title}
                </h3>
                
                <button
                  onClick={nextContent}
                  className="bg-gialoma-gold hover:bg-yellow-600 text-white rounded-full p-2 shadow-lg transition-all duration-200 hover:scale-110 ml-4"
                  aria-label="Siguiente contenido"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
              
              {/* Content Area */}
              <p className="text-xl text-gialoma-darkgray-accessible leading-relaxed transition-all duration-300">
                {currentContent.content.includes('catalizador') ? (
                  <>
                    {currentContent.content.split('explotan')[0]}
                    <strong className="text-gialoma-gold-accessible">explotan</strong>
                    {currentContent.content.split('explotan')[1].split('catalizador')[0]}
                    <strong className="text-gialoma-gold-accessible">catalizador</strong>
                    {currentContent.content.split('catalizador')[1].split('ingresos multiplicados')[0]}
                    <strong className="text-gialoma-gold-accessible">ingresos multiplicados</strong>
                    {currentContent.content.split('ingresos multiplicados')[1].split('vidas plenas')[0]}
                    <strong className="text-gialoma-gold-accessible">vidas plenas</strong>
                    {currentContent.content.split('vidas plenas')[1]}
                  </>
                ) : (
                  currentContent.content
                )}
              </p>
              
              {/* Content Indicators */}
              <div className="mt-6 flex justify-center space-x-2">
                {philosophyContents.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveContent(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-200 ${
                      index === activeContent 
                        ? 'bg-gialoma-gold' 
                        : 'bg-gray-300 hover:bg-gray-400'
                    }`}
                    aria-label={`Ver ${philosophyContents[index].title}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutEs;
