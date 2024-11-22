import { quotes } from "./quotes.js"; // Importe la variable quotes du fichier


console.log(quotes)

console.log(quotes[1].content)

const board = document.getElementById("board");

quotes.forEach(function(i) {
    console.log(i);
    const rectangle = document.createElement("div"); // CREE DIV RECTANGLE
    rectangle.classList.add("rectangle")

    const title = document.createElement("p") // TITRE
    title.classList.add("title");
    title.textContent = i.title;

    const author = document.createElement("p") // AUTEUR
    author.classList.add("author");
    author.textContent = i.author;

    const content = document.createElement("p") // CONTENU
    content.classList.add("content");
    content.textContent = i.content;

    const favori = document.createElement("div"); // CREE DIV FAVORI
    favori.classList.add("favori");

    const coeurIcon = document.createElement("coeur"); // ICONE COEUR
    coeurIcon.classList.add("fa-regular", "fa-heart"); // CLASS DE FONTAWESOME VIDE + COEUR

    board.appendChild(rectangle); // DIV RECTANGLE DANS BOARD
    
    rectangle.appendChild(title); // ALL DANS RECTANGLE
    rectangle.appendChild(content);
    rectangle.appendChild(author);
    rectangle.appendChild(favori);
    
    favori.appendChild(coeurIcon) // coeurIcon DANS FAVORI

    coeurIcon.addEventListener("click", function() {
        coeurIcon.classList.toggle("fa-solid"); // CLASS FONTAWESOME  PLEIN
        coeurIcon.classList.toggle("fa-regular"); // CLASS FONTAWESOME  VIDE
    })
    
})