const secciones = document.querySelectorAll(".seccion");
const parrafos = document.querySelectorAll(".parrafo");

parrafos.forEach((parrafo) => {
    parrafo.addEventListener("dragstart", (event) => {
        parrafo.classList.add("dragging");
        event.dataTransfer.setData("id", parrafo.id);
    });

    // Eliminar el efecto de arrastrar
    parrafo.addEventListener("dragend", (event) => {
        parrafo.classList.remove("dragging");
    });
});

secciones.forEach((seccion) => {
    // Prevenir comportamiento por default
    // Cambiar el dropEffect
    seccion.addEventListener("dragover", (event) => {
        event.preventDefault();
        event.dataTransfer.dropEffect = "copy";
    });

    // Recibir la información del id
    // Asignar ese elemento a la variable parrafo
    // Añadir a la seccion ese parrafo
    seccion.addEventListener("drop", (event) => {
        const id_parrafo = event.dataTransfer.getData("id");
        const parrafo = document.getElementById(id_parrafo);
        seccion.appendChild(parrafo);
    });
});

const papelera = document.querySelector(".papelera");

papelera.addEventListener("dragover", (e) => {
    e.preventDefault();
    event.dataTransfer.dropEffect = "copy";
});

// Obtener el id del parrafo
// Eliminar el parrafo
papelera.addEventListener("drop", (e) => {
    const id_parrafo = e.dataTransfer.getData("id");
    document.getElementById(id_parrafo).remove();
});
