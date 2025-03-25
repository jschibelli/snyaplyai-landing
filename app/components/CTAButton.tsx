"use client";
import React, { useState } from 'react';
import CustomHubspotFormWithJS from './CustomHubspotFormWithJS';
import EarlyAccessForm from './EarlyAccessForm';
import { motion, AnimatePresence } from 'framer-motion';

interface CTAButtonProps {
  variant: 'primary' | 'secondary';
  text: string;
  onClick?: () => void;
  href?: string;
  ariaLabel?: string;
  className?: string;
  isJoinBeta?: boolean;
  isEarlyAccess?: boolean;
}

export const CTAButton: React.FC<CTAButtonProps> = ({
  variant,
  text,
  onClick,
  href,
  ariaLabel,
  className = '',
  isJoinBeta = false,
  isEarlyAccess = false,
}) => {
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
    }
    
    if (isEarlyAccess || text.toLowerCase().includes('secure early access') || text.toLowerCase().includes('early access')) {
      e.preventDefault();
      setIsModalOpen(true);
    }
    
    if (onClick) {
      onClick();
    }
  };
  
  // If href is provided and it's not a button that triggers a modal, render as link
  if (href && !isJoinBeta && !isEarlyAccess && 
      !text.toLowerCase().includes('join the beta') && 
      !text.toLowerCase().includes('secure early access') && 
      !text.toLowerCase().includes('early access')) {
    return (
      <>
        <a 
          href={href}
          className={buttonStyles}
          onClick={onClick}
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

      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-70"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={(e) => e.target === e.currentTarget && setIsModalOpen(false)}
          >
            <motion.div
              className="max-w-lg w-full"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
            >
              {(isJoinBeta || text.toLowerCase().includes('join the beta')) && (
                <CustomHubspotFormWithJS onClose={() => setIsModalOpen(false)} />
              )}
              
              {(isEarlyAccess || text.toLowerCase().includes('secure early access') || text.toLowerCase().includes('early access')) && (
                <EarlyAccessForm onClose={() => setIsModalOpen(false)} />
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
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

// Example update for HeaderCTA.tsx
<CTAButton 
  text="Secure Early Access" 
  href="/early-access" 
  variant="secondary"
  isEarlyAccess={true}
  ariaLabel="Secure early access to platform"
/>