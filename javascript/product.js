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
    
    var cards = showThisElement.getElementsByClassName("card");   
    for(var i = 0; i < cards.length; i++){
        cards[i].style.display = "block";
    }
    
    shown = id;
}

function showByCompany(id,company){
    showCategory(id);
    var category = document.getElementById(id);
    var cards = category.getElementsByClassName("card");   
    for(var i = 0; i < cards.length; i++){
        var p = cards[i].getElementsByTagName("p");
        var span = p[1].getElementsByTagName("span");
        var cardCompany = p[1].innerText.replace(span[0].innerHTML,"");
        if(cardCompany == company){
            cards[i].style.display = "block";
        }else{
            cards[i].style.display = "none";
        }
    }
}