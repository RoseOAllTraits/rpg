(()=>{
 'use strict';
 const menu=document.createElement('div');menu.className='speech-menu';menu.hidden=true;menu.setAttribute('role','group');menu.setAttribute('aria-label','Read aloud');
 menu.innerHTML='<button type="button" class="speech-read">Read aloud</button><button type="button" class="speech-stop">Stop reading</button>';
 document.body.append(menu);
 const status=document.createElement('div');status.className='speech-status';status.hidden=true;status.innerHTML='<span role="status"></span><button type="button" aria-label="Stop reading aloud">Stop</button>';document.body.append(status);
 const synth=window.speechSynthesis;let text='',opener=null,run=0,utterance=null,longTimer=null,start=null,longPressed=false,suppressUntil=0;
 window.QuietReadAloud={suppressClick:()=>Date.now()<suppressUntil};
 function notice(message){status.hidden=false;status.querySelector('span').textContent=message;}
 function stop(){run++;synth?.cancel();utterance=null;status.hidden=true;}
 function close(restore=false){menu.hidden=true;if(restore&&opener?.isConnected)opener.focus?.({preventScroll:true});}
 function readable(target){
  if(!(target instanceof Element)||target.closest('input,textarea,select,[contenteditable="true"],.speech-menu,.speech-status'))return '';
  const selected=window.getSelection();if(selected&&!selected.isCollapsed&&selected.containsNode(target,true))return selected.toString().trim().slice(0,12000);
  const node=target.closest('button,label,p,summary,h1,h2,h3,h4,li,output,article,.eyebrow,.location-line,.weather-line')||target;
  if(node===document.body||node===document.documentElement||node.matches('main,nav,section'))return '';
  const clone=node.cloneNode(true);clone.querySelectorAll('[aria-hidden="true"],input,select,.touch-confirm').forEach(el=>el.remove());
  return (clone.textContent.trim()||node.getAttribute('aria-label')||'').replace(/\s+/g,' ').slice(0,12000);
 }
 function open(event,target){const value=readable(target);if(!value)return false;text=value;opener=document.activeElement;menu.hidden=false;menu.style.left=Math.max(8,Math.min(event.clientX,innerWidth-menu.offsetWidth-8))+'px';menu.style.top=Math.max(8,Math.min(event.clientY,innerHeight-menu.offsetHeight-8))+'px';menu.querySelector('.speech-stop').disabled=!synth?.speaking;menu.querySelector('.speech-read').focus({preventScroll:true});return true;}
 function read(){
  close();stop();
  if(!synth||!window.SpeechSynthesisUtterance){notice('Read-aloud is not supported by this browser.');return;}
  const voices=synth.getVoices().filter(voice=>voice.localService);
  const language=document.documentElement.lang||'en';const voice=voices.find(v=>v.lang.toLowerCase().startsWith(language.toLowerCase()))||voices[0];
  if(!voice){notice('No on-device voice is available. Enable a device voice in your system speech settings.');return;}
  const chunks=text.match(/.{1,200}(?:\s|$)|\S+/g)||[text];const token=run;
  notice('Reading aloud');
  function next(){if(token!==run)return;const chunk=chunks.shift();if(!chunk){stop();return;}utterance=new SpeechSynthesisUtterance(chunk);utterance.voice=voice;utterance.lang=voice.lang;utterance.rate=.92;utterance.onend=next;utterance.onerror=e=>{if(token!==run)return;stop();if(e.error!=='canceled'&&e.error!=='interrupted')notice('The device voice could not read this text.');};synth.speak(utterance);}
  next();
 }
 menu.querySelector('.speech-read').addEventListener('click',read);
 menu.querySelector('.speech-stop').addEventListener('click',()=>{stop();close(true);});status.querySelector('button').addEventListener('click',stop);
 document.addEventListener('contextmenu',event=>{if(open(event,event.target)){event.preventDefault();clearTimeout(longTimer);if(event.pointerType==='touch')suppressUntil=Date.now()+800;}});
 document.addEventListener('pointerdown',event=>{
  if(!menu.hidden&&!menu.contains(event.target))close();
  if(event.pointerType!=='touch'||event.target.closest('.speech-menu,.speech-status,input,textarea,select'))return;
  longPressed=false;start={x:event.clientX,y:event.clientY,id:event.pointerId};clearTimeout(longTimer);
  longTimer=setTimeout(()=>{if(open(event,event.target)){longPressed=true;suppressUntil=Date.now()+1200;}longTimer=null;},650);
 },{passive:true});
 document.addEventListener('pointermove',event=>{if(start&&Math.hypot(event.clientX-start.x,event.clientY-start.y)>12){clearTimeout(longTimer);start=null;}},{passive:true});
 for(const name of ['pointerup','pointercancel'])document.addEventListener(name,()=>{clearTimeout(longTimer);start=null;if(longPressed){suppressUntil=Date.now()+800;longPressed=false;}},{passive:true});
 document.addEventListener('click',event=>{if(Date.now()<suppressUntil&&!event.target.closest('.speech-menu,.speech-status')){event.preventDefault();event.stopImmediatePropagation();}},true);
 document.addEventListener('keydown',event=>{if(event.key==='Escape'&&!menu.hidden){event.preventDefault();event.stopImmediatePropagation();close(true);}else if(event.key==='Tab'&&!menu.hidden)close();},true);
 document.addEventListener('scroll',()=>close(),{capture:true,passive:true});
 document.addEventListener('visibilitychange',()=>{if(document.hidden){stop();close();}});
 window.addEventListener('pagehide',stop);
 // Warm the device voice list without sending any text or using remote voices.
 synth?.getVoices();
})();
