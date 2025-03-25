export {}; // Make this a module

// Define HubSpot types globally
declare global {
  interface Window {
    hbspt: {
      forms: {
        create: (config: {
          region: string;
          portalId: string;
          formId: string;
          target: string;
          onFormReady?: () => void;
          onFormSubmit?: () => void;
          onFormSubmitted?: () => void;
        }) => void;
      };
    };
  }
}