const carre = document.createElement("div")
carre.classList.add("carre")

const board = document.querySelector("#board")
board.appendChild(carre)

carre.innerText = "Texte"

carre.addEventListener("click", function(){
    const className = carre.className;
    const colorText = window.getComputedStyle(carre).color;
    const backgroundColor = window.getComputedStyle(carre).backgroundColor;
    const height = carre.offsetHeight;
    const width = carre.offsetWidth;
    const display = window.getComputedStyle(carre).display;
    const fontFamily = window.getComputedStyle(carre).fontFamily;
    const fonSize = window.getComputedStyle(carre).fontSize;

    alert(`
    Class: ${className}
    Background color: ${backgroundColor}
    Color : ${colorText}
    Height : ${height}
    Width : ${width}
    Display : ${display}
    Display : ${fontFamily} (${fonSize})`
    );
})