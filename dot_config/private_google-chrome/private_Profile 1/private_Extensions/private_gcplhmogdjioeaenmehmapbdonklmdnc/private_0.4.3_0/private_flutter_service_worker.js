'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "canvaskit/canvaskit.js": "c2b4e5f3d7a3d82aed024e7249a78487",
"canvaskit/profiling/canvaskit.js": "ae2949af4efc61d28a4a80fffa1db900",
"canvaskit/profiling/canvaskit.wasm": "95e736ab31147d1b2c7b25f11d4c32cd",
"canvaskit/canvaskit.wasm": "4b83d89d9fecbea8ca46f2f760c5a9ba",
"web-ext.html": "6c7a1ef6e020f0989d2f7abf4b7f8f50",
"main.dart.js": "8cb81a027d96d644abf3fcc70238e365",
"assets/AssetManifest.json": "1142beb922fe3c70e6718d8c4c605bd9",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/flutter_neumorphic/fonts/NeumorphicIcons.ttf": "32be0c4c86773ba5c9f7791e69964585",
"assets/FontManifest.json": "9e0649c90f16a7be3d51ab27d6089604",
"assets/NOTICES": "5a19c4eaf02979d3f31d22d7d9467d7b",
"extension/background2.js": "8f48d5ab7731cacfd25ccbc5ad14400b",
"extension/background3.js": "ad09a0fb8baa0c1f30e445216073e54a",
"flutter.js": "0816e65a103ba8ba51b174eeeeb2cb67",
"popup.html": "1e5631d5ecb0c2ff80e3bfd8dc508766",
"index.html": "ddc4fdf21d310cc61d767ff8ec738591",
"/": "ddc4fdf21d310cc61d767ff8ec738591",
"shortcuts.js": "fe0ec497c3304d6481f21256272ece00",
"manifest2.json": "e1494178e6507f34697b083adb516e8b",
"version.json": "42182713ffebda0f216ba3d2bd4cf1e3",
"firebasejs/8.10.1/firebase-storage.js": "282c4eab00c43aeeb3c401a6fe800c62",
"firebasejs/8.10.1/firebase-auth.js": "a90df888ad375bbc58302be468d6162f",
"firebasejs/8.10.1/firebase-app.js": "f61459b893c6422d6e8e96e8aa5fbdcd",
"firebasejs/8.10.1/firebase-analytics.js": "88ce46cc6a44a6c7143d566c35332e60",
"firebasejs/8.10.1/firebase-firestore.js": "3372ecee6aeeaf034105754a3de1fc53",
"firebasejs/8.10.1/firebase-functions.js": "1e838ff38ff2e217fb38f3c04b3d6939",
"firebasejs/8.10.1/firebase-remote-config.js": "108412102e5b814e2343640544dffa4c",
"firebasejs/8.10.1/gtag.js": "c92bd5e41c6894b96537d6c2d5e8ad43",
"manifest3.json": "1894c697899a254cc1b67a8dad4bceaf",
"manifest.json": "eebf4d5a3d0711130a6d835e4ab70688",
"icons/64.png": "121c48de265ee55f247c71fe65415c0b",
"icons/172.png": "5b70aff9a49f9ba2e468f792a058fbff",
"icons/180.png": "57de6bc0a8b8c980203fc19df124a859",
"icons/120.png": "c7dafae068d15a722f0e4c21c9569b7f",
"icons/57.png": "82cad0ac5f3d74bd702c0dc27a2cfe73",
"icons/256.png": "bb3905da29f0aa626ffb53d742853efc",
"icons/144.png": "bc8f0feac0cf08a65220aabce875a245",
"icons/80.png": "3e03388c2318aa1fc13ab8975b9a45a1",
"icons/50.png": "0fc352d60479b199d0b043a80952103a",
"icons/87.png": "357a23ecb35bef318f7478051dc7d9cc",
"icons/58.png": "771d9e08437824717f9b5da9d59e8350",
"icons/1024.png": "ef16fa06f7ce4c653caeee445ec3315a",
"icons/60.png": "1a4a2f76d5134751a5a2d3cdae957bed",
"icons/128.png": "e1bb4a0d9645a8f6717d747782f9fac9",
"icons/55.png": "3621412dc193d71adc2842fe87828c09",
"icons/88.png": "041aaffbc509ddf729e7a0b6775d1009",
"icons/196.png": "07b684bbfd9100cbadc22dd31c39aac9",
"icons/100.png": "2419604a02c8f2bf42d849baf09abb12",
"icons/40.png": "9b8258929a8c32934360f22cdc87a129",
"icons/48.png": "7fd06c6f78453f138ec16573259f141d",
"icons/76.png": "c157e9d4f0d9bf44ce62c619bc5d3587",
"icons/114.png": "961c2cd4a3939c22d52a7ee760385ccc",
"icons/16.png": "47916c1b67534db5d211f99392d7f285",
"icons/512.png": "a3e60c7f2ad500a1da9128049915d136",
"icons/32.png": "3fe8f0ac60b05d5190cf8f9284134548",
"icons/216.png": "4b63082c99ae0018efaec68b5dbd5cd8",
"icons/20.png": "002231c1feab48545b92822668c55499",
"icons/29.png": "77ead728f8d1fa711855b1b00a8adae2",
"icons/152.png": "a8e3b141de400142e92552cef55249a7",
"icons/72.png": "4e678097e9f7886b8cb5e430f777db2c",
"icons/167.png": "ed4faa661e992bed2d499f8757c9efed"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
