const CACHE_NAME = 'elada-cache-v3';

const urlsToCache = [
    '/',
    '/index.html',
    '/manifest.json',
    '/favicon.ico',
    '/logo192.avif',
    '/logo512.avif',
    '/logo.png',
];

self.addEventListener('install', event => {
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then(cache => cache.addAll(urlsToCache))
    );
    self.skipWaiting();
});

self.addEventListener('activate', event => {
    event.waitUntil(
        caches.keys().then(cacheNames => {
            return Promise.all(
                cacheNames.map(cache => {
                    if (cache !== CACHE_NAME) {
                        return caches.delete(cache);
                    }
                })
            );
        })
    );
    self.clients.claim();
});

self.addEventListener('fetch', event => {
    const { request } = event;
    const url = new URL(request.url);

    if (request.method !== 'GET' || url.origin !== self.location.origin) {
        return;
    }

    if (request.mode === 'navigate' || url.pathname.endsWith('.html')) {
        event.respondWith(
            fetch(request).catch(() =>
                caches.match('/index.html').then(cached =>
                    cached || new Response('Offline', { status: 503, statusText: 'Offline' })
                )
            )
        );
        return;
    }

    if (url.pathname.startsWith('/assets/')) {
        event.respondWith(
            caches.match(request).then(cached => {
                if (cached) return cached;

                return fetch(request).then(fetchResponse => {
                    if (!fetchResponse.ok) return fetchResponse;

                    return caches.open(CACHE_NAME).then(cache => {
                        cache.put(request, fetchResponse.clone());
                        return fetchResponse;
                    });
                }).catch(() => new Response('Offline', { status: 503, statusText: 'Offline' }));
            })
        );
        return;
    }

    event.respondWith(
        caches.match(request)
            .then(response => response || fetch(request).then(fetchResponse => {
                if (!fetchResponse.ok) return fetchResponse;

                return caches.open(CACHE_NAME).then(cache => {
                    cache.put(request, fetchResponse.clone());
                    return fetchResponse;
                });
            }))
            .catch(() => new Response('Offline', { status: 503, statusText: 'Offline' }))
    );
});