let menu = document.querySelector(".hamburger");

menu.onclick = function(){
    let nav = document.querySelector(".main-nav");
    nav.classList.toggle("active");
}