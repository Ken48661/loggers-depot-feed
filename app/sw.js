/* Loggers Depot service worker
 * - Caches the app shell for offline open
 * - NEVER caches app-feed.json (always network for specials)
 */
var SHELL = 'loggers-shell-v3';
var SHELL_URLS = [
  './',
  './index.html',
  './manifest.webmanifest',
  './icon.svg'
];

self.addEventListener('install', function (event) {
  event.waitUntil(
    caches.open(SHELL).then(function (cache) {
      return cache.addAll(SHELL_URLS);
    }).then(function () {
      return self.skipWaiting();
    })
  );
});

self.addEventListener('activate', function (event) {
  event.waitUntil(
    caches.keys().then(function (keys) {
      return Promise.all(keys.filter(function (k) { return k !== SHELL; }).map(function (k) {
        return caches.delete(k);
      }));
    }).then(function () {
      return self.clients.claim();
    })
  );
});

self.addEventListener('fetch', function (event) {
  var req = event.request;
  var url = new URL(req.url);

  // Always network for the live feed (any host, app-feed.json)
  if (url.pathname.indexOf('app-feed.json') !== -1) {
    event.respondWith(
      fetch(req, { cache: 'no-store' }).catch(function () {
        return new Response(JSON.stringify({ error: 'offline' }), {
          status: 503,
          headers: { 'Content-Type': 'application/json' }
        });
      })
    );
    return;
  }

  // App shell: network first, fall back to cache
  if (req.method === 'GET' && url.origin === self.location.origin) {
    event.respondWith(
      fetch(req).then(function (res) {
        var copy = res.clone();
        caches.open(SHELL).then(function (cache) { cache.put(req, copy); });
        return res;
      }).catch(function () {
        return caches.match(req).then(function (hit) {
          return hit || caches.match('./index.html');
        });
      })
    );
  }
});
