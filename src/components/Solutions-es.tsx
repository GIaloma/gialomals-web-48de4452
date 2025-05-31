import React from 'react';
import { Rocket, ShieldCheck, LayoutDashboard, BarChartBig, Code2, Users2 } from 'lucide-react';

const SolutionsEs = () => {
  return (
    <section id="soluciones" className="section-padding bg-white">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-gradient">Nuestras Soluciones</span>
          </h2>
          <p className="text-lg text-gialoma-darkgray max-w-2xl mx-auto">
            Impulsamos tu negocio con soluciones tecnológicas innovadoras, diseñadas para optimizar tus operaciones y maximizar tu éxito.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Solution Card 1 */}
          <div className="bg-gray-50 rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300">
            <Rocket className="text-gialoma-gold mb-4 h-8 w-8" />
            <h3 className="text-xl font-semibold text-gialoma-black mb-2">Automatización Inteligente</h3>
            <p className="text-gialoma-darkgray">Automatiza tareas repetitivas y optimiza flujos de trabajo con nuestras soluciones de automatización impulsadas por IA.</p>
          </div>

          {/* Solution Card 2 */}
          <div className="bg-gray-50 rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300">
            <ShieldCheck className="text-gialoma-gold mb-4 h-8 w-8" />
            <h3 className="text-xl font-semibold text-gialoma-black mb-2">Ciberseguridad Avanzada</h3>
            <p className="text-gialoma-darkgray">Protege tu información y datos críticos con nuestras soluciones de ciberseguridad de última generación.</p>
          </div>

          {/* Solution Card 3 */}
          <div className="bg-gray-50 rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300">
            <LayoutDashboard className="text-gialoma-gold mb-4 h-8 w-8" />
            <h3 className="text-xl font-semibold text-gialoma-black mb-2">Paneles de Control Personalizados</h3>
            <p className="text-gialoma-darkgray">Visualiza y analiza tus datos clave con paneles de control interactivos y personalizados para una toma de decisiones más informada.</p>
          </div>

          {/* Solution Card 4 */}
          <div className="bg-gray-50 rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300">
            <BarChartBig className="text-gialoma-gold mb-4 h-8 w-8" />
            <h3 className="text-xl font-semibold text-gialoma-black mb-2">Analítica Predictiva</h3>
            <p className="text-gialoma-darkgray">Anticipa tendencias y oportunidades con nuestras soluciones de analítica predictiva impulsadas por machine learning.</p>
          </div>

          {/* Solution Card 5 */}
          <div className="bg-gray-50 rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300">
            <Code2 className="text-gialoma-gold mb-4 h-8 w-8" />
            <h3 className="text-xl font-semibold text-gialoma-black mb-2">Desarrollo de Software a Medida</h3>
            <p className="text-gialoma-darkgray">Obtén soluciones de software personalizadas que se adaptan perfectamente a tus necesidades y requerimientos específicos.</p>
          </div>

          {/* Solution Card 6 */}
          <div className="bg-gray-50 rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300">
            <Users2 className="text-gialoma-gold mb-4 h-8 w-8" />
            <h3 className="text-xl font-semibold text-gialoma-black mb-2">Consultoría Tecnológica Estratégica</h3>
            <p className="text-gialoma-darkgray">Recibe asesoramiento experto para alinear tu estrategia tecnológica con tus objetivos de negocio y maximizar tu retorno de inversión.</p>
          </div>
        </div>
      </div>

      {/* CSS for animation */}
      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in-up {
          animation: fadeInUp 0.6s ease-out;
        }
      `}</style>
    </section>
  );
};

export default SolutionsEs;
