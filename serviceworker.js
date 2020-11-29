var staticCacheName = "pwa"; 

self.addEventListener("install", function (e) { 
    e.waitUntil( 
        caches.open(staticCacheName).then(function (cache) { 
        return cache.addAll(["/teaching-web-pwa/index.html"]); 
        }) 
    ); 
}); 

self.addEventListener("fetch", function (event) { 
    console.log(event.request.url); 

    event.respondWith( 
        caches.match(event.request).then(function (response) { 
        return response || fetch(event.request); 
        }) 
    ); 
}); 
