import React from 'react';
import { Mic2 } from 'lucide-react';

interface FloatingAgentButtonProps {
  language: 'en' | 'es';
  onVoiceClick: () => void;
}

// Custom icon component that mixes microphone and message
const VoiceMessageIcon: React.FC<{ size?: number; className?: string }> = ({ size = 24, className = "" }) => (
  <svg 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    {/* Message bubble background */}
    <path 
      d="M20 2H4C2.9 2 2 2.9 2 4V16C2 17.1 2.9 18 4 18H18L22 22V4C22 2.9 21.1 2 20 2Z" 
      fill="currentColor" 
      fillOpacity="0.3"
      stroke="currentColor" 
      strokeWidth="1.5"
    />
    
    {/* Microphone in center */}
    <g transform="translate(2, 1)">
      <path 
        d="M10 6C10 4.9 9.1 4 8 4C6.9 4 6 4.9 6 6V10C6 11.1 6.9 12 8 12C9.1 12 10 11.1 10 10V6Z" 
        fill="currentColor"
        stroke="currentColor" 
        strokeWidth="0.5"
      />
      <path 
        d="M4 9V10C4 12.21 5.79 14 8 14C10.21 14 12 12.21 12 10V9" 
        stroke="currentColor" 
        strokeWidth="1.5" 
        fill="none"
      />
      <line 
        x1="8" 
        y1="14" 
        x2="8" 
        y2="17" 
        stroke="currentColor" 
        strokeWidth="1.5"
      />
      <line 
        x1="5" 
        y1="17" 
        x2="11" 
        y2="17" 
        stroke="currentColor" 
        strokeWidth="1.5"
      />
    </g>
  </svg>
);

export const FloatingAgentButton: React.FC<FloatingAgentButtonProps> = ({ 
  language, 
  onVoiceClick 
}) => {
  const texts = {
    en: {
      support: 'Talk to Gialoma\'s Agent',
      agent: 'Voice Agent'
    },
    es: {
      support: 'Habla con el Agente de Gialoma',
      agent: 'Agente de Voz'
    }
  };

  const t = texts[language];

  return (
    <div 
      className="fixed bottom-6 right-6"
      style={{ 
        zIndex: 40,
        willChange: 'auto',
        isolation: 'auto'
      }}
    >
      {/* Main Voice Agent Button */}
      <button
        onClick={onVoiceClick}
        className="relative flex items-center justify-center w-16 h-16 bg-gradient-to-r from-gialoma-gold to-gialoma-darkgold hover:from-gialoma-lightgold hover:to-gialoma-gold text-gialoma-black rounded-full shadow-lg transition-all duration-300 hover:scale-110 group animate-pulse hover:animate-none"
        style={{ 
          willChange: 'transform',
          isolation: 'auto'
        }}
        aria-label={t.agent}
      >
        <VoiceMessageIcon size={28} />
        
        {/* Pulse animation ring */}
        <div className="absolute inset-0 rounded-full bg-gradient-to-r from-gialoma-gold to-gialoma-darkgold opacity-20 animate-ping"></div>
        
        {/* Tooltip */}
        <div 
          className="absolute right-20 top-1/2 transform -translate-y-1/2 bg-gialoma-darkgray text-gialoma-gold px-4 py-2 rounded-lg text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none shadow-lg"
          style={{ willChange: 'opacity' }}
        >
          {t.support}
          {/* Arrow pointing to button */}
          <div className="absolute right-0 top-1/2 transform translate-x-1 -translate-y-1/2 w-0 h-0 border-l-[6px] border-l-gialoma-darkgray border-t-[6px] border-t-transparent border-b-[6px] border-b-transparent"></div>
        </div>
      </button>

      {/* Floating particles effect */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-2 right-2 w-1 h-1 bg-gialoma-gold rounded-full animate-bounce delay-100"></div>
        <div className="absolute bottom-2 left-2 w-1 h-1 bg-gialoma-darkgold rounded-full animate-bounce delay-300"></div>
        <div className="absolute top-4 left-4 w-0.5 h-0.5 bg-gialoma-gold rounded-full animate-ping delay-500"></div>
      </div>
    </div>
  );
};

export default FloatingAgentButton;