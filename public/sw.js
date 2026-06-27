const CACHE_NAME = "suncell-v1";
const ASSETS_TO_CACHE = [
  "/",
  "/index.html",
  "/favicon.svg",
  "/og-banner.svg",
  "/site.webmanifest",
  "/browserconfig.xml",
  "/src/main.tsx",
  "/src/index.css"
];

// Instalação do Service Worker e caching de recursos essenciais
self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      console.log("[Service Worker] Caching inicial executado com sucesso.");
      return cache.addAll(ASSETS_TO_CACHE);
    }).then(() => self.skipWaiting())
  );
});

// Ativação e limpeza de caches antigos
self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cache) => {
          if (cache !== CACHE_NAME) {
            console.log("[Service Worker] Removendo cache antigo:", cache);
            return caches.delete(cache);
          }
        })
      );
    }).then(() => self.clients.claim())
  );
});

// Estratégia de cache: Cache First com fallback de Rede para fontes e assets estáticos,
// e Network First para as rotas do site.
self.addEventListener("fetch", (event) => {
  const url = new URL(event.request.url);

  // Fontes do Google e fotos estáticas -> Cache First (mudam raramente)
  if (
    url.hostname.includes("fonts.googleapis.com") ||
    url.hostname.includes("fonts.gstatic.com") ||
    url.pathname.endsWith(".png") ||
    url.pathname.endsWith(".svg") ||
    url.pathname.endsWith(".webp") ||
    url.pathname.endsWith(".css") ||
    url.pathname.endsWith(".js")
  ) {
    event.respondWith(
      caches.match(event.request).then((cachedResponse) => {
        if (cachedResponse) {
          return cachedResponse;
        }
        return fetch(event.request).then((networkResponse) => {
          if (networkResponse && networkResponse.status === 200) {
            const responseToCache = networkResponse.clone();
            caches.open(CACHE_NAME).then((cache) => {
              cache.put(event.request, responseToCache);
            });
          }
          return networkResponse;
        }).catch(() => {
          // Fallback silencioso se falhar
          return new Response("Asset indisponível offline", { status: 503 });
        });
      })
    );
  } else {
    // Para páginas HTML e rotas SPA -> Network First para garantir conteúdo atualizado
    event.respondWith(
      fetch(event.request)
        .then((networkResponse) => {
          // Se for uma requisição HTML bem sucedida, salva no cache
          if (
            networkResponse &&
            networkResponse.status === 200 &&
            event.request.mode === "navigate"
          ) {
            const responseToCache = networkResponse.clone();
            caches.open(CACHE_NAME).then((cache) => {
              cache.put(event.request, responseToCache);
            });
          }
          return networkResponse;
        })
        .catch(() => {
          // Se estiver offline, tenta puxar do cache o próprio documento ou o root /index.html
          return caches.match(event.request).then((cachedResponse) => {
            if (cachedResponse) {
              return cachedResponse;
            }
            // Fallback para a rota raiz se não houver página em cache
            if (event.request.mode === "navigate") {
              return caches.match("/");
            }
            return new Response("Offline. Conteúdo indisponível no momento.", {
              status: 503,
              headers: { "Content-Type": "text/plain; charset=utf-8" }
            });
          });
        })
    );
  }
});
