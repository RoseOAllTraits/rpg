(()=>{
 'use strict';
 let database=null,queue=Promise.resolve();
 const api={available:false,snapshot:null,open,write};window.QuietStorage=api;
 function open(){return new Promise(resolve=>{
  if(!window.indexedDB){resolve(false);return;}
  let settled=false;const finish=value=>{if(!settled){settled=true;resolve(value);}};
  const timer=setTimeout(()=>finish(false),2500);
  let request;try{request=indexedDB.open('quiet-within-device',1);}catch{clearTimeout(timer);finish(false);return;}
  request.onupgradeneeded=()=>{if(!request.result.objectStoreNames.contains('saves'))request.result.createObjectStore('saves');};
  request.onblocked=request.onerror=()=>{clearTimeout(timer);finish(false);};
  request.onsuccess=()=>{
   if(settled){request.result.close();return;}database=request.result;database.onversionchange=()=>{database.close();api.available=false;};
   const transaction=database.transaction('saves','readonly'),read=transaction.objectStore('saves').get('database');
   read.onsuccess=()=>{api.snapshot=read.result||null;api.available=true;clearTimeout(timer);finish(true);};
   read.onerror=()=>{clearTimeout(timer);finish(false);};
  };
 });}
 function write(data){
  if(!api.available||!database)return Promise.resolve(false);
  // Snapshot before queuing so later clicks cannot mutate an in-flight backup.
  const copy=JSON.parse(JSON.stringify(data));
  const job=queue.catch(()=>false).then(()=>new Promise(resolve=>{
   let transaction;try{transaction=database.transaction('saves','readwrite');transaction.objectStore('saves').put(copy,'database');}catch{resolve(false);return;}
   transaction.oncomplete=()=>{api.snapshot=copy;resolve(true);};transaction.onerror=transaction.onabort=()=>resolve(false);
  }));queue=job;return job;
 }
})();
