const toggle=document.getElementById("menuToggle");
const links=document.getElementById("navLinks");
const body=document.getElementById("pageBody");
const navbar=document.getElementById("navbar");

toggle.addEventListener("click",()=>{
links.classList.toggle("show");
});

window.addEventListener("scroll",()=>{

let y=window.scrollY;

if(y<300){
body.style.background="#111";
navbar.style.background="#000";
}
else if(y<800){
body.style.background="#1a2a40";
navbar.style.background="#102030";
}
else if(y<1400){
body.style.background="#203a2e";
navbar.style.background="#13251f";
}
else{
body.style.background="#3a2020";
navbar.style.background="#2a1414";
}

});