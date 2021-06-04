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
           "precio": "",
           "localidad": "Madrid",
           "año": "2015",
           "km": "45350 km"
        },
        {
            "tipo_coche": "Compacto",
            "tipo_cambio": "Manual",
            "combustible": "Gasolina",
            "marca": "Hyundai",
            "modelo": "Tucson",
            "imagen": "imagenes/hyundai.jpg",
            "precio": "34000",
            "localidad": "Madrid",
            "año": "2010",
            "km": "45350 km"
         },
         {
            "tipo_coche": "SUV",
            "tipo_cambio": "Manual",
            "combustible": "Gasolina",
            "marca": "Hyundai",
            "modelo": "Tucson",
            "imagen": "imagenes/hyundai.jpg",
            "precio": "",
            "localidad": "Madrid",
            "año": "2021",
            "km": "45350 km"
         },
         {
            "tipo_coche": "SUV",
            "tipo_cambio": "Manual",
            "combustible": "Gasolina",
            "marca": "Hyundai",
            "modelo": "Tucson",
            "imagen": "imagenes/hyundai.jpg",
            "precio": "",
            "localidad": "Madrid",
            "año": "2019",
            "km": "70200 km"
         },
         {
            "tipo_coche": "Compacto",
            "tipo_cambio": "Manual",
            "combustible": "Diesel",
            "marca": "Honda",
            "modelo": "1.6 i-DTEC Elegance Navi Pack",
            "imagen": "imagenes/honda.jpg",
            "precio": "10.990",
            "localidad": "Madrid",
            "año": "2015",
            "km": "88.944 km"
         },
         {
            "tipo_coche": "Compacto",
            "tipo_cambio": "Manual",
            "combustible": "Diesel",
            "marca": "Ford",
            "modelo": "Fiesta 1.5 TDCi 70kW (95CV) ST-Line 5p",
            "imagen": "imagenes/ford_fiesta.jpg",
            "precio": "9.990",
            "localidad": "Cordoba",
            "año": "2017",
            "km": "68.487 km"
         }
     ]

     var header = document.getElementsByTagName("header")
     for(i; i < json.length; i++){
        if(json[i].tipo_coche == "Compacto"){
            var tarjeta = document.createElement("div")
            tarjeta.setAttribute("class", "tarjeta")
            var espacioIm = document.createElement("div")
            espacioIm.setAttribute("class", "espacio-imagen")
            var imagen = document.createElement("img")
            imagen.src = json[i].imagen

            var contenedor = document.createElement("div")
            contenedor.setAttribute("class", "contenedor")
            var primeraFila = document.createElement("div")
            primeraFila.setAttribute("class", "primera-fila")
            var segundaFila = document.createElement("div")
            segundaFila.setAttribute("class", "segunda-fila")
            
            var precioCoche = document.createElement("div")
            precioCoche.setAttribute("class", "precio-coche")
            var tituloPrecio = document.createElement("span")
            tituloPrecio.textContent = "Precio: "
            tituloPrecio.setAttribute("class", "titulo-precio")
            var precio = document.createElement("span")
            precio.setAttribute("class", "precio")
            precio.textContent = json[i].precio

            var nombre = document.createElement("span")
            nombre.setAttribute("class", "marca")
            nombre.textContent = json[i].marca + " " + json[i].modelo
            var fav = document.createElement("img")
            fav.src = "imagenes/favourites-filled-star-symbol.png"
            fav.setAttribute("class", "favorito")

            var anio = document.createElement("span")
            anio.setAttribute("class", "año")
            anio.textContent = json[i].año
            var km = document.createElement("span")
            km.setAttribute("class", "km")
            km.textContent = json[i].km
            var combustible = document.createElement("span")
            combustible.setAttribute("class", "combustible")
            combustible.textContent = json[i].combustible
            var localidad = document.createElement("span")
            localidad.setAttribute("class", "localidad")
            localidad.textContent = json[i].localidad

            espacioIm.appendChild(imagen)

            precioCoche.appendChild(tituloPrecio)
            precioCoche.appendChild(precio)

            primeraFila.appendChild(precioCoche)
            primeraFila.appendChild(nombre)
            primeraFila.appendChild(fav)

            segundaFila.appendChild(anio)
            segundaFila.appendChild(km)
            segundaFila.appendChild(combustible)
            segundaFila.appendChild(localidad)

            contenedor.appendChild(primeraFila)
            contenedor.appendChild(segundaFila)

            tarjeta.appendChild(espacioIm)
            tarjeta.appendChild(contenedor)

            header[0].parentNode.insertBefore(tarjeta, header[0].nextSibling)
        }
     }
}

function tiempo(){
    setTimeout(buscar, 3000)
}