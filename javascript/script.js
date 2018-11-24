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

//stick the navbar when scrolled
window.onscroll = function () {
    "use strict";
    stickNavbar();
};

var navbar = document.getElementById("navbar");
var navbarPosition = navbar.offsetTop;

function stickNavbar() {
    "use strict";
    if (window.pageYOffset >= navbarPosition) {
        navbar.classList.add("sticky");
        $('#navbar-space').css("display", "block");
    } else {
        navbar.classList.remove("sticky");
        $('#navbar-space').css("display", "none");
    }
}

//slider
var num = 0;
var sliderLength = 15;

function slideNext() {
    "use strict";
    if (sliderLength === num) {
        num = 1;
        slideImages(num);
    } else {
        slideImages(num);
        num++;
    }
}

function slidePre() {
    //check if num is on 1 or 0
    "use strict";
    if (num === 1 || num === 0) {
        num = 14;
    } else {
        //decrease 2 because num was previsously incremented by autoSlideImages
        num = num - 2;
    }

    slideImages(num);

    if (sliderLength === num) {
        num = 1;
    } else {
        num++;
    }
}

function slideImages(imgNo) {
    "use strict";
    var sImages = document.getElementsByClassName("slider-img");
    var sDot = document.getElementsByClassName("slider-dot");

    num = imgNo;
    for (var i = 0; i < sImages.length; i++) {
        sImages[i].style.display = "none";
        sDot[i].className = "slider-dot";
    }

    sImages[num].style.display = "block";
    sDot[num].className += " s-dot-active";
}

function autoSlideImages() {
    "use strict";
    var sImages = document.getElementsByClassName("slider-img");
    var sDot = document.getElementsByClassName("slider-dot");

    if (num === sliderLength) {
        num = 0;
    }

    for (var i = 0; i < sImages.length; i++) {
        sImages[i].style.display = "none";
        sDot[i].className = "slider-dot";
    }

    sImages[num].style.display = "block";
    sDot[num].className += " s-dot-active";

    num++;

    //			repeat function after some time make slider auto
    setTimeout(autoSlideImages, 4000);
}
