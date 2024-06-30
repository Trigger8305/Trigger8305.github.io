'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "2c15d3c916a81c2b3ba9678a95caaf8a",
"assets/AssetManifest.bin.json": "ea70733492acaadaf1bbc824d51ef3a5",
"assets/AssetManifest.json": "d9769012089bbce1ddd0c2ce84d5fa2c",
"assets/assets/circuits/albert_park.png": "e2c118072cf192a53d3ede0201e978a3",
"assets/assets/circuits/americas.png": "be270f34df0bbf0bfa53fab254c1f520",
"assets/assets/circuits/bahrain.png": "8002c7e425d7c00668b22fe0dfe1491b",
"assets/assets/circuits/baku.png": "b74886ef87885123370786a23f304328",
"assets/assets/circuits/catalunya.png": "8f149f03b7c5dd997843741e46bcfc5f",
"assets/assets/circuits/hungaroring.png": "e758f10bc87e1c333c34229722c2be69",
"assets/assets/circuits/imola.png": "5cf71a8b07483e56629282d91808cfda",
"assets/assets/circuits/interlagos.png": "08253a2f5198b3a604ebd237a3e5c24d",
"assets/assets/circuits/jeddah.png": "4aa696c41a47a967cc6734880043474a",
"assets/assets/circuits/losail.png": "2ace069af9e15bcad93c36737344a1c1",
"assets/assets/circuits/marina_bay.png": "d5fefe789ce97845a0e62ad916e6c6e0",
"assets/assets/circuits/miami.png": "b1da0a2244737ca6138afa3d9a1f3582",
"assets/assets/circuits/monaco.png": "1b7fd17b3407a5ece410354ff477c580",
"assets/assets/circuits/monza.png": "47f19879b239cb7e8359d912f4176dc4",
"assets/assets/circuits/red_bull_ring.png": "f74816c64f830ec19564fd49342f78e9",
"assets/assets/circuits/rodriguez.png": "8424a1a7aa379b06c96906553bfee75c",
"assets/assets/circuits/shanghai.png": "f9fa791dc24ec466d17116537059d476",
"assets/assets/circuits/silverstone.png": "bea13d5f49b756cff7ff72df93cd9ff7",
"assets/assets/circuits/spa.png": "c3b44f6d5fbaab6cd1bed99107e17a50",
"assets/assets/circuits/suzuka.png": "883331ce87c48eb6f061e5559af07d01",
"assets/assets/circuits/vegas.png": "52269b8e1c5ba7e5c28af5cadb08ac41",
"assets/assets/circuits/villeneuve.png": "9d9c028a97d6b4b7315b0fc2a68bac64",
"assets/assets/circuits/yas_marina.png": "e8da73b098033cc100b41f498c78d4c4",
"assets/assets/circuits/zandvoort.png": "d1bb0d34c549100bce190b83de82cfb7",
"assets/assets/constructors/alpine.png": "9974ac49de5fd42eb576d092f35a1c8f",
"assets/assets/constructors/alpine_car.png": "1847156627aaa94d23d7c5058582913a",
"assets/assets/constructors/aston_martin.png": "54b19972a98eea922dc7bc238b901b41",
"assets/assets/constructors/aston_martin_car.png": "40d2c2b813e649d6f0ad9f7b0290ac5a",
"assets/assets/constructors/ferrari.png": "dbb68272305b1ace17735170e40c9735",
"assets/assets/constructors/ferrari_car.png": "04742e4d7b874c50590dd4500a535c74",
"assets/assets/constructors/haas.png": "9843f2a2b43742fd82895330b4e09652",
"assets/assets/constructors/haas_car.png": "1155ea1a54f6f9d8bfdbac8ae0dc98f2",
"assets/assets/constructors/mclaren.png": "1c771748888b5fbde3c593cda384441d",
"assets/assets/constructors/mclaren_car.png": "2db3f43e9cf115dbce654db7e2a99558",
"assets/assets/constructors/mercedes.png": "0bb7c318f100b56e80c0a613f9e2006c",
"assets/assets/constructors/mercedes_car.png": "4b7160d197a90df2768fa55b2e1c2946",
"assets/assets/constructors/rb.png": "c48aac0acd8ff19594c76eac337a6d50",
"assets/assets/constructors/rb_car.png": "03ed2cdd1a9db41743abced72064ea25",
"assets/assets/constructors/red_bull.png": "fc3c4a5176c060c394f3ade76c6fd5ac",
"assets/assets/constructors/red_bull_car.png": "98a7fd972e66ce96df313e19c05a43f4",
"assets/assets/constructors/sauber.png": "412eb90f308daf66a16dfd99955b304c",
"assets/assets/constructors/sauber_car.png": "9d4c48842fd5c76769a6b197f8ab5fc8",
"assets/assets/constructors/williams.png": "fa6c55e4849ca17db3f8ac69882cc51e",
"assets/assets/constructors/williams_car.png": "ed00139721dcf52f5d157f6c743ad29c",
"assets/assets/drivers/albon.png": "aa0481483f680951c0019d6dd2604bf7",
"assets/assets/drivers/alonso.png": "9c025d3758f0deff4d660dd496e9ae5e",
"assets/assets/drivers/bearman.png": "35a851616a540de15db7fe1d54a6bf8b",
"assets/assets/drivers/bottas.png": "4fe20608e61007e27a33d471d508c5bd",
"assets/assets/drivers/gasly.png": "519389a83dd2ab60e4cfe22f41515d72",
"assets/assets/drivers/hamilton.png": "9e32da125cda4cb44ce7be1c5fc8e743",
"assets/assets/drivers/hulkenberg.png": "cace1c97e89c3ac1080ef7fe1b1434d6",
"assets/assets/drivers/kevin_magnussen.png": "565dfd7434254f082823da6464b51378",
"assets/assets/drivers/leclerc.png": "6d819218c79571bbbd109b08edfc87cb",
"assets/assets/drivers/max_verstappen.png": "18fb781337092967698438836540cbf8",
"assets/assets/drivers/norris.png": "4c22350988dd4c4c2e1aa45ef19d9190",
"assets/assets/drivers/ocon.png": "5a0cf7852306fc33941b4916b607e55d",
"assets/assets/drivers/perez.png": "efdb22cb531e0a58f93cc5445f7d5b2d",
"assets/assets/drivers/piastri.png": "c7d8e75831bf4700e8fed7e8104d9a85",
"assets/assets/drivers/ricciardo.png": "0d7007f13cd0a07a02a44ed1d5f18f11",
"assets/assets/drivers/russell.png": "c0e7a8451509bb1a3a006ab12c04b193",
"assets/assets/drivers/sainz.png": "69928f853cc16fb34deb3e97025ec964",
"assets/assets/drivers/sargeant.png": "fcb627330fd77810c3174890c3f47d44",
"assets/assets/drivers/stroll.png": "0774b1294f58f70d0b76b819a9d8d64a",
"assets/assets/drivers/tsunoda.png": "6a6f5941db43c725609902b64375081e",
"assets/assets/drivers/zhou.png": "58b0b5c224226e0eb594da0f05c804fe",
"assets/assets/f1.png": "8ac3c10440e5f3be6ae4747663cf34cd",
"assets/assets/flags/australia.png": "7755cd178638279c60ac0299a205656a",
"assets/assets/flags/austria.png": "5c518bd596fc5cd80dc068442da923ce",
"assets/assets/flags/azerbaijan.png": "1f57742e9cda116c74ae611f909431f6",
"assets/assets/flags/bahrain.png": "252d2f57357902c9b1939340cce2c4ba",
"assets/assets/flags/belgium.png": "022afe59b54c15f2a9e8c2fbfbab83c2",
"assets/assets/flags/brazil.png": "209b31e670a6490e0ab39c4c56bc2daf",
"assets/assets/flags/canada.png": "cad75a9a99ec3fece00f2fc07dfc18d3",
"assets/assets/flags/china.png": "deeead0a4a00f61bce4914c0555de4a4",
"assets/assets/flags/hungary.png": "19a4b9b5e25347dfb5d8de3948d71f99",
"assets/assets/flags/italy.png": "024f2bd851b51ce57dd65d199d4a0e35",
"assets/assets/flags/japan.png": "f288ab5e9a6afb65218df45da66560dd",
"assets/assets/flags/mexico.png": "5f02fc827185915d2ad1b80d2cd64bd4",
"assets/assets/flags/monaco.png": "689562ef5193a8ff52be67617f994351",
"assets/assets/flags/netherlands.png": "7f60924d5ade5219739b62bf4f8c6297",
"assets/assets/flags/saudi%2520arabia.png": "4dc05d4d9317682a8404840d21512220",
"assets/assets/flags/singapore.png": "6579061221f2c229fde1a882f88b2a70",
"assets/assets/flags/spain.png": "ba8a4cf14273a6c4b9e6a0637fdfd2fa",
"assets/assets/flags/uae.png": "564e038aa1b482af2214079cebaeede7",
"assets/assets/flags/uk.png": "33bb1d26ee7f1d0d91c29eb7d3028ba5",
"assets/assets/flags/usa.png": "fcd44de95f2536dcb25ff5984b2aebee",
"assets/assets/slider/a524.jpg": "13cc0ec6edb693d0911121f4690ea3b5",
"assets/assets/slider/amr24.jpg": "7a547062e2dc500fb578197827f26f95",
"assets/assets/slider/c44.jpg": "d8e047fece3025f653a89f1284b45247",
"assets/assets/slider/fw46.jpg": "ebdce2ebc4a32dcbce3836b8260af6c1",
"assets/assets/slider/mcl38.jpg": "02b318bf1e857328d29b86112c533975",
"assets/assets/slider/rb01.jpg": "ed7c09d62e56df05a53bd010ff2d60df",
"assets/assets/slider/rb20.jpg": "047c78bcfec7f50a7863b8c76172d659",
"assets/assets/slider/sf24.jpg": "717b5613fc31fd84b72021d0dea487cf",
"assets/assets/slider/vf22.jpg": "d615a42a254c5ab05d6ae2ae71f39eaa",
"assets/assets/slider/w15.jpg": "6359bc07e81867b3a69de5a98f6b81c8",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "f67bd78585495404889a89cc33b24230",
"assets/NOTICES": "2c0b82681645f09ffd27004dce4f4ce8",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "c86fbd9e7b17accae76e5ad116583dc4",
"canvaskit/canvaskit.js.symbols": "38cba9233b92472a36ff011dc21c2c9f",
"canvaskit/canvaskit.wasm": "3d2a2d663e8c5111ac61a46367f751ac",
"canvaskit/chromium/canvaskit.js": "43787ac5098c648979c27c13c6f804c3",
"canvaskit/chromium/canvaskit.js.symbols": "4525682ef039faeb11f24f37436dca06",
"canvaskit/chromium/canvaskit.wasm": "f5934e694f12929ed56a671617acd254",
"canvaskit/skwasm.js": "445e9e400085faead4493be2224d95aa",
"canvaskit/skwasm.js.symbols": "741d50ffba71f89345996b0aa8426af8",
"canvaskit/skwasm.wasm": "e42815763c5d05bba43f9d0337fa7d84",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon.png": "0e67c89d409c5cb1e3ac62d967477843",
"flutter.js": "c71a09214cb6f5f8996a531350400a9a",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "a0e531cd2b1c8df1819ef217948092a6",
"/": "a0e531cd2b1c8df1819ef217948092a6",
"main.dart.js": "664b2693823cb07b1c0c633ff949a0ad",
"manifest.json": "849fd8e199a7c48644994faf15dd5bae",
"version.json": "6ff595361494e1b9df145223ef21cfdc"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
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
