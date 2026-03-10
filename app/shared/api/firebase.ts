import { initializeApp } from 'firebase/app';
import { getAnalytics, type Analytics } from 'firebase/analytics';

const firebaseConfig = {
  apiKey: 'AIzaSyAeLNPydxp12VTe6SfJFw_RSxZu0C5dv44',
  authDomain: 'checkpoint-97c62.firebaseapp.com',
  projectId: 'checkpoint-97c62',
  storageBucket: 'checkpoint-97c62.firebasestorage.app',
  messagingSenderId: '133984971137',
  appId: '1:133984971137:web:26532b396135af413da080',
  measurementId: 'G-VQWXM5DP1',
};

const app = initializeApp(firebaseConfig);

// Analytics only runs in the browser (uses window/dataLayer); skip during SSR/build
export const analytics: Analytics | null =
  typeof window !== 'undefined' ? getAnalytics(app) : null;

export default app;
