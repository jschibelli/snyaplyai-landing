"use client";
import { motion } from 'framer-motion';
import NeuralNetworkAnimation from './NeuralNetworkAnimation';
import Logo from './logo';
import Image from 'next/image';
import { CTAButton, CTAButtonGroup } from './CTAButton';

export default function HeaderCTA() {
  return (
    <div className="header-container">
      <NeuralNetworkAnimation />
      <div className="header-content">
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto z-10 relative">
          <div className="flex justify-center mb-2"> {/* Reduced space by changing my-6 to mb-2 */}
              <Image 
                src="/logo.png" 
                alt="SynaplyAI Logo" 
                width={280} /* Increased from 240 */
                height={78} /* Increased from 67 - maintaining aspect ratio */
                className="logo"
              />
            </div>
            <motion.h1 
              className="hero-heading"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              synaply<span className="text-[#1DB954]">ai</span>
            </motion.h1>
            
            <motion.p 
              className="mt-4 text-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Enterprise-grade AI content creation with real-time collaboration and adaptive AI handling.
            </motion.p>
            
            <motion.div 
              className="mt-6 flex justify-center gap-4 flex-wrap"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <CTAButtonGroup className="justify-center">
                <CTAButton 
                  text="Join the Beta" 
                  variant="primary"
                  isJoinBeta={true} // Add this line
                  ariaLabel="Join our beta program"
                />
                <CTAButton 
                  text="Secure Early Access" 
                  href="/early-access" 
                  variant="secondary"
                  ariaLabel="Secure early access to platform"
                />
              </CTAButtonGroup>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}