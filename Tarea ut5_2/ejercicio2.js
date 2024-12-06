window.onload=()=>{
    //EJERCICIO 1
    //Un título con tu nombre.
    let contenidoH1= "Ejercicio 2 Pablo Expósito"; 
    //Vamos a generar el header
    let header = document.createElement('header');

    let h1= document.createElement('h1'); 
    h1.textContent= contenidoH1; 
    //le añadimos h1 como hijo al header
    header.append(h1); 
    //Añadimos el header como hijo al body
    document.body.append(header); 

    //EJERCICIO 2
    // Un elemento contenedor, que contendrá los artículos de la tienda.
    let main = document.createElement('main'); 
    //Como voy a plantear el ejercicio para generar tantos hijos de este div como contenido tengamos, de momento no voy a añadirle ningún elemento más, la intención será ir generandolo en un bucle conforme leamos los datos

    for (let dato of datos){
        //titulo
        let titArticulo = document.createElement('h3'); 
        //recogemos del primer dato del array el atributo correspondiente
        titArticulo.textContent=dato.nombre; 

        //descripcion
        let descripcion= document.createElement('p'); 
        descripcion.textContent = dato.descripcion; 

        //precio
        let precio = document.createElement('p'); 
        precio.textContent= dato.precio + " €"; 

        //imagen
        let img = document.createElement('img'); 
        img.src=dato.imagen;
        //establecemos dimensiones iguales para todas las imagenes
        img.style.height="10em";
        //utilizamos object fit -> cover para que las imágenes se ajusten
        img.style.objectFit = "cover";

        //lo metemos en el article
        let article = document.createElement('article'); 
        article.append(titArticulo); 
        article.append(descripcion);
        article.append(precio); 
        article.append(img); 

        //introducimos el article en el main
        main.append(article); 
        document.body.append(main)

    }
}