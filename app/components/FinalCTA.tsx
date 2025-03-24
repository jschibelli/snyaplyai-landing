"use client";
import { motion } from 'framer-motion';
import { CTAButton } from './CTAButton';

export default function FinalCTA() {
  return (
    <section className="relative py-12 md:py-16 lg:py-24 text-center w-full">
      {/* Background with gradient and hexagonal pattern */}
      <div 
        className="absolute inset-0 bg-gradient-to-b from-[rgba(0,0,0,0.95)] to-[rgba(10,10,10,1)] z-0"
        style={{ 
          boxShadow: '0 -12px 12px rgba(0, 0, 0, 0.2)',
        }}
      >
        {/* Hexagonal pattern overlay */}
        <div 
          className="absolute inset-0 bg-[url('/hexagon-pattern.svg')] bg-repeat opacity-15 z-0"
          style={{ backgroundSize: '60px 60px' }}
        ></div>
        
        {/* Soft vertical fade at top and bottom */}
        <div className="absolute top-0 left-0 right-0 h-16 bg-gradient-to-b from-black to-transparent"></div>
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-black to-transparent"></div>
      </div>
      
      <div className="container mx-auto px-4 max-w-4xl relative z-10">
        {/* Headline */}
        <motion.h2 
          className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-white"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Unlock the Power of AI-Driven Content Creation Today
        </motion.h2>
        
        {/* Subtext */}
        <motion.p 
          className="text-lg md:text-xl text-gray-300 mb-10 max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Join the Beta and experience real-time AI content generation with built-in conflict resolution and secure scalability.
        </motion.p>
        
        {/* CTA Buttons - side by side on desktop, stacked on mobile */}
        <motion.div 
          className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          {/* Primary CTA Button - Green Fill */}
          <CTAButton 
            variant="primary"
            text="Join the Beta"
            onClick={() => console.log('Join Beta clicked')}
            ariaLabel="Join the SynaplyAI beta program"
            className="min-h-[44px]" // WCAG tap target size
          />
          
          {/* Secondary CTA Button - Outline */}
          <CTAButton 
            variant="secondary"
            text="Secure Early Access"
            onClick={() => console.log('Secure Early Access clicked')}
            ariaLabel="Secure early access to SynaplyAI"
            className="min-h-[44px]" // WCAG tap target size
          />
        </motion.div>
      </div>
    </section>
  );
}