import React from 'react';

interface GratisBadgeProps {
  variant?: 'light' | 'dark';
  className?: string;
}

const GratisBadge: React.FC<GratisBadgeProps> = ({ variant = 'light', className = '' }) => {
  const baseClasses = "inline-flex items-center font-bold tracking-wider transform -rotate-12 transition-transform hover:rotate-0 select-none pointer-events-none";
  
  const variantClasses = variant === 'light' 
    ? "bg-white text-amber-600 shadow-lg border-2 border-amber-300" 
    : "bg-gradient-to-r from-amber-500 to-yellow-500 text-white shadow-xl border-2 border-amber-400";

  return (
    <div className={`${baseClasses} ${variantClasses} ${className}`}>
      <span className="px-3 py-1 text-sm md:text-base">
        GRATIS
      </span>
      <svg 
        className="w-4 h-4 md:w-5 md:h-5 ml-1 transform transition-transform group-hover:translate-x-1" 
        fill="currentColor" 
        viewBox="0 0 24 24"
      >
        <path d="M8.59 16.59L13.17 12L8.59 7.41L10 6l6 6-6 6-1.41-1.41z"/>
      </svg>
    </div>
  );
};

export default GratisBadge;