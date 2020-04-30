'use strict';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "index.html": "79b8456f3d2a12ba301c8b75c4193a79",
"/": "79b8456f3d2a12ba301c8b75c4193a79",
"main.dart.js": "d458ce652fccca19bd100113734abdfd",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "00e0b69b49487ce4f9ff0c5fac8fda49",
"assets/LICENSE": "1a96ac39bab8aa3fcc31d3e0acca98c6",
"assets/AssetManifest.json": "b162e53f9dfcf751819c0f717979e8bb",
"assets/FontManifest.json": "580ff1a5d08679ded8fcf5c6848cece7",
"assets/fonts/MaterialIcons-Regular.ttf": "56d3ffdef7a25659eab6a68a3fbfaf16",
"assets/assets/example.md": "9299661cd388859520a54efd05e84abf",
"assets/assets/example.html": "3caa41637fb19c6e56cb2fe25966c8e4"
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
