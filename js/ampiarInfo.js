 export function ampliarInformacionProducto(evento){

    let producto={}

    //lleno la informacion dle producto
    producto.foto=evento.target.parentElement.querySelector("img").src
    producto.nombre=evento.target.parentElement.querySelector("h4").textContent
    producto.Precio=evento.target.parentElement.querySelector("h1").textContent
    producto.descripcion=evento.target.parentElement.querySelector("p").textContent


      //cargar informaciond el producto dentro del modal
        
      let fotoInfo=document.getElementById("fotoinfo")
      fotoInfo.src=evento.target.parentElement.querySelector("img").src

      let tituloFoto=document.getElementById("tituloinfo")
      tituloFoto.textContent=evento.target.parentElement.querySelector("h4").textContent


      let descripcion=document.getElementById("descripcion")
      descripcion.textContent=evento.target.parentElement.querySelector("p").textContent

      let Precio=document.getElementById("precioinfo")
      console.log()
      Precio.textContent=evento.target.parentElement.querySelector("h1").textContent

      //devolver el producto al controlador
      return producto
  }