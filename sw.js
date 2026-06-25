// Apocalypse Survivors — service worker
// network-first (always load latest online; cache = offline fallback)
// + force-reloads open tabs when a new version activates, so stale caches can't trap users.
const CACHE = 'apoc-v12';
const ASSETS = ['./', './index.html', './vendor/peerjs.min.js', './manifest.webmanifest', './icon.svg'];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(ASSETS)).then(() => self.skipWaiting()));
});

self.addEventListener('activate', e => {
  e.waitUntil((async () => {
    const ks = await caches.keys();
    await Promise.all(ks.filter(k => k !== CACHE).map(k => caches.delete(k)));
    await self.clients.claim();
    // kick any open tabs onto the fresh code
    const cs = await self.clients.matchAll({ type: 'window' });
    for (const c of cs) { try { c.navigate(c.url); } catch (err) {} }
  })());
});

self.addEventListener('fetch', e => {
  const u = new URL(e.request.url);
  if (u.origin !== location.origin || e.request.method !== 'GET') return; // let Firebase / PeerJS pass through
  e.respondWith(
    fetch(e.request).then(res => {
      const copy = res.clone();
      caches.open(CACHE).then(c => c.put(e.request, copy)).catch(() => {});
      return res;
    }).catch(() => caches.match(e.request))
  );
});
