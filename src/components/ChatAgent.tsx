import React, { useState, useRef, useEffect } from 'react';
import { Send, X, MessageCircle } from 'lucide-react';

interface ChatAgentProps {
  isOpen: boolean;
  onClose: () => void;
  language: 'en' | 'es';
}

interface Message {
  id: string;
  text: string;
  isUser: boolean;
  timestamp: Date;
}

export const ChatAgent: React.FC<ChatAgentProps> = ({ isOpen, onClose, language }) => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputMessage, setInputMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const texts = {
    en: {
      title: 'AI Assistant',
      placeholder: 'Type your message...',
      send: 'Send',
      defaultMessage: 'Hello! How can I help you today?',
      thinking: 'AI is thinking...'
    },
    es: {
      title: 'Asistente IA',
      placeholder: 'Escribe tu mensaje...',
      send: 'Enviar',
      defaultMessage: '¡Hola! ¿Cómo puedo ayudarte hoy?',
      thinking: 'IA está pensando...'
    }
  };

  const t = texts[language];

  // Add welcome message when chat opens
  useEffect(() => {
    if (isOpen && messages.length === 0) {
      const welcomeMessage: Message = {
        id: '1',
        text: t.defaultMessage,
        isUser: false,
        timestamp: new Date()
      };
      setMessages([welcomeMessage]);
    }
  }, [isOpen, t.defaultMessage, messages.length]);

  // Scroll to bottom when new messages arrive
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const handleSendMessage = async () => {
    if (!inputMessage.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputMessage,
      isUser: true,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputMessage('');
    setIsLoading(true);

    // Simulate AI response (replace with actual API call)
    setTimeout(() => {
      const aiMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: getAIResponse(inputMessage, language),
        isUser: false,
        timestamp: new Date()
      };
      setMessages(prev => [...prev, aiMessage]);
      setIsLoading(false);
    }, 1000);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed bottom-4 left-4 w-80 h-96 bg-white rounded-lg shadow-xl border border-gray-200 flex flex-col z-50">
      {/* Header */}
      <div className="flex items-center justify-between p-4 bg-gialoma-gold rounded-t-lg">
        <div className="flex items-center space-x-2">
          <MessageCircle size={20} className="text-gialoma-black" />
          <h3 className="font-semibold text-gialoma-black">{t.title}</h3>
        </div>
        <button
          onClick={onClose}
          className="text-gialoma-black hover:text-gialoma-darkgray transition-colors"
        >
          <X size={20} />
        </button>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-4 space-y-3">
        {messages.map((message) => (
          <div
            key={message.id}
            className={`flex ${message.isUser ? 'justify-end' : 'justify-start'}`}
          >
            <div
              className={`max-w-xs px-3 py-2 rounded-lg ${
                message.isUser
                  ? 'bg-gialoma-gold text-gialoma-black'
                  : 'bg-gray-100 text-gray-800'
              }`}
            >
              <p className="text-sm">{message.text}</p>
            </div>
          </div>
        ))}
        
        {isLoading && (
          <div className="flex justify-start">
            <div className="bg-gray-100 text-gray-800 px-3 py-2 rounded-lg">
              <p className="text-sm italic">{t.thinking}</p>
            </div>
          </div>
        )}
        
        <div ref={messagesEndRef} />
      </div>

      {/* Input */}
      <div className="p-4 border-t border-gray-200">
        <div className="flex space-x-2">
          <input
            type="text"
            value={inputMessage}
            onChange={(e) => setInputMessage(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder={t.placeholder}
            className="flex-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gialoma-gold focus:border-transparent text-sm"
            disabled={isLoading}
          />
          <button
            onClick={handleSendMessage}
            disabled={!inputMessage.trim() || isLoading}
            className="px-3 py-2 bg-gialoma-gold text-gialoma-black rounded-md hover:bg-gialoma-lightgold disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
          >
            <Send size={16} />
          </button>
        </div>
      </div>
    </div>
  );
};

// Simple AI response function (replace with actual API)
const getAIResponse = (userMessage: string, language: 'en' | 'es'): string => {
  const responses = {
    en: [
      "I understand you're asking about our automation services. We specialize in calendar synchronization and workflow optimization.",
      "That's a great question! Our AI-powered solutions can help streamline your business processes.",
      "I'd be happy to help you with that. Our team offers personalized consultation to find the best solution for your needs.",
      "Thank you for your interest! Would you like to schedule a demo of our automation platform?",
      "Our services are designed to save you time and increase efficiency. Let me know if you'd like more specific information."
    ],
    es: [
      "Entiendo que preguntas sobre nuestros servicios de automatización. Nos especializamos en sincronización de calendarios y optimización de flujos de trabajo.",
      "¡Excelente pregunta! Nuestras soluciones impulsadas por IA pueden ayudar a optimizar los procesos de tu negocio.",
      "Me complace ayudarte con eso. Nuestro equipo ofrece consultoría personalizada para encontrar la mejor solución para tus necesidades.",
      "¡Gracias por tu interés! ¿Te gustaría programar una demo de nuestra plataforma de automatización?",
      "Nuestros servicios están diseñados para ahorrarte tiempo y aumentar la eficiencia. Déjame saber si quieres información más específica."
    ]
  };

  const languageResponses = responses[language];
  return languageResponses[Math.floor(Math.random() * languageResponses.length)];
};

export default ChatAgent;