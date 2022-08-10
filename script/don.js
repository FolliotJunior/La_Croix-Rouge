var don = document.getElementsByClassName("don");
var phrase = document.getElementsByClassName("tout_le_texte");
var fleche_ = document.getElementsByClassName("fleche");
var over = 0;

don[0].addEventListener("mouseover", function(e){
    
    over = 1;
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

don[0].addEventListener("mousedown", function(e){
    if(over == 1){
        redirect("https://www.croix-rouge.fr/Je-donne");
    }
    console.log(1);
});


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