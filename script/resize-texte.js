const texte = document.getElementById("description");
const texte2 = document.getElementById("t");
const texte3 = document.getElementById("tr");
if(window.innerWidth <= 865 && window.innerWidth >= 800){
    texte.style.fontSize = "12px";
    texte3.style.fontSize = "13px";
    texte2.style.fontSize = "22px";
}
else{
    texte.style.fontSize = "15px";
    texte3.style.fontSize = "15px";
    texte2.style.fontSize = "25px";
}
window.addEventListener('resize', function (e){
    if(window.innerWidth <= 865 &&  window.innerWidth >= 800) {

        texte2.style.fontSize = "22px";
        texte.style.fontSize = "12px";
        texte3.style.fontSize = "13px";
    }
    else{
    texte2.style.fontSize = "25px";
    texte.style.fontSize = "15px";
    texte3.style.fontSize = "15px";
    }
})