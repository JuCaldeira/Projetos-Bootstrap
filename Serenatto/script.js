const input = document.querySelector("#modo-noturno")
const elemento = document.querySelector("body")

input.addEventListener("click", () => {
    const modo = input.checked ? "dark" : "light"
    elemento.setAttribute("data-bs-theme", modo)
})