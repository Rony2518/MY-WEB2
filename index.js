let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');
let info = document.querySelector('.info');

menu.onclick = () => {
    menu.classList.toggle('fa-x');
    navbar.classList.toggle('open');
    info.classList.toggle('shift-down1');
}

// Wait for the DOM to load
document.addEventListener("DOMContentLoaded", function () {
    // Get the necessary elements
    var contact = document.querySelector(".contact");
    var menuIcon = document.getElementById("menu-icon");

    // Add event listener to the menu icon
    menuIcon.addEventListener("click", function () {
        // Toggle the active class on the contact element
        contact.classList.toggle("active");
    });
});


var icon = document.getElementById("icon");
icon.onclick = function () {
    document.body.classList.toggle("dark-theme");
}
