import React from 'react';
import { Button } from '@/components/ui/button';
import { Download } from 'lucide-react';

interface BookCTAProps {
  onDownloadClick: () => void;
}

const BookCTA: React.FC<BookCTAProps> = ({ onDownloadClick }) => {
  return (
    <section className="py-16 bg-gialoma-gold">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold text-white mb-6">
          ¡No Esperes Más! Descarga Tu Copia Gratuita Ahora
        </h2>
        <p className="text-white/90 max-w-2xl mx-auto mb-8">
          Únete a los miles de empresarios que ya están transformando sus operaciones 
          con las estrategias prácticas de "Alquimia Digital".
        </p>
        <Button 
          onClick={onDownloadClick}
          className="bg-white text-gialoma-gold hover:bg-gialoma-gold hover:text-white border border-white hover:border-white transition-colors px-8 py-6 text-lg font-bold"
        >
          <Download className="mr-2" size={18} />
          Obtener PDF Gratis Ahora
        </Button>
        <p className="text-white/80 mt-4 text-sm">
          Formato PDF • Descarga instantánea • 100% Gratis
        </p>
      </div>
    </section>
  );
};

export default BookCTA;