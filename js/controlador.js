import { llenarTienda } from "./Tiendallenado.js";
import {ampliarInformacionProducto}from "./ampiarInfo.js";
//creo un producto vacio
let producto={}

// llamando a tienda llenado
llenarTienda()

//rutina para ampliar informacion
let contenedorTienda=document.getElementById("fila")
contenedorTienda.addEventListener("click",function(evento)
    {
        if(evento.target.classList.contains("btn")){
            let modalinfo = new bootstrap.Modal(document.getElementById('modalinfo'))

        producto=ampliarInformacionProducto(evento)
         console.log(producto)
        modalinfo.show()
        }
    })

    //rutina para añadir un producto al carrito compras
let carrito=[]

let btnagregar=document.getElementById("añadir")
btnagregar.addEventListener("click",function(){

})