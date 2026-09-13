const CACHE_NAME = "a2-cache-v2";

const PRECACHE_URLS = [
    "./",
    "./index.html",
    "./styles.css",
    "./app.js",
    "./data.js"
];

self.addEventListener("install", e => {
    self.skipWaiting();
    e.waitUntil(
        caches.open(CACHE_NAME).then(cache => {
            // Cache each file individually so one missing/renamed file
            // (e.g. no styles.css) can't abort the whole install.
            return Promise.all(
                PRECACHE_URLS.map(url =>
                    cache.add(url).catch(err =>
                        console.warn(`sw.js: could not precache ${url}`, err)
                    )
                )
            );
        })
    );
});

self.addEventListener("activate", e => {
    e.waitUntil(
        caches.keys().then(names =>
            Promise.all(
                names
                    .filter(name => name !== CACHE_NAME)
                    .map(name => caches.delete(name))
            )
        ).then(() => self.clients.claim())
    );
});

self.addEventListener("fetch", e => {
    // Network-first: always try to get the freshest copy when online,
    // and fall back to whatever's cached when offline. This means new
    // deployments show up immediately instead of getting stuck behind
    // an old cached version.
    e.respondWith(
        fetch(e.request)
            .then(networkResp => {
                const copy = networkResp.clone();
                caches.open(CACHE_NAME).then(cache => cache.put(e.request, copy));
                return networkResp;
            })
            .catch(() => caches.match(e.request))
    );
});