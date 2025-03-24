"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { CTAButton } from './CTAButton';

const LeadersSection = () => {
  return (
    <section className="w-full py-12 md:py-16 lg:py-24 leaders-section relative">
      {/* Background with gradient and hexagonal pattern - same as FinalCTA */}
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
      
      <div className="container mx-auto px-4 max-w-7xl relative z-10">
        {/* Section Title with animation */}
        <motion.h2 
          className="text-2xl md:text-3xl lg:text-4xl text-center font-bold mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Powered by Industry-Leading Technology
        </motion.h2>

        {/* Three Column Layout with staggered animations */}
        <div className="flex flex-col md:flex-row justify-between items-start gap-4 md:gap-8 mb-12">
          {/* Column 1 */}
          <motion.div 
            className="w-full md:w-1/3 mb-8 md:mb-0 px-0 md:px-4 column"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <p className="text-white text-base md:text-lg font-medium">
              <strong>OpenAI</strong> - GPT-4o provides best-in-class content generation and real-time suggestions.
            </p>
          </motion.div>

          {/* Column 2 */}
          <motion.div 
            className="w-full md:w-1/3 mb-8 md:mb-0 px-0 md:px-4 column"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <p className="text-white text-base md:text-lg font-medium">
              <strong>Redis</strong> - State handling ensures fast conflict resolution and consistent multi-user state.
            </p>
          </motion.div>

          {/* Column 3 */}
          <motion.div 
            className="w-full md:w-1/3 mb-8 md:mb-0 px-0 md:px-4 column"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <p className="text-white text-base md:text-lg font-medium">
              <strong>Claude 3.7</strong> - Delivers nuanced, context-aware AI generation with adaptive responses.
            </p>
          </motion.div>
        </div>

        {/* CTA Section with animations */}
        <motion.div 
          className="text-center mb-6"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <p className="text-xl md:text-2xl mb-6 cta-text">
            Join the Beta and experience the future of AI-driven content creation.
          </p>
          
          <motion.div 
            className="flex flex-col sm:flex-row justify-center gap-4"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <CTAButton 
            variant="primary"
            text="Join the Beta"
            onClick={() => console.log('Join Beta clicked')}
            ariaLabel="Join the SynaplyAI beta program"
            className="min-h-[44px]" // WCAG tap target size
            />
            <CTAButton 
              variant="secondary"
                          text="Secure Early Access"
                          onClick={() => console.log('Secure Early Access clicked')}
                          ariaLabel="Secure early access to SynaplyAI"
                          className="min-h-[44px]" // WCAG tap target size
            />
          </motion.div>
        </motion.div>

        {/* Exclusive Access Line with animation */}
        <motion.p 
          className="text-center exclusive-text"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          Be among the first to experience AI-driven content creation — limited early access available.
        </motion.p>
      </div>
    </section>
  );
};

export default LeadersSection;