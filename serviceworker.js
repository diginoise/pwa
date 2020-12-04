const staticCacheName = "pwa"; 

self.addEventListener("install", function (e) { 
  e.waitUntil( 
    caches.open(staticCacheName).then(function (cache) { 
      return cache.addAll([
          "/teaching-web-pwa/index.html",
          "/teaching-web-pwa/images/spacex1.jpg",
          "/teaching-web-pwa/images/spacex2.jpg",
          "/teaching-web-pwa/images/icon-128.png",
          "/teaching-web-pwa/images/icon-512.png",
          "/teaching-web-pwa/style.css"
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
