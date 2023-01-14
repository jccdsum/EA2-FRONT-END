console.log("pagina funcionando")
document.getElementById('titulo').innerHTML = "TITULO DE PAGINA";

$(document).ready(function(){
    console.log("pagina funcionando")

    //Seleccionar Elementos html
    
    $("h1").html("Texto modificado por su etiqueta");
    $("#titulo").html("texto modificado por si id");
    $(".display-3").html("Zorito lindo");

    //Agregar clase  [jq.addclass]

    $("h1").addClass("text-center text-uppercase");
    $("#p2").addClass("text-center");
    
    //Quitar clase [jqRemoceClass]

    $("#Parrafo").removeClass("display-5");


    //Agregar Elemnto [jqAppend]

    $("#Parrafo").append("<p>Cuarto parrafo</p>");

    //Quitar Elemnto [jqRemove]

   // $("#p3").remove();

    //Modificar Propiedades CSS [jqCssSet]

    $("#p1").css("color", "red");
    $("#p3").css({color :"blue" , background :"green" ,padding :"35px" ,});
    $("h1").css("color", "red");


    //Metodo attr() []

    $("img").attr("src", "https://th.bing.com/th/id/OIP.-7jCblBA8lblq47opGKoYwHaKY?pid=ImgDet&rs=1" );
    $("img").attr("width", "300px");
    



})