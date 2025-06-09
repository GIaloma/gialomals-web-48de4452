
import React from 'react';

const AboutEs = () => {
  return (
    <section id="acerca" className="section-padding-responsive bg-gray-100">
      <div className="container-adaptive mx-auto">
        <div className="max-w-7xl xl:max-w-none mx-auto">
          <div className="text-center mb-16 xl:mb-20">
            <h2 className="heading-responsive font-bold mb-6 text-gialoma-black">
              Nuestro Nombre, Nuestra Visión
            </h2>
            <div className="w-24 xl:w-32 h-1 bg-gialoma-gold mx-auto mb-8"></div>
            <p className="text-responsive-xl text-gialoma-darkgray max-w-4xl xl:max-w-5xl mx-auto">
              Descubre la historia detrás de Gialoma y cómo nuestra misión se refleja en cada aspecto de lo que hacemos
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 xl:grid-cols-12 gap-12 xl:gap-16 items-center mb-16 xl:mb-20">
            {/* Left Side - Story Cards */}
            <div className="xl:col-span-5 space-y-6 xl:space-y-8">
              <div className="bg-white rounded-lg p-6 xl:p-8 shadow-md border border-gray-100 transform transition-all duration-300 hover:scale-105 hover:shadow-xl hover:bg-gray-50/50">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-3 h-3 bg-gialoma-gold rounded-full animate-pulse"></div>
                  <span className="text-gialoma-black font-semibold text-lg xl:text-xl">Los Nombres</span>
                </div>
                <p className="text-gialoma-darkgray text-lg xl:text-xl">
                  <span className="text-gialoma-black font-bold">Gianro</span> + <span className="text-gialoma-darkgray font-bold">Paloma</span> = <span className="text-gialoma-gold font-bold text-xl xl:text-2xl">GIALOMA</span>
                </p>
              </div>
              
              <div className="bg-white rounded-lg p-6 xl:p-8 shadow-md border border-gray-100 transform transition-all duration-300 hover:scale-105 hover:shadow-xl hover:bg-gray-50/50">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-3 h-3 bg-gialoma-gold rounded-full animate-pulse"></div>
                  <span className="text-gialoma-black font-semibold text-lg xl:text-xl">La Base</span>
                </div>
                <p className="text-gialoma-darkgray text-lg xl:text-xl">
                  "<span className="text-gialoma-gold font-bold">Loma</span>" representa <span className="text-gialoma-darkgray">estabilidad</span> y <span className="text-gialoma-darkgray">crecimiento</span>
                </p>
              </div>
              
              <div className="bg-white rounded-lg p-6 xl:p-8 shadow-md border border-gray-100 transform transition-all duration-300 hover:scale-105 hover:shadow-xl hover:bg-gray-50/50">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-3 h-3 bg-gialoma-gold rounded-full animate-pulse"></div>
                  <span className="text-gialoma-black font-semibold text-lg xl:text-xl">La Misión</span>
                </div>
                <p className="text-gialoma-darkgray text-lg xl:text-xl">
                  <span className="text-gialoma-black">IA</span> + <span className="text-gialoma-darkgray">Diseño Humano</span> = <span className="text-gialoma-gold font-bold">Soluciones de Vida</span>
                </p>
              </div>
            </div>
            
            {/* Right Side - Brand Display */}
            <div className="xl:col-span-7 relative">
              <div className="bg-white rounded-xl p-8 xl:p-12 shadow-lg border border-gray-100 transform transition-all duration-300 hover:scale-105 hover:shadow-xl hover:bg-gray-50/50">
                <div className="text-center text-gialoma-black">
                  <div className="text-5xl xl:text-7xl 2xl:text-8xl font-bold mb-4 xl:mb-6 tracking-wider">
                    G<span className="text-gialoma-gold font-bold">IA</span>LOMA
                  </div>
                  <div className="text-xl xl:text-3xl 2xl:text-4xl text-gialoma-darkgray mb-8 xl:mb-12">
                    Life Solutions
                  </div>
                  <div className="grid grid-cols-2 gap-4 xl:gap-6 text-sm xl:text-base">
                    <div className="bg-gray-50 rounded p-4 xl:p-6 border border-gray-200">
                      <div className="text-gialoma-black font-semibold">Tecnología IA</div>
                    </div>
                    <div className="bg-gray-50 rounded p-4 xl:p-6 border border-gray-200">
                      <div className="text-gialoma-darkgray font-semibold">Enfoque Humano</div>
                    </div>
                    <div className="bg-gray-50 rounded p-4 xl:p-6 border border-gray-200">
                      <div className="text-gialoma-darkgray font-semibold">Automatización</div>
                    </div>
                    <div className="bg-gradient-to-br from-gialoma-gold/10 to-gialoma-gold/20 rounded p-4 xl:p-6 border border-gialoma-gold">
                      <div className="text-gialoma-gold font-semibold">Libertad</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Philosophy Section */}
          <div className="text-center">
            <div className="bg-white rounded-xl p-8 xl:p-12 shadow-lg max-w-5xl xl:max-w-6xl 2xl:max-w-7xl mx-auto border border-gray-100 transform transition-all duration-300 hover:scale-105 hover:shadow-xl hover:bg-gray-50/50">
              <div className="flex items-center justify-center mb-6 xl:mb-8">
                <div className="w-16 h-16 xl:w-20 xl:h-20 bg-gradient-to-br from-gialoma-gold/20 to-gialoma-gold/40 rounded-full flex items-center justify-center">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-gialoma-gold xl:w-10 xl:h-10">
                    <circle cx="12" cy="12" r="10"></circle>
                    <path d="M8 14s1.5 2 4 2 4-2 4-2"></path>
                    <line x1="9" y1="9" x2="9.01" y2="9"></line>
                    <line x1="15" y1="9" x2="15.01" y2="9"></line>
                  </svg>
                </div>
              </div>
              <h3 className="text-2xl xl:text-3xl 2xl:text-4xl font-bold text-gialoma-black mb-4 xl:mb-6">Nuestra Filosofía</h3>
              <p className="text-responsive-xl text-gialoma-darkgray leading-relaxed">
                Gialoma Life Solutions cree que cuando las personas recuperan su tiempo, suceden cosas increíbles: sus negocios no solo crecen, <strong className="text-gialoma-gold">explotan</strong>. No somos solo tecnología, somos el <strong className="text-gialoma-gold">catalizador</strong> que convierte el tiempo perdido en <strong className="text-gialoma-gold">ingresos multiplicados</strong> y <strong className="text-gialoma-gold">vidas plenas</strong>.
              </p>
              <div className="mt-6 xl:mt-8 flex justify-center">
                <div className="flex items-center space-x-2 text-gialoma-gold">
                  <div className="w-2 h-2 bg-gialoma-gold rounded-full animate-pulse"></div>
                  <div className="w-2 h-2 bg-gialoma-gold rounded-full animate-pulse" style={{animationDelay: '0.2s'}}></div>
                  <div className="w-2 h-2 bg-gialoma-gold rounded-full animate-pulse" style={{animationDelay: '0.4s'}}></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutEs;
