// JavaScript Document

function openModel(id,no){
    var model = document.getElementById("model");
    model.style.display = "block";
    
    var cardParent = document.getElementById(id);
    var card = cardParent.getElementsByClassName("card")[no-1];
    var cardImg = card.getElementsByTagName("img")[0];
    var cardPrice = card.getElementsByTagName("h2")[0];
    var cardName = card.getElementsByTagName("p")[0];
    var cardCompanyDiscount = card.getElementsByTagName("p")[1];
    var cardDiscount = cardCompanyDiscount.getElementsByTagName("span")[0];
    var cardCompany = cardCompanyDiscount.innerText.replace(cardDiscount.innerHTML,"");
    
    var mdCompany = document.getElementsByClassName("md-company")[0];
    var mdName = document.getElementsByClassName("md-name")[0];
    var mdPrice = document.getElementsByClassName("md-price")[0];
    var mdDiscount = document.getElementsByClassName("md-discount")[0];
    
//    alert(cardCompany);
    mdCompany.textContent = cardCompany;
    mdName.textContent = cardName.innerText;
    mdPrice.textContent = cardPrice.innerText;
    mdDiscount.textContent = cardDiscount.innerText;
}

function closeModel(){
    var model = document.getElementById("model");
    model.style.display = "none";
}

//pending
function modelImgZoomIn(){
    var modelImg = document.getElementById("modelImg");
    var currWidth = modelImg.clientWidth;
    if(currWidth > 1000){
        return false;
    }else{
        modelImg.style.width = (currWidth + 100) + "px";
    }
}
function modelImgZoomOut(){
    var modelImg = document.getElementById("modelImg");
    var currWidth = modelImg.clientWidth;
    if(currWidth < 200){
        return false;
    }else{
        modelImg.style.width = (currWidth - 100) + "px";
    }
}