import React, { useState } from 'react';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import DigitalizationForm from '../components/DigitalizationForm';
import DigitalizationNavbar from '../components/DigitalizationNavbar';
import Footer from '../components/Footer';

const DigitalizationTest = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50">
      <DigitalizationNavbar />
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Back to Home Link */}
        <Link 
          to="/" 
          className="inline-flex items-center text-gialoma-gold hover:text-gialoma-darkgold transition-colors mb-6"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Volver al inicio
        </Link>

        <div className="bg-white rounded-lg shadow-lg p-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Test del Formulario de Digitalización
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Esta es la página de prueba para el nuevo formulario personalizado que reemplazará al formulario de Fillout.
            </p>
            
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-8">
              <h2 className="text-lg font-semibold text-blue-800 mb-3">
                🧪 Página de Prueba
              </h2>
              <p className="text-blue-700 text-left">
                Este formulario incluye todas las preguntas P1-P16 del formulario original de Fillout, 
                divididas en 9 pasos lógicos:
              </p>
              <ul className="text-blue-700 text-left mt-4 space-y-1">
                <li><strong>Paso 1:</strong> Información Básica</li>
                <li><strong>Paso 2:</strong> Procesos y Automatización (P1-P2)</li>
                <li><strong>Paso 3:</strong> Herramientas Digitales (P3-P4)</li>
                <li><strong>Paso 4:</strong> Productividad (P5-P6)</li>
                <li><strong>Paso 5:</strong> Bienestar Laboral (P7-P8)</li>
                <li><strong>Paso 6:</strong> Madurez Digital (P9-P10)</li>
                <li><strong>Paso 7:</strong> Balance Trabajo-Vida (P11-P12)</li>
                <li><strong>Paso 8:</strong> Prioridades (P13-P14)</li>
                <li><strong>Paso 9:</strong> Objetivos (P15-P16)</li>
              </ul>
            </div>

            <button
              onClick={() => setIsFormOpen(true)}
              className="bg-gialoma-gold hover:bg-gialoma-darkgold text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors shadow-lg"
            >
              Probar Formulario Completo
            </button>
          </div>

          {/* Features List */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
            <div className="bg-gray-50 p-6 rounded-lg">
              <div className="text-gialoma-gold text-2xl mb-4">✅</div>
              <h3 className="font-semibold text-gray-900 mb-2">Validación Completa</h3>
              <p className="text-gray-600 text-sm">
                Todas las preguntas son obligatorias con validación en tiempo real.
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <div className="text-gialoma-gold text-2xl mb-4">📊</div>
              <h3 className="font-semibold text-gray-900 mb-2">Progreso Visual</h3>
              <p className="text-gray-600 text-sm">
                Barra de progreso que muestra el avance a través de los 9 pasos.
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <div className="text-gialoma-gold text-2xl mb-4">🔗</div>
              <h3 className="font-semibold text-gray-900 mb-2">Integración Airtable</h3>
              <p className="text-gray-600 text-sm">
                Conectado a la misma base de Airtable que el formulario original.
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <div className="text-gialoma-gold text-2xl mb-4">📱</div>
              <h3 className="font-semibold text-gray-900 mb-2">Responsive</h3>
              <p className="text-gray-600 text-sm">
                Optimizado para móviles, tablets y escritorio.
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <div className="text-gialoma-gold text-2xl mb-4">🎨</div>
              <h3 className="font-semibold text-gray-900 mb-2">Diseño Consistente</h3>
              <p className="text-gray-600 text-sm">
                Mantiene el estilo y colores de la marca Gialoma.
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <div className="text-gialoma-gold text-2xl mb-4">💬</div>
              <h3 className="font-semibold text-gray-900 mb-2">Ejemplos Explicativos</h3>
              <p className="text-gray-600 text-sm">
                Incluye ejemplos y aclaraciones para facilitar las respuestas.
              </p>
            </div>
          </div>

          <div className="mt-12 p-6 bg-yellow-50 border border-yellow-200 rounded-lg">
            <h3 className="text-lg font-semibold text-yellow-800 mb-2">
              ⚠️ Importante
            </h3>
            <p className="text-yellow-700">
              Este es un formulario de prueba. Los datos enviados se guardarán en Airtable junto con los del formulario de producción.
              Una vez validado, reemplazaremos el formulario de Fillout en la página principal.
            </p>
          </div>
        </div>
      </div>

      {/* Form Modal */}
      <DigitalizationForm 
        isOpen={isFormOpen} 
        onClose={() => setIsFormOpen(false)} 
      />

      <Footer />
    </div>
  );
};

export default DigitalizationTest;