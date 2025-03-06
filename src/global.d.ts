export {};

declare global {
  interface Window {
    electronAPI: {
       callSdkMethod: () => Promise<void>;
 
    };
  }
}