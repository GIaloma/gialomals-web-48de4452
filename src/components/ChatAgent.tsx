import React, { useEffect, useRef } from 'react';

interface ChatAgentProps {
  isOpen: boolean;
  onClose: () => void;
  language: 'en' | 'es';
}

export const ChatAgent: React.FC<ChatAgentProps> = ({ isOpen, onClose, language }) => {
  const scriptsLoadedRef = useRef(false);
  const closeButtonRef = useRef<HTMLButtonElement | null>(null);
  const retryCount = useRef(0);

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
            retryCount.current = 0;
            setTimeout(addCloseButtonToBotpress, 1000); // Wait for Botpress to fully load
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
    retryCount.current++;
    
    // If we've tried too many times, create button anyway
    if (retryCount.current > 10) {
      console.log('Creating close button without Botpress container detection');
      createCloseButton();
      return;
    }

    // Find the Botpress chat container first
    const botpressContainer = document.querySelector('#bp-web-widget') || 
                             document.querySelector('[data-testid="widget"]') ||
                             document.querySelector('.bp-widget') ||
                             document.querySelector('iframe[src*="botpress"]') ||
                             document.querySelector('[class*="widget"]') ||
                             document.querySelector('[id*="botpress"]');
    
    if (!botpressContainer) {
      console.log(`Attempt ${retryCount.current}: Botpress container not found, retrying...`);
      // If container not found, try again in a bit
      setTimeout(addCloseButtonToBotpress, 500);
      return;
    }

    console.log('Botpress container found:', botpressContainer);
    createCloseButton();
  };

  const createCloseButton = () => {
    // Remove existing button if any
    if (closeButtonRef.current && document.body.contains(closeButtonRef.current)) {
      document.body.removeChild(closeButtonRef.current);
    }

    // Create a custom close button positioned on the left side
    const closeButton = document.createElement('button');
    closeButton.innerHTML = '✕';
    closeButton.style.position = 'fixed';
    
    // Position the button on the LEFT side - make it very visible
    closeButton.style.bottom = '300px'; // Lower position to be more visible
    closeButton.style.left = '25px'; // LEFT side positioning
    
    closeButton.style.zIndex = '99999'; // Even higher z-index
    closeButton.style.backgroundColor = '#c7ae6a'; // Gialoma gold
    closeButton.style.color = '#000000';
    closeButton.style.border = '2px solid #b99a45'; // Add border for visibility
    closeButton.style.borderRadius = '50%';
    closeButton.style.width = '40px'; // Make it bigger
    closeButton.style.height = '40px';
    closeButton.style.fontSize = '18px'; // Bigger font
    closeButton.style.fontWeight = 'bold';
    closeButton.style.cursor = 'pointer';
    closeButton.style.boxShadow = '0 4px 15px rgba(0,0,0,0.5)'; // Stronger shadow
    closeButton.style.transition = 'all 0.2s ease';
    closeButton.style.display = 'flex';
    closeButton.style.alignItems = 'center';
    closeButton.style.justifyContent = 'center';
    
    // Add a data attribute to identify it
    closeButton.setAttribute('data-chat-close', 'true');
    
    closeButton.onmouseover = () => {
      closeButton.style.backgroundColor = '#d5c28f'; // Gialoma light gold
      closeButton.style.transform = 'scale(1.2)';
      closeButton.style.boxShadow = '0 6px 20px rgba(0,0,0,0.6)';
    };
    
    closeButton.onmouseout = () => {
      closeButton.style.backgroundColor = '#c7ae6a'; // Gialoma gold
      closeButton.style.transform = 'scale(1)';
      closeButton.style.boxShadow = '0 4px 15px rgba(0,0,0,0.5)';
    };
    
    closeButton.onclick = () => {
      console.log('Chat close button clicked');
      onClose();
    };
    
    document.body.appendChild(closeButton);
    closeButtonRef.current = closeButton;
    
    console.log('Chat close button created and added to page');

    // Try to force Botpress chat to left side with CSS
    const existingStyle = document.querySelector('#chat-positioning-style');
    if (!existingStyle) {
      const style = document.createElement('style');
      style.id = 'chat-positioning-style';
      style.textContent = `
        #bp-web-widget,
        [data-testid="widget"],
        .bp-widget {
          position: fixed !important;
          bottom: 20px !important;
          left: 20px !important;
          right: auto !important;
          transform: none !important;
        }
        
        /* Target Botpress iframe if it exists */
        iframe[src*="botpress"] {
          position: fixed !important;
          bottom: 20px !important;
          left: 20px !important;
          right: auto !important;
        }
        
        /* Generic widget targeting */
        [class*="widget"][class*="chat"],
        [id*="botpress"],
        [class*="botpress"] {
          position: fixed !important;
          bottom: 20px !important;
          left: 20px !important;
          right: auto !important;
        }
      `;
      document.head.appendChild(style);
    }
  };

  useEffect(() => {
    // Show or hide chat based on isOpen state
    if (scriptsLoadedRef.current && window.botpressWebChat) {
      if (isOpen) {
        window.botpressWebChat.show();
        if (!closeButtonRef.current) {
          retryCount.current = 0;
          setTimeout(addCloseButtonToBotpress, 1000);
        } else {
          // Show existing button
          closeButtonRef.current.style.display = 'flex';
        }
      } else {
        window.botpressWebChat.hide();
        if (closeButtonRef.current) {
          // Hide button instead of removing it
          closeButtonRef.current.style.display = 'none';
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