const board = document.querySelector("#board") // SELECTION DE L'ID 'BOARD'
        
const carrePrincipal = document.createElement("div") // CREE UNE DIV "CARREPRINCIPAL"
carrePrincipal.classList.add("carrePrincipal") // AJOUT DE LA CLASS CARREPRINCIPAL
board.appendChild(carrePrincipal) // AJOUTE L'ENFANT A BOARD

const backgroundColor = window.getComputedStyle(carrePrincipal).backgroundColor;  // PERMET DE CHERCHER L'INFO DU BACKGROUNDCOLOR
carrePrincipal.innerText = `${backgroundColor}`   // ECRIS L'INFORMATION


const colors = ["blue", "red", "green", "yellow"] // COULEUR DES CLONES "CARRE PRINCIPAL"

// CREER LES 4 CARRES
for(let i = 1; i <= 4; i++){
    const newCarre = carrePrincipal.cloneNode() // CLONE
    newCarre.classList.add("carrePrincipal") // AJOUTE A LA CLASS CARREPRINCIPAL
    newCarre.style.backgroundColor = colors[i] // APPLIQUE LA COULEUR
    board.appendChild(newCarre) // AJOUTE L'ENFANT A BOARD

    newCarre.addEventListener("click", function(){    // CHANGE LA COULEUR PRINCPAL AU CLIQUE "NEWCARRE"
        carrePrincipal.style.backgroundColor = newCarre.style.backgroundColor;

    carrePrincipal.innerText = `${newCarre.style.backgroundColor}` // ECRIS LA NEW COULEUR PRINCIPAL
    });
}