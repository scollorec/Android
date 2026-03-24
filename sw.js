const cacheName = 'v1-cache';
const assets = ['./index.html', './style.css', './script.js'];

// Install event: Caches the files
self.addEventListener('install', e => {
    e.waitUntil(
        caches.open(cacheName).then(cache => cache.addAll(assets))
    );
});

// Fetch event: Serves files from cache if offline
self.addEventListener('fetch', e => {
    e.respondWith(
        caches.match(e.request).then(res => res || fetch(e.request))
    );
});