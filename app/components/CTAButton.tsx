"use client";
import React from 'react';
import Link from 'next/link';

interface CTAButtonProps {
  variant: 'primary' | 'secondary';
  text: string;
  onClick?: (e: React.MouseEvent) => void;
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
  className = "",
  isJoinBeta = false,
  isEarlyAccess = false,
}) => {
  const baseStyles = `py-3 px-6 rounded-full font-medium text-base transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#1DB954]`;
  const variantStyles = variant === 'primary' 
    ? 'bg-[#1DB954] text-white hover:scale-105 hover:shadow-md' 
    : 'border-2 border-[#1DB954] text-white hover:bg-[#1DB954]';
  const buttonStyles = `${baseStyles} ${variantStyles} ${className}`;
  
  // For beta form
  if (isJoinBeta || text.toLowerCase().includes('join the beta')) {
    return (
      <Link href="/join-beta" className={buttonStyles} aria-label={ariaLabel || text}>
        {text}
      </Link>
    );
  }
  
  // For early access form
  if (isEarlyAccess || text.toLowerCase().includes('secure early access') || text.toLowerCase().includes('early access')) {
    return (
      <Link href="/early-access" className={buttonStyles} aria-label={ariaLabel || text}>
        {text}
      </Link>
    );
  }
  
  // For external links
  if (href) {
    return (
      <Link href={href} className={buttonStyles} aria-label={ariaLabel || text}>
        {text}
      </Link>
    );
  }
  
  // For regular buttons
  return (
    <button className={buttonStyles} onClick={onClick} aria-label={ariaLabel || text}>
      {text}
    </button>
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