import React from 'react';

interface CTAButtonProps {
  variant: 'primary' | 'secondary';
  text: string;
  onClick?: () => void;
  href?: string;
  ariaLabel?: string;
  className?: string;
}

export const CTAButton: React.FC<CTAButtonProps> = ({
  variant,
  text,
  onClick,
  href,
  ariaLabel,
  className = '',
}) => {
  // Base styles for all buttons
  const baseStyles = "py-3 px-6 rounded-full font-medium text-base transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#1DB954]";
  
  // Variant-specific styles
  const variantStyles = variant === 'primary' 
    ? "bg-[#1DB954] text-white hover:scale-105 hover:shadow-md" 
    : "border-2 border-[#1DB954] text-white hover:bg-[#1DB954]";

  // Combined styles
  const buttonStyles = `${baseStyles} ${variantStyles} ${className}`;
  
  // If href is provided, render as link
  if (href) {
    return (
      <a 
        href={href}
        className={buttonStyles}
        onClick={onClick}
        aria-label={ariaLabel || text}
      >
        {text}
      </a>
    );
  }
  
  // Otherwise render as button
  return (
    <button 
      className={buttonStyles}
      onClick={onClick}
      aria-label={ariaLabel || text}
    >
      {text}
    </button>
  );
};

// Optional: For grouping buttons
export const CTAButtonGroup: React.FC<{children: React.ReactNode, className?: string}> = ({
  children,
  className = '',
}) => {
  return (
    <div className={`flex flex-wrap gap-4 ${className}`}>
      {children}
    </div>
  );
};