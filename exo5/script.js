import { quotes } from "./quotes.js";


console.log(quotes)

console.log(quotes[1].content)

const board = document.getElementById("board");

quotes.forEach(function(i) {
    console.log(i);
    const rectangle = document.createElement("div");
    rectangle.classList.add("rectangle")

    const title = document.createElement("h2")
    title.classList.add("quote-title");
    title.textContent = i.title;

    rectangle.appendChild(title);

    board.appendChild(rectangle);
})