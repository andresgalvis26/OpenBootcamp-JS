const boton = document.getElementById("btn")

//console.log(boton)

boton.addEventListener("click", () => {
    console.log("Click en el botón...")
})

$("#btn").click(() => {
    console.log("Hola, estoy usanndo jQuery")
})