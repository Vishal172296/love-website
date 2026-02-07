// typing
const text="We fought, we loved, and we chose each other ❤️";
let i=0;
function type(){
 if(i<text.length){
  document.getElementById("type").innerHTML+=text.charAt(i);
  i++; setTimeout(type,80);
 }
}
type();

// counter
const start=new Date("July 12, 2025 00:00:00");
setInterval(()=>{
 const now=new Date();
 const days=Math.floor((now-start)/(1000*60*60*24));
 document.getElementById("counter").innerHTML="Together for "+days+" days ❤️";
},1000);

// no button
const no=document.getElementById("no");
no.addEventListener("mouseover",()=>{
 no.style.position="absolute";
 no.style.left=Math.random()*80+"%";
 no.style.top=Math.random()*80+"%";
});

// fade-in
const fades=document.querySelectorAll(".fade");
window.addEventListener("scroll",()=>{
 fades.forEach(f=>{
  const r=f.getBoundingClientRect();
  if(r.top<window.innerHeight-100){f.classList.add("show");}
 });
});

// tap anywhere to play music
const music=document.getElementById("bgMusic");
document.body.addEventListener("click",()=>{
 if(music.paused){
   music.play();
 }
},{once:true});
