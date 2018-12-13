// JavaScript Document

//chnage navbar view to list
function showListNav() {
    "use strict";
    var nav = document.getElementById("myNavbar");
    if (nav.className === "navbar" || nav.className === "navbar sticky") {
        //        nav.className += " nav-list";
        nav.classList.add("nav-list");
    } else {
        //        nav.className = "navbar";
        nav.classList.remove("nav-list");
    }
}