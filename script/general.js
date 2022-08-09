const corp = document.getElementById("corp");

var taille = window.innerHeight;
var taille_final = taille - 60 - 50;

corp.style.height = String(taille_final) + "px";

window.addEventListener("resize", function(e){
    taille = window.innerHeight;
    taille_final = taille - 60 - 50;

    corp.style.height = String(taille_final) + "px";

})



var open_menu_t = document.getElementsByClassName("t-barres");
var close_menu_x = document.getElementsByClassName("close_menu");
var menu = document.getElementsByClassName("menu_option");
var re = 0;
open_menu = function (){
    close_menu_x[0].style.display = "block";
    open_menu_t[0].style.display = "none";
    menu[0].style.display = "flex";
}

close_menu = function (){
    close_menu_x[0].style.display = "none";
    open_menu_t[0].style.display = "block";
    menu[0].style.display = "none";
}

window.addEventListener("resize", function(e){
    if(window.innerWidth >= 500){
        close_menu_x[0].style.display = "none";
        open_menu_t[0].style.display = "none";
        menu[0].style.display = "none";
        re = 0;
    }
    if( window.innerWidth <= 499 && re == 0){
        re = 1;
        close_menu_x[0].style.display = "none";
        open_menu_t[0].style.display = "block";
        menu[0].style.display = "none";
    }
    
})

