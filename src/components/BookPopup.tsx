import React from 'react';
import { X } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface BookPopupProps {
  onClose: () => void;
}

const BookPopup: React.FC<BookPopupProps> = ({ onClose }) => {
  const handleClose = () => {
    // Record that the user has closed the popup in this session for English
    sessionStorage.setItem('gialoma_book_popup_closed_en', 'true');
    onClose();
  };

  const openBookPage = () => {
    // Open book landing page in a new tab
    window.open('/book', '_blank');
    handleClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white rounded-lg shadow-lg w-full max-w-md relative overflow-hidden animate-fade-in-up">
        {/* Close button */}
        <button 
          onClick={handleClose}
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-700 focus:outline-none"
        >
          <X size={20} />
        </button>
        
        {/* Content */}
        <div className="p-6">
          <div className="flex items-center justify-center mb-4">
            <div className="w-20 h-auto mr-4">
              <img 
                src="/placeholder.svg" 
                alt="Book Cover" 
                className="w-full h-auto object-contain"
              />
            </div>
            <div>
              <h2 className="text-xl font-bold text-gialoma-black">New Book Release!</h2>
              <p className="text-sm text-gialoma-darkgray">Transform Your Tech Strategy</p>
            </div>
          </div>
          
          <div className="space-y-4 mt-4">
            <p className="text-gialoma-darkgray">
              Discover proven strategies to leverage AI and automation for business growth in our latest book: <span className="font-semibold">Digital Transformation Made Simple</span>.
            </p>
            
            <div className="flex justify-between items-center p-3 bg-gray-50 rounded-md">
              <div>
                <p className="text-sm text-gray-500">Special Launch Price</p>
                <p className="text-xl font-bold text-gialoma-gold">€5.99</p>
              </div>
              <p className="text-xs text-gray-500 line-through">€15.99</p>
            </div>
            
            <p className="text-sm text-gray-500">
              PDF format • Instant download
            </p>
          </div>
          
          <div className="mt-6 space-y-3">
            <Button
              className="w-full bg-gialoma-gold hover:bg-gialoma-darkgold text-white"
              onClick={openBookPage}
            >
              Learn More
            </Button>
            
            <button 
              className="w-full text-sm text-gialoma-darkgray hover:underline"
              onClick={handleClose}
            >
              Maybe later
            </button>
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
          animation: fadeInUp 0.3s ease-out;
        }
      `}</style>
    </div>
  );
};

export default BookPopup;
