const CACHE_NAME = "barkod-app-v1";
const ASSETS_TO_CACHE = [
    "./",
    "./index.html",
    "./manifest.json",
    "https://unpkg.com/html5-qrcode" // Barkod kütüphanesini de hafızaya alıyoruz
];

// Kurulum: Dosyaları önbelleğe al
self.addEventListener("install", (e) => {
    e.waitUntil(
        caches.open(CACHE_NAME).then((cache) => {
            return cache.addAll(ASSETS_TO_CACHE);
        })
    );
});

// İstekleri Yakala: İnternet yoksa önbellekten ver
self.addEventListener("fetch", (e) => {
    e.respondWith(
        caches.match(e.request).then((response) => {
            return response || fetch(e.request);
        })
    );
});