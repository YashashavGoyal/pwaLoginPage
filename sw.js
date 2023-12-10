// INSTALL
self.addEventListener(`install`, e => {
    // console.log("install");
    e.waitUntil(
        caches.open("static").then(cache =>{
            return cache.addAll(["./", "./css/style.css","./images/", "./js/"]);
        })
    );
});

// FETCH
self.addEventListener(`fetch`, e => {
    // console.log(`Intercepting Fetch Request For : ${e.request.url}`);
    e.respondWith(
        caches.match(e.request).then(response => {
                return response || fetch(e.request);
        })
    );
});