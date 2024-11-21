const board2 = document.querySelector("#board2") // SELECTION DE L'ID 'BOARD'


// CREE MON CARRE PRINCIPAL
const carrePrincipal = document.createElement("div") // CREE UNE DIV "CARREPRINCIPAL"
carrePrincipal.classList.add("carrePrincipal") // AJOUT DE LA CLASS CARREPRINCIPAL
board2.appendChild(carrePrincipal) // AJOUTE L'ENFANT A BOARD2

const backgroundColor = window.getComputedStyle(carrePrincipal).backgroundColor;  // PERMET DE CHERCHER L'INFO DU BACKGROUNDCOLOR
carrePrincipal.innerText = `${backgroundColor}`   // ECRIS L'INFORMATION


const colors = ["blue", "red", "green", "purple"] // COULEUR DES CLONES "CARRE PRINCIPAL"  [0, 1, 2, 3]

// CREER LES 4 CARRES
for(let i = 0; i <= 3; i++){
    const newCarre = carrePrincipal.cloneNode() // CLONE
    newCarre.classList.add("carrePrincipal") // AJOUTE A LA CLASS CARREPRINCIPAL
    newCarre.style.backgroundColor = colors[i] // APPLIQUE LA COULEUR
    board.appendChild(newCarre) // AJOUTE L'ENFANT A BOARD

}



// CHANGEMENT DE COULEUR AU CLIQUE
const carres = document.querySelectorAll(".carrePrincipal");  // SELECTION DE TOUT LE CONTENU DE .CARREPRINCIPAL
    carres.forEach((carre) => {           // CREE UNE BOUCLE CARRE DE TOUT MES CARRES
        carre.addEventListener("click", function () { // AJOUTE AU CLIQUE

            carrePrincipal.style.backgroundColor = carre.style.backgroundColor; // DE MON CARRE PRINCIPAL -> LA COULEUR DU CARRE CLIQUER

            carrePrincipal.innerText = `${carre.style.backgroundColor}`; // DE MON CARRE PRINCIPAL -> LE TEXTE DU CARRE CLIQUER
        })
    })