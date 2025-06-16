// Gialoma Life Solutions - Service Worker
// Enables Progressive Web App features including offline capability

const CACHE_NAME = 'gialoma-v2025.6.16';
const STATIC_CACHE_NAME = 'gialoma-static-v2025.6.16';

// Assets to cache for offline functionality
const STATIC_ASSETS = [
  '/',
  '/es',
  '/en',
  '/en/digitalization',
  '/lovable-uploads/6471ad21-2a7e-45d8-8bf0-2585088dfe20.png',
  '/lovable-uploads/3eb6ac48-0d9c-4ff4-91aa-6cc968f1249a.png',
  '/lovable-uploads/66798576-8cf5-4019-a3bd-9f7a047bb1b3.png',
  '/favicon.ico',
  '/site.webmanifest'
];

// Install event - cache static assets
self.addEventListener('install', event => {
  console.log('🔧 Service Worker installing...');
  
  event.waitUntil(
    caches.open(STATIC_CACHE_NAME)
      .then(cache => {
        console.log('📦 Caching static assets');
        return cache.addAll(STATIC_ASSETS);
      })
      .then(() => {
        console.log('✅ Service Worker installed successfully');
        return self.skipWaiting();
      })
      .catch(error => {
        console.error('❌ Service Worker installation failed:', error);
      })
  );
});

// Activate event - clean up old caches
self.addEventListener('activate', event => {
  console.log('🚀 Service Worker activating...');
  
  event.waitUntil(
    caches.keys()
      .then(cacheNames => {
        return Promise.all(
          cacheNames.map(cacheName => {
            if (cacheName !== CACHE_NAME && cacheName !== STATIC_CACHE_NAME) {
              console.log('🗑️ Deleting old cache:', cacheName);
              return caches.delete(cacheName);
            }
          })
        );
      })
      .then(() => {
        console.log('✅ Service Worker activated');
        return self.clients.claim();
      })
  );
});

// Fetch event - serve from cache, fall back to network
self.addEventListener('fetch', event => {
  // Skip cross-origin requests
  if (!event.request.url.startsWith(self.location.origin)) {
    return;
  }
  
  // Skip Google Analytics and GTM requests
  if (event.request.url.includes('google-analytics.com') || 
      event.request.url.includes('googletagmanager.com') ||
      event.request.url.includes('gpteng.co') ||
      event.request.url.includes('fillout.com')) {
    return;
  }

  event.respondWith(
    caches.match(event.request)
      .then(response => {
        // Return cached version if available
        if (response) {
          console.log('💾 Serving from cache:', event.request.url);
          return response;
        }
        
        // Otherwise fetch from network
        return fetch(event.request)
          .then(response => {
            // Don't cache non-successful responses
            if (!response || response.status !== 200 || response.type !== 'basic') {
              return response;
            }
            
            // Cache successful responses
            const responseToCache = response.clone();
            caches.open(CACHE_NAME)
              .then(cache => {
                cache.put(event.request, responseToCache);
              });
            
            return response;
          })
          .catch(() => {
            // Return offline page if available
            if (event.request.destination === 'document') {
              return caches.match('/');
            }
          });
      })
  );
});

// Background sync for form submissions (future enhancement)
self.addEventListener('sync', event => {
  if (event.tag === 'contact-form-sync') {
    console.log('🔄 Background sync triggered for contact form');
    // Handle offline form submissions
  }
});

// Push notification support (future enhancement)
self.addEventListener('push', event => {
  if (!event.data) return;
  
  const data = event.data.json();
  const options = {
    body: data.body,
    icon: '/lovable-uploads/3eb6ac48-0d9c-4ff4-91aa-6cc968f1249a.png',
    badge: '/lovable-uploads/6471ad21-2a7e-45d8-8bf0-2585088dfe20.png',
    vibrate: [200, 100, 200],
    data: data.data || {},
    actions: data.actions || []
  };
  
  event.waitUntil(
    self.registration.showNotification(data.title, options)
  );
});

// Handle notification clicks
self.addEventListener('notificationclick', event => {
  event.notification.close();
  
  event.waitUntil(
    clients.openWindow(event.notification.data.url || '/')
  );
});

console.log('🟢 Gialoma Service Worker loaded');
