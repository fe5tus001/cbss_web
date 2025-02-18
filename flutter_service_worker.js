'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "eaeec8dbd22bb64e559133eaaf1645e2",
"assets/AssetManifest.bin.json": "56d93c03c43e89ea563ea3b6c9b932e0",
"assets/AssetManifest.json": "3634d66b5d495acee4ac1b7670ce6ae8",
"assets/assets/fonts/AvenirLTStd-Black.otf": "b1abb878e2529cb5cb4450139844155d",
"assets/assets/fonts/AvenirLTStd-BlackOblique.otf": "8b0a1a58eec57de6031bd107c50808ff",
"assets/assets/fonts/AvenirLTStd-Book.otf": "ecb0c2ae369ba2a89d9a1ec2a1b3187b",
"assets/assets/fonts/AvenirLTStd-BookOblique.otf": "072f9bf739a80a1ca47547031936ad15",
"assets/assets/fonts/AvenirLTStd-Heavy.otf": "a7edaaca7240679d0cda0cce2c2e896e",
"assets/assets/fonts/AvenirLTStd-HeavyOblique.otf": "8a5b7a5f05164dfc562a9d2bd0ec23f4",
"assets/assets/fonts/AvenirLTStd-Light.otf": "0b78ec9d509f67bfe3f8458c9d285df0",
"assets/assets/fonts/AvenirLTStd-LightOblique.otf": "e0c6b9dd07665dcd7d9dfd121608bf5c",
"assets/assets/fonts/AvenirLTStd-Medium.otf": "4f995fa49446998983e05df9994dc96c",
"assets/assets/fonts/AvenirLTStd-MediumOblique.otf": "7e4d6a7f83ff54a6f33ac51c12ff527a",
"assets/assets/fonts/AvenirLTStd-Oblique.otf": "8bdd65fe4e31e9a5abef42e1a85d1640",
"assets/assets/fonts/AvenirLTStd-Roman.otf": "b1d7c6e085a31e9f5e4745c9aef6eb4b",
"assets/assets/fonts/Brandon_Grotesque_black.otf": "f5394bdf7a563a2f794b227873a183c9",
"assets/assets/fonts/Brandon_Grotesque_black_italic.otf": "eff1ae4ea573befa35e0e1112b90e21c",
"assets/assets/fonts/Brandon_Grotesque_bold.otf": "bc46786f8f3d0ec8c386b979321ce8c3",
"assets/assets/fonts/Brandon_Grotesque_bold_italic.otf": "6242843da4083d072d387e0e7f63077d",
"assets/assets/fonts/Brandon_Grotesque_light.otf": "0aa494d044d9ce23c5d1d2bffd30e556",
"assets/assets/fonts/Brandon_Grotesque_light_italic.otf": "63bc198780aa30c9ba152dcf65b35958",
"assets/assets/fonts/Brandon_Grotesque_medium-Bold.otf": "647415a51891489519b434e3e0626f72",
"assets/assets/fonts/Brandon_Grotesque_medium_italic.otf": "f449d4a583143e5da10fe5368b6836c5",
"assets/assets/fonts/Brandon_Grotesque_regular.otf": "1381af6d5dad856426cd0db0aa61b52b",
"assets/assets/fonts/Brandon_Grotesque_regular_italic.otf": "52ca7de385558c37610c80d04707e77d",
"assets/assets/fonts/Brandon_Grotesque_thin.otf": "7c2bc3c9d19bb6e5e151ef79a32116b0",
"assets/assets/fonts/Brandon_Grotesque_thin_italic.otf": "fad5eb48a2259f4c610c07fac6fab956",
"assets/assets/fonts/Lulo-Clean.otf": "0f9e4e6d3dc62159d00b3ae021aefcae",
"assets/assets/images/atm_1.jpg": "1c0f618f68e6a8b5a302e173fcb7baa4",
"assets/assets/images/contact_us.jpg": "d746d19a706fe04c75af93c4874ccf7d",
"assets/assets/images/hero_background.jpg": "3b3c5f1a377046111b100dbec8095aa8",
"assets/assets/images/kwacha.jpg": "68dcb1c24b8be567ccc6691f767c0022",
"assets/assets/images/kwacha_2.jpg": "abd34d8c70b7feb1a41db5282fad4c6f",
"assets/assets/images/pos_1.jpg": "56fb75b9bb1c4a1825b891ac1f2d5c23",
"assets/assets/images/pos_2.jpg": "a07bece2afad3871a5c7bcf3f351ddd5",
"assets/assets/images/splash-3.jpg": "6a8f3d9cd4f706da8eeac9e4afa271ed",
"assets/assets/images/splash_1.jpg": "3ea8df382632909dea5f59631e3d0540",
"assets/assets/logo.png": "8915d3d9f0d4dabf58c261b020b919fa",
"assets/FontManifest.json": "bb41c1b5d653ec2081012b91e5a9bbc5",
"assets/fonts/MaterialIcons-Regular.otf": "0db35ae7a415370b89e807027510caf0",
"assets/NOTICES": "e02b50d5cca1b6b3e55c26d523d763ce",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "2ed18f96e83c557b5d9335cc76809d16",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "3ca5dc7621921b901d513cc1ce23788c",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "a2eb084b706ab40c90610942d98886ec",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "26eef3024dbc64886b7f48e1b6fb05cf",
"canvaskit/canvaskit.js.symbols": "efc2cd87d1ff6c586b7d4c7083063a40",
"canvaskit/canvaskit.wasm": "e7602c687313cfac5f495c5eac2fb324",
"canvaskit/chromium/canvaskit.js": "b7ba6d908089f706772b2007c37e6da4",
"canvaskit/chromium/canvaskit.js.symbols": "e115ddcfad5f5b98a90e389433606502",
"canvaskit/chromium/canvaskit.wasm": "ea5ab288728f7200f398f60089048b48",
"canvaskit/skwasm.js": "ac0f73826b925320a1e9b0d3fd7da61c",
"canvaskit/skwasm.js.symbols": "96263e00e3c9bd9cd878ead867c04f3c",
"canvaskit/skwasm.wasm": "828c26a0b1cc8eb1adacbdd0c5e8bcfa",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c",
"favicon.png": "7d624bbaf184ded2de42f1726d05c8aa",
"flutter.js": "4b2350e14c6650ba82871f60906437ea",
"flutter_bootstrap.js": "8aa4bf83c0d19d3ad3182c02006319ef",
"icons/Icon-192.png": "ed965fb1ba683340861f2878359f9642",
"icons/Icon-512.png": "1508ccc337b86d5c08e4cb575964f07d",
"icons/Icon-maskable-192.png": "ed965fb1ba683340861f2878359f9642",
"icons/Icon-maskable-512.png": "1508ccc337b86d5c08e4cb575964f07d",
"index.html": "fd264403206d820fb8e0947219cac0dc",
"/": "fd264403206d820fb8e0947219cac0dc",
"main.dart.js": "fbd1e425cba2ab28c6cf6f12880f8b0c",
"manifest.json": "7d5acf59bf691bd9addb000f7f873ee2",
"version.json": "75fa34cb530ca58d7ae110fafb0cbbd5"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
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
        // Claim client to enable caching on first launch
        self.clients.claim();
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
      // Claim client to enable caching on first launch
      self.clients.claim();
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
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
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
