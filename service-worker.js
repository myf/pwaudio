// Listen for install event, set callback
self.addEventListener('install', function(event) {
    // Perform some task
    event.waitUntil(
        caches.open('service-worker-cache').then((cache) => {
            console.log('caching index.html');
            return cache.add('/')
        }
        ));
});

self.addEventListener('fetch', function(event) {
    event.respondWith(
        caches.match(event.request).then((res) => {
            console.log('fetch or return');
            if (res)  return res;  
            return fetch(event.request);
        }
        ));
});

self.addEventListener('activate', function(event) {
    // Perform some task
});
