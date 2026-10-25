(()=>{
 const sky=document.querySelector('.title-art');
 const atmosphere=document.createElement('div');atmosphere.className='sky-atmosphere';sky.prepend(atmosphere);
 const stars=document.createElement('div');stars.className='sky-stars';
 for(let i=0;i<48;i++){const star=document.createElement('i');star.className='sky-star';star.style.cssText='left:'+((i*37.17+7)%100)+'%;top:'+((i*19.31+3)%57)+'%;--twinkle:'+(3+i%7)+'s;--delay:-'+(i*.73)+'s;--size:'+(i%5===0?3:2)+'px';stars.append(star);}sky.append(stars);
 for(let i=0;i<4;i++){const cloud=document.createElement('div');cloud.className='sky-cloud cloud-'+i;sky.append(cloud);}
 for(let i=0;i<6;i++){const wind=document.createElement('i');wind.className='sky-wind';wind.style.cssText='top:'+(30+i*7)+'%;--delay:-'+i*4+'s;--drift:'+(16+i*3)+'s';sky.append(wind);}
 const title=document.querySelector('#titleScreen');
 const pause=()=>{sky.classList.toggle('sky-paused',title.hidden||document.hidden);document.documentElement.classList.toggle('page-hidden',document.hidden);};
 new MutationObserver(pause).observe(title,{attributes:true,attributeFilter:['hidden']});
 document.addEventListener('visibilitychange',pause);pause();
})();
