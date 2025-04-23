
import React, { useState, useEffect } from 'react';
import { X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const CookieBanner = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Check if the user has already accepted the cookie policy
    const hasAccepted = localStorage.getItem('cookiePolicyAccepted');
    if (!hasAccepted) {
      // Show the banner immediately - no delay to ensure it shows at the same time as BookPopup
      setIsVisible(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookiePolicyAccepted', 'true');
    setIsVisible(false);
  };

  const handleClose = () => {
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 bg-white shadow-lg border-t border-gray-200 p-4 md:p-6 animate-fade-in-up">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div className="pr-8 flex-grow">
            <h3 className="text-lg font-semibold text-gialoma-black mb-2">We Value Your Privacy</h3>
            <p className="text-gialoma-darkgray mb-2">
              Gialoma doesn't use cookies on this website. This notice is provided for transparency purposes only. 
            </p>
            <p className="text-sm text-gialoma-darkgray">
              For more information, please read our{' '}
              <Link to="/cookie-policy" className="text-gialoma-gold hover:text-gialoma-darkgold">
                Cookie Policy
              </Link>.
            </p>
          </div>
          <div className="flex items-center gap-2 mt-2 md:mt-0">
            <button
              onClick={handleClose}
              className="p-1 text-gray-400 hover:text-gray-600"
              aria-label="Close cookie notice"
            >
              <X size={20} />
            </button>
            <Button 
              onClick={handleAccept}
              className="bg-gialoma-gold hover:bg-gialoma-darkgold text-white whitespace-nowrap"
            >
              Acknowledge
            </Button>
          </div>
        </div>
      </div>

      {/* CSS for animation */}
      <style jsx>{`
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
          animation: fadeInUp 0.3s ease-out;
        }
      `}</style>
    </div>
  );
};

export default CookieBanner;
