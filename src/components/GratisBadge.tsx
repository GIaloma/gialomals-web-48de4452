import React from 'react';

interface GratisBadgeProps {
  variant?: 'gold' | 'white';
  className?: string;
}

const GratisBadge: React.FC<GratisBadgeProps> = ({ 
  variant = 'gold', 
  className = ''
}) => {
  const baseClasses = "relative inline-flex items-center font-bold text-sm tracking-wider transform transition-all duration-300 hover:scale-105 select-none rounded-full px-3 py-1";
  
  const variantClasses = variant === 'gold' 
    ? "bg-gradient-to-r from-yellow-400 via-yellow-500 to-amber-500 text-white shadow-lg" 
    : "bg-white/95 text-amber-700 shadow-lg border border-amber-200";

  const glowClasses = variant === 'gold'
    ? "shadow-yellow-400/40 hover:shadow-yellow-500/60"
    : "shadow-amber-200/50 hover:shadow-amber-300/70";

  return (
    <div className={`${baseClasses} ${variantClasses} ${glowClasses} ${className}`}>
      <span className="uppercase font-extrabold">
        GRATIS
      </span>
      <svg 
        className="w-4 h-4 ml-2 transform transition-transform hover:translate-x-1" 
        fill="none"
        stroke="currentColor"
        strokeWidth="2.5"
        viewBox="0 0 24 24"
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
      </svg>
    </div>
  );
};

export default GratisBadge;