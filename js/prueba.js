function buscar(){
    var i = 0
    var json = [
        {
           "tipo_coche": "Compacto",
           "tipo_cambio": "Manual",
           "combustible": "Gasolina",
           "marca": "Hyundai",
           "modelo": "Tucson",
           "imagen": "imagenes/hyundai.jpg",
           "precio": ""
        },
        {
            "tipo_coche": "Compacto",
            "tipo_cambio": "Manual",
            "combustible": "Gasolina",
            "marca": "Hyundai",
            "modelo": "Tucson",
            "imagen": "imagenes/hyundai.jpg",
            "precio": "34000"
         },
         {
            "tipo_coche": "Compacto",
            "tipo_cambio": "Manual",
            "combustible": "Gasolina",
            "marca": "Hyundai",
            "modelo": "Tucson",
            "imagen": "imagenes/hyundai.jpg",
            "precio": ""
         },
         {
            "tipo_coche": "Compacto",
            "tipo_cambio": "Manual",
            "combustible": "Gasolina",
            "marca": "Hyundai",
            "modelo": "Tucson",
            "imagen": "imagenes/hyundai.jpg",
            "precio": ""
         },
         {
            "tipo_coche": "Compacto",
            "tipo_cambio": "Manual",
            "combustible": "Gasolina",
            "marca": "Hyundai",
            "modelo": "Tucson",
            "imagen": "imagenes/hyundai.jpg",
            "precio": ""
         }
     ]

     for(i; i < json.length; i++){
         var tarjeta = document.createElement("div")
         tarjeta.setAttribute("class", "tarjeta")
         var espacioIm = document.createElement("div")
         espacioIm.setAttribute("class", "espacio-imagen")
         var imagen = document.createElement("img")
         imagen.src = json[i].imagen
         var precio = document.createElement("div")
         precio.setAttribute("class", "precio-coche")
         var tituloPrecio = document.createElement("span")
         tituloPrecio.textContent = "Precio"

         precio.appendChild(tituloPrecio)
         espacioIm.appendChild(imagen)
         tarjeta.appendChild(espacioIm)
         tarjeta.appendChild(precio)

         document.body.appendChild(tarjeta)
     }
}

function tiempo(){
    setTimeout(buscar, 3000)
}