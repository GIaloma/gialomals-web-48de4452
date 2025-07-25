import React from 'react';

const BookAuthors: React.FC = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gialoma-black mb-12">
            Conoce a los Autores
          </h2>
          <div className="flex flex-col md:flex-row gap-8">
            <div className="md:w-1/2">
              <div className="flex items-center mb-4">
                <div className="w-16 h-16 rounded-full bg-gray-200 mr-4"></div>
                <div>
                  <h3 className="font-bold text-gialoma-black text-xl">Paloma Firgaira</h3>
                  <p className="text-gialoma-darkgray">Co-fundadora y CEO, Gialoma Life Solutions</p>
                </div>
              </div>
              <p className="text-gialoma-darkgray">
                Paloma ha ayudado a más de 200 empresas a implementar tecnologías de automatización 
                que les han ahorrado cientos de horas mensuales. Su enfoque práctico y sin tecnicismos 
                ha transformado cómo los empresarios ven la tecnología.
              </p>
            </div>
            <div className="md:w-1/2">
              <div className="flex items-center mb-4">
                <div className="w-16 h-16 rounded-full bg-gray-200 mr-4"></div>
                <div>
                  <h3 className="font-bold text-gialoma-black text-xl">Gianro Compagno</h3>
                  <p className="text-gialoma-darkgray">Co-fundador y CTO, Gialoma Life Solutions</p>
                </div>
              </div>
              <p className="text-gialoma-darkgray">
                Gianro traduce conceptos técnicos complejos en soluciones simples y aplicables. 
                Su experiencia implementando sistemas de IA en empresas reales hace que este libro 
                sea extraordinariamente práctico y orientado a resultados.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookAuthors;