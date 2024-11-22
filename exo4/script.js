// CREATION DE SELECTION DE CHAQUE ICONE
const facebook = document.querySelector(".facebook");
const twitter = document.querySelector(".twitter");
const instagram = document.querySelector(".instagram");

const BodyColorInitial = window.getComputedStyle(document.body).backgroundColor; // RECUPERE CODE COULEUR BODY

function Changements(element, color, name) { // CLASS(qui contient mes elements) + COULEUR + SPAN
    const couleurActuel = document.body.style.backgroundColor;      

    if(couleurActuel === color) {       // Si la couleur actuel est  strictement egale à la couleur (icone)
        document.body.style.backgroundColor = BodyColorInitial; // alors couleur body
    } else {
        document.body.style.backgroundColor = color; // sinon couleur icone
    }


    const socialNames = element.querySelector(".social-name");
    socialNames.textContent = name; // MAJ TEXTE 
}


facebook.addEventListener("click", function() {
    Changements(facebook, "rgb(1, 101, 225)", "Facebook");
});

twitter.addEventListener("click", function() {
    Changements(twitter, "rgb(29, 155, 240)", "Twitter");
});

instagram.addEventListener("click", function() {
    Changements(instagram, "rgb(193, 53, 132)", "Instagram");
});