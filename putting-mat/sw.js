/* Putt Lab service worker: app shell cached on install, fonts cached as they load. */
const VERSION = 'puttlab-v2';
const SHELL = [
  './', './index.html', './manifest.webmanifest',
  './icons/icon-192.png', './icons/icon-512.png', './icons/maskable-512.png', './icons/apple-touch-icon.png'
];
self.addEventListener('install', e => {
  e.waitUntil(caches.open(VERSION).then(c => c.addAll(SHELL)).then(() => self.skipWaiting()));
});
self.addEventListener('activate', e => {
  e.waitUntil(caches.keys().then(keys => Promise.all(keys.filter(k => k !== VERSION).map(k => caches.delete(k)))).then(() => self.clients.claim()));
});
self.addEventListener('fetch', e => {
  const url = new URL(e.request.url);
  if (e.request.method !== 'GET') return;
  const isFont = url.hostname === 'fonts.googleapis.com' || url.hostname === 'fonts.gstatic.com';
  if (isFont) {
    // stale-while-revalidate for fonts
    e.respondWith(caches.open(VERSION).then(async c => {
      const cached = await c.match(e.request);
      const net = fetch(e.request).then(r => { if (r.ok) c.put(e.request, r.clone()); return r; }).catch(() => cached);
      return cached || net;
    }));
    return;
  }
  if (url.origin === location.origin) {
    // network first for the shell so updates land, cache as fallback for offline
    e.respondWith(fetch(e.request).then(r => {
      if (r.ok) caches.open(VERSION).then(c => c.put(e.request, r.clone()));
      return r;
    }).catch(() => caches.match(e.request).then(m => m || caches.match('./index.html'))));
  }
});
