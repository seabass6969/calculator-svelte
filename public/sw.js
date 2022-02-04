console.log("service worker loaded")
const allcontent = [
    "/offline.html",
    "/sw.js",
    "/build/bundle.js",
    "/build/bundle.css",
    "/logo.svg",
    "https://fonts.googleapis.com/css2?family=Fira+Code:wght@300&family=Space+Mono&display=swap",
    "/index.html",
    "favicon.png",
    "icon_144x144.png",
    "icon_168x168.png",
    "icon_192x192.png",
    "icon_48x48.png",
    "icon_512x512.png",
    "icon_72x72.png",
    "icon_96x96.png",
]
let cache_name = "svelte-calculator-do-not-click-me";
self.addEventListener("install",Event=> {
    console.log("adding me into cache");
    Event.waitUntil(
        caches.open(cache_name).then(cache => {return cache.addAll(allcontent);}).catch(err => console.log(err))
    )
})

self.addEventListener('fetch', (e) => {
  e.respondWith((async () => {
    const r = await caches.match(e.request);
    console.log(`[Service Worker] Fetching resource: ${e.request.url}`);
    if (r) { return r; }
    const response = await fetch(e.request);
    const cache = await caches.open(cache_name);
    console.log(`[Service Worker] Caching new resource: ${e.request.url}`);
    cache.put(e.request, response.clone());
    return response;
  })());
});
