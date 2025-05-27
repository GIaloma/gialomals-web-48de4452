import React, { useEffect, useRef } from 'react';

interface VoiceAgentProps {
  isOpen: boolean;
  onClose: () => void;
  language: 'en' | 'es';
}

export const VoiceAgent: React.FC<VoiceAgentProps> = ({ isOpen, onClose, language }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const scriptLoadedRef = useRef(false);

  useEffect(() => {
    if (isOpen && !scriptLoadedRef.current) {
      // Load the ElevenLabs script dynamically
      const script = document.createElement('script');
      script.src = 'https://elevenlabs.io/convai-widget/index.js';
      script.async = true;
      script.type = 'text/javascript';
      
      script.onload = () => {
        scriptLoadedRef.current = true;
      };
      
      document.head.appendChild(script);
      
      return () => {
        // Cleanup script if component unmounts
        if (document.head.contains(script)) {
          document.head.removeChild(script);
        }
      };
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const texts = {
    en: {
      title: 'Voice Assistant',
      subtitle: 'Speak naturally to get immediate assistance',
      instructions: 'Click the microphone below to start talking',
      close: 'Close'
    },
    es: {
      title: 'Asistente de Voz',
      subtitle: 'Habla naturalmente para obtener asistencia inmediata',
      instructions: 'Haz clic en el micrófono de abajo para empezar a hablar',
      close: 'Cerrar'
    }
  };

  const t = texts[language];

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg shadow-xl w-full max-w-md h-[500px] flex flex-col overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b bg-gradient-to-r from-green-500 to-blue-500 text-white">
          <div>
            <h3 className="text-lg font-semibold">{t.title}</h3>
            <p className="text-sm opacity-90">{t.subtitle}</p>
          </div>
          <button
            onClick={onClose}
            className="p-1 hover:bg-white/20 rounded-full transition-colors"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>
        </div>

        {/* Voice Agent Content */}
        <div className="flex-1 relative p-4">
          <div className="text-center mb-4">
            <p className="text-gray-600 text-sm">{t.instructions}</p>
          </div>
          
          {/* ElevenLabs Voice Agent Container */}
          <div 
            ref={containerRef}
            className="h-full flex items-center justify-center"
            dangerouslySetInnerHTML={{
              __html: `<elevenlabs-convai agent-id="pPlGZHykXaSyJdBNxt7f"></elevenlabs-convai>`
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default VoiceAgent;