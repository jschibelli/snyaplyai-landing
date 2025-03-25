"use client";
import React, { useEffect, useRef, useState } from 'react';
// Import the HubSpot types
import '../types/hubspot';

export default function CustomHubspotFormWithJS({ onClose }: { onClose: () => void }) {
  const formContainerRef = useRef<HTMLDivElement>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [formSubmitted, setFormSubmitted] = useState(false);

  useEffect(() => {
    // Load HubSpot script
    const script = document.createElement('script');
    script.charset = 'utf-8';
    script.type = 'text/javascript';
    script.src = '//js-na2.hsforms.net/forms/embed/v2.js';
    script.async = true;
    
    script.onload = () => {
      if (formContainerRef.current && window.hbspt) {
        window.hbspt.forms.create({
          region: 'na2',
          portalId: '242357063',
          formId: 'f081d6b8-8d0a-4acb-ba39-a489627973b7',
          target: '#hubspot-form-container',
          onFormReady: () => {
            setIsLoading(false);
          },
          onFormSubmit: () => {
            setFormSubmitted(true);
            setTimeout(() => {
              onClose();
            }, 3000);
          }
        });
      }
    };
    
    document.head.appendChild(script);
    
    return () => {
      if (document.head.contains(script)) {
        document.head.removeChild(script);
      }
    };
  }, [onClose]);

  return (
    <div className="bg-gray-800 rounded-lg p-6 text-white">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-bold">Join the Beta</h2>
        <button 
          onClick={onClose}
          className="text-gray-400 hover:text-white"
          aria-label="Close form"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </button>
      </div>

      {!formSubmitted ? (
        <div className="hubspot-form-wrapper">
          {isLoading && (
            <div className="flex justify-center items-center py-8">
              <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#1DB954]"></div>
            </div>
          )}
          <div 
            id="hubspot-form-container"
            ref={formContainerRef}
            className="hubspot-form"
          />
          {/* Add custom styling for the HubSpot form */}
          <style jsx global>{`
            .hubspot-form .hs-form-field label {
              color: white !important;
              font-size: 0.875rem;
              margin-bottom: 0.25rem;
              display: block;
            }
            
            .hubspot-form .hs-input {
              width: 100% !important;
              padding: 0.5rem 0.75rem;
              background-color: #374151 !important;
              border: 1px solid #4B5563 !important;
              border-radius: 0.375rem;
              color: white !important;
              outline: none !important;
            }
            
            .hubspot-form .hs-input:focus {
              outline: none !important;
              box-shadow: 0 0 0 2px #1DB954 !important;
            }
            
            .hubspot-form .hs-button {
              background-color: #1DB954 !important;
              color: white !important;
              padding: 0.5rem 1rem !important;
              border-radius: 0.375rem !important;
              border: none !important;
              cursor: pointer !important;
              transition: background-color 0.3s !important;
            }
            
            .hubspot-form .hs-button:hover {
              background-color: #19a449 !important;
            }
            
            .hubspot-form .hs-error-msg {
              color: #ef4444 !important;
              font-size: 0.75rem !important;
            }
            
            .hubspot-form .legal-consent-container {
              font-size: 0.75rem !important;
              color: #9CA3AF !important;
            }
            
            .hubspot-form .hs-richtext {
              color: #9CA3AF !important;
            }
          `}</style>
        </div>
      ) : (
        <div className="text-center py-8">
          <svg className="mx-auto h-12 w-12 text-[#1DB954]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
          <p className="mt-4 text-lg">Thank you for joining our beta!</p>
          <p className="mt-2">We'll be in touch soon.</p>
        </div>
      )}
    </div>
  );
}