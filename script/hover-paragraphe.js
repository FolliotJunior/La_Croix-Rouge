var paragraphe = document.getElementsByClassName("texte");
var bloc = document.getElementsByClassName("bloc");
var list_bloc = [];
var bloc_clicked = 0;

for(let i=0;i< paragraphe.length; i++){
    paragraphe[i].setAttribute("id", String(i));
    bloc[i].setAttribute("id", String(i)+' '+'bloc');
    if(window.innerWidth <= 799){

        if(Math.trunc(i/2)*2 != i){
            bloc[i].style.marginLeft = "30%";
        }
        else{
            bloc[i].style.marginLeft = String(i)*3 + "%";
        }
    }
    list_bloc[i] = document.getElementById(String(i)+' '+'bloc');
}


window.addEventListener("resize",function(e){
    for(let i=0;i< paragraphe.length; i++){
        if(window.innerWidth >= 800){
            document.getElementById(String(i)).style.display = "block";
        }
        if(window.innerWidth <= 799){
            document.getElementById(String(i)).style.display = "none";
        }
        if(window.innerWidth <= 799){

            if(Math.trunc(i/2)*2 != i){
                bloc[i].style.marginLeft = "30%";
            }
            else{
                bloc[i].style.marginLeft = String(i)*3 + "%";
            }
        }
        else{
            bloc[i].style.marginLeft = "20px";
        }
    }
})

function test(n){
    bloc_clicked = 1;
    if(window.innerWidth <= 799){
        for(let i=0;i< paragraphe.length; i++){
            if(n != i){
                document.getElementById(String(i)).style.display = "none";
            }else{
                document.getElementById(String(i)).style.display = "block";
            }
        }
    }
}

function corps(){
    if(window.innerWidth <= 799 && bloc_clicked == 0){
        for(let i=0;i< paragraphe.length; i++){
            document.getElementById(String(i)).style.display = "none";
        }
    }
}

window.addEventListener("mousemove", function(e){
    bloc_clicked = 0;
})

