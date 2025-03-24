"use client";
import { motion } from 'framer-motion';
import NeuralNetworkAnimation from './NeuralNetworkAnimation';

export default function HeaderCTA() {
  return (
    <div className="header-container">
      <NeuralNetworkAnimation />
      <div className="header-content">
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto z-10 relative"> {/* Added relative and z-10 for proper stacking */}
            <motion.h1 
              className="hero-heading"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              Create, Collaborate, and Scale with AI
            </motion.h1>
            <div className="section-title-line"></div> {/* Already centered in CSS */}
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
              <button className="primary-cta" aria-label="Join the SynaplyAI Beta">
                Join the Beta
              </button>
              <button className="secondary-cta" aria-label="Start Free Trial">
                Start Free Trial
              </button>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}