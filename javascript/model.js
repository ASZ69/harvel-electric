// JavaScript Document

var mdImg;
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
    
    mdImg = document.getElementById("modelImg");
    var mdCompany = document.getElementsByClassName("md-company")[0];
    var mdName = document.getElementsByClassName("md-name")[0];
    var mdPrice = document.getElementsByClassName("md-price")[0];
    var mdDiscount = document.getElementsByClassName("md-discount")[0];
    
//    alert(cardCompany);
    mdImg.style.width = "100%";
    
    mdImg.src = cardImg.src;
    mdCompany.textContent = cardCompany;
    mdName.textContent = cardName.innerText;
    mdPrice.textContent = cardPrice.innerText;
    mdDiscount.textContent = cardDiscount.innerText;
}

function closeModel(){
    var model = document.getElementById("model");
    model.style.display = "none";
}

function modelImgZoomIn(){
    var currWidth = mdImg.clientWidth;
    if(currWidth > 1000){
        return false;
    }else{
        mdImg.style.width = (currWidth + 100) + "px";
    }
}
function modelImgZoomOut(){
    var currWidth = mdImg.clientWidth;
    if(currWidth < 200){
        return false;
    }else{
        mdImg.style.width = (currWidth - 100) + "px";
    }
}

function buy(){
    var top = document.getElementById("mdTop");
    var cart = document.getElementById("mdCart");
    var bottom = document.getElementById("mdBottom");
    
    top.style.height = "25%";
    cart.style.height = "50%";
    bottom.style.height = "25%";
    
    var mdCompany = document.getElementsByClassName("md-company")[0];
    mdCompany.style.animation = "model-margin 2.5s";
    var mdName = document.getElementsByClassName("md-name")[0];
    mdName.style.animation = "model-margin 2.5s";
    var mdPrice = document.getElementsByClassName("md-price")[0];
    mdPrice.style.animation = "model-margin 2.5s";
    var mdDiscount = document.getElementsByClassName("md-discount")[0];
    mdDiscount.style.display = "none";
    
    setTimeout(function(){
        mdCompany.style.marginTop = "5px";
        mdCompany.style.marginBottom = "5px";
        mdName.style.marginTop = "5px";
        mdName.style.marginBottom = "5px";
        mdPrice.style.marginTop = "5px";
        mdPrice.style.marginBottom = "5px";
    }, 2500);
    
    var cartForm = document.getElementById("cartForm");
    cartForm.style.display = "block";
    var closeBuy = document.getElementById("closeBuy");
    closeBuy.style.display = "block";
}

function closeBuy(){
    var top = document.getElementById("mdTop");
    var cart = document.getElementById("mdCart");
    var bottom = document.getElementById("mdBottom");
    
    top.style.height = "49%";
    cart.style.height = "2%";
    bottom.style.height = "49%";
    
    var mdCompany = document.getElementsByClassName("md-company")[0];
    mdCompany.style.animation = "model-margin-reverse 2.5s";
    var mdName = document.getElementsByClassName("md-name")[0];
    mdName.style.animation = "model-margin-reverse 2.5s";
    var mdPrice = document.getElementsByClassName("md-price")[0];
    mdPrice.style.animation = "model-margin-reverse 2.5s";
    var mdDiscount = document.getElementsByClassName("md-discount")[0];
    mdDiscount.style.display = "block";
    
    setTimeout(function(){
        mdCompany.style.marginTop = "30px";
        mdCompany.style.marginBottom = "30px";
        mdName.style.marginTop = "30px";
        mdName.style.marginBottom = "30px";
        mdPrice.style.marginTop = "30px";
        mdPrice.style.marginBottom = "30px";
    }, 2500);
    
    var cartForm = document.getElementById("cartForm");
//    cartForm.style.display = "none";
    var closeBuy = document.getElementById("closeBuy");
    closeBuy.style.display = "none";
}
