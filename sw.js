// Apocalypse Survivors — service worker (offline app shell)
const CACHE = 'apoc-v1';
const ASSETS = ['./', './index.html', './vendor/peerjs.min.js', './manifest.webmanifest', './icon.svg'];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(ASSETS)).then(() => self.skipWaiting()));
});
self.addEventListener('activate', e => {
  e.waitUntil(caches.keys().then(ks => Promise.all(ks.filter(k => k !== CACHE).map(k => caches.delete(k)))).then(() => self.clients.claim()));
});
self.addEventListener('fetch', e => {
  const u = new URL(e.request.url);
  // only handle our own origin; let Firebase / PeerJS network calls pass straight through
  if (u.origin === location.origin && e.request.method === 'GET') {
    e.respondWith(caches.match(e.request).then(r => r || fetch(e.request)));
  }
});
