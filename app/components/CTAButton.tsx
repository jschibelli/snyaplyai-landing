"use client";
import React, { useState } from 'react';
import { useFormModal } from '../context/FormModalContext';
import HubspotFormModal from './HubspotFormModal';

interface CTAButtonProps {
  variant: 'primary' | 'secondary';
  text: string;
  onClick?: () => void;
  href?: string;
  ariaLabel?: string;
  className?: string;
  isJoinBeta?: boolean;
}

export const CTAButton: React.FC<CTAButtonProps> = ({
  variant,
  text,
  onClick,
  href,
  ariaLabel,
  className = '',
  isJoinBeta = false,
}) => {
  const { openFormModal } = useFormModal();
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  // Base styles for all buttons
  const baseStyles = "py-3 px-6 rounded-full font-medium text-base transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#1DB954]";
  
  // Variant-specific styles
  const variantStyles = variant === 'primary' 
    ? "bg-[#1DB954] text-white hover:scale-105 hover:shadow-md" 
    : "border-2 border-[#1DB954] text-white hover:bg-[#1DB954]";

  // Combined styles
  const buttonStyles = `${baseStyles} ${variantStyles} ${className}`;
  
  const handleClick = (e: React.MouseEvent) => {
    if (isJoinBeta || text.toLowerCase().includes('join the beta')) {
      e.preventDefault();
      setIsModalOpen(true);
      openFormModal();
    }
    
    if (onClick) {
      onClick();
    }
  };
  
  // If href is provided, render as link
  if (href && !isJoinBeta && !text.toLowerCase().includes('join the beta')) {
    return (
      <>
        <a 
          href={href}
          className={buttonStyles}
          onClick={handleClick}
          aria-label={ariaLabel || text}
        >
          {text}
        </a>
      </>
    );
  }
  
  // Otherwise render as button
  return (
    <>
      <button 
        className={buttonStyles}
        onClick={handleClick}
        aria-label={ariaLabel || text}
      >
        {text}
      </button>

      {isJoinBeta && (
        <HubspotFormModal 
          isOpen={isModalOpen} 
          onClose={() => setIsModalOpen(false)} 
        />
      )}
    </>
  );
};

// For grouping buttons
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