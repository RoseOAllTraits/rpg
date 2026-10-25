const CACHE='quiet-within-shell-v6';
const CORE=['./','./index.html','./styles.css','./game.js','./story.js','./chapter-arcs.js','./campaign.js','./storage.js','./offline.js','./meditations.js','./sky.js','./read-aloud.js','./manifest.webmanifest','./favicon.svg','./icons/icon-192.png','./icons/icon-512.png','./icons/apple-touch.png'];
self.addEventListener('install',event=>event.waitUntil((async()=>{const cache=await caches.open(CACHE);try{await cache.addAll(CORE.map(path=>new Request(new URL(path,self.registration.scope),{cache:'reload'})));await self.skipWaiting();}catch(error){await caches.delete(CACHE);throw error;}})()));
self.addEventListener('activate',event=>event.waitUntil((async()=>{await self.clients.claim();const keys=await caches.keys();await Promise.all(keys.filter(key=>key.startsWith('quiet-within-shell-')&&key!==CACHE).map(key=>caches.delete(key)));})()));
self.addEventListener('message',event=>{if(event.data?.type==='CACHE_NAME')event.ports[0]?.postMessage({cache:CACHE});});
self.addEventListener('fetch',event=>{
 const request=event.request,url=new URL(request.url);
 if(request.method!=='GET'||url.origin!==self.location.origin)return;
 const path=CORE.find(path=>new URL(path,self.registration.scope).pathname===url.pathname);
 if(!path)return;
 // Versioned cache-first delivery keeps the full offline shell on one consistent revision.
 event.respondWith((async()=>{const cache=await caches.open(CACHE);const cached=await cache.match(new URL(path,self.registration.scope).href);if(cached)return cached;try{const response=await fetch(request);if(response.ok)await cache.put(new URL(path,self.registration.scope).href,response.clone());return response;}catch{return new Response('Offline app file missing. Reconnect to restore the complete download.',{status:503,headers:{'Content-Type':'text/plain'}});}})());
});
