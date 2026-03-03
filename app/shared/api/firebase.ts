import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import { getAuth } from 'firebase/auth'; // Раскомментируй, если нужна авторизация
import { getFirestore } from 'firebase/firestore'; // Раскомментируй, если нужна база данных

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
export const analytics = getAnalytics(app);

// Экспортируй нужные сервисы, чтобы использовать их в проекте:
// export const auth = getAuth(app);
// export const db = getFirestore(app);

export default app;
