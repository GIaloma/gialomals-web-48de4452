import React, { useEffect, useRef } from 'react';

interface ChatAgentProps {
  isOpen: boolean;
  onClose: () => void;
  language: 'en' | 'es';
}

export const ChatAgent: React.FC<ChatAgentProps> = ({ isOpen, onClose, language }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const scriptsLoadedRef = useRef(false);

  useEffect(() => {
    if (isOpen && !scriptsLoadedRef.current) {
      // Load the Botpress scripts dynamically
      const script1 = document.createElement('script');
      script1.src = 'https://cdn.botpress.cloud/webchat/v2.4/inject.js';
      script1.async = true;
      
      const script2 = document.createElement('script');
      script2.src = 'https://files.bpcontent.cloud/2025/05/01/17/20250501175630-EVUUQ1E2.js';
      script2.async = true;
      
      script1.onload = () => {
        // Load the second script after the first one is ready
        document.head.appendChild(script2);
      };

      script2.onload = () => {
        scriptsLoadedRef.current = true;
        // Initialize Botpress webchat if needed
        if (window.botpressWebChat) {
          window.botpressWebChat.init();
        }
      };
      
      document.head.appendChild(script1);
      
      return () => {
        // Cleanup scripts if component unmounts
        if (document.head.contains(script1)) {
          document.head.removeChild(script1);
        }
        if (document.head.contains(script2)) {
          document.head.removeChild(script2);
        }
      };
    }
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg shadow-xl w-full max-w-md h-96 flex flex-col overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b bg-gradient-to-r from-gialoma-gold to-gialoma-darkgold text-gialoma-black">
          <div>
            <h3 className="text-lg font-semibold">
              {language === 'es' ? 'Asistente IA 24/7' : '24/7 AI Assistant'}
            </h3>
            <p className="text-sm opacity-90">
              {language === 'es' 
                ? 'Obtén ayuda instantánea con tu automatización de agenda'
                : 'Get instant help with your calendar automation'
              }
            </p>
          </div>
          <button
            onClick={onClose}
            className="p-1 hover:bg-black/10 rounded-full transition-colors"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>
        </div>

        {/* Chat Content */}
        <div className="flex-1 relative p-4">
          <div className="text-center mb-4">
            <p className="text-gray-600 text-sm">
              {language === 'es' 
                ? 'El chat se está cargando...'
                : 'Chat is loading...'
              }
            </p>
          </div>
          
          {/* Botpress Chat Container */}
          <div 
            ref={containerRef}
            className="h-full flex items-center justify-center"
            id="botpress-webchat-container"
          >
            {/* The Botpress webchat will be injected here */}
            <div className="text-center text-gray-500">
              {language === 'es' 
                ? 'Iniciando chat...'
                : 'Starting chat...'
              }
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Add type declaration for window.botpressWebChat
declare global {
  interface Window {
    botpressWebChat?: {
      init: () => void;
      show: () => void;
      hide: () => void;
    };
  }
}

export default ChatAgent;