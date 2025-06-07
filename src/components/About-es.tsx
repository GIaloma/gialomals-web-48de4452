
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
          
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            {/* Left Side - Story Cards */}
            <div className="space-y-6">
              <div className="bg-black bg-opacity-50 rounded-lg p-6 backdrop-blur-sm border border-gray-700">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-3 h-3 bg-blue-400 rounded-full animate-pulse"></div>
                  <span className="text-blue-300 font-semibold text-lg">Los Nombres</span>
                </div>
                <p className="text-gray-300 text-lg">
                  <span className="text-blue-400 font-bold">Gianro</span> + <span className="text-purple-400 font-bold">Paloma</span> = <span className="text-gialoma-gold font-bold text-xl">GIALOMA</span>
                </p>
              </div>
              
              <div className="bg-black bg-opacity-50 rounded-lg p-6 backdrop-blur-sm border border-gray-700">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-3 h-3 bg-yellow-400 rounded-full animate-pulse"></div>
                  <span className="text-yellow-300 font-semibold text-lg">La Base</span>
                </div>
                <p className="text-gray-300 text-lg">
                  "<span className="text-yellow-400 font-bold">Loma</span>" representa <span className="text-yellow-400">estabilidad</span> y <span className="text-yellow-400">crecimiento</span>
                </p>
              </div>
              
              <div className="bg-black bg-opacity-50 rounded-lg p-6 backdrop-blur-sm border border-gray-700">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-3 h-3 bg-gialoma-gold rounded-full animate-pulse"></div>
                  <span className="text-gialoma-gold font-semibold text-lg">La Misión</span>
                </div>
                <p className="text-gray-300 text-lg">
                  <span className="text-purple-400">IA</span> + <span className="text-orange-400">Diseño Humano</span> = <span className="text-gialoma-gold font-bold">Soluciones de Vida</span>
                </p>
              </div>
            </div>
            
            {/* Right Side - Brand Display */}
            <div className="relative">
              <div className="bg-black bg-opacity-30 rounded-xl p-8 backdrop-blur-sm border border-gray-700">
                <div className="text-center text-white">
                  <div className="text-6xl font-bold text-gialoma-gold mb-4 tracking-wider">
                    GIALOMA
                  </div>
                  <div className="text-2xl text-gray-300 mb-8">
                    Life Solutions
                  </div>
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div className="bg-blue-500 bg-opacity-20 rounded p-4 border border-blue-500 border-opacity-30">
                      <div className="text-blue-300 font-semibold">Tecnología IA</div>
                    </div>
                    <div className="bg-purple-500 bg-opacity-20 rounded p-4 border border-purple-500 border-opacity-30">
                      <div className="text-purple-300 font-semibold">Enfoque Humano</div>
                    </div>
                    <div className="bg-yellow-500 bg-opacity-20 rounded p-4 border border-yellow-500 border-opacity-30">
                      <div className="text-yellow-300 font-semibold">Automatización</div>
                    </div>
                    <div className="bg-gialoma-gold bg-opacity-20 rounded p-4 border border-gialoma-gold border-opacity-30">
                      <div className="text-gialoma-gold font-semibold">Libertad</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Philosophy Section */}
          <div className="text-center">
            <div className="bg-black bg-opacity-40 rounded-xl p-8 backdrop-blur-sm border border-gray-700 max-w-4xl mx-auto">
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
