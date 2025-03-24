import React from 'react';

interface CTAButtonProps {
  variant: 'primary' | 'secondary';
  text: string;
  onClick?: () => void;
  ariaLabel?: string;
  className?: string;
}

export const CTAButton: React.FC<CTAButtonProps> = ({ 
  variant, 
  text, 
  onClick, 
  ariaLabel,
  className
}) => {
  const baseStyles = "py-2 px-6 rounded font-medium transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 text-base";
  
  const variantStyles = variant === 'primary' 
    ? "bg-[#1DB954] text-white hover:scale-105 hover:shadow-md" 
    : "border-2 border-[#1DB954] text-white hover:bg-[#1DB954] hover:text-white";
  
  return (
    <button
      className={`${baseStyles} ${variantStyles} ${className || ''}`}
      onClick={onClick}
      aria-label={ariaLabel || text}
    >
      {text}
    </button>
  );
};

export const CTAButtonGroup: React.FC<{
  className?: string;
  children: React.ReactNode;
}> = ({ className = '', children }) => {
  return (
    <div className={`flex flex-col sm:flex-row gap-4 ${className}`}>
      {children}
    </div>
  );
};