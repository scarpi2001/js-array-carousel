//dato un array contenente tot immagini creare uno slideshow

//crea array immagini
const items = ["img/01.webp","img/02.webp","img/03.webp","img/04.webp","img/05.webp"]
console.log(items);

//inserisci array in html
const container = document.getElementById("container");

for (let i = 0; i < items.length; i++) {
    
    container.innerHTML = `<figure class="item active"><img src="${items[i]}"></figure>`;
    
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