const $ = (s) => document.querySelector(s);
const $$ = (s) => document.querySelectorAll(s);

window.addEventListener('load', () => {
  setTimeout(() => $('#loader')?.classList.add('hide'), 700);
  document.body.classList.add('no-scroll');
});

function closeAnnouncement(){
  $('#announcement')?.classList.add('hidden');
  document.body.classList.remove('no-scroll');
}
function openAnnouncement(){
  $('#announcement')?.classList.remove('hidden');
  document.body.classList.add('no-scroll');
}

$('#closePopup')?.addEventListener('click', closeAnnouncement);
$('#reopenTransmission')?.addEventListener('click', openAnnouncement);
document.addEventListener('keydown', (e)=>{ if(e.key==='Escape') closeAnnouncement(); });

const io = new IntersectionObserver((entries)=>{
  entries.forEach(entry=>{
    if(entry.isIntersecting){ entry.target.classList.add('visible'); io.unobserve(entry.target); }
  });
},{threshold:.12});
$$('.reveal').forEach(el=>io.observe(el));

$('#missionButton')?.addEventListener('click', ()=> $('#missionPanel')?.classList.add('open'));
$('#closeMission')?.addEventListener('click', ()=> $('#missionPanel')?.classList.remove('open'));

const canvas = document.getElementById('stars');
const ctx = canvas.getContext('2d');
let stars=[];
function resize(){
  canvas.width=innerWidth; canvas.height=innerHeight;
  stars = Array.from({length: Math.min(130, Math.floor(innerWidth/8))},()=>({
    x:Math.random()*canvas.width,y:Math.random()*canvas.height,r:Math.random()*1.7+.4,v:Math.random()*.5+.12,a:Math.random()*0.7+0.15
  }));
}
function draw(){
  ctx.clearRect(0,0,canvas.width,canvas.height);
  stars.forEach(s=>{
    s.y += s.v; if(s.y>canvas.height){s.y=0;s.x=Math.random()*canvas.width;}
    ctx.beginPath(); ctx.arc(s.x,s.y,s.r,0,Math.PI*2);
    ctx.fillStyle=`rgba(118,255,3,${s.a})`; ctx.fill();
  });
  requestAnimationFrame(draw);
}
resize(); draw(); addEventListener('resize', resize);

$$('.service-card,.guardian-card').forEach(card=>{
  card.addEventListener('mousemove', e=>{
    const r=card.getBoundingClientRect();
    const x=(e.clientX-r.left)/r.width-.5;
    const y=(e.clientY-r.top)/r.height-.5;
    card.style.transform=`translateY(-8px) rotateX(${(-y*5).toFixed(2)}deg) rotateY(${(x*6).toFixed(2)}deg)`;
  });
  card.addEventListener('mouseleave', ()=> card.style.transform='');
});
