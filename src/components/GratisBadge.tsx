import React from 'react';

interface GratisBadgeProps {
  variant?: 'light' | 'dark';
  className?: string;
  position?: 'bottom' | 'side';
}

const GratisBadge: React.FC<GratisBadgeProps> = ({ 
  variant = 'light', 
  className = '',
  position = 'bottom' 
}) => {
  const baseClasses = "inline-flex items-center font-bold text-xs tracking-widest transform transition-all duration-300 hover:scale-105 select-none";
  
  const variantClasses = variant === 'light' 
    ? "bg-white/95 text-amber-700 shadow-lg border border-amber-200" 
    : "bg-gradient-to-r from-amber-400 to-yellow-400 text-white shadow-xl border border-yellow-300";

  const glowClasses = variant === 'light'
    ? "shadow-amber-200/50 hover:shadow-amber-300/70"
    : "shadow-yellow-400/30 hover:shadow-yellow-500/50";

  return (
    <div className={`${baseClasses} ${variantClasses} ${glowClasses} ${className}`}>
      <span className="px-2 py-1 uppercase">
        Gratis
      </span>
      <svg 
        className="w-3 h-3 ml-1 transform transition-transform group-hover:translate-x-0.5" 
        fill="currentColor" 
        viewBox="0 0 24 24"
      >
        <path d="M7.5 18L16.5 12L7.5 6v12z"/>
      </svg>
    </div>
  );
};

export default GratisBadge;