const f = document.getElementById("formulario")

console.log(f)

// Añadiendo un control para los eventos
f.addEventListener("submit", e => {
    console.log(e)
    // Evitar el comportamiento x default
    e.preventDefault()
})