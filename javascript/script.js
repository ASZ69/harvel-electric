// JavaScript Document

//chnage navbar view to list
function showListNav() {
    "use strict";
    var nav = document.getElementById("myNavbar");
    if (nav.className === "navbar") {
        nav.className += " nav-list";
    } else {
        nav.className = "navbar";
    }

    //control btn
    var navBtn = document.getElementById("nav-menu-btn");

    if (navBtn.className === "navbar-cont") {
        navBtn.className += " change";
    } else {
        navBtn.className = "navbar-cont";
    }
}