//dato un array contenente tot immagini creare uno slideshow

//crea array immagini
const imgs = ["img/01.webp","img/02.webp","img/03.webp","img/04.webp","img/05.webp",]
console.log(imgs);

//inserisci array immagini in html
//richiama container di figure
const container = document.getElementById("item_container");

for (let i = 0; i < imgs.length; i++) {
    //crea figure del container
    const figure = document.createElement("figure");
    const img = document.createElement("img");
    img.src = imgs[i];

    //inserisci oggetti nel container
    container.append(figure);
    figure.append(img);
    figure.classList.add("item");   
}

//crea array oggetti
const items = document.getElementsByClassName("item");
items[0].classList.add("active");
console.log(items);

//navigazione
//pulsante next
const next = document.querySelector(".next");
let active = 0;
next.addEventListener("click",
    function(){
        if (active < imgs.length -1) {
            //togli classe active elemento corrente
            items[active].classList.remove("active");
            //incrementa indice
            active++;
            //aggiungi classe active elemento successivo
            items[active].classList.add("active");
    
            //fai scomparire pulsante una volta raggiunta l'ultima immagine (ultimo indice array imgs)
            if (active === imgs.length - 1) {
                next.classList.add("hidden");
            } else if (active < imgs.length - 1) { //fai ricomparire pulsante quando sei in mezzo allo slideshow (active non è piu ultimo indice)
                prev.classList.remove("hidden");
            }
        }    
    }
);

//pulsante prev
const prev = document.querySelector(".prev");
prev.addEventListener("click",
    function(){
        if (active > 0) {
            //togli classe active elemento corrente
            items[active].classList.remove("active");
            //decrementa indice
            active--;
            //aggiungi classe active elemento precedente
            items[active].classList.add("active");
            
            //fai scomparire pulsante una volta raggiunta prima immagine (primo indice array imgs)
            if (active === 0) {
                prev.classList.add("hidden");
            } else if (active > 0) { //fai ricomparire pulsante quando sei in mezzo allo slideshow (active non è piu primo indice)
                next.classList.remove("hidden");
            }
        } 
    }
);
