// CREATION DE SELECTION DE CHAQUE ICONE
const facebook = document.querySelector(".facebook");
const twitter = document.querySelector(".twitter");
const instagram = document.querySelector(".instagram");

const bodyColorInitial = window.getComputedStyle(document.body).backgroundColor; // RECUPERE CODE COULEUR BODY
const borderRadiusInitial = "0%";
const boxShadowInitial = "none";


function Changements(element, color, name) { // CLASS(qui contient mes elements) + COULEUR + SPAN
    const couleurActuel = document.body.style.backgroundColor;
    const socialNames = element.querySelector(".social-name");      

    if(couleurActuel === color) {       // Si la couleur actuel est  strictement egale à la couleur (icone)
        document.body.style.backgroundColor = bodyColorInitial; // alors couleur body
        socialNames.textContent = ""; // zone de texte vide
        element.style.borderRadius = borderRadiusInitial; // border radius = 0%
        element.style.boxShadow = boxShadowInitial;
    } else {
        document.body.style.backgroundColor = color; // sinon couleur icone
        socialNames.textContent = name; // nom du reseau social
        element.style.borderRadius = "20%"; // border radius = 20%
        element.style.boxShadow = "rgba(0, 0, 0, 0.35) 0px 5px 15px";
    }
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