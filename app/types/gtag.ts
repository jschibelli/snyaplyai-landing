export {};

// Type definitions for Google Analytics gtag.js
declare global {
  interface Window {
    gtag?: (
      command: string,
      action: string,
      params?: {
        [key: string]: any;
      }
    ) => void;
    dataLayer?: any[];
  }
}