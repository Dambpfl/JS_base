// CREATION DE SELECTION DE CHAQUE ICONE
const facebook = document.querySelector(".facebook");
const twitter = document.querySelector(".twitter");
const instagram = document.querySelector(".instagram");

function Changement(color) {
    document.body.style.background = color;  //  COULEUR DE BODY !
}

facebook.addEventListener("click", function() {
    Changement("rgb(1, 101, 225)");
});

twitter.addEventListener("click", function() {
    Changement("rgb(29, 155, 240)");
});

instagram.addEventListener("click", function() {
    Changement("rgb(193, 53, 132)");
});