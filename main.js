//dato un array contenente tot immagini creare uno slideshow

//crea array immagini
const items = ["img/01.webp","img/02.webp","img/03.webp","img/04.webp","img/05.webp",]
console.log(items);

//inserisci array in html
const container = document.getElementById("item_container");

for (let i = 0; i < items.length; i++) {
    
    const figure = document.createElement("figure");

    const img = document.createElement("img");
    img.src = items[i];

    container.append(figure);
    figure.append(img);
    figure.classList.add("item"); 
    
}











//navigazione
/*const next = document.querySelector(".next");
let item = 0;

next.addEventListener("click",

    function(){
        if (item < items.lenght -1) {
            items[item].c
        }
    }

);*/