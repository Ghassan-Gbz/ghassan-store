(() => {
 const itemsEl=document.getElementById('items'), statusEl=document.getElementById('status'), searchEl=document.getElementById('search'), countEl=document.getElementById('count');
 let catalog=[],filter='all';
 document.getElementById('year').textContent=new Date().getFullYear();
 function safePath(p){return typeof p==='string' ? p.split('/').map(encodeURIComponent).join('/') : '#'}
 function render(){
  const q=searchEl.value.trim().toLowerCase();
  const shown=catalog.filter(x=>(filter==='all'||(x.type||'app')===filter)&&[x.name,x.description,x.version,x.type].some(v=>String(v||'').toLowerCase().includes(q)));
  itemsEl.innerHTML='';countEl.textContent=`${shown.length} item${shown.length===1?'':'s'}`;
  if(!shown.length){itemsEl.innerHTML='<div class="empty">No items found. Try another search or category.</div>';return}
  for(const item of shown){
   const card=document.createElement('article');card.className='item';
   const top=document.createElement('div');top.className='item-top';
   if(item.icon){const im=document.createElement('img');im.className='item-icon';im.src=safePath(item.icon);im.alt='';im.onerror=()=>{im.replaceWith(fallbackIcon(item.type))};top.appendChild(im)}else top.appendChild(fallbackIcon(item.type));
   const info=document.createElement('div');const title=document.createElement('h3');title.textContent=item.name||'Untitled';const meta=document.createElement('div');meta.className='meta';meta.textContent=`${(item.type||'app').toUpperCase()}${item.version?' · v'+item.version:''}`;info.append(title,meta);top.appendChild(info);
   const desc=document.createElement('p');desc.className='desc';desc.textContent=item.description||'No description provided.';
   const link=document.createElement('a');link.className='download';link.href=safePath(item.file);link.textContent='Download item ↓';link.setAttribute('download','');
   card.append(top,desc,link);itemsEl.appendChild(card);
  }
 }
 function fallbackIcon(type){const d=document.createElement('div');d.className='item-icon fallback';d.textContent=({app:'📱',tool:'🧰',file:'📄',image:'🖼️'})[type]||'📦';return d}
 async function load(){try{const res=await fetch('catalog.json?ts='+Date.now(),{cache:'no-store'});if(!res.ok)throw new Error('Could not load catalog.json ('+res.status+').');const data=await res.json();catalog=Array.isArray(data)?data:(Array.isArray(data.items)?data.items:[]);statusEl.textContent=catalog.length?'':'No items have been published yet.';render()}catch(e){statusEl.textContent='Could not load the catalogue. Check that catalog.json exists in the repository root.';itemsEl.innerHTML='';countEl.textContent='Unavailable'}}
 searchEl.addEventListener('input',render);
 document.querySelectorAll('[data-filter]').forEach(b=>b.addEventListener('click',()=>{filter=b.dataset.filter;document.querySelectorAll('[data-filter]').forEach(x=>x.classList.toggle('active',x===b));render()}));
 load();
})();