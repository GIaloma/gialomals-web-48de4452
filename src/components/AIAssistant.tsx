import React, { useState } from 'react';
import { MessageCircle, Mic, X, Phone, Send } from 'lucide-react';

interface AIAssistantProps {
  language: 'en' | 'es';
}

export const AIAssistant: React.FC<AIAssistantProps> = ({ language }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeChatModal, setActiveChatModal] = useState<'chat' | 'voice' | null>(null);
  const [chatMessages, setChatMessages] = useState<Array<{type: 'user' | 'bot', message: string}>>([]);
  const [currentMessage, setCurrentMessage] = useState('');
  const [isRecording, setIsRecording] = useState(false);

  const texts = {
    en: {
      chat: 'Chat with AI',
      voice: 'Voice Assistant',
      chatTitle: '24/7 AI Support',
      voiceTitle: 'Voice Assistant',
      chatSubtitle: 'Get instant help with your calendar automation',
      voiceSubtitle: 'Speak naturally to get immediate assistance',
      placeholder: 'Type your message...',
      send: 'Send',
      startRecording: 'Click to start recording',
      stopRecording: 'Click to stop recording',
      close: 'Close',
      initialBotMessage: 'Hello! I\'m here to help you with calendar automation. How can I assist you today?'
    },
    es: {
      chat: 'Chat con IA',
      voice: 'Asistente de Voz',
      chatTitle: 'Soporte IA 24/7',
      voiceTitle: 'Asistente de Voz',
      chatSubtitle: 'Obtén ayuda instantánea con tu automatización de agenda',
      voiceSubtitle: 'Habla naturalmente para obtener asistencia inmediata',
      placeholder: 'Escribe tu mensaje...',
      send: 'Enviar',
      startRecording: 'Haz clic para comenzar a grabar',
      stopRecording: 'Haz clic para detener grabación',
      close: 'Cerrar',
      initialBotMessage: '¡Hola! Estoy aquí para ayudarte con la automatización de agendas. ¿En qué puedo asistirte hoy?'
    }
  };

  const t = texts[language];

  const handleChatSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (currentMessage.trim()) {
      setChatMessages(prev => [...prev, { type: 'user', message: currentMessage }]);
      setCurrentMessage('');
      
      // Simulate bot response
      setTimeout(() => {
        setChatMessages(prev => [...prev, { 
          type: 'bot', 
          message: language === 'es' 
            ? 'Gracias por tu mensaje. Un especialista se pondrá en contacto contigo pronto para ayudarte con la automatización de tu agenda.'
            : 'Thank you for your message. A specialist will contact you soon to help with your calendar automation.'
        }]);
      }, 1000);
    }
  };

  const toggleRecording = () => {
    setIsRecording(!isRecording);
    // Here you would implement actual voice recording functionality
  };

  const openModal = (type: 'chat' | 'voice') => {
    setActiveChatModal(type);
    setIsMenuOpen(false);
    if (type === 'chat' && chatMessages.length === 0) {
      setChatMessages([{ type: 'bot', message: t.initialBotMessage }]);
    }
  };

  return (
    <>
      {/* Floating Action Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <div className={`transition-all duration-300 ${isMenuOpen ? 'mb-4 space-y-3' : ''}`}>
          {/* Voice Button */}
          <button
            onClick={() => openModal('voice')}
            className={`flex items-center justify-center w-12 h-12 bg-green-500 hover:bg-green-600 text-white rounded-full shadow-lg transition-all duration-300 ${
              isMenuOpen ? 'opacity-100 scale-100' : 'opacity-0 scale-0 pointer-events-none'
            }`}
          >
            <Mic size={20} />
          </button>
          
          {/* Chat Button */}
          <button
            onClick={() => openModal('chat')}
            className={`flex items-center justify-center w-12 h-12 bg-blue-500 hover:bg-blue-600 text-white rounded-full shadow-lg transition-all duration-300 ${
              isMenuOpen ? 'opacity-100 scale-100' : 'opacity-0 scale-0 pointer-events-none'
            }`}
          >
            <MessageCircle size={20} />
          </button>
        </div>

        {/* Main FAB */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="flex items-center justify-center w-14 h-14 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white rounded-full shadow-lg transition-all duration-300 hover:scale-110"
        >
          {isMenuOpen ? <X size={24} /> : <MessageCircle size={24} />}
        </button>

        {/* Floating Labels */}
        {isMenuOpen && (
          <div className="absolute right-16 bottom-0 space-y-3 pointer-events-none">
            <div className="bg-gray-800 text-white px-3 py-1 rounded-lg text-sm whitespace-nowrap">
              {t.voice}
            </div>
            <div className="bg-gray-800 text-white px-3 py-1 rounded-lg text-sm whitespace-nowrap">
              {t.chat}
            </div>
          </div>
        )}
      </div>

      {/* Chat Modal */}
      {activeChatModal === 'chat' && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg shadow-xl w-full max-w-md h-96 flex flex-col">
            {/* Header */}
            <div className="flex items-center justify-between p-4 border-b bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-t-lg">
              <div>
                <h3 className="text-lg font-semibold">{t.chatTitle}</h3>
                <p className="text-sm opacity-90">{t.chatSubtitle}</p>
              </div>
              <button
                onClick={() => setActiveChatModal(null)}
                className="p-1 hover:bg-white/20 rounded-full transition-colors"
              >
                <X size={20} />
              </button>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-3">
              {chatMessages.map((msg, index) => (
                <div
                  key={index}
                  className={`flex ${msg.type === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-xs px-3 py-2 rounded-lg ${
                      msg.type === 'user'
                        ? 'bg-blue-500 text-white'
                        : 'bg-gray-100 text-gray-800'
                    }`}
                  >
                    {msg.message}
                  </div>
                </div>
              ))}
            </div>

            {/* Input */}
            <form onSubmit={handleChatSubmit} className="p-4 border-t">
              <div className="flex space-x-2">
                <input
                  type="text"
                  value={currentMessage}
                  onChange={(e) => setCurrentMessage(e.target.value)}
                  placeholder={t.placeholder}
                  className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                />
                <button
                  type="submit"
                  className="px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg transition-colors"
                >
                  <Send size={16} />
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Voice Modal */}
      {activeChatModal === 'voice' && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg shadow-xl w-full max-w-sm h-80 flex flex-col">
            {/* Header */}
            <div className="flex items-center justify-between p-4 border-b bg-gradient-to-r from-green-500 to-blue-500 text-white rounded-t-lg">
              <div>
                <h3 className="text-lg font-semibold">{t.voiceTitle}</h3>
                <p className="text-sm opacity-90">{t.voiceSubtitle}</p>
              </div>
              <button
                onClick={() => setActiveChatModal(null)}
                className="p-1 hover:bg-white/20 rounded-full transition-colors"
              >
                <X size={20} />
              </button>
            </div>

            {/* Voice Interface */}
            <div className="flex-1 flex flex-col items-center justify-center p-8">
              <div
                className={`w-24 h-24 rounded-full flex items-center justify-center transition-all duration-300 ${
                  isRecording
                    ? 'bg-red-500 animate-pulse'
                    : 'bg-green-500 hover:bg-green-600'
                } cursor-pointer`}
                onClick={toggleRecording}
              >
                {isRecording ? (
                  <div className="w-6 h-6 bg-white rounded"></div>
                ) : (
                  <Mic size={32} className="text-white" />
                )}
              </div>
              
              <p className="mt-4 text-center text-gray-600 text-sm">
                {isRecording ? t.stopRecording : t.startRecording}
              </p>

              {isRecording && (
                <div className="mt-4 flex space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <div
                      key={i}
                      className="w-1 bg-green-500 rounded-full animate-pulse"
                      style={{
                        height: `${Math.random() * 20 + 10}px`,
                        animationDelay: `${i * 0.1}s`
                      }}
                    ></div>
                  ))}
                </div>
              )}
            </div>

            {/* Quick Actions */}
            <div className="p-4 border-t bg-gray-50 rounded-b-lg">
              <div className="flex justify-center space-x-4">
                <button
                  onClick={() => {
                    setActiveChatModal('chat');
                    if (chatMessages.length === 0) {
                      setChatMessages([{ type: 'bot', message: t.initialBotMessage }]);
                    }
                  }}
                  className="flex items-center space-x-2 px-3 py-2 text-sm text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
                >
                  <MessageCircle size={16} />
                  <span>{t.chat}</span>
                </button>
                <button
                  onClick={() => window.open('tel:+34900000000')}
                  className="flex items-center space-x-2 px-3 py-2 text-sm text-green-600 hover:bg-green-50 rounded-lg transition-colors"
                >
                  <Phone size={16} />
                  <span>Call</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default AIAssistant;