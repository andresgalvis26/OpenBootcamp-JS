const hTexto = document.getElementById("h-texto")

console.log(hTexto)

// Se pasa el nombre del evento y el objeto 'event -> e'
hTexto.addEventListener("cambioTexto", e => {
    console.log(e.detail)
    hTexto.innerText = e.detail.texto
    hTexto.style.color = e.detail.color
})

// Creando la función cambiarTexto que recibe los parámetros nuevoTexto y color
function cambiarTexto(nuevoTexto, color) {

    // Creando un nuevo evento para cambiar esto
    // Debe tener el mismo nombre del evento de arriba
    const evento = new CustomEvent("cambioTexto", {

        // Defino los detalles que voy a cambiar
        detail: {
            texto: nuevoTexto,
            color
        }
    })
    // Lanzar este evento sobre el elemento hTexto
    hTexto.dispatchEvent(evento)
}