function jsonList(){
   var json = [
      {
          "tipo_coche": "SUV",
          "tipo_cambio": "Manual",
          "combustible": "Gasolina",
          "marca": "Hyundai",
          "modelo": "Tucson 1.6 GDi Essence 4x2",
          "imagen": "imagenes/hyundai.jpg",
          "precio": "34000",
          "localidad": "Madrid",
          "año": "2010",
          "km": "45350 km"
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
       },
       {
          "tipo_coche": "SUV",
          "tipo_cambio": "Automatico",
          "combustible": "Diesel",
          "marca": "Audi",
          "modelo": "Q3 2.0 TDI Sport",
          "imagen": "imagenes/audi.jpg",
          "precio": "29.500",
          "localidad": "Cordoba",
          "año": "2018",
          "km": "48.767 km"
       },
       {
          "tipo_coche": "SUV",
          "tipo_cambio": "Automatico",
          "combustible": "Gasolina",
          "marca": "Peugeot",
          "modelo": "5008 1.6 Turbo GT Line",
          "imagen": "imagenes/peugeot.jpg",
          "precio": "27.500",
          "localidad": "Madrid",
          "año": "2017",
          "km": "44.609 km"
       },
       {
          "tipo_coche": "SUV",
          "tipo_cambio": "Automatico",
          "combustible": "Diesel",
          "marca": "Volvo",
          "modelo": "XC60 2.0 D3 Kinetic 2WD",
          "imagen": "imagenes/volvo.jpg",
          "precio": "21.100",
          "localidad": "Valencia",
          "año": "2016",
          "km": "88.609 km"
       },
       {
          "tipo_coche": "Compacto",
          "tipo_cambio": "Manual",
          "combustible": "Gasolina",
          "marca": "Kia",
          "modelo": "Picanto 1.0 Concept",
          "imagen": "imagenes/kia.jpg",
          "precio": "6.100",
          "localidad": "Barcelona",
          "año": "2017",
          "km": "22.689 km"
       },
       {
          "tipo_coche": "Compacto",
          "tipo_cambio": "Manual",
          "combustible": "Diesel",
          "marca": "Audi",
          "modelo": "A1 1.6 TDI 105cv Attraction",
          "imagen": "imagenes/audi_a1.jpg",
          "precio": "8.000",
          "localidad": "Sevilla",
          "año": "2011",
          "km": "145.689 km"
       }
   ]

   return json
}

function listaFavoritos(){
   var json = [
      {
          "tipo_coche": "SUV",
          "tipo_cambio": "Manual",
          "combustible": "Gasolina",
          "marca": "Hyundai",
          "modelo": "Tucson 1.6 GDi Essence 4x2",
          "imagen": "imagenes/hyundai.jpg",
          "precio": "34000",
          "localidad": "Madrid",
          "año": "2010",
          "km": "45350 km"
       },
       {
          "tipo_coche": "Compacto",
          "tipo_cambio": "Manual",
          "combustible": "Gasolina",
          "marca": "Kia",
          "modelo": "Picanto 1.0 Concept",
          "imagen": "imagenes/kia.jpg",
          "precio": "6.100",
          "localidad": "Barcelona",
          "año": "2017",
          "km": "22.689 km"
       },
       {
          "tipo_coche": "SUV",
          "tipo_cambio": "Automatico",
          "combustible": "Gasolina",
          "marca": "Peugeot",
          "modelo": "5008 1.6 Turbo GT Line",
          "imagen": "imagenes/peugeot.jpg",
          "precio": "27.500",
          "localidad": "Madrid",
          "año": "2017",
          "km": "44.609 km"
       }
   ]

   return json
}

function guardarFavoritos(){
   var i = 0
   var json = listaFavoritos()
   var header = document.getElementsByTagName("header")
     for(i; i < json.length; i++){
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
         fav.src = "imagenes/estrella_roja.png"
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

         var datos = document.createElement("div")
         datos.setAttribute("class", "datos-coche")

         var enlace = document.createElement("a")
         enlace.href = "descripcion_vehiculo.html"

         espacioIm.appendChild(imagen)

         precioCoche.appendChild(tituloPrecio)
         precioCoche.appendChild(precio)

         primeraFila.appendChild(precioCoche)
         primeraFila.appendChild(nombre)
         primeraFila.appendChild(fav)

         datos.appendChild(anio)
         datos.appendChild(km)
         datos.appendChild(combustible)
         datos.appendChild(localidad)

         segundaFila.appendChild(datos)

         contenedor.appendChild(primeraFila)
         contenedor.appendChild(segundaFila)

         tarjeta.appendChild(espacioIm)
         tarjeta.appendChild(contenedor)

         enlace.appendChild(tarjeta)

         header[0].parentNode.insertBefore(enlace, header[0].nextSibling)
     }
}

function devolverOpciones(){
   var opcionesSeleccionadas = []
   var opciones = document.getElementsByName("opcion")
   for(var i = 0; i < opciones.length; i++){
      if(opciones[i].checked){
         opcionesSeleccionadas.push(opciones[i].id)
      } 
    }
   return opcionesSeleccionadas
}

function seleccionar(div){
   var opcion = div.childNodes[1]
   opcion.checked = true
   
}


function buscar(){
   var i = 0
   var json = jsonList()
   var header = document.getElementsByTagName("header")
     for(i; i < json.length; i++){
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

         var datos = document.createElement("div")
         datos.setAttribute("class", "datos-coche")
         var aniadir = document.createElement("img")
         aniadir.setAttribute("class", "añadir")
         aniadir.src = "imagenes/add.png"

         var enlace = document.createElement("a")
         enlace.href = "descripcion_vehiculo.html"
         var enlaceFavoritos = document.createElement("a")
         enlaceFavoritos.href = "favoritos.html"
         var enlaceComparar = document.createElement("a")
         enlaceComparar.href = "comparar_vehiculo.html"

         espacioIm.appendChild(imagen)

         precioCoche.appendChild(tituloPrecio)
         precioCoche.appendChild(precio)

         enlaceFavoritos.appendChild(fav)
         enlaceComparar.appendChild(aniadir)

         primeraFila.appendChild(precioCoche)
         primeraFila.appendChild(nombre)
         primeraFila.appendChild(enlaceFavoritos)

         datos.appendChild(anio)
         datos.appendChild(km)
         datos.appendChild(combustible)
         datos.appendChild(localidad)

         segundaFila.appendChild(datos)
         segundaFila.appendChild(enlaceComparar)

         contenedor.appendChild(primeraFila)
         contenedor.appendChild(segundaFila)

         tarjeta.appendChild(espacioIm)
         tarjeta.appendChild(contenedor)

         enlace.appendChild(tarjeta)

         header[0].parentNode.insertBefore(enlace, header[0].nextSibling)
     }
}


function tiempo(){
   setTimeout(buscar, 500)
}

function favoritos(){
   setTimeout(guardarFavoritos, 500)
}

function encontrarVehiculo(nombre){
   var pos = 0
   var json = jsonList()

   for(var i = 0; i < json.length; i++){
         var nombreCoche = json[i].marca + " " + json[i].modelo
         if(nombreCoche == nombre){
            pos = i
         } 
      }

      return pos
   }

function cargarVehiculo(pos){
   var json = jsonList()
   var coche = document.createElement("img")
   coche.src = json[pos].imagen

   document.body.appendChild(coche)
}