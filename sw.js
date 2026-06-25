// Apocalypse Survivors — SELF-DESTRUCTING service worker.
// The caching SW repeatedly trapped users on stale code. This version removes itself:
// on activate it deletes all caches, unregisters, and force-reloads open tabs onto
// fresh, uncached code served straight from the network. New visitors never register one
// (index.html no longer calls register()), so there is no caching layer anymore.
self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', e => {
  e.waitUntil((async () => {
    try { const ks = await caches.keys(); await Promise.all(ks.map(k => caches.delete(k))); } catch (_) {}
    try { await self.registration.unregister(); } catch (_) {}
    try {
      const cs = await self.clients.matchAll({ type: 'window' });
      for (const c of cs) { try { c.navigate(c.url); } catch (_) {} } // kick tabs onto fresh network code
    } catch (_) {}
  })());
});
// no fetch handler → every request goes straight to the network
