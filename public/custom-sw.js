importScripts("https://cdn.jsdelivr.net/npm/pouchdb@7.0.0/dist/pouchdb.min.js");

const CACHE_STATIC_NAME = "static-v1";
const CACHE_DYNAMIC_NAME = "dynamic-v1";

self.addEventListener("install", (e) => {
  const cacheProm = caches.open(CACHE_STATIC_NAME).then((cache) => {
    return cache.addAll([
      "/index.html",
      "/manifest.json",
      "/static/css/2.15a7a700.chunk.css",
      "/static/css/main.c3f39f45.chunk.css",
      "/static/js/2.40f75169.chunk.js",
      "/static/js/main.f0cdeb44.chunk.js",
      "/static/media/ic_launcher.52827002.png",
      "/custom-sw.js",
      "/logo192.png",
      "/src/index.js",
      "/src/index.css",
      "./App.js",
      "/",
      "/static/node_modules/react-dom/cjs/react-dom.production.min.js",
    ]);
  });

  e.waitUntil(cacheProm);
});

// self.addEventListener("fetch", (e) => {
//   //solo cache
//   //   e.respondWith(caches.match(e.request));
//   let respuesta;

//   //  2- Cache with Network Fallback
//   if (e.request.url.includes("metodos")) {
//     respuesta = manejoApiMensajes(CACHE_DYNAMIC_NAME, e.request);
//   } else {
//     respuesta = caches.match(e.request).then((res) => {
//       if (res) return res;
//       // No existe el archivo
//       // tengo que ir a la web
//       console.log("No existe", e.request.url);
//       return fetch(e.request).then((newResp) => {
//         caches.open(CACHE_DYNAMIC_NAME).then((cache) => {
//           if (
//             !e.request.url.includes("chrome-extension") &&
//             !e.request.url.includes("metodos")
//           ) {
//             cache.put(e.request, newResp);
//           }
//         });

//         return newResp.clone();
//       });
//     });
//   }
//   e.respondWith(respuesta);
// });

// function manejoApiMensajes(cacheName, req) {
//   if (req.clone().method === "POST") {
//     // POSTEO de un nuevo mensaje

//     // if ( self.registration.sync ) {
//     req
//       .clone()
//       .text()
//       .then((body) => {
//         console.log(body);
//         // const bodyObj = JSON.parse( body );
//         // return guardarMensaje( bodyObj );
//       });
//     // } else {
//     //     return fetch( req );
//     // }

//     return fetch(req);
//   }
// }
