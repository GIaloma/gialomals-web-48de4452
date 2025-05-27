import React, { useEffect, useRef } from 'react';

interface VoiceAgentProps {
  isOpen: boolean;
  onClose: () => void;
  language: 'en' | 'es';
}

export const VoiceAgent: React.FC<VoiceAgentProps> = ({ isOpen, onClose, language }) => {
  const scriptsLoadedRef = useRef(false);
  const widgetContainerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (isOpen && !scriptsLoadedRef.current) {
      // Load the ElevenLabs script dynamically
      const script = document.createElement('script');
      script.src = 'https://elevenlabs.io/convai-widget/index.js';
      script.async = true;
      script.type = 'text/javascript';
      
      script.onload = () => {
        scriptsLoadedRef.current = true;
        
        // Create the ElevenLabs widget element directly in the page
        const widgetElement = document.createElement('elevenlabs-convai');
        widgetElement.setAttribute('agent-id', 'pPlGZHykXaSyJdBNxt7f');
        
        // Style the widget to appear as a floating chat
        widgetElement.style.position = 'fixed';
        widgetElement.style.bottom = '20px';
        widgetElement.style.right = '20px';
        widgetElement.style.zIndex = '1000';
        widgetElement.style.borderRadius = '10px';
        widgetElement.style.boxShadow = '0 4px 20px rgba(0,0,0,0.3)';
        
        // Add to page
        document.body.appendChild(widgetElement);
        widgetContainerRef.current = widgetElement;
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
      };
    }
  }, [isOpen]);

  useEffect(() => {
    // Show or hide the widget based on isOpen state
    if (widgetContainerRef.current) {
      widgetContainerRef.current.style.display = isOpen ? 'block' : 'none';
    }
  }, [isOpen]);

  // This component doesn't render anything visible - the ElevenLabs widget appears directly
  return null;
};

export default VoiceAgent;