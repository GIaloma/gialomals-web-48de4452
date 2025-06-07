
import React, { useEffect } from 'react';

const AboutEs = () => {
  useEffect(() => {
    // Create neural network animation
    const createNeuralNetwork = () => {
      const container = document.getElementById('neural-network-es');
      if (!container) return;
      
      // Clear existing content
      container.innerHTML = '';
      
      const nodes = 15;
      
      // Create nodes
      for (let i = 0; i < nodes; i++) {
        const node = document.createElement('div');
        node.className = 'neural-node';
        node.style.cssText = `
          width: 6px;
          height: 6px;
          background: #C7AE6A;
          border-radius: 50%;
          position: absolute;
          animation: pulse 2s infinite;
          left: ${Math.random() * 100}%;
          top: ${Math.random() * 100}%;
          animation-delay: ${Math.random() * 2}s;
        `;
        container.appendChild(node);
      }
      
      // Create connections
      for (let i = 0; i < 12; i++) {
        const connection = document.createElement('div');
        connection.className = 'neural-connection';
        connection.style.cssText = `
          position: absolute;
          height: 1px;
          background: linear-gradient(90deg, transparent, #C7AE6A, transparent);
          animation: flow 3s infinite;
          left: ${Math.random() * 100}%;
          top: ${Math.random() * 100}%;
          width: ${Math.random() * 200 + 50}px;
          transform: rotate(${Math.random() * 360}deg);
          animation-delay: ${Math.random() * 3}s;
        `;
        container.appendChild(connection);
      }
    };

    // Add CSS animations
    const style = document.createElement('style');
    style.textContent = `
      @keyframes pulse {
        0%, 100% { opacity: 0.6; transform: scale(1); }
        50% { opacity: 1; transform: scale(1.2); }
      }
      @keyframes flow {
        0% { opacity: 0; }
        50% { opacity: 0.8; }
        100% { opacity: 0; }
      }
    `;
    document.head.appendChild(style);

    createNeuralNetwork();

    return () => {
      document.head.removeChild(style);
    };
  }, []);

  return (
    <section id="acerca" className="section-padding bg-gray-900 relative overflow-hidden">
      {/* Neural Network Background */}
      <div className="absolute inset-0" id="neural-network-es"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Nuestro Nombre, Nuestra Visión
            </h2>
            <div className="w-24 h-1 bg-gialoma-gold mx-auto mb-8"></div>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Descubre la historia detrás de Gialoma y cómo nuestra misión se refleja en cada aspecto de lo que hacemos
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {/* Card 1: The Names */}
            <div className="bg-black bg-opacity-60 backdrop-blur-sm rounded-xl p-8 shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 group border border-gray-700 hover:border-gialoma-gold/50">
              <div className="text-center mb-8">
                <div className="w-20 h-20 bg-gradient-to-br from-gialoma-gold/20 to-gialoma-gold/30 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-gialoma-gold">
                    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                    <circle cx="12" cy="7" r="4"></circle>
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-white mb-3">Los Nombres</h3>
                <p className="text-gray-300">El origen de nuestra identidad</p>
              </div>
              <div className="space-y-4">
                <div className="text-center p-4 bg-gray-800 bg-opacity-50 rounded-lg border border-gray-600">
                  <span className="font-bold text-xl text-white">Gianro</span>
                </div>
                <div className="text-center text-3xl text-gialoma-gold font-bold">+</div>
                <div className="text-center p-4 bg-gray-800 bg-opacity-50 rounded-lg border border-gray-600">
                  <span className="font-bold text-xl text-white">Paloma</span>
                </div>
                <div className="text-center text-3xl text-gialoma-gold font-bold">=</div>
                <div className="text-center p-4 bg-gradient-to-r from-gialoma-gold/20 to-gialoma-gold/30 rounded-lg border-2 border-gialoma-gold transform group-hover:scale-105 transition-transform duration-300">
                  <span className="font-bold text-2xl text-gialoma-gold">GIALOMA</span>
                </div>
              </div>
            </div>

            {/* Card 2: The Foundation */}
            <div className="bg-black bg-opacity-60 backdrop-blur-sm rounded-xl p-8 shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 group border border-gray-700 hover:border-gialoma-gold/50">
              <div className="text-center mb-8">
                <div className="w-20 h-20 bg-gradient-to-br from-gialoma-gold/20 to-gialoma-gold/30 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-gialoma-gold">
                    <path d="M8 2v4"></path>
                    <path d="M16 2v4"></path>
                    <path d="M21 6H3"></path>
                    <path d="M3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6"></path>
                    <path d="M8 11h8"></path>
                    <path d="M8 15h5"></path>
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-white mb-3">La Base</h3>
                <p className="text-gray-300">Nuestros valores fundamentales</p>
              </div>
              <div className="text-center mb-6">
                <span className="text-4xl font-bold text-gialoma-gold">Loma</span>
                <p className="text-sm text-gray-300 mt-2">Palabra española que inspira</p>
              </div>
              <div className="space-y-4">
                <div className="p-4 bg-amber-900 bg-opacity-30 rounded-lg border border-amber-600 border-opacity-50">
                  <div className="flex items-center justify-center">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-amber-300 mr-3">
                      <path d="M8 3H5a2 2 0 0 0-2 2v3m18 0V5a2 2 0 0 0-2-2h-3m0 18h3a2 2 0 0 0 2-2v-3M3 16v3a2 2 0 0 0 2 2h3"></path>
                    </svg>
                    <span className="font-bold text-amber-200 text-lg">Estabilidad</span>
                  </div>
                </div>
                <div className="p-4 bg-yellow-900 bg-opacity-30 rounded-lg border border-yellow-600 border-opacity-50">
                  <div className="flex items-center justify-center">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-yellow-300 mr-3">
                      <path d="M12 2L2 7l10 5 10-5-10-5z"></path>
                      <path d="M2 17l10 5 10-5"></path>
                      <path d="M2 12l10 5 10-5"></path>
                    </svg>
                    <span className="font-bold text-yellow-200 text-lg">Crecimiento</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Card 3: The Mission */}
            <div className="bg-black bg-opacity-60 backdrop-blur-sm rounded-xl p-8 shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 group border border-gray-700 hover:border-gialoma-gold/50">
              <div className="text-center mb-8">
                <div className="w-20 h-20 bg-gradient-to-br from-gialoma-gold/20 to-gialoma-gold/30 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-gialoma-gold">
                    <path d="M9 12l2 2 4-4"></path>
                    <path d="M21 12c0 4.97-4.03 9-9 9s-9-4.03-9-9 4.03-9 9-9c2.12 0 4.07.74 5.61 1.98"></path>
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-white mb-3">La Misión</h3>
                <p className="text-gray-300">Nuestro propósito y visión</p>
              </div>
              <div className="space-y-4">
                <div className="text-center p-4 bg-slate-800 bg-opacity-50 rounded-lg border border-slate-600">
                  <span className="font-bold text-lg text-slate-200">Tecnología IA</span>
                </div>
                <div className="text-center text-3xl text-gialoma-gold font-bold">×</div>
                <div className="text-center p-4 bg-stone-800 bg-opacity-50 rounded-lg border border-stone-600">
                  <span className="font-bold text-lg text-stone-200">Diseño Humano</span>
                </div>
                <div className="text-center text-3xl text-gialoma-gold font-bold">=</div>
                <div className="text-center p-4 bg-gradient-to-r from-gialoma-gold/20 via-gialoma-gold/25 to-gialoma-gold/30 rounded-lg border-2 border-gialoma-gold transform group-hover:scale-105 transition-transform duration-300">
                  <span className="font-bold text-gialoma-gold text-lg leading-tight">
                    Vive Más<br/>
                    Trabaja Menos
                  </span>
                </div>
              </div>
            </div>
          </div>
          
          {/* Bottom Message */}
          <div className="text-center">
            <div className="bg-black bg-opacity-50 backdrop-blur-sm rounded-xl p-8 shadow-lg max-w-4xl mx-auto border border-gray-700">
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
              <h3 className="text-2xl font-bold text-white mb-4">Nuestra Filosofía</h3>
              <p className="text-xl text-gray-300 leading-relaxed">
                Creemos en usar la <strong className="text-gialoma-gold">Inteligencia Artificial</strong> y la <strong className="text-gialoma-gold">automatización</strong> para diseñar soluciones de vida que te empoderen a <strong className="text-gialoma-gold">vivir más y trabajar menos</strong>.
              </p>
              <div className="mt-6 flex justify-center">
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
