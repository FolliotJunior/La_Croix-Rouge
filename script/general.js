const corp = document.getElementById("corp");

var taille = window.innerHeight;
var taille_final = taille - 60 - 50;

corp.style.height = String(taille_final) + "px";

window.addEventListener("resize", function(e){
    taille = window.innerHeight;
    taille_final = taille - 60 - 50;

    corp.style.height = String(taille_final) + "px";

})