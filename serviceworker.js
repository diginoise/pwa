var staticCacheName = "pwa"; 

self.addEventListener("install", function (e) { 
    e.waitUntil( 
        caches.open(staticCacheName).then(function (cache) { 
            return cache.addAll([
                "/index.html",
                "/images/spacex1.jpg",
                "/images/spacex2.jpg",
                "/images/icon-128.png",
                "/images/icon-512.png",
                "/style.css"
            ]); 
        }) 
    ); 
}); 

self.addEventListener('fetch', function(event) {
    event.respondWith(
      caches.open(staticCacheName).then(function(cache) {
        return cache.match(event.request).then(function (response) {
          return response || fetch(event.request).then(function(response) {
            cache.put(event.request, response.clone());
            return response;
          });
        });
      })
    );
  });
