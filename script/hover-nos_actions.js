const par = document.getElementsByClassName("par");
const img = document.getElementsByClassName("img");
for(let i=0; i<par.length; i++){
    par[i].addEventListener("mouseover", function(e){
        img[i].style.height = "250px";
    });
    par[i].addEventListener("mouseout", function(e){
        img[i].style.height = "200px";
    });
}