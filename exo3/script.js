const board = document.querySelector("#board")

// CREE CARRE
for (let i = 1; i <= 4; i++) {
    const carre = document.createElement("div")
    carre.classList.add("carre")
    carre.textContent = i;
    board.appendChild(carre)

    carre.addEventListener("click", function(){
        this.classList.toggle('clicked');
    })
}
