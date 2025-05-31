
import React from 'react';

const AboutEs = () => {
  return (
    <section id="acerca" className="section-padding bg-gray-100">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center">
          <div className="md:w-3/5 mb-8 md:mb-0 md:mr-16 md:-ml-6">
            <img 
              src="/lovable-uploads/d9a9205a-16f2-4d97-9599-f8ecb482a494.png" 
              alt="Explicación del Logo de Gialoma Life Solutions" 
              className="w-full rounded-lg shadow-lg transform md:scale-110 transition-transform duration-300"
            />
          </div>
          <div className="md:w-2/5">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gialoma-black">
              Nuestro Nombre, Nuestra Visión
            </h2>
            <div className="text-lg text-gialoma-darkgray space-y-4">
              <p>El nombre "Gialoma" es una combinación de dos nombres: Gianro y Paloma. "Loma" es una palabra española que usamos para inspirar estabilidad y crecimiento.</p>
              <p>Nuestro logo representa la fusión de la Inteligencia Artificial y el diseño centrado en el ser humano. La red neuronal interconectada simboliza cómo la tecnología puede integrarse perfectamente en tu vida, liberando tu tiempo para enfocarte en lo que más importa.</p>
              <p>Creemos en usar la IA y la automatización para diseñar soluciones de vida que te empoderen a vivir más y trabajar menos.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutEs;
