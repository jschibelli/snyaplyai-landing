interface HubSpotForms {
  create(config: {
    portalId: string;
    formId: string;
    region?: string;
    target: string | HTMLElement;
  }): void;
}

interface Window {
  hbspt: {
    forms: HubSpotForms;
  };
}