'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "4298e5f287fc2ee732422ab647c80edf",
".git/config": "d9aa266fd3eb892e29ee44b21d6cd7b3",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "d41d8cd98f00b204e9800998ecf8427e",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "9d6b7b4f255f095cb0f01432418ce3a3",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "45a3179ffb6a7a99098efabfd9c60ea5",
".git/logs/refs/heads/main": "63c4f34d46dd9df121b3cc5485d5d343",
".git/objects/03/eaddffb9c0e55fb7b5f9b378d9134d8d75dd37": "87850ce0a3dd72f458581004b58ac0d6",
".git/objects/04/e5efc15dc0c60ea2ffcc37c5bf25e96689f44d": "978222f47488835b92838c74cb5c684c",
".git/objects/0a/2ad3a8946718e5da80b8b36f3a970f9203bb41": "493becadfb3c0f3d60727bde4e9f1614",
".git/objects/0d/bff57e869eb34067505f3a1ace21b51a8de716": "6da5316ce6c828397d5295cdeb647798",
".git/objects/0f/3e7fac580c8eebc85e64f464b0dd5cc6384da4": "d92b7c61f3063494482f17d1a0e6ac79",
".git/objects/1b/1e826281b73889436d98f07e87eebb5a692d78": "39e04a089b8c3c665dc1de3bf7eae8cd",
".git/objects/1b/427b43a7c8332ce0485804199257b1cabe6029": "61b378758c4538032423874042689d9e",
".git/objects/1d/3713ad70eaa2f018988e49ffc2b8d9c2a5f06c": "e7c7b2b65a352f17d57fbe9dfdfccd46",
".git/objects/20/1afe538261bd7f9a38bed0524669398070d046": "82a4d6c731c1d8cdc48bce3ab3c11172",
".git/objects/2a/cbfb09430275985449296aec5b2e08dc06958c": "f79019e0a0a8c4004e7351679f8b5433",
".git/objects/2b/f2ad34e8e42f97d5a53bab3a6069d978adfd54": "98600d945583b98adc81bcf882127556",
".git/objects/39/0d080c923df14d04f223ba026a1424f8205697": "2fecd98345f3842f83d3c6778f3ec7e6",
".git/objects/3d/245a78e40b6013ddbeb7c3cab3055b51ddd9ea": "f273b736ba4ca930c96d21cf696dd265",
".git/objects/3f/595fcc13a68600f2546c2e00d37088a0b6f80d": "c73538f1e4cdb792f8f14eb579fa6655",
".git/objects/43/e946e398d96aee466fa0aabb625f0889c3a4bd": "ac34520dee747f675e6e0a15c0bbd2be",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/48/33fcf9ba677d3df448c90e63368e50f8bfc8d6": "a5b926fccf641f8e2a09e52478c0d37a",
".git/objects/4b/5d0c3f1e2d29c10a4f8ce6146700c670a60ac3": "3c9da4eec83bc69ebd90b746f62212eb",
".git/objects/4b/64fed47dfd1bdf12e77415c1f3423a7eb18a92": "667cda6f5c9b6690b4b5892466d4c213",
".git/objects/4b/825dc642cb6eb9a060e54bf8d69288fbee4904": "75589287973d2772c2fc69d664e10822",
".git/objects/4f/d0e51f345ee398d4c56c9a2a36514cfdc54f3e": "d8e976b7b97437231f01681fc40815a3",
".git/objects/53/6b2280237adc0170b81705b03b28422b40167f": "e71f821b81c27c51ec38abdeba8877bb",
".git/objects/53/7807567919e88db2866b7825339c57e94c24d8": "970aec5149a3dbe9370a9dc982cdd022",
".git/objects/55/c40beddb5d8dcced283ec24354a05c6f5c5fe3": "9d1db305e65694d1030cf5a7b595b653",
".git/objects/5c/1a4a23305fa45bfdc27a6059852d0e4272b4af": "3c2effffff5053e09569eb60cfaba20f",
".git/objects/5f/fe31ac9d9da3a911172a010bd8d6a6d16a907e": "e844776d2498c9e24f93b2e79d715332",
".git/objects/69/dd618354fa4dade8a26e0fd18f5e87dd079236": "8cc17911af57a5f6dc0b9ee255bb1a93",
".git/objects/6b/cbc90b96ffe20321a0f13ea7bd3f9cc91622a8": "ce2b58da22d18d1c5c8a2636636cf308",
".git/objects/7f/384892a16b3a496546564412830b54da72a45b": "f499c1898976b3e119c1c11b25851cb8",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8f/e7af5a3e840b75b70e59c3ffda1b58e84a5a1c": "e3695ae5742d7e56a9c696f82745288d",
".git/objects/92/cbbba3b50f5ced04617f7473637d4dac3bfd03": "5c2a8654df0c51c811944611b293450c",
".git/objects/96/12a447efbf283cc641489904ef78631ed59383": "8db917276ff784d746dd4859f53f51be",
".git/objects/96/f46c12853a8b64f97b2f3d8f4e8ae8485e007c": "638cd33aa2bffc09ffac1441d4ef4dc0",
".git/objects/a1/0c022499a5dc537a40a1fa7439fc53e886d5b7": "0627cca58844b14ac5b91b64cf8287e4",
".git/objects/a5/d0c25fdd92e345b5356935d1504fb9c74bb903": "58d513c4fb666b85bc5680350eabe8e0",
".git/objects/b0/7e117acfbcbfc4f9dc00d231d53310ab1979b1": "2ae8c0898cba82463b203bcc4e76a767",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/ba/21374772e8f93b126a43d0ab8ae623515c65fa": "ece6d913b45884156357ec0a8fde31bd",
".git/objects/ba/8cb00dd5231f1a55de0205c16445926a696526": "be8592f9341c9b01b70890c8614c6cf7",
".git/objects/bb/3085876799532613a08c7ebe43f24f0cc46864": "1b6aa21800d948d5513c15e54d131215",
".git/objects/bb/7c651fde0cd3a4b4d6c7d6e6171dec65150ef9": "b49fd364a66fae6f9058b78437e5cf99",
".git/objects/bc/51e3ddd7b32f1399e908a957da4e5af1ef6d5b": "e9976db8e886e8fd2da3038797a5d6bb",
".git/objects/c2/836307bfefd89365a5e6270672ed0754d2904d": "042092c8989291bffe3cd0e789adabbe",
".git/objects/cd/68ec86479c5853455c94b65b2a3a26ae0c63c3": "ee9287d7943ac6aee9439581eed47fb1",
".git/objects/d1/2cffb2c8925ba74a3b3dc34430776eecd23275": "26b97a82e90833e32fe204e69283ebdc",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d7/2c11112c7cb4e2ce754bc41470f9b829a2d00a": "d7280a766a5d6033f187d874a92b5ad6",
".git/objects/da/c854d94203a54f6b463b5efc09df28b0611bf2": "060d33c93dee68fa7151f6fba8e53459",
".git/objects/da/ce5db012ed4ce957bd6077985bf0fb20c89672": "a028f8b197c1824c0cdd53a7406fe491",
".git/objects/df/7d2dcb89ab89da87467c0e1059b38c8d8f9296": "a44162ff357b024e4638ab18a9bb01c7",
".git/objects/e6/b745f90f2a4d1ee873fc396496c110db8ff0f3": "2933b2b2ca80c66b96cf80cd73d4cd16",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ef/cc103e22fe3b21a330637883c87612c1d3b35f": "cc8ec22038fca219e321c0b55997a0f9",
".git/objects/f0/dad2b6f02a72c225a1d60ce2fdc39c938e4564": "4da10cca7845a69a3efb27a6232cacb2",
".git/objects/f4/33b873d1662595b31a069237cc7d95443402c1": "a405abb9069bbaeb17384740f8c30977",
".git/objects/f6/a6026006712057d49b7323198fd8ef0357f578": "8f709408b3bcc506dec08bf0d9612e7a",
".git/objects/fa/114b3deb1ee0be56a40e5c301795a37d306bc4": "46d75b4f79e00287ff1fb093450c4ef6",
".git/refs/heads/main": "9304c293bc92181a02ce5d403f700157",
"assets/AssetManifest.bin": "975bac783eaa63cd4e36dca71c9942dd",
"assets/AssetManifest.bin.json": "d26e467c80abd186f75bf33f0d971b13",
"assets/AssetManifest.json": "c649ba27193b431044431beb08eb3658",
"assets/assets/autom.jpg": "47e4b94229ea046521b55bc2a11a6dd9",
"assets/assets/autom.png": "2b8eb0a86670a73d5f1e698a5ee46c4f",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "a0f1dd50c89cfab70daa9f5c316c30a8",
"assets/NOTICES": "c3cc332e29fdb5a1673e6126bced0f5d",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/shaders/ink_sparkle.frag": "4096b5150bac93c41cbc9b45276bd90f",
"canvaskit/canvaskit.js": "eb8797020acdbdf96a12fb0405582c1b",
"canvaskit/canvaskit.wasm": "64edb91684bdb3b879812ba2e48dd487",
"canvaskit/chromium/canvaskit.js": "0ae8bbcc58155679458a0f7a00f66873",
"canvaskit/chromium/canvaskit.wasm": "f87e541501c96012c252942b6b75d1ea",
"canvaskit/skwasm.js": "87063acf45c5e1ab9565dcf06b0c18b8",
"canvaskit/skwasm.wasm": "4124c42a73efa7eb886d3400a1ed7a06",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "59a12ab9d00ae8f8096fffc417b6e84f",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "6b76d55cb2b8cc69ab66e04e0f238f55",
"/": "6b76d55cb2b8cc69ab66e04e0f238f55",
"main.dart.js": "76287033cc09c7cecdeba69569600e02",
"manifest.json": "c9c6e178b1a37f4ddb356807fa7235ed",
"README.md": "1394785a979f9250af312d558655412d",
"version.json": "a3322b2f035e5345663b567001345585"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
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
