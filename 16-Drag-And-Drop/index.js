const parrafos = document.querySelectorAll(".parrafo")
const secciones = document.querySelectorAll(".seccion")

//console.log(parrafos)

// Debemos empezar a trabajar con eventos
// Existen eventos relacionados con el arrastrar y soltar

parrafos.forEach(parrafo => {
    // dragstart - inicio
    parrafo.addEventListener("dragstart", event => {
        //console.log("Inicio de arrastre")
        console.log("Estoy arrastrando el parrafo " + parrafo.innerText)
        parrafo.classList.add("dragging")
        event.dataTransfer.setData("id", parrafo.id)

        // Trabajando con la imagen fantasma
        const elem_fantasma = document.querySelector(".img-fantasma")
        //console.log(elem_fantasma)
        event.dataTransfer.setDragImage(elem_fantasma, 0, 0)
    })

    // dragend - final
    parrafo.addEventListener("dragend", () => {
        //console.log("Fin de arrastre")
        //console.log("Estoy finalizando el arrastre del parrafo " + parrafo.innerText)
        parrafo.classList.remove("dragging")
    })
})

// dragOver y drop
secciones.forEach(seccion => {
    // Por defecto el comportamiento de HTML quita la posibilidad
    // de gestionar los drops al hacer un dragover
    seccion.addEventListener("dragover", event => {
        event.preventDefault()
        // Cambiando el indicador al arrastrar
        event.dataTransfer.dropEffect = "copy" // copy por default
        //console.log("Drag Over")
    })

    seccion.addEventListener("drop", (e) => {
        console.log("Drop")
        const id_pararfo = e.dataTransfer.getData("id")
        //console.log("Párrafo ID: ", id_pararfo)
        const parrafo = document.getElementById(id_pararfo)
        seccion.appendChild(parrafo)
    })
})