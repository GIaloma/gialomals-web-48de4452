import React, { useEffect, useRef } from 'react';

interface ChatAgentProps {
  isOpen: boolean;
  onClose: () => void;
  language: 'en' | 'es';
}

export const ChatAgent: React.FC<ChatAgentProps> = ({ isOpen, onClose, language }) => {
  const scriptsLoadedRef = useRef(false);
  const closeButtonRef = useRef<HTMLButtonElement | null>(null);

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
            
            // Add custom close button to Botpress chat
            addCloseButtonToBotpress();
          }
        }, 500);
      };
      
      document.head.appendChild(script1);
      
      return () => {
        // Hide the chat when component unmounts
        if (window.botpressWebChat) {
          window.botpressWebChat.hide();
        }
        // Remove close button
        if (closeButtonRef.current && document.body.contains(closeButtonRef.current)) {
          document.body.removeChild(closeButtonRef.current);
        }
      };
    }
  }, [isOpen]);

  const addCloseButtonToBotpress = () => {
    // Create a custom close button
    const closeButton = document.createElement('button');
    closeButton.innerHTML = '✕';
    closeButton.style.position = 'fixed';
    closeButton.style.top = '20px';
    closeButton.style.right = '20px';
    closeButton.style.zIndex = '10000';
    closeButton.style.backgroundColor = '#c7ae6a'; // Gialoma gold
    closeButton.style.color = '#000000';
    closeButton.style.border = 'none';
    closeButton.style.borderRadius = '50%';
    closeButton.style.width = '40px';
    closeButton.style.height = '40px';
    closeButton.style.fontSize = '18px';
    closeButton.style.fontWeight = 'bold';
    closeButton.style.cursor = 'pointer';
    closeButton.style.boxShadow = '0 2px 10px rgba(0,0,0,0.3)';
    closeButton.style.transition = 'all 0.2s ease';
    
    closeButton.onmouseover = () => {
      closeButton.style.backgroundColor = '#d5c28f'; // Gialoma light gold
      closeButton.style.transform = 'scale(1.1)';
    };
    
    closeButton.onmouseout = () => {
      closeButton.style.backgroundColor = '#c7ae6a'; // Gialoma gold
      closeButton.style.transform = 'scale(1)';
    };
    
    closeButton.onclick = () => {
      onClose();
    };
    
    document.body.appendChild(closeButton);
    closeButtonRef.current = closeButton;
  };

  useEffect(() => {
    // Show or hide chat based on isOpen state
    if (scriptsLoadedRef.current && window.botpressWebChat) {
      if (isOpen) {
        window.botpressWebChat.show();
        if (!closeButtonRef.current) {
          addCloseButtonToBotpress();
        }
      } else {
        window.botpressWebChat.hide();
        if (closeButtonRef.current && document.body.contains(closeButtonRef.current)) {
          document.body.removeChild(closeButtonRef.current);
          closeButtonRef.current = null;
        }
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