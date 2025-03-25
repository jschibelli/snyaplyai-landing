"use client";
import { useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface HubspotFormModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function HubspotFormModal({ isOpen, onClose }: HubspotFormModalProps) {
  const formContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Only inject the script when the modal is open
    if (isOpen) {
      // Add the HubSpot script to the document
      const script = document.createElement('script');
      script.charset = 'utf-8';
      script.type = 'text/javascript';
      script.src = '//js-na2.hsforms.net/forms/embed/v2.js';
      script.async = true;
      
      // Create the form after the script has loaded
      script.onload = () => {
        if (formContainerRef.current && window.hbspt) {
          window.hbspt.forms.create({
            portalId: "242357063",
            formId: "f081d6b8-8d0a-4acb-ba39-a489627973b7",
            region: "na2",
            target: "#hubspot-form-container"
          });
        }
      };
      
      document.head.appendChild(script);
      
      // Cleanup function to remove the script when component unmounts
      return () => {
        document.head.removeChild(script);
      };
    }
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div 
          className="fixed inset-0 bg-black bg-opacity-75 z-50 flex items-center justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={(e) => e.target === e.currentTarget && onClose()}
        >
          <motion.div 
            className="bg-gray-800 rounded-lg p-6 max-w-md w-full"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-bold text-white">Join the Beta</h2>
              <button 
                onClick={onClose} 
                className="text-gray-400 hover:text-white"
                aria-label="Close modal"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
              </button>
            </div>
            <div id="hubspot-form-container" ref={formContainerRef} className="text-white">
              <div className="flex justify-center items-center py-6">
                <div className="animate-spin rounded-full h-10 w-10 border-t-2 border-b-2 border-[#1DB954]"></div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}