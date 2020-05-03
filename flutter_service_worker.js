'use strict';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "index.html": "79b8456f3d2a12ba301c8b75c4193a79",
"/": "79b8456f3d2a12ba301c8b75c4193a79",
"main.dart.js": "0fd74a175f282010000048165d1622da",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "00e0b69b49487ce4f9ff0c5fac8fda49",
"assets/LICENSE": "7df06b64a152918affaadf5d0881fb11",
"assets/AssetManifest.json": "0753595979a6e87f6d9bcaf540f63c43",
"assets/FontManifest.json": "580ff1a5d08679ded8fcf5c6848cece7",
"assets/fonts/MaterialIcons-Regular.ttf": "56d3ffdef7a25659eab6a68a3fbfaf16",
"assets/assets/example.md": "9299661cd388859520a54efd05e84abf",
"assets/assets/open-sans.ttf": "d7d5d4588a9f50c99264bc12e4892a7c",
"assets/assets/roboto1.ttf": "96e5fbad8c2f5b81165ede8b2f08a14b",
"assets/assets/example.html": "3caa41637fb19c6e56cb2fe25966c8e4",
"assets/assets/roboto3.ttf": "cd9fe6b2852b98381b3d205aa45d42e2",
"assets/assets/roboto2.ttf": "74bc6165dc68714ccaa88f5c64656b1c",
"assets/assets/logo.png": "f940a178abe014c703d29ff9b10b8796",
"assets/assets/profile.jpg": "1e4cf308782c44346db361e95c003a6c",
"assets/assets/open-sans-bold.ttf": "f5331cb6372b6c0d8baf2dd7e200498c"
};

self.addEventListener('activate', function (event) {
  event.waitUntil(
    caches.keys().then(function (cacheName) {
      return caches.delete(cacheName);
    }).then(function (_) {
      return caches.open(CACHE_NAME);
    }).then(function (cache) {
      return cache.addAll(Object.keys(RESOURCES));
    })
  );
});

self.addEventListener('fetch', function (event) {
  event.respondWith(
    caches.match(event.request)
      .then(function (response) {
        if (response) {
          return response;
        }
        return fetch(event.request);
      })
  );
});
