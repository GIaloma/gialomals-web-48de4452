import React, { useEffect, useRef } from 'react';
import { X } from 'lucide-react';

interface ChatAgentProps {
  isOpen: boolean;
  onClose: () => void;
  language: 'en' | 'es';
}

export const ChatAgent: React.FC<ChatAgentProps> = ({ isOpen, onClose, language }) => {
  const chatContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen && chatContainerRef.current) {
      // Clear any existing content
      chatContainerRef.current.innerHTML = '';
      
      // Create the webchat div
      const webchatDiv = document.createElement('div');
      webchatDiv.id = 'webchat';
      webchatDiv.style.width = '100%';
      webchatDiv.style.height = '100%';
      webchatDiv.style.minHeight = '500px';
      
      chatContainerRef.current.appendChild(webchatDiv);

      // Load Botpress script if not already loaded
      if (!document.querySelector('script[src*="botpress.cloud"]')) {
        const script = document.createElement('script');
        script.src = 'https://cdn.botpress.cloud/webchat/v2.4/inject.js';
        script.onload = () => {
          initializeBotpress();
        };
        document.head.appendChild(script);
      } else {
        // Script already loaded, initialize directly
        initializeBotpress();
      }

      // Add custom styles for Botpress
      if (!document.querySelector('#botpress-custom-styles')) {
        const style = document.createElement('style');
        style.id = 'botpress-custom-styles';
        style.textContent = `
          #webchat .bpWebchat {
            position: unset !important;
            width: 100% !important;
            height: 100% !important;
            max-height: 100% !important;
            max-width: 100% !important;
            border-radius: 0 !important;
          }
          #webchat .bpFab {
            display: none !important;
          }
          .chat-overlay {
            background-color: rgba(0, 0, 0, 0.5);
          }
        `;
        document.head.appendChild(style);
      }

      function initializeBotpress() {
        if (window.botpress) {
          // Set up event listener for when webchat is ready
          window.botpress.on("webchat:ready", () => {
            window.botpress.open();
          });

          // Initialize Botpress with your configuration
          window.botpress.init({
            "botId": "757520fb-9440-4ae6-bba2-9d41959405fd",
            "configuration": {
              "botName": "Gialoma",
              "botDescription": language === 'es' ? "¿Me dejas ayudarte?" : "Can I help you?",
              "fabImage": "https://files.bpcontent.cloud/2025/05/27/16/20250527163748-RGFMO1M4.png",
              "website": {},
              "email": {
                "title": "gialomals@gmail.com",
                "link": "gialomals@gmail.com"
              },
              "phone": {},
              "termsOfService": {},
              "privacyPolicy": {},
              "color": "#c7ae6a",
              "variant": "soft",
              "themeMode": "light",
              "fontFamily": "inter",
              "radius": 1,
              "additionalStylesheetUrl": "https://files.bpcontent.cloud/2025/05/27/14/20250527145559-MBN7KQN2.css"
            },
            "clientId": "41604519-835f-482a-9b27-8f639293c1a9",
            "selector": "#webchat"
          });
        }
      }
    }

    // Cleanup function
    return () => {
      if (chatContainerRef.current) {
        chatContainerRef.current.innerHTML = '';
      }
    };
  }, [isOpen, language]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center chat-overlay">
      <div className="bg-white rounded-lg shadow-2xl w-full max-w-md h-full max-h-[600px] flex flex-col m-4">
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-gray-200 bg-gialoma-gold rounded-t-lg">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
              <span className="text-gialoma-gold font-bold text-sm">G</span>
            </div>
            <div>
              <h3 className="text-white font-semibold">Gialoma</h3>
              <p className="text-white/80 text-sm">
                {language === 'es' ? 'Asistente de IA' : 'AI Assistant'}
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="text-white hover:text-white/70 transition-colors"
          >
            <X size={20} />
          </button>
        </div>

        {/* Chat Container */}
        <div className="flex-1 overflow-hidden">
          <div
            ref={chatContainerRef}
            className="w-full h-full"
          />
        </div>

        {/* Footer */}
        <div className="p-3 border-t border-gray-200 bg-gray-50 rounded-b-lg">
          <p className="text-xs text-gray-500 text-center">
            {language === 'es' 
              ? 'Powered by Gialoma AI • Presiona ESC para cerrar' 
              : 'Powered by Gialoma AI • Press ESC to close'}
          </p>
        </div>
      </div>
    </div>
  );
};

// Extend the Window interface to include botpress
declare global {
  interface Window {
    botpress: any;
  }
}

export default ChatAgent;