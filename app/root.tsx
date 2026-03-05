import '~/shared/styles/index.scss';

import { Outlet, Scripts, ScrollRestoration } from 'react-router';

export { ErrorBoundary } from './ErrorBoundary';
// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyAelNPydxp12VTe6SfJFw_RSxZu0C5dv44',
  authDomain: 'checkpoint-97c62.firebaseapp.com',
  projectId: 'checkpoint-97c62',
  storageBucket: 'checkpoint-97c62.firebasestorage.app',
  messagingSenderId: '133984971137',
  appId: '1:133984971137:web:26532b396135af413da080',
  measurementId: 'G-VQWXMM5DP1',
};
export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        {children}
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export default function App() {
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
  return <Outlet />;
}
