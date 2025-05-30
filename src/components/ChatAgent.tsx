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

  // This component doesn't render anything visible - the Botpress chat appears directly
  return null;
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