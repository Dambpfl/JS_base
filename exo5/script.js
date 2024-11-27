import { quotes } from "./quotes.js"; // Importe la variable quotes du fichier

const board = document.getElementById("board");


// FONCTION AFFICHER TOUTE LES CITATIONS
function afficheQuotes() {
    quotes.forEach((quote) => {
        const rectangle = document.createElement("div");
        rectangle.className = 'rectangle';

        const quoteElement = document.createElement("div");
        quoteElement.innerHTML =
                 `<p class="title">${quote.title} </p>
                    <p class="content">"${quote.content}" </p>,
                        <p class="author"> ${quote.author} </p>`;

        
        const favori = document.createElement("div");
        favori.className = 'favori';
        
        const icon = document.createElement("i");
        icon.className = 'fa-regular fa-heart';

        icon.style.cursor = "pointer";

        icon.addEventListener("click", () => toggleFavorite(quote.id, icon));

        //verifier si un coeur est rouge (un ID est dans le tableau)
        const tableauFavori = getFavorites();
        if (tableauFavori.includes(quote.id)) {
            icon.classList.replace("fa-regular", "fa-solid");
        }

        board.appendChild(rectangle);
        rectangle.appendChild(quoteElement);
        rectangle.appendChild(favori);
        favori.appendChild(icon);
    });
}

afficheQuotes();

// Recupere le tableau de favori
function getFavorites() {
    const tableauFavori = localStorage.getItem("favorites"); // Recupere l'info localstorage (getItem)
    return tableauFavori ? JSON.parse(tableauFavori) : []; // transforme l'info en tableau
}

//ajouter enlever le coeur rouge
function toggleFavorite(id, icon) {
    const tableauFavori = getFavorites();
    if (tableauFavori.includes(id)){
        icon.classList.replace("fa-solid", "fa-regular");
        const index = tableauFavori.indexOf(id);
        console.log("click if");
        tableauFavori.splice(index, 1);
    } else {
        tableauFavori.push(id);
        icon.classList.replace("fa-regular", "fa-solid");
        console.log("click else");
    }
    // Mise en memoire du tableau de favori
    localStorage.setItem("favorites", JSON.stringify(tableauFavori)); 
}

