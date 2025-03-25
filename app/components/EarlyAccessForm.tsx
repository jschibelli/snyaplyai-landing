"use client";
import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
// Import the HubSpot types
import '../types/hubspot';

export default function EarlyAccessForm({ onClose }: { onClose: () => void }) {
  const formContainerRef = useRef<HTMLDivElement>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let isMounted = true;
    
    // Load HubSpot script
    const script = document.createElement('script');
    script.charset = 'utf-8';
    script.type = 'text/javascript';
    script.src = '//js-na2.hsforms.net/forms/embed/v2.js';
    script.async = true;
    
    const handleScriptLoad = () => {
      try {
        if (!isMounted || !formContainerRef.current || !window.hbspt) {
          return;
        }
        
        window.hbspt.forms.create({
          region: 'na2',
          portalId: '242357063',
          formId: '9edc5b80-7de8-491f-9aa2-528735e3d5ce',
          target: '#early-access-form-container',
          onFormReady: () => {
            if (isMounted) {
              setIsLoading(false);
            }
          },
          onFormSubmit: () => {
            if (isMounted) {
              setFormSubmitted(true);
              setTimeout(() => {
                onClose();
              }, 3000);
            }
          }
        });
      } catch (err) {
        if (isMounted) {
          console.error('Error creating HubSpot form:', err);
          setError('Failed to load the form. Please try again later.');
          setIsLoading(false);
        }
      }
    };
    
    script.onload = handleScriptLoad;
    script.onerror = () => {
      if (isMounted) {
        setError('Failed to load the form script. Please try again later.');
        setIsLoading(false);
      }
    };
    
    document.head.appendChild(script);
    
    return () => {
      isMounted = false;
      if (document.head.contains(script)) {
        document.head.removeChild(script);
      }
    };
  }, [onClose]);

  return (
    <div className="bg-gray-800 rounded-lg p-6 text-white">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-bold">SynaplyAI Secure Early Access</h2>
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
          
          {error && (
            <div className="text-red-500 text-center py-4">
              {error}
              <button 
                className="block mx-auto mt-2 text-white bg-[#1DB954] px-4 py-2 rounded"
                onClick={() => window.location.reload()}
              >
                Retry
              </button>
            </div>
          )}
          
          {!error && (
            <div 
              id="early-access-form-container"
              ref={formContainerRef}
              className="hubspot-form"
            />
          )}
          
          {/* Add custom styling for the HubSpot form */}
          <style jsx global>{`
            /* Enhanced visibility for form elements */
            .hubspot-form * {
              font-family: 'Inter', Arial, sans-serif;
            }
            
            /* Form labels */
            .hubspot-form .hs-form-field label {
              color: #ffffff !important; /* Bright white */
              font-size: 1rem !important; /* Larger font */
              margin-bottom: 0.5rem !important;
              display: block !important;
              font-weight: 600 !important; /* Semi-bold */
              letter-spacing: 0.01em !important; /* Slightly improved readability */
            }
            
            /* Input fields */
            .hubspot-form .hs-input {
              width: 100% !important;
              padding: 0.625rem 0.875rem !important; /* Slightly larger padding */
              background-color: #2d3748 !important; /* Lighter background for better contrast */
              border: 1px solid #4B5563 !important;
              border-radius: 0.375rem !important;
              color: #ffffff !important; /* Bright white text */
              outline: none !important;
              font-size: 1rem !important; /* Larger font */
              box-shadow: 0 1px 2px rgba(0, 0, 0, 0.2) !important; /* Subtle depth */
            }
            
            /* Focus state */
            .hubspot-form .hs-input:focus {
              outline: none !important;
              box-shadow: 0 0 0 2px #1DB954 !important;
              border-color: #1DB954 !important;
            }
            
            /* Submit button */
            .hubspot-form .hs-button {
              background-color: #1DB954 !important;
              color: white !important;
              padding: 0.625rem 1.25rem !important; /* Larger padding */
              border-radius: 0.375rem !important;
              border: none !important;
              cursor: pointer !important;
              transition: all 0.3s ease !important;
              font-weight: 600 !important; /* Semi-bold */
              font-size: 1rem !important; /* Larger font */
              letter-spacing: 0.01em !important;
              text-transform: none !important;
              box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2) !important; /* Subtle depth */
            }
            
            /* Button hover state */
            .hubspot-form .hs-button:hover {
              background-color: #19a449 !important;
              transform: translateY(-1px) !important;
              box-shadow: 0 4px 6px rgba(0, 0, 0, 0.2) !important;
            }
            
            /* Error messages */
            .hubspot-form .hs-error-msg {
              color: #ff6b6b !important; /* More visible red */
              font-size: 0.875rem !important;
              margin-top: 0.25rem !important;
              font-weight: 500 !important;
            }
            
            /* Legal text */
            .hubspot-form .legal-consent-container {
              font-size: 0.875rem !important;
              color: #e2e8f0 !important; /* Lighter gray, better visibility */
              line-height: 1.5 !important;
              margin-top: 1rem !important;
            }
            
            /* Rich text elements */
            .hubspot-form .hs-richtext {
              color: #e2e8f0 !important; /* Lighter gray */
              font-size: 0.875rem !important;
              line-height: 1.5 !important;
            }
            
            /* Dropdown styling */
            .hubspot-form select.hs-input {
              appearance: none !important;
              background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%23ffffff' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M6 8l4 4 4-4'/%3e%3c/svg%3e") !important;
              background-position: right 0.5rem center !important;
              background-repeat: no-repeat !important;
              background-size: 1.5em 1.5em !important;
              padding-right: 2.5rem !important;
            }
            
            /* Checkbox container */
            .hubspot-form .hs-fieldtype-booleancheckbox .inputs-list {
              list-style: none !important;
              padding: 0 !important;
              margin: 0.5rem 0 !important;
            }
            
            /* Checkbox alignment */
            .hubspot-form .hs-fieldtype-booleancheckbox .inputs-list .hs-form-checkbox {
              display: flex !important;
              align-items: flex-start !important;
            }
            
            /* Checkbox display */
            .hubspot-form .hs-fieldtype-booleancheckbox .inputs-list .hs-form-checkbox-display {
              display: flex !important;
              align-items: flex-start !important;
              color: #ffffff !important; /* Ensure checkbox text is white */
              font-size: 0.875rem !important;
            }
            
            /* Checkbox input */
            .hubspot-form .hs-fieldtype-booleancheckbox .inputs-list .hs-form-checkbox-display input {
              margin-top: 0.25rem !important;
              margin-right: 0.5rem !important;
              background-color: #2d3748 !important;
              border: 1px solid #4B5563 !important;
            }
            
            /* Textarea */
            .hubspot-form .hs-fieldtype-textarea .input textarea.hs-input {
              min-height: 100px !important;
              resize: vertical !important;
              line-height: 1.5 !important;
            }
            
            /* Field descriptions */
            .hubspot-form .hs-field-desc {
              color: #e2e8f0 !important;
              font-size: 0.75rem !important;
              margin-top: 0.25rem !important;
            }
            
            /* Form field spacing */
            .hubspot-form .hs-form-field {
              margin-bottom: 1.25rem !important;
            }
            
            /* Form field groups */
            .hubspot-form fieldset {
              max-width: 100% !important;
              padding: 0 !important;
            }
            
            /* Make sure all form text is visible */
            .hubspot-form span, 
            .hubspot-form p,
            .hubspot-form div,
            .hubspot-form legend {
              color: #ffffff !important;
            }
          `}</style>
        </div>
      ) : (
        <div className="text-center py-8">
          <svg className="mx-auto h-12 w-12 text-[#1DB954]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
          <p className="mt-4 text-lg">Thank you for your interest!</p>
          <p className="mt-2">Your early access request has been secured. We'll be in touch soon with next steps.</p>
        </div>
      )}
    </div>
  );
}