(()=>{
 'use strict';
 let registration=null,failure='',ready=false;
 const notes=new Set();
 const api={start,status};window.QuietOffline=api;
 const files=['index.html','styles.css','story.js','chapter-arcs.js','campaign.js','meditations.js','storage.js','offline.js','sky.js','read-aloud.js','game.js','manifest.webmanifest','favicon.svg','icons/icon-192.png','icons/icon-512.png','icons/apple-touch.png'];
 function text(){if(location.protocol==='file:')return 'Running from local files. All story content and meditations are included. Keep the extracted folder together and export your saves before moving it.';if(failure)return failure;if(ready)return 'All 3,000 levels, meditations, scripts and icons are cached for offline play on this device. Save exports are still recommended.';return navigator.onLine?'Downloading and checking the complete offline app…':'Offline files have not been verified yet. Load once online and wait for this check to finish.';}
 function notify(){for(const el of notes){if(el.isConnected)el.textContent=text();else notes.delete(el);}}
 function status(el){if(!el)return;notes.add(el);el.textContent=text();if(location.protocol==='file:')document.querySelectorAll('.offline-download').forEach(a=>a.hidden=true);}
 async function verify(){
  if(!registration?.active)return;
  try{
   // Ask the active worker for its cache name; a partially downloaded update is not readiness.
   const name=await new Promise((resolve,reject)=>{const channel=new MessageChannel();const timer=setTimeout(()=>{channel.port1.close();reject(Error('No worker reply'));},4000);channel.port1.onmessage=e=>{clearTimeout(timer);channel.port1.close();resolve(e.data?.cache);};registration.active.postMessage({type:'CACHE_NAME'},[channel.port2]);});
   if(!name)throw Error('Missing cache name');const cache=await caches.open(name);const results=await Promise.all(files.map(file=>cache.match(new URL(file,document.baseURI).href)));
   ready=results.every(Boolean);failure=ready?'':'Offline download is incomplete. Reconnect and reload to finish preparing it.';
  }catch{failure='Could not verify the offline download. Reconnect and reload before relying on offline play.';}
  notify();
 }
 async function start(){
  if(location.protocol==='file:'){notify();return;}
  if(!('serviceWorker' in navigator)||!window.isSecureContext){failure='This browser cannot install the offline cache here. Use HTTPS in a current browser, or extract the offline folder on a PC.';notify();return;}
  try{registration=await navigator.serviceWorker.register('./sw.js',{updateViaCache:'none'});if(registration.active)verify();registration.addEventListener('updatefound',()=>{const worker=registration.installing;worker?.addEventListener('statechange',()=>{if(worker.state==='activated')verify();});});navigator.serviceWorker.ready.then(reg=>{registration=reg;verify();});}catch{failure='Offline installation failed. Reconnect and reload, or download the offline folder on a PC.';notify();}
 }
 window.addEventListener('online',()=>{notify();registration?.update().catch(()=>{});});window.addEventListener('offline',notify);
 navigator.serviceWorker?.addEventListener('controllerchange',verify);
})();
