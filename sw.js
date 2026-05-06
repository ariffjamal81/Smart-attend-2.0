const cacheName = 'smart-attend-v1';
const assets = [
  './',
  './index.html',
  './manifest.json',
  './icon.jpg'
];

// Install service worker
self.addEventListener('install', evt => {
  evt.waitUntil(
    caches.open(cacheName).then(cache => {
      cache.addAll(assets);
    })
  );
});

// Fetch events
self.addEventListener('fetch', evt => {
  evt.respondWith(
    caches.match(evt.request).then(cacheRes => {
      return cacheRes || fetch(evt.request);
    })
  );
});
