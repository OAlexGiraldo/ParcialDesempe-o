let productosT=
[

    {foto:'img/foto1.png',nombre:"Figura Cap Ameracia",precio:350000,descripcion:"Figura De Accion De Marvel Avengers 6 Pulgadas Surtidas coleciconables"},
    {foto:'img/foto2.png',nombre:"Figura Iroman",precio:390000,descripcion:"Figura De Accion De Marvel Avengers 6 Pulgadas Surtidas coleciconables"},
    {foto:'img/foto3.png',nombre:"Figura Black Widow",precio:400000,descripcion:"Figura De Accion De Marvel Avengers 6 Pulgadas Surtidas coleciconables"},
    {foto:'img/foto4.png',nombre:"Figura Hawkey",precio:350000,descripcion:"Figura De Accion De Marvel Avengers 6 Pulgadas Surtidas coleciconables"},
    {foto:'img/foto5.png',nombre:"Figura Thor",precio:350000,descripcion:"Figura De Accion De Marvel Avengers 6 Pulgadas Surtidas coleciconables"},
    {foto:'img/foto6.png',nombre:"Figura Hulk",precio:350000,descripcion:"Figura De Accion De Marvel Avengers 6 Pulgadas Surtidas coleciconables"},
    {foto:'img/foto7.png',nombre:"Figura Fury",precio:300000,descripcion:"Figura De Accion De Marvel Avengers 6 Pulgadas Surtidas coleciconables"},
    {foto:'img/foto8.png',nombre:"Figura Loki",precio:290000,descripcion:"Figura De Accion De Marvel Avengers 6 Pulgadas Surtidas coleciconables"},
    {foto:'img/foto9.png',nombre:"Figura Hela",precio:280000,descripcion:"Figura De Accion De Marvel Avengers 6 Pulgadas Surtidas coleciconables"},
    {foto:'img/foto10.png',nombre:"Figura Pantera Negra",precio:300000,descripcion:"Figura De Accion De Marvel Avengers 6 Pulgadas Surtidas coleciconables"},
    {foto:'img/foto12.png',nombre:"Figura Spiderman",precio:290000,descripcion:"Figura De Accion De Marvel Avengers 6 Pulgadas Surtidas coleciconables"},
    {foto:'img/foto11.png',nombre:"Figura Dr.Stranger",precio:300000,descripcion:"Figura De Accion De Marvel Avengers 6 Pulgadas Surtidas coleciconables"}
]

let filia=document.getElementById("fila")
productosT.forEach(function(producto){
    console.log(producto)

    //2.pintando etiquetas

    //div con la calse col
    let columna=document.createElement("div")
    columna.classList.add("col")

    //creo un div con las clases card y h-100
    let tarjeta=document.createElement("div")
    tarjeta.classList.add("card")
    tarjeta.classList.add("h-100")

    //creando img con clase card-img-top

    let foto=document.createElement("img")
    foto.classList.add("card-img-top")
    foto.src=producto.foto

    let titulo=document.createElement("h4")
    titulo.classList.add("text-center")
    titulo.textContent=producto.nombre

    let precio=document.createElement("h1")
    precio.classList.add("text-center")
    precio.textContent=producto.precio
     
    let parrafo=document.createElement("p")
    parrafo.classList.add("text-center")
    parrafo.textContent=producto.descripcion

    let boton=document.createElement("button")
    boton.classList.add("btn")
    boton.style.marginBlock
    boton.classList.add("btn-primary")
    boton.textContent="Mas Informacion"

   
    //3.padres e hiijos
    tarjeta.appendChild(foto)
    tarjeta.appendChild(titulo)
    tarjeta.appendChild(precio)
    tarjeta.appendChild(parrafo)
    tarjeta.appendChild(boton)
    columna.appendChild(tarjeta)
    filia.appendChild(columna)
})
