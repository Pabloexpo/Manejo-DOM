window.onload = () => {
    //Modificamos el contenido del título poniendo mi nombre. EJERCICIO 1
    let titulo = document.getElementById("titulo");
    titulo.innerText = "Tarea 5, ejercicio 1 - Pablo Expósito";

    //Modificación de la imagen del segundo artículo
    let articulos = document.getElementsByTagName("article");

    //Ocultamos el último artículo. EJERCICIO 3
    let articuloFinal = articulos[articulos.length - 1];
    articuloFinal.style.visibility = "hidden"; //De esta manera ocultamos el artículo
    //Recorrido de los resultados y añadimos a la cabecera el número de la noticia

    let contador = 1; //Establecemos un contador para que al recorrer el array se añada al contenido

    for (let i = 0; i < articulos.length; i++) {
        //Buscamos la segunda imagen. EJERCICIO 2
        if (i == 1) { 
        //Recogemos el último hijo del articulo
            let imagen = articulos[i].lastElementChild;
        //Cambiamos la imagen
            imagen.src = "sustitucion-noticia2.jpeg";
        }

        //EJERCICIO 4
        let div = articulos[i].firstElementChild; //Recogemos al primer hijo
        //Elaboramos el ejercicio con text content para recoger el texto, ya que si no se hiciera así concatenaría el contador con un objeto html div      
        div.textContent = contador + "-" + div.textContent;
        contador++;

        //EJERCICIO 5. Añadimos la clase cabecera al primer div de cada artículo
        div.className = "cabecera";
        console.dir(div)
    }

    //EJERCICIO 6. Reemplazamos la palabra Servicio Murciano de Salud por SMS
    let palabra = "Servicio Murciano de Salud";
    let cuerpo = document.getElementsByClassName("cuerpo");
    for (let i = 0; i < cuerpo.length; i++) {
        let div = cuerpo[i];
        // Realizamos esta acción porque let cuerpo nos trae una HTMLCollection, la cual no admite trabajar con includes y replace, por lo que pasamos a un elemento individual el cual si nos permirirá hacer esa acción
        if (div.textContent.includes(palabra)) {
            div.textContent = div.textContent.replace(palabra, "SMS");
        } 
    }


}