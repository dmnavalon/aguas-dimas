document.documentElement.classList.add('js');

// nav: estado con scroll + drawer móvil
const nav=document.querySelector('.nav');
addEventListener('scroll',()=>nav.classList.toggle('scrolled',scrollY>30),{passive:true});
const tgl=document.querySelector('.nav__toggle'),links=document.querySelector('.nav__links');
const setMenu=(open)=>{
  tgl.classList.toggle('open',open);links.classList.toggle('open',open);
  tgl.setAttribute('aria-expanded',open);
  document.body.style.overflow=open?'hidden':'';
};
tgl?.addEventListener('click',()=>setMenu(!links.classList.contains('open')));
links?.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>setMenu(false)));

// reveal on scroll
const io=new IntersectionObserver((es)=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target)}}),{threshold:.12});
document.querySelectorAll('.reveal').forEach(el=>io.observe(el));
