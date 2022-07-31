// Utilizando jQuery

// forma de trabajar
// $(selector).acción()
//$("li").hide()


// Debemos utilizar ocn jQuery esto:
// Esto se ejecutará después de que se termine de cargar el documento
// Si NO se utiliza, se corre el peligro de tener undefined
$(document).ready(() => {

    // Todos los elementos
    //$("h1").hide();

    // Por ID
    //$("#el1").hide()

    // Accediendo al botón
    $("#hide-btn").click(() => {
        console.log("Ocultando...")
        // $("h1").hide()
        $("h1").fadeOut()
    })

    $("#show-btn").click(() => {
        console.log("Mostrando...")
        // $("h1").show()
        $("h1").fadeIn()
    })


    $("#el1").click(() => {
        $("h1").css({color: "red"})
    })

    $("#el2").dblclick(() => {
        $("h1").css({color: "blue"})
    })

    $("#el3").click(() => {
        $("h1").css({color: "yellow"})
    })

    $(".new-element").click(() => {
        $("ul").append("<li>New Element in the List</li>")
        //$("ul").prepend("<li>New Element in the List</li>")
    })

    $("li").mouseenter((element) => {
        element.target.style.color = "blue"
    })
    
    $("li").mouseleave((element) => {
        element.target.style.color = "black"
    })
})