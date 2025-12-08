const menuopenbutton=document.getElementById("menu-open-button")
const menuclosebutton=document.getElementById("menu-close-button")
const navlinks=document.querySelectorAll(".nav-menu .nav-link")

 menuopenbutton.addEventListener("click",()=>{
    document.body.classList.toggle("show-mobile-menu")
 })
  menuclosebutton.addEventListener("click",()=>{
    document.body.classList.toggle("show-mobile-menu")
 })

 navlinks.forEach(link=>{
   link.addEventListener("click",()=>{
      document.body.classList.toggle("show-mobile-menu")
   })
 })
 //testestmonals
 const slider=document.querySelector(".testimonals-list");
 const slides=document.querySelectorAll(".testimonals")
 let index=0;

 function slidetestimonals(){
   index++;
   if(index>=slides.length){
      index=0;
   }
   slider.style.transform=`translate(-${index*300}px)`
 }

 setInterval(slidetestimonals, 2000);