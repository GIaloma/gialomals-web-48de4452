// Gialoma Life Solutions - Service Worker
// Version: 2025.6.16
const CACHE_NAME = 'gialoma-v1';
const STATIC_ASSETS = [
  '/',
  '/favicon.ico',
  '/site.webmanifest'
];

// Install event - cache essential assets
self.addEventListener('install', event => {
  console.log('🔧 Service Worker installing...');
  
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        console.log('📦 Caching essential assets');
        return cache.addAll(STATIC_ASSETS);
      })
      .then(() => {
        console.log('✅ Service Worker installed');
        return self.skipWaiting();
      })
      .catch(error => {
        console.log('❌ Cache failed:', error);
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
            if (cacheName !== CACHE_NAME) {
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

// Fetch event - network first, then cache fallback
self.addEventListener('fetch', event => {
  // Skip non-GET requests
  if (event.request.method !== 'GET') {
    return;
  }
  
  // Skip cross-origin requests and external APIs
  if (!event.request.url.startsWith(self.location.origin)) {
    return;
  }
  
  // Skip Google Analytics, GTM, and other external scripts
  if (event.request.url.includes('google-analytics.com') || 
      event.request.url.includes('googletagmanager.com') ||
      event.request.url.includes('gpteng.co') ||
      event.request.url.includes('fillout.com')) {
    return;
  }

  event.respondWith(
    fetch(event.request)
      .then(response => {
        // If network succeeds, clone and cache the response
        if (response && response.status === 200 && response.type === 'basic') {
          const responseToCache = response.clone();
          caches.open(CACHE_NAME).then(cache => {
            cache.put(event.request, responseToCache);
          });
        }
        return response;
      })
      .catch(() => {
        // If network fails, try to serve from cache
        return caches.match(event.request)
          .then(response => {
            if (response) {
              console.log('💾 Serving from cache:', event.request.url);
              return response;
            }
            // If not in cache and it's a navigation request, serve the main page
            if (event.request.destination === 'document') {
              return caches.match('/');
            }
          });
      })
  );
});

console.log('🟢 Gialoma Service Worker loaded');
