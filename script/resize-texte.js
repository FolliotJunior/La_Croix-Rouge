const texte = document.getElementById("description");
if(window.innerWidth <= 865 && window.innerWidth >= 800){

    texte.innerHTML = "<p>La Croix-Rouge française, c’est à la fois une association de 54 000 bénévoles engagés depuis près de 150 ans sur de nombreux fronts de la lutte contre les précarités et une.......<p>";
}
else{
    texte.innerHTML = "<p>La Croix-Rouge française, c’est à la fois une association de 54 000 bénévoles engagés depuis près de 150 ans sur de nombreux fronts de la lutte contre les précarités et une entreprise à but non lucratif de services dans les champs sanitaire, social, médico-social et de la formation avec 18 000 salariés dans plus de 600 établissements.</p>";
}
window.addEventListener('resize', function e(){
    if(window.innerWidth <= 865 &&  window.innerWidth >= 800) {

        texte.innerHTML = "<p>La Croix-Rouge française, c’est à la fois une association de 54 000 bénévoles engagés depuis près de 150 ans sur de nombreux fronts de la lutte contre les précarités et une.......<p>";
    }
    else{
        texte.innerHTML = "<p>La Croix-Rouge française, c’est à la fois une association de 54 000 bénévoles engagés depuis près de 150 ans sur de nombreux fronts de la lutte contre les précarités et une entreprise à but non lucratif de services dans les champs sanitaire, social, médico-social et de la formation avec 18 000 salariés dans plus de 600 établissements.</p>";
    }
})