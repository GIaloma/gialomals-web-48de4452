import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'

// Register Service Worker for PWA functionality
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/sw.js')
      .then((registration) => {
        console.log('✅ SW registered successfully');
        
        // Check for updates
        registration.addEventListener('updatefound', () => {
          console.log('🔄 Service Worker update available');
        });
      })
      .catch((error) => {
        console.log('❌ SW registration failed:', error);
      });
  });
}

createRoot(document.getElementById("root")!).render(<App />);
