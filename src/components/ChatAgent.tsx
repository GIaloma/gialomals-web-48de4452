import React from 'react';
import {
  Webchat,
  WebchatProvider,
  getClient,
  Configuration,
} from '@botpress/webchat';

const clientId = "41604519-835f-482a-9b27-8f639293c1a9";

interface ChatAgentProps {
  isOpen: boolean;
  onClose: () => void;
  language: 'en' | 'es';
}

export const ChatAgent: React.FC<ChatAgentProps> = ({ isOpen, onClose, language }) => {
  const configuration: Configuration = {
    color: '#3B82F6', // Blue color to match your theme
    // You can add more configuration options here
    // locale: language, // If Botpress supports locale switching
  };

  const client = getClient({
    clientId,
  });

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg shadow-xl w-full max-w-md h-96 flex flex-col overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b bg-gradient-to-r from-blue-600 to-purple-600 text-white">
          <div>
            <h3 className="text-lg font-semibold">
              {language === 'es' ? 'Asistente IA 24/7' : '24/7 AI Assistant'}
            </h3>
            <p className="text-sm opacity-90">
              {language === 'es' 
                ? 'Obtén ayuda instantánea con tu automatización de agenda'
                : 'Get instant help with your calendar automation'
              }
            </p>
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

        {/* Chat Content */}
        <div className="flex-1 relative">
          <WebchatProvider client={client} configuration={configuration}>
            <div className="h-full">
              <Webchat />
            </div>
          </WebchatProvider>
        </div>
      </div>
    </div>
  );
};

export default ChatAgent;