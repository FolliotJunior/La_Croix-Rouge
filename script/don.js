var don = document.getElementsByClassName("don");
var phrase = document.getElementsByClassName("tout_le_texte");
var fleche_ = document.getElementsByClassName("fleche")

don[0].addEventListener("mouseover", function(e){
    if(window.innerWidth >= 600){
        phrase[0].style.display = "inline";

    }else{
        phrase[0].style.display = "none";
    }
    fleche_[0].style.display = "inline";
});
don[0].addEventListener("mouseout", function(e){
    phrase[0].style.display = "none";
    fleche_[0].style.display = "none";
});

var fleche = ">";

function un(){
    if(fleche == ">>>"){
        fleche = ">";
    }else{
        fleche += ">";
    }
    fleche_[0].innerHTML = "<p>"+fleche+"</p>"
    setTimeout(un, 250);
}

un();