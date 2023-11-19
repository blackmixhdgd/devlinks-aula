function toogleMode() {
const CONTEUDO = document.body
CONTEUDO.classList.toggle("light")
let avatar = CONTEUDO.querySelector("div#main header Img")

if (CONTEUDO.classList.contains("light")) {
    avatar.setAttribute("src", "./assets/avataroculos1.jpg")
} else {
    avatar.setAttribute("src", "./assets/maxresdefaultescurooo.jpg")
}
}