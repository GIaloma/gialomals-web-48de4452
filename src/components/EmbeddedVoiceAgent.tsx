import React, { useEffect, useRef, useState } from 'react';
import { Mic, Play, Square } from 'lucide-react';

interface EmbeddedVoiceAgentProps {
  language: 'en' | 'es';
  height?: string;
}

// Use the same global flag as VoiceAgent
declare global {
  interface Window {
    ElevenLabsScriptLoaded?: boolean;
    ElevenLabsScriptLoading?: boolean;
  }
}

export const EmbeddedVoiceAgent: React.FC<EmbeddedVoiceAgentProps> = ({ 
  language, 
  height = '400px' 
}) => {
  const [isAgentActive, setIsAgentActive] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const widgetContainerRef = useRef<HTMLDivElement | null>(null);
  const embedContainerRef = useRef<HTMLDivElement>(null);

  const texts = {
    en: {
      title: 'Talk to Gialoma\'s Voice Agent',
      subtitle: 'Start a conversation with our AI voice assistant',
      startButton: 'Start Voice Chat',
      stopButton: 'Stop Voice Chat',
      loading: 'Initializing voice agent...',
      description: 'Click the button below to start talking with our AI voice assistant. You can ask questions about our services, get help, or just have a conversation!',
      error: 'Unable to load voice agent. Please try again later.'
    },
    es: {
      title: 'Habla con el Agente de Voz de Gialoma',
      subtitle: 'Inicia una conversación con nuestro asistente de voz IA',
      startButton: 'Iniciar Chat de Voz',
      stopButton: 'Detener Chat de Voz',
      loading: 'Inicializando agente de voz...',
      description: '¡Haz clic en el botón de abajo para empezar a hablar con nuestro asistente de voz IA. Puedes hacer preguntas sobre nuestros servicios, obtener ayuda o simplemente conversar!',
      error: 'No se pudo cargar el agente de voz. Por favor, inténtalo más tarde.'
    }
  };

  const t = texts[language];

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

  const loadVoiceAgent = () => {
    setIsLoading(true);
    setError(null);
    
    loadElevenLabsScript()
      .then(() => {
        createEmbeddedWidget();
      })
      .catch((error) => {
        console.error('Error loading ElevenLabs script:', error);
        setError(t.error);
        setIsLoading(false);
      });
  };

  const createEmbeddedWidget = () => {
    if (!embedContainerRef.current) {
      setIsLoading(false);
      return;
    }

    try {
      // Create a unique container ID to avoid conflicts
      const containerId = `embedded-voice-agent-${Date.now()}`;
      
      // Create the ElevenLabs widget element
      const widgetElement = document.createElement('elevenlabs-convai');
      widgetElement.setAttribute('agent-id', 'pPlGZHykXaSyJdBNxt7f');
      widgetElement.id = containerId;
      
      // Style the widget to fit in the container
      widgetElement.style.width = '100%';
      widgetElement.style.height = '100%';
      widgetElement.style.borderRadius = '8px';
      widgetElement.style.border = 'none';
      widgetElement.style.overflow = 'hidden';
      
      // Clear container and add widget
      embedContainerRef.current.innerHTML = '';
      embedContainerRef.current.appendChild(widgetElement);
      widgetContainerRef.current = widgetElement as HTMLDivElement;
      
      setIsLoading(false);
      setIsAgentActive(true);
    } catch (error) {
      console.error('Error creating embedded widget:', error);
      setError(t.error);
      setIsLoading(false);
    }
  };

  const stopVoiceAgent = () => {
    if (widgetContainerRef.current && embedContainerRef.current) {
      embedContainerRef.current.innerHTML = '';
      widgetContainerRef.current = null;
    }
    setIsAgentActive(false);
    setError(null);
  };

  useEffect(() => {
    return () => {
      // Cleanup on component unmount
      if (widgetContainerRef.current && embedContainerRef.current) {
        embedContainerRef.current.innerHTML = '';
      }
    };
  }, []);

  if (error) {
    return (
      <div className="w-full" style={{ height }}>
        <div className="h-full flex flex-col items-center justify-center bg-gradient-to-br from-red-50 to-red-100 rounded-lg border-2 border-red-200 p-6">
          <div className="text-center">
            <div className="mb-4 flex justify-center">
              <div className="w-16 h-16 bg-red-500 rounded-full flex items-center justify-center">
                <Mic className="w-8 h-8 text-white" />
              </div>
            </div>
            <h4 className="text-lg font-semibold text-red-700 mb-2">Voice Agent Error</h4>
            <p className="text-sm text-red-600 mb-4 max-w-md">
              {error}
            </p>
            <button
              onClick={() => {
                setError(null);
                loadVoiceAgent();
              }}
              className="bg-red-500 hover:bg-red-600 text-white font-medium px-4 py-2 rounded-lg transition-colors"
            >
              Try Again
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full" style={{ height }}>
      {!isAgentActive ? (
        <div className="h-full flex flex-col items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100 rounded-lg border-2 border-dashed border-gray-200 p-6">
          <div className="text-center mb-6">
            <div className="mb-4 flex justify-center">
              <div className="w-16 h-16 bg-gradient-to-r from-gialoma-gold to-gialoma-darkgold rounded-full flex items-center justify-center">
                <Mic className="w-8 h-8 text-gialoma-black" />
              </div>
            </div>
            <h4 className="text-lg font-semibold text-gialoma-black mb-2">{t.title}</h4>
            <p className="text-sm text-gialoma-darkgray mb-4 max-w-md">
              {t.description}
            </p>
          </div>
          
          <button
            onClick={loadVoiceAgent}
            disabled={isLoading}
            className="flex items-center gap-2 bg-gradient-to-r from-gialoma-gold to-gialoma-darkgold hover:from-gialoma-lightgold hover:to-gialoma-gold text-gialoma-black font-medium px-6 py-3 rounded-lg transition-all duration-300 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isLoading ? (
              <>
                <div className="w-5 h-5 border-2 border-gialoma-black border-t-transparent rounded-full animate-spin"></div>
                {t.loading}
              </>
            ) : (
              <>
                <Play className="w-5 h-5" />
                {t.startButton}
              </>
            )}
          </button>
        </div>
      ) : (
        <div className="h-full flex flex-col">
          <div className="flex items-center justify-between bg-gradient-to-r from-gialoma-gold to-gialoma-darkgold p-3 rounded-t-lg">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
              <span className="text-gialoma-black font-medium text-sm">
                {t.subtitle}
              </span>
            </div>
            <button
              onClick={stopVoiceAgent}
              className="flex items-center gap-1 bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded text-xs transition-colors"
            >
              <Square className="w-3 h-3" />
              {t.stopButton}
            </button>
          </div>
          
          <div 
            ref={embedContainerRef}
            className="flex-1 bg-white rounded-b-lg"
            style={{ height: `calc(${height} - 48px)` }}
          >
            {isLoading && (
              <div className="h-full flex items-center justify-center">
                <div className="text-center">
                  <div className="w-8 h-8 border-2 border-gialoma-gold border-t-transparent rounded-full animate-spin mx-auto mb-2"></div>
                  <p className="text-sm text-gialoma-darkgray">{t.loading}</p>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default EmbeddedVoiceAgent;