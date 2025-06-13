import React, { useEffect, useRef } from 'react';

interface VoiceAgentProps {
  isOpen: boolean;
  onClose: () => void;
  language: 'en' | 'es';
}

// Global flag to track if ElevenLabs script is loaded
declare global {
  interface Window {
    ElevenLabsScriptLoaded?: boolean;
    ElevenLabsScriptLoading?: boolean;
  }
}

export const VoiceAgent: React.FC<VoiceAgentProps> = ({ isOpen, onClose, language }) => {
  const widgetContainerRef = useRef<HTMLDivElement | null>(null);
  const closeButtonRef = useRef<HTMLButtonElement | null>(null);

  const loadElevenLabsScript = (): Promise<void> => {
    return new Promise((resolve, reject) => {
      // Check if already loaded
      if (window.ElevenLabsScriptLoaded) {
        resolve();
        return;
      }

      // Check if already loading
      if (window.ElevenLabsScriptLoading) {
        // Wait for the script to load
        const checkLoaded = () => {
          if (window.ElevenLabsScriptLoaded) {
            resolve();
          } else {
            setTimeout(checkLoaded, 100);
          }
        };
        checkLoaded();
        return;
      }

      // Check if script already exists in DOM
      const existingScript = document.querySelector('script[src="https://elevenlabs.io/convai-widget/index.js"]');
      if (existingScript) {
        window.ElevenLabsScriptLoaded = true;
        resolve();
        return;
      }

      // Load the script
      window.ElevenLabsScriptLoading = true;
      const script = document.createElement('script');
      script.src = 'https://elevenlabs.io/convai-widget/index.js';
      script.async = true;
      script.type = 'text/javascript';
      
      script.onload = () => {
        window.ElevenLabsScriptLoaded = true;
        window.ElevenLabsScriptLoading = false;
        resolve();
      };
      
      script.onerror = () => {
        window.ElevenLabsScriptLoading = false;
        reject(new Error('Failed to load ElevenLabs script'));
      };
      
      document.head.appendChild(script);
    });
  };

  useEffect(() => {
    if (isOpen) {
      loadElevenLabsScript()
        .then(() => {
          createVoiceWidget();
        })
        .catch((error) => {
          console.error('Error loading ElevenLabs script:', error);
          // Show user-friendly error
          alert('Unable to load voice agent. Please try again later.');
        });
    } else {
      // Clean up when closed
      cleanup();
    }

    return cleanup;
  }, [isOpen]);

  const createVoiceWidget = () => {
    // Remove any existing widget first
    cleanup();

    try {
      // Create the ElevenLabs widget element
      const widgetElement = document.createElement('elevenlabs-convai');
      widgetElement.setAttribute('agent-id', 'pPlGZHykXaSyJdBNxt7f');
      
      // Style the widget
      widgetElement.style.borderRadius = '10px';
      widgetElement.style.boxShadow = '0 4px 20px rgba(0,0,0,0.3)';
      widgetElement.style.zIndex = '9999';
      
      // Add to page
      document.body.appendChild(widgetElement);
      widgetContainerRef.current = widgetElement;
      
      // Add close button after a delay
      setTimeout(addCloseButton, 2000);
    } catch (error) {
      console.error('Error creating voice widget:', error);
      alert('Unable to initialize voice agent. Please try again.');
    }
  };

  const addCloseButton = () => {
    if (!widgetContainerRef.current) {
      return;
    }

    // Remove existing close button
    if (closeButtonRef.current && document.body.contains(closeButtonRef.current)) {
      document.body.removeChild(closeButtonRef.current);
    }

    // Create close button
    const closeButton = document.createElement('button');
    closeButton.innerHTML = '✕';
    closeButton.style.position = 'fixed';
    closeButton.style.bottom = '280px';
    closeButton.style.right = '30px';
    closeButton.style.zIndex = '10000';
    closeButton.style.backgroundColor = '#b99a45';
    closeButton.style.color = '#000000';
    closeButton.style.border = 'none';
    closeButton.style.borderRadius = '50%';
    closeButton.style.width = '32px';
    closeButton.style.height = '32px';
    closeButton.style.fontSize = '16px';
    closeButton.style.fontWeight = 'bold';
    closeButton.style.cursor = 'pointer';
    closeButton.style.boxShadow = '0 2px 10px rgba(0,0,0,0.3)';
    closeButton.style.transition = 'all 0.2s ease';
    closeButton.style.display = 'flex';
    closeButton.style.alignItems = 'center';
    closeButton.style.justifyContent = 'center';
    
    closeButton.onmouseover = () => {
      closeButton.style.backgroundColor = '#c7ae6a';
      closeButton.style.transform = 'scale(1.1)';
    };
    
    closeButton.onmouseout = () => {
      closeButton.style.backgroundColor = '#b99a45';
      closeButton.style.transform = 'scale(1)';
    };
    
    closeButton.onclick = () => {
      onClose();
    };
    
    document.body.appendChild(closeButton);
    closeButtonRef.current = closeButton;
  };

  const cleanup = () => {
    // Remove widget
    if (widgetContainerRef.current && document.body.contains(widgetContainerRef.current)) {
      document.body.removeChild(widgetContainerRef.current);
      widgetContainerRef.current = null;
    }
    
    // Remove close button
    if (closeButtonRef.current && document.body.contains(closeButtonRef.current)) {
      document.body.removeChild(closeButtonRef.current);
      closeButtonRef.current = null;
    }
  };

  // This component doesn't render anything visible
  return null;
};

export default VoiceAgent;