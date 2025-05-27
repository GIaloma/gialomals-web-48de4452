import React, { useState } from 'react';
import { MessageCircle, Mic, X } from 'lucide-react';

interface FloatingAgentButtonProps {
  language: 'en' | 'es';
  onChatClick: () => void;
  onVoiceClick: () => void;
}

export const FloatingAgentButton: React.FC<FloatingAgentButtonProps> = ({ 
  language, 
  onChatClick, 
  onVoiceClick 
}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const texts = {
    en: {
      chat: 'Chat Agent',
      voice: 'Voice Agent',
      support: '24/7 AI Support'
    },
    es: {
      chat: 'Agente Chat',
      voice: 'Agente Voz',
      support: 'Soporte IA 24/7'
    }
  };

  const t = texts[language];

  const handleChatClick = () => {
    setIsMenuOpen(false);
    onChatClick();
  };

  const handleVoiceClick = () => {
    setIsMenuOpen(false);
    onVoiceClick();
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Menu Options */}
      <div className={`transition-all duration-300 ${isMenuOpen ? 'mb-4 space-y-3' : ''}`}>
        {/* Voice Button */}
        <div className="flex items-center space-x-3">
          {isMenuOpen && (
            <div className="bg-gray-800 text-white px-3 py-1 rounded-lg text-sm whitespace-nowrap animate-fade-in">
              {t.voice}
            </div>
          )}
          <button
            onClick={handleVoiceClick}
            className={`flex items-center justify-center w-12 h-12 bg-green-500 hover:bg-green-600 text-white rounded-full shadow-lg transition-all duration-300 hover:scale-110 ${
              isMenuOpen ? 'opacity-100 scale-100' : 'opacity-0 scale-0 pointer-events-none'
            }`}
          >
            <Mic size={20} />
          </button>
        </div>
        
        {/* Chat Button */}
        <div className="flex items-center space-x-3">
          {isMenuOpen && (
            <div className="bg-gray-800 text-white px-3 py-1 rounded-lg text-sm whitespace-nowrap animate-fade-in">
              {t.chat}
            </div>
          )}
          <button
            onClick={handleChatClick}
            className={`flex items-center justify-center w-12 h-12 bg-blue-500 hover:bg-blue-600 text-white rounded-full shadow-lg transition-all duration-300 hover:scale-110 ${
              isMenuOpen ? 'opacity-100 scale-100' : 'opacity-0 scale-0 pointer-events-none'
            }`}
          >
            <MessageCircle size={20} />
          </button>
        </div>
      </div>

      {/* Main FAB */}
      <button
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        className="relative flex items-center justify-center w-14 h-14 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white rounded-full shadow-lg transition-all duration-300 hover:scale-110 group"
      >
        {isMenuOpen ? <X size={24} /> : <MessageCircle size={24} />}
        
        {/* Pulse animation when closed */}
        {!isMenuOpen && (
          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 animate-ping opacity-20"></div>
        )}
        
        {/* Tooltip */}
        <div className="absolute right-16 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white px-3 py-1 rounded-lg text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
          {t.support}
        </div>
      </button>

      {/* Custom CSS for fade-in animation */}
      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateX(10px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        .animate-fade-in {
          animation: fade-in 0.3s ease-out;
        }
      `}</style>
    </div>
  );
};

export default FloatingAgentButton;