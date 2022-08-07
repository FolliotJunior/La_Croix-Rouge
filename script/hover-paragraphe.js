var paragraphe = document.getElementsByClassName("texte");
var bloc = document.getElementsByClassName("bloc");
var list_bloc = [];
for(let i=0;i< paragraphe.length; i++){
    paragraphe[i].setAttribute("id", String(i));
    bloc[i].setAttribute("id", String(i)+' '+'bloc');
    list_bloc[i] = document.getElementById(String(i)+' '+'bloc');
}
console.log(list_bloc);

for(let j=0; j<list_bloc.length; j++){
    console.log(list_bloc[j]);
    list_bloc[j].addEventListener("mouseover", function(e){
        if(window.innerWidth <= 799){
            document.getElementById(String(j)).style.display = "block";
            console.log("test");
        }
    })
    list_bloc[j].addEventListener("mouseout", function(e){
        if(window.innerWidth <= 799){
            document.getElementById(String(j)).style.display = "none";
            console.log("test");
        }
    })
}