import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { ChevronLeft, ArrowRight } from 'lucide-react';
import DigitalizationNavbar from '../components/DigitalizationNavbar';
import Footer from '../components/Footer';

const DigitalMaturityEvaluation: React.FC = () => {
  const [showEvaluation, setShowEvaluation] = useState(false);

  useEffect(() => {
    // Load Fillout script if not already loaded
    if (!document.querySelector('script[src="https://server.fillout.com/embed/v1/"]')) {
      const script = document.createElement('script');
      script.src = 'https://server.fillout.com/embed/v1/';
      script.async = true;
      document.body.appendChild(script);
    }
  }, []);

  const startEvaluation = () => {
    setShowEvaluation(true);
  };

  if (showEvaluation) {
    return (
      <div className="min-h-screen bg-gray-50">
        <DigitalizationNavbar />
        
        <main className="pt-20">
          <div className="container mx-auto px-4 py-8">
            <div className="mb-8">
              <Button 
                variant="outline" 
                onClick={() => setShowEvaluation(false)}
                className="flex items-center gap-2"
              >
                <ChevronLeft className="h-4 w-4" />
                Volver
              </Button>
            </div>

            <div className="bg-white rounded-lg shadow-sm p-8">
              <h2 className="text-2xl font-bold mb-6 text-gialoma-gold border-b-2 border-gray-100 pb-4">
                Evaluación de Madurez Digital
              </h2>
              
              <p className="text-lg text-gialoma-darkgray mb-6">
                Completa esta evaluación para descubrir el nivel de madurez digital de tu empresa y recibir recomendaciones personalizadas.
              </p>

              {/* Fillout Evaluation Form */}
              <div 
                style={{width:'100%', height:'600px'}} 
                data-fillout-id="quXDk3DgRqus" 
                data-fillout-embed-type="standard" 
                data-fillout-inherit-parameters 
                data-fillout-dynamic-resize
              ></div>
            </div>
          </div>
        </main>
        
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <DigitalizationNavbar />
      
      <main className="pt-20">
        <div className="container mx-auto px-4 py-8">
          <div className="bg-white rounded-lg shadow-sm p-8">
            <div className="text-center mb-12">
              <h1 className="text-4xl font-bold mb-6 text-gialoma-gold">
                Evaluación de Madurez Digital
              </h1>
              <p className="text-xl text-gialoma-darkgray max-w-3xl mx-auto mb-8">
                Descubre el nivel de digitalización de tu empresa y obtén un análisis personalizado 
                con recomendaciones específicas para optimizar tus procesos empresariales.
              </p>
              
              <div className="bg-gradient-to-r from-gialoma-gold/10 to-gialoma-darkgold/10 p-6 rounded-lg mb-8">
                <h3 className="text-lg font-semibold text-gialoma-black mb-3">
                  ¿Qué incluye esta evaluación?
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left">
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-gialoma-gold rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span className="text-gialoma-darkgray">Análisis de tu nivel actual de digitalización</span>
                  </div>
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-gialoma-gold rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span className="text-gialoma-darkgray">Identificación de oportunidades de mejora</span>
                  </div>
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-gialoma-gold rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span className="text-gialoma-darkgray">Recomendaciones personalizadas</span>
                  </div>
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-gialoma-gold rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span className="text-gialoma-darkgray">Plan de acción específico para tu empresa</span>
                  </div>
                </div>
              </div>

              <div className="mb-8">
                <p className="text-lg text-gialoma-darkgray mb-4">
                  <strong>Tiempo estimado:</strong> 5-10 minutos
                </p>
                <p className="text-lg text-gialoma-darkgray">
                  <strong>Resultado:</strong> Informe detallado con tu puntuación y próximos pasos
                </p>
              </div>

              <Button 
                onClick={startEvaluation}
                className="bg-gialoma-gold hover:bg-gialoma-darkgold text-gialoma-black text-lg px-8 py-6 flex items-center gap-2 mx-auto"
              >
                Comenzar Evaluación
                <ArrowRight className="h-5 w-5" />
              </Button>
            </div>

            <div className="border-t border-gray-200 pt-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                <div>
                  <div className="w-16 h-16 bg-gialoma-gold/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-gialoma-gold">1</span>
                  </div>
                  <h4 className="font-semibold text-gialoma-black mb-2">Responde las Preguntas</h4>
                  <p className="text-gialoma-darkgray text-sm">
                    Completa el cuestionario sobre tus procesos actuales y objetivos digitales
                  </p>
                </div>
                
                <div>
                  <div className="w-16 h-16 bg-gialoma-gold/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-gialoma-gold">2</span>
                  </div>
                  <h4 className="font-semibold text-gialoma-black mb-2">Recibe tu Análisis</h4>
                  <p className="text-gialoma-darkgray text-sm">
                    Obtén un informe detallado con tu nivel de madurez digital actual
                  </p>
                </div>
                
                <div>
                  <div className="w-16 h-16 bg-gialoma-gold/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-gialoma-gold">3</span>
                  </div>
                  <h4 className="font-semibold text-gialoma-black mb-2">Actúa Según el Plan</h4>
                  <p className="text-gialoma-darkgray text-sm">
                    Implementa las recomendaciones personalizadas para tu empresa
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default DigitalMaturityEvaluation;