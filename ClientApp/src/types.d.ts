interface Window {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  initialReduxState: any;
  appInsightsInstrumentationKey: string;
}

declare interface ServiceWorkerConfig {
  onSuccess: (registration: ServiceWorkerRegistration) => void;
  onUpdate: (registration: ServiceWorkerRegistration) => void;
}

declare module '*.svg';
declare module '*.png';
declare module '*.jpg';
