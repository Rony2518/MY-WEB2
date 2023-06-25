let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');
let info = document.querySelector('.info');
let contact = document.querySelector('.contact');

menu.onclick = () => {
    menu.classList.toggle('fa-x');
    navbar.classList.toggle('open');
    info.classList.toggle('shift-down1');
    contact.classList.toggle('shift-down2');
}

var icon = document.getElementById("icon");
icon.onclick = function () {
    document.body.classList.toggle("dark-theme");
}
