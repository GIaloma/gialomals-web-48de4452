import React, { useEffect, useRef } from 'react';

interface ChatAgentProps {
  isOpen: boolean;
  onClose: () => void;
  language: 'en' | 'es';
}

export const ChatAgent: React.FC<ChatAgentProps> = ({ isOpen, onClose, language }) => {
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
        // Initialize and show Botpress webchat directly
        setTimeout(() => {
          if (window.botpressWebChat) {
            window.botpressWebChat.init();
            window.botpressWebChat.show();
          }
        }, 500);
      };
      
      document.head.appendChild(script1);
      
      return () => {
        // Hide the chat when component unmounts
        if (window.botpressWebChat) {
          window.botpressWebChat.hide();
        }
      };
    }
  }, [isOpen]);

  useEffect(() => {
    // Show or hide chat based on isOpen state
    if (scriptsLoadedRef.current && window.botpressWebChat) {
      if (isOpen) {
        window.botpressWebChat.show();
      } else {
        window.botpressWebChat.hide();
      }
    }
  }, [isOpen]);

  // Render a close button overlay when chat is open
  if (!isOpen) return null;

  return (
    <div
      className="fixed top-4 left-4 z-50"
      style={{ zIndex: 99999 }}
    >
      <button
        onClick={onClose}
        className="flex items-center justify-center w-10 h-10 bg-gialoma-gold hover:bg-gialoma-lightgold text-gialoma-black rounded-full shadow-lg transition-all duration-200 hover:scale-110 border-2 border-gialoma-darkgold"
        style={{
          boxShadow: '0 4px 15px rgba(0,0,0,0.3)',
        }}
        title={language === 'es' ? 'Cerrar Chat' : 'Close Chat'}
      >
        <svg 
          width="16" 
          height="16" 
          viewBox="0 0 24 24" 
          fill="none" 
          stroke="currentColor" 
          strokeWidth="2.5" 
          strokeLinecap="round" 
          strokeLinejoin="round"
        >
          <line x1="18" y1="6" x2="6" y2="18"></line>
          <line x1="6" y1="6" x2="18" y2="18"></line>
        </svg>
      </button>
      
      {/* Optional: Chat label */}
      <div className="mt-2 text-xs text-gialoma-darkgray bg-white px-2 py-1 rounded shadow text-center">
        {language === 'es' ? 'Chat Abierto' : 'Chat Open'}
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