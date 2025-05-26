
import React, { useState, useEffect } from 'react';
import { X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const CookieBannerEs = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Check if the user has already accepted the cookie policy for Spanish
    const hasAccepted = localStorage.getItem('cookiePolicyAccepted_es');
    console.log('Spanish Cookie Banner - hasAccepted:', hasAccepted); // Debug log
    
    if (!hasAccepted) {
      // Show the banner immediately - no delay to ensure it shows at the same time as BookPopup
      setIsVisible(true);
      console.log('Spanish Cookie Banner - Setting visible to true'); // Debug log
    }
  }, []);

  const handleAccept = () => {
    console.log('Spanish Cookie Banner - Accept clicked'); // Debug log
    localStorage.setItem('cookiePolicyAccepted_es', 'true');
    setIsVisible(false);
  };

  const handleClose = () => {
    console.log('Spanish Cookie Banner - Close clicked'); // Debug log
    // Only close temporarily - it will reappear on next page load until accepted
    setIsVisible(false);
  };

  if (!isVisible) {
    console.log('Spanish Cookie Banner - Not visible, returning null'); // Debug log
    return null;
  }

  console.log('Spanish Cookie Banner - Rendering banner'); // Debug log

  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 bg-white shadow-lg border-t border-gray-200 p-4 md:p-6">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div className="pr-8 flex-grow">
            <h3 className="text-lg font-semibold text-gialoma-black mb-2">Valoramos Tu Privacidad</h3>
            <p className="text-gialoma-darkgray mb-2">
              Gialoma no utiliza cookies en este sitio web. Este aviso se proporciona únicamente con fines de transparencia.
            </p>
            <p className="text-sm text-gialoma-darkgray">
              Para más información, por favor lee nuestra{' '}
              <Link to="/politica-cookies" className="text-gialoma-gold hover:text-gialoma-darkgold">
                Política de Cookies
              </Link>.
            </p>
          </div>
          <div className="flex items-center gap-2 mt-2 md:mt-0">
            <button
              onClick={handleClose}
              className="p-1 text-gray-400 hover:text-gray-600"
              aria-label="Cerrar aviso de cookies"
            >
              <X size={20} />
            </button>
            <Button 
              onClick={handleAccept}
              className="bg-gialoma-gold hover:bg-gialoma-darkgold text-white whitespace-nowrap"
            >
              Entendido
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CookieBannerEs;
