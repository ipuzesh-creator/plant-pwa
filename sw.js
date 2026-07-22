const CACHE_NAME = 'plant-app-v1';
const ASSETS = [
  './',
  './index.html',
  './manifest.json',
  './images/icon.png',
  './images/icon-512.png',
  './images/monstera.jpg',
  './images/sansevieria.jpg',
  './images/pothos.jpg',
  './images/monstera-deliciosa.jpg',
  './images/zz-plant.jpg',
  './images/fiddle-leaf.jpg'
];

self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(ASSETS))
  );
});

self.addEventListener('fetch', (e) => {
  e.respondWith(
    caches.match(e.request).then((res) => res || fetch(e.request))
  );
});