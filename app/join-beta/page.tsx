"use client";
import React, { useEffect, useRef, useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
// Import the shared types
import '../types/hubspot';

export default function JoinBetaPage() {
  const router = useRouter();
  const formContainerRef = useRef<HTMLDivElement>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // Using the same script loading approach that works for early-access
    const script = document.createElement('script');
    script.src = "//js.hsforms.net/forms/embed/v2.js";
    script.charset = "utf-8";
    script.type = "text/javascript";
    script.defer = true;
    script.onload = () => {
      window.hbspt.forms.create({
        region: "na2",
        portalId: "242357063",
        formId: "f081d6b8-8d0a-4acb-ba39-a489627973b7",
        target: "#beta-form-container",
        onFormSubmitted: function() {
          console.log("Form submitted to HubSpot directly");
          setFormSubmitted(true);
          setTimeout(() => {
            router.push('/');
          }, 3000);
        }
      });
    };
    document.head.appendChild(script);
    
    return () => {
      document.head.removeChild(script);
    };
  }, [router]);

  return (
    <div className="form-page-background min-h-screen bg-gradient-to-b from-[rgba(0,0,0,0.95)] to-[rgba(10,10,10,1)] text-white py-16 px-4 relative overflow-hidden">
      {/* Background pattern overlay */}
      <div className="absolute inset-0 bg-[url('/hexagon-pattern.svg')] opacity-15 bg-repeat z-0"></div>
      
      <div className="max-w-3xl mx-auto relative z-10">
        <div className="mb-8">
          <Link href="/" className="text-[#1DB954] hover:underline flex items-center transition-all hover:translate-x-[-4px]">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2">
              <path d="M19 12H5M12 19l-7-7 7-7" />
            </svg>
            Back to Home
          </Link>
        </div>
        
        <div className="bg-gray-800 bg-opacity-75 backdrop-blur-sm rounded-lg p-8 text-white shadow-xl border-l-4 border-[#1DB954] transition-all hover:shadow-2xl">
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-2xl font-bold">Join the SynaplyAI Beta</h1>
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
                  id="beta-form-container"
                  ref={formContainerRef}
                  className="hubspot-form"
                />
              )}
              
              {/* Form styling */}
              <style jsx global>{`
                /* Enhanced visibility for form elements */
                .hubspot-form * {
                  font-family: 'Inter', Arial, sans-serif;
                }
                
                /* Form labels */
                .hubspot-form .hs-form-field label {
                  color: #ffffff !important;
                  font-size: 1rem !important;
                  margin-bottom: 0.5rem !important;
                  display: block !important;
                  font-weight: 600 !important;
                  letter-spacing: 0.01em !important;
                }
                
                /* Input fields */
                .hubspot-form .hs-input {
                  width: 100% !important;
                  padding: 0.625rem 0.875rem !important;
                  background-color: #2d3748 !important;
                  border: 1px solid #4B5563 !important;
                  border-radius: 0.375rem !important;
                  color: #ffffff !important;
                  outline: none !important;
                  font-size: 1rem !important;
                  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.2) !important;
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
                  padding: 0.625rem 1.25rem !important;
                  border-radius: 0.375rem !important;
                  border: none !important;
                  cursor: pointer !important;
                  transition: all 0.3s ease !important;
                  font-weight: 600 !important;
                  font-size: 1rem !important;
                  letter-spacing: 0.01em !important;
                  text-transform: none !important;
                  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2) !important;
                }
                
                /* Button hover state */
                .hubspot-form .hs-button:hover {
                  background-color: #19a449 !important;
                  transform: translateY(-1px) !important;
                  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.2) !important;
                }
                
                /* Error messages */
                .hubspot-form .hs-error-msg {
                  color: #ff6b6b !important;
                  font-size: 0.875rem !important;
                  margin-top: 0.25rem !important;
                  font-weight: 500 !important;
                }
                
                /* Legal text */
                .hubspot-form .legal-consent-container {
                  font-size: 0.875rem !important;
                  color: #ffffff !important;
                  line-height: 1.5 !important;
                  margin-top: 1rem !important;
                }
                
                /* Rich text elements */
                .hubspot-form .hs-richtext {
                  color: #ffffff !important;
                  font-size: 0.875rem !important;
                  line-height: 1.5 !important;
                }
                
                .hubspot-form span, 
                .hubspot-form p,
                .hubspot-form div,
                .hubspot-form legend {
                  color: #ffffff !important;
                }
                
                /* Form page specific styling */
                .form-page-background::after {
                  content: "";
                  position: absolute;
                  bottom: 0;
                  left: 0;
                  width: 100%;
                  height: 200px;
                  background: linear-gradient(to top, rgba(0,0,0,0.7), transparent);
                  pointer-events: none;
                }
                
                .form-page-background::before {
                  content: "";
                  position: absolute;
                  top: 0;
                  left: 0;
                  width: 100%;
                  height: 200px;
                  background: linear-gradient(to bottom, rgba(0,0,0,0.7), transparent);
                  pointer-events: none;
                }
              `}</style>
            </div>
          ) : (
            <div className="text-center py-8">
              <svg className="mx-auto h-12 w-12 text-[#1DB954]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <p className="mt-4 text-lg">Thank you for joining our beta!</p>
              <p className="mt-2">We'll be in touch soon with next steps.</p>
              <p className="mt-4 text-[#1DB954]">Redirecting to homepage...</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}