// CREATION DE SELECTION DE CHAQUE ICONE
const facebook = document.querySelector(".facebook");
const twitter = document.querySelector(".twitter");
const instagram = document.querySelector(".instagram");

function Changements(element, color, name) { // CLASS(qui contient mes elements) + COULEUR + SPAN
    document.body.style.background = color;  //  CHANGE COULEUR DE BODY ! (background)

    const socialNames = element.querySelector(".social-name");
    socialNames.textContent = name; // MAJ TEXTE 
    element.classList.add("clicked"); // Interrupteur
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