// JavaScript Document

//        search for menu
function searchMenu() {
    var btnSearch, searchUpperCase;
    btnSearch = $('#menu-search-input');
    searchUpperCase = btnSearch[0].value.toUpperCase();
    var menuElements = $('#menu-categories > .main-category > ul li');

    for (var i = 0; i < menuElements.length; i++) {

        if (menuElements[i].childNodes[0].nodeValue.toUpperCase().indexOf(searchUpperCase) > -1) {
            menuElements[i].style.display = "block";
        } else {
            menuElements[i].style.display = "none";
        }
    }
}

//        show categories by click
var shown = "ac";
function showCategory(id) {
    var shownElement = document.getElementById(shown);
    shownElement.style.display = "none";

    var showThisElement = document.getElementById(id);
    showThisElement.style.display = "flex";
    shown = id;
}