//CONTROLANDO ETIQUETAS CON EL DOM

//1.ALMACENAR EN MEMORIA (CREAR UNA VARIABLE)
//LA ETIQUETA QUE QUIERO CONTROLAR
let etiquetaImagen=document.getElementById("fotografia")


//2. CONTROLANDO NUESTRAS ETIQUETAS

//2.1 Controlar es cambiar la fuente (SRC) de una etiqueta
etiquetaImagen.src="./img/fmb2.png"

//2.2 Controlar es cambiar el contenido de texto de una etiqueta
let etiquetaTitulo=document.getElementById("titulo")
etiquetaTitulo.textContent="HISTORIA"

//2.3 Controlar es agregar estilos
etiquetaTitulo.classList.add("fuente","alineado")

//2.4 Controlar es remover estilos
let etiquetaParrafo=document.getElementById("parrafo")
etiquetaParrafo.classList.remove("text-danger")

//2.5 Controlar es DETECTAR EVENTOS
let etiquetaBoton=document.getElementById("boton")                  ///callback una funcion dentro de otra, funcion declarativa
etiquetaBoton.addEventListener("click",function(evento){            ///callback una funcion dentro de otra, funcion declarativa
    alert("estamos haciendo clic")
})                                                                  ///callback una funcion dentro de otra, funcion declarativa