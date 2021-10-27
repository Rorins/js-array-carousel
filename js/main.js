/**
 * JS CAROUSEL
 *
 * Dati tre array contenenti
 * una lista ordinata di 5 immagini e
 * una lista ordinata dei relativi 5 luoghi,
 * e una lista di 5 testi.
 * creare un carosello come nella foto alegata
 *
 * Al click dell'utente sulle frecce l'immagine attiva diventa
 * visibile in formato grande a sinistra e
 * nel suo angolo in basso a destra dovranno essere aggiunti i relativi titolo e il testo.
 * Aggiorniamo anche la thumbnail attiva.
 */

// Immagini
const imageCollection = [
    './img/01.jpg',
    './img/02.jpg',
    './img/03.jpg',
    './img/04.jpg',
    './img/05.jpg',
];

// Titoli
const titleCollection = [
    'Svezia',
    'Svizzera',
    'Gran Bretagna',
    'Germania',
    'Paradise',
];

// Testi
const textCollection = [
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis, magnam dolores dolorum corporis.',
    'Lorem ipsum',
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,',
    'Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,',
];

/* Richiamo classe images creando una sua variabile*/
const images = document.querySelector(".images")
/* Richiamo classe images creando una sua variabile*/
const thumbs = document.querySelector(".thumbs")
/* credo variable per l'immagine attiva che partirà da 1*/
let activeImage = 1;

/*Genero il contenuto di images usando un loop che andrà a prendere le immagini dalla relativa lista*/
for (let i = 0; i<imageCollection.length; i++){
    images.innerHTML += `<div class="image-container">
    <img src=${imageCollection[i]} alt="${titleCollection[i]}">
    <div class="text">
        <h3>${titleCollection[i]}</h3>
        <p>${textCollection[i]}</p>
    </div>
</div>`;

/*Genero il contenuto di thumbs usando un loop che andrà a prendere le thumbs dalla relativa lista*/
thumbs.innerHTML += `<div class="thumb active">
<img src=${imageCollection[i]} alt="${titleCollection[i]}">
</div>`
}

/*Immagine  attiva*/
document.getElementsByClassName("image-container")[activeImage].classList.add("active")
/*Immagine  attiva*/
document.getElementsByClassName("thumb")[activeImage].classList.add("active")

/* passaggio di immagine*/
const next= document.querySelector(".next")

next.addEventListener("click", function(){
    /*incremento di active image e thumbnail e reset con impostazione immagine successiva*/
    if(activeImage === imageCollection.length-1){
        activeImage = 0;
    }else{
        activeImage++;
    }
    document.querySelector(".image-container.active").classList.remove("active")
    document.getElementsByClassName("image-container")[activeImage].classList.add("active")

    document.querySelector(".thumb.active").classList.remove("active")
    document.getElementsByClassName("thumb")[activeImage].classList.add("active")
    
})