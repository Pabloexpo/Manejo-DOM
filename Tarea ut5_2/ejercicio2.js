window.onload=()=>{
    //EJERCICIO 1
    //Vamos a generar el header
    let header = document.createElement("header");
    //Generamos el título de la página y le añadimos contenido
    let h1= document.createElement("h1");
    h1.textContent="EJERCICIO 2 PABLO EXPÓSITO MARTÍNEZ"; 
    //le añadimos h1 como hijo al header
    header.appendChild(h1);
    //Añadimos el header como hijo al body
    document.body.appendChild(header);


    //EJERCICIO 2
    //Generamos el elemento contenedor
    let contenedor = document.createElement("div"); //El contenedor será un div
    //un div al que le añadiremos una clase contenedor
    contenedor.className="contenedor";
    //console.log(contenedor);
    //Cómo voy a plantear el ejercicio para generar tantos hijos de este div como contenido tengamos, de momento no voy a añadirle ningún elemento más, la intención será ir generandolo en un bucle conforme leamos los datos

    //EJERCICIO 3
    let main = document.createElement("main"); //Generamos un main donde introduzcamos los artículos
    for (dato of datos){
        //Generamos el article que tenga el contenido del artículo
        let articulo = document.createElement("article");
        //Generamos elementos tipo párrafo o h3 para el nombre, la descripción y el precio y vamos añadiendoselo al artículo
        let titulo= document.createElement("h3");
        titulo.textContent=dato.nombre;
        
        let descripcion = document.createElement("p");
        descripcion.textContent=dato.descripcion
        let precio = document.createElement("p");
        precio.textContent=dato.precio + " €";
        let imagen= document.createElement("img");
        imagen.src=dato.imagen
        imagen.style.width="300px";
        imagen.style.height="180px"
        //Ahora vamos añadiendo en orden esos datos
        articulo.appendChild(titulo);
        articulo.appendChild(descripcion);
        articulo.appendChild(precio);
        articulo.appendChild(imagen);
        //Añadimos el article al main y luego el main al body
        main.appendChild(articulo)
        document.body.appendChild(main);
        //Lo hacemos de esta forma para posteriormente aplicar flex al main 
        

        
    }

}