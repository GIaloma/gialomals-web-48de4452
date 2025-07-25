import React from 'react';
import { Button } from '@/components/ui/button';
import { Download, Star, Gift } from 'lucide-react';

interface BookHeroProps {
  onDownloadClick: () => void;
}

const BookHero: React.FC<BookHeroProps> = ({ onDownloadClick }) => {
  return (
    <section className="bg-gradient-to-r from-gialoma-darkgold to-gialoma-gold py-16">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="md:w-1/2">
            <div className="flex items-center gap-3 mb-4">
              <Gift className="text-white" size={32} />
              <span className="bg-white text-gialoma-gold px-3 py-1 rounded-full font-bold text-sm">
                DESCARGA GRATUITA
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-2">
              Alquimia Digital
            </h1>
            <h2 className="text-2xl md:text-3xl text-white/90 mb-4 font-light italic">
              El Puente entre la Sabiduría Ancestral y la Era Tecnológica
            </h2>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 mb-6">
              <h3 className="text-xl font-semibold text-white mb-2">
                Capítulo 0: El Propósito de Gialoma
              </h3>
              <p className="text-white/90 text-sm leading-relaxed">
                Descubre cómo la tecnología puede liberarte para ser más humano. Un viaje desde la resistencia 
                hasta la liberación, donde aprenderás a crear equilibrio entre lo digital y lo esencial.
              </p>
            </div>
            <p className="text-lg text-white/90 mb-6">
              Obtén GRATIS el primer capítulo donde Paloma comparte su transformación personal y 
              cómo nació una nueva forma de entender la tecnología: como herramienta de plenitud humana, no de esclavitud digital.
            </p>
            <div className="flex gap-2 mb-8">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star key={star} fill="white" className="text-white" size={20} />
              ))}
              <span className="text-white ml-2">Más de 1,000 empresarios ya lo descargaron</span>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                onClick={onDownloadClick}
                className="bg-white text-gialoma-gold hover:bg-gialoma-gold hover:text-white border border-white hover:border-white transition-colors px-8 py-6 text-lg font-bold"
              >
                <Download className="mr-2" size={18} />
                Obtener PDF Gratis
              </Button>
            </div>
          </div>
          <div className="md:w-1/3">
            <div className="rounded-lg shadow-2xl overflow-hidden transform rotate-3 hover:rotate-0 transition-transform duration-300">
              <img 
                src="/lovable-uploads/Portada Libro Alquimia DIgital.png" 
                alt="Portada del libro Alquimia Digital - El Puente entre la Sabiduría Ancestral y la Era Tecnológica" 
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookHero;