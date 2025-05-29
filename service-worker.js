
self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open('portero-cache').then((cache) => {
      return cache.addAll([
        './',
        './index.html',
        './icon-192.png',
        './icon-512.png',
        './manifest.json'
      ]);
    })
  );
});

self.addEventListener('fetch', (e) => {
  e.respondWith(
    caches.match(e.request).then((response) => {
      return response || fetch(e.request);
    })
  );
});
