let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');
let intro = document.querySelector('.intro');
let projects = document.querySelector('.wrapper');

menu.onclick = () => {
    menu.classList.toggle('fa-x');
    navbar.classList.toggle('open');
    intro.classList.toggle('shift-down1');
    projects.classList.toggle('shift-down2');
}

document.addEventListener("DOMContentLoaded", function () {
    var contact = document.querySelector(".contact");
    var menuIcon = document.getElementById("menu-icon");
    menuIcon.addEventListener("click", function () {
        contact.classList.toggle("active");
    });
});


var icon = document.getElementById("icon");
icon.onclick = function () {
    document.body.classList.toggle("dark-theme");
}
