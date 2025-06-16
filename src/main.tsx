import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'

// Register Service Worker for PWA functionality
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/sw.js')
      .then((registration) => {
        console.log('✅ SW registered: ', registration);
        
        // Check for updates
        registration.addEventListener('updatefound', () => {
          const newWorker = registration.installing;
          if (newWorker) {
            newWorker.addEventListener('statechange', () => {
              if (newWorker.state === 'installed' && navigator.serviceWorker.controller) {
                // New content is available, show update notification
                console.log('🔄 New content available, refresh to update');
              }
            });
          }
        });
      })
      .catch((error) => {
        console.log('❌ SW registration failed: ', error);
      });
  });
}

createRoot(document.getElementById("root")!).render(<App />);
