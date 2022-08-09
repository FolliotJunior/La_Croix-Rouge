const texte = document.getElementById("description");
if(window.innerWidth <= 865 && window.innerWidth >= 800){
    texte.style.fontSize = "10px";
}
else{
    texte.style.fontSize = "15px";
}
window.addEventListener('resize', function e(){
    if(window.innerWidth <= 865 &&  window.innerWidth >= 800) {

        texte.style.fontSize = "10px";
    }
    else{
    texte.style.fontSize = "15px";
    }
})