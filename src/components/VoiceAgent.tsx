import React, { useEffect, useRef } from 'react';

interface VoiceAgentProps {
  isOpen: boolean;
  onClose: () => void;
  language: 'en' | 'es';
}

export const VoiceAgent: React.FC<VoiceAgentProps> = ({ isOpen, onClose, language }) => {
  const scriptsLoadedRef = useRef(false);
  const widgetContainerRef = useRef<HTMLDivElement | null>(null);
  const closeButtonRef = useRef<HTMLButtonElement | null>(null);

  useEffect(() => {
    if (isOpen && !scriptsLoadedRef.current) {
      // Load the ElevenLabs script dynamically
      const script = document.createElement('script');
      script.src = 'https://elevenlabs.io/convai-widget/index.js';
      script.async = true;
      script.type = 'text/javascript';
      
      script.onload = () => {
        scriptsLoadedRef.current = true;
        
        // Create the ElevenLabs widget element
        const widgetElement = document.createElement('elevenlabs-convai');
        widgetElement.setAttribute('agent-id', 'pPlGZHykXaSyJdBNxt7f');
        
        // Let ElevenLabs position it where it wants (usually right side)
        // Just apply basic styling
        widgetElement.style.borderRadius = '10px';
        widgetElement.style.boxShadow = '0 4px 20px rgba(0,0,0,0.3)';
        
        // Add to page
        document.body.appendChild(widgetElement);
        widgetContainerRef.current = widgetElement;
        
        // Add close button after widget loads
        setTimeout(addCloseButtonToVoice, 1500);
      };
      
      document.head.appendChild(script);
      
      return () => {
        // Cleanup
        if (document.head.contains(script)) {
          document.head.removeChild(script);
        }
        if (widgetContainerRef.current && document.body.contains(widgetContainerRef.current)) {
          document.body.removeChild(widgetContainerRef.current);
        }
        if (closeButtonRef.current && document.body.contains(closeButtonRef.current)) {
          document.body.removeChild(closeButtonRef.current);
        }
      };
    }
  }, [isOpen]);

  const addCloseButtonToVoice = () => {
    if (!widgetContainerRef.current) {
      setTimeout(addCloseButtonToVoice, 500);
      return;
    }

    // Create close button positioned on the right side (matching ElevenLabs default position)
    const closeButton = document.createElement('button');
    closeButton.innerHTML = '✕';
    closeButton.style.position = 'fixed';
    
    // Position on right side where ElevenLabs typically appears
    closeButton.style.bottom = '280px';
    closeButton.style.right = '30px'; // RIGHT side to match ElevenLabs default
    
    closeButton.style.zIndex = '10000';
    closeButton.style.backgroundColor = '#b99a45'; // Gialoma dark gold
    closeButton.style.color = '#000000';
    closeButton.style.border = 'none';
    closeButton.style.borderRadius = '50%';
    closeButton.style.width = '28px';
    closeButton.style.height = '28px';
    closeButton.style.fontSize = '14px';
    closeButton.style.fontWeight = 'bold';
    closeButton.style.cursor = 'pointer';
    closeButton.style.boxShadow = '0 2px 10px rgba(0,0,0,0.3)';
    closeButton.style.transition = 'all 0.2s ease';
    
    closeButton.onmouseover = () => {
      closeButton.style.backgroundColor = '#c7ae6a'; // Gialoma gold
      closeButton.style.transform = 'scale(1.1)';
    };
    
    closeButton.onmouseout = () => {
      closeButton.style.backgroundColor = '#b99a45'; // Gialoma dark gold
      closeButton.style.transform = 'scale(1)';
    };
    
    closeButton.onclick = () => {
      onClose();
    };
    
    document.body.appendChild(closeButton);
    closeButtonRef.current = closeButton;
  };

  useEffect(() => {
    // Show or hide the widget based on isOpen state
    if (widgetContainerRef.current) {
      widgetContainerRef.current.style.display = isOpen ? 'block' : 'none';
    }
    
    // Show or hide close button
    if (closeButtonRef.current) {
      closeButtonRef.current.style.display = isOpen ? 'block' : 'none';
    } else if (isOpen && scriptsLoadedRef.current) {
      setTimeout(addCloseButtonToVoice, 1500);
    }
  }, [isOpen]);

  // This component doesn't render anything visible - the ElevenLabs widget appears directly
  return null;
};

export default VoiceAgent;