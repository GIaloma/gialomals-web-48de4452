import React from 'react';
import { Rocket, ShieldCheck, LayoutDashboard, BarChartBig, Users, Code } from 'lucide-react';

const ServicesEs = () => {
  return (
    <section id="servicios" className="section-padding bg-white">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-gradient">Nuestros Servicios</span>
          </h2>
          <p className="text-lg text-gialoma-darkgray max-w-2xl mx-auto">
            Impulsamos tu éxito con soluciones tecnológicas innovadoras y a medida.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Servicio 1 */}
          <div className="bg-gray-50 rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300 animate-fade-in-up">
            <Rocket className="text-gialoma-gold mb-4 w-10 h-10" />
            <h3 className="text-xl font-semibold text-gialoma-black mb-2">Desarrollo de Software a Medida</h3>
            <p className="text-gialoma-darkgray">
              Creamos soluciones de software personalizadas que se adaptan perfectamente a tus necesidades y procesos empresariales.
            </p>
          </div>

          {/* Servicio 2 */}
          <div className="bg-gray-50 rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            <ShieldCheck className="text-gialoma-gold mb-4 w-10 h-10" />
            <h3 className="text-xl font-semibold text-gialoma-black mb-2">Consultoría en Ciberseguridad</h3>
            <p className="text-gialoma-darkgray">
              Protegemos tu negocio contra amenazas cibernéticas con estrategias de seguridad robustas y soluciones de vanguardia.
            </p>
          </div>

          {/* Servicio 3 */}
          <div className="bg-gray-50 rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
            <LayoutDashboard className="text-gialoma-gold mb-4 w-10 h-10" />
            <h3 className="text-xl font-semibold text-gialoma-black mb-2">Optimización de Infraestructuras IT</h3>
            <p className="text-gialoma-darkgray">
              Mejoramos la eficiencia y el rendimiento de tus sistemas IT para reducir costos y aumentar la productividad.
            </p>
          </div>

          {/* Servicio 4 */}
          <div className="bg-gray-50 rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300 animate-fade-in-up">
            <BarChartBig className="text-gialoma-gold mb-4 w-10 h-10" />
            <h3 className="text-xl font-semibold text-gialoma-black mb-2">Análisis de Datos y Business Intelligence</h3>
            <p className="text-gialoma-darkgray">
              Transformamos tus datos en información valiosa para la toma de decisiones estratégicas y el crecimiento de tu negocio.
            </p>
          </div>

          {/* Servicio 5 */}
          <div className="bg-gray-50 rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            <Users className="text-gialoma-gold mb-4 w-10 h-10" />
            <h3 className="text-xl font-semibold text-gialoma-black mb-2">Soporte Técnico Especializado</h3>
            <p className="text-gialoma-darkgray">
              Ofrecemos soporte técnico de alta calidad para resolver tus problemas de manera rápida y eficiente.
            </p>
          </div>

          {/* Servicio 6 */}
          <div className="bg-gray-50 rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
            <Code className="text-gialoma-gold mb-4 w-10 h-10" />
            <h3 className="text-xl font-semibold text-gialoma-black mb-2">Integración de Sistemas</h3>
            <p className="text-gialoma-darkgray">
              Integramos tus sistemas existentes para crear un entorno de trabajo más eficiente y conectado.
            </p>
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

export default ServicesEs;
