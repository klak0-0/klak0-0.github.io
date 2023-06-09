let star = document.querySelector("#star-img");
let moon = document.querySelector("#moon-img");
let mount = document.querySelector("#mountai-img");
let text = document.querySelector("#text-moon");
let skaly = document.querySelector("#front-img");

window.addEventListener("scroll", function (){
    moon.style.top = scrollY*2.5 + "px";
    mount.style.top = scrollY*1.1 + "px";
    star.style.left = scrollY*1.5 + "px";
    text.style.transform = `translateX(-${scrollY}px)`;
})