import { quotes } from "./quotes.js";


console.log(quotes)

console.log(quotes[1].content)

const board = document.getElementById("board");

quotes.forEach(function(i) {
    console.log(i);
    const rectangle = document.createElement("div"); // CREE DIV RECTANGLE
    rectangle.classList.add("rectangle")

    const title = document.createElement("p") // TITRE
    title.classList.add("quote-title");
    title.textContent = i.title;

    const author = document.createElement("p") // AUTEUR
    author.classList.add("quote-author");
    author.textContent = i.author;

    const content = document.createElement("p") // CONTENU
    content.classList.add("quote-content");
    content.textContent = i.content;

    rectangle.appendChild(title); // ALL DANS RECTANGLE
    rectangle.appendChild(author);
    rectangle.appendChild(content);

    board.appendChild(rectangle); // RECTANGLE DANS BOARD
})