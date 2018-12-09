// JavaScript Document

function openModel(id,no){
    var model = document.getElementById("model");
    model.style.display = "block";
    
    var cardParent = document.getElementById(id);
    var card = cardParent.getElementsByClassName("card")[no-1];
    var cardImg = card.getElementsByTagName("img")[0];
    var cardPrice = card.getElementsByTagName("h2")[0];
    var cardName = card.getElementsByTagName("p")[0];
    var cardCompany = card.getElementsByTagName("p")[1];
    //    alert(cardName.innerText);
}

function closeModel(){
    var model = document.getElementById("model");
    model.style.display = "none";
}