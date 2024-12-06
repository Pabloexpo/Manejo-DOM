export function muestraTabla(main, array) {
    //Generamos la tabla
    let tabla = document.createElement("table");
    //Damos estilos a la tabla
    tabla.style.width="30%";
    tabla.style.fontFamily="Arial"

    //Recuperamos el nombre de las claves con Object.keys
    let claves = Object.keys(array[0]);
    //Ahora tenemos un array de dos posiciones, vamos a generar los títulos de las columnas a partir de ese array
    //ahora generamos una fila para los titulos
    let trTitulos = document.createElement("tr");
    for (let i = 0; i < claves.length; i++) {
        //Recogemos el valor que tenga la clave
        let titulo = claves[i];
        //Vamos a transformar la primera letra de cada título a mayúscula para mostrarlo de mejor manera, lo hacemos aquí por si necesitasemos trabajar con las claves del array  y evitar errores a la hora de codificar
        titulo = titulo[0].toUpperCase() + titulo.substring(1);
        //Generamos una th
        let th = document.createElement("th");
        //incluimos en el th el valor del titulo
        th.textContent = titulo;
        //le damos estilos a esos títulos
        th.style.border="1px solid black";
        th.style.padding="5px";
        th.style.backgroundColor="#f2f2f2"
        //añadimos al tr el th
        trTitulos.append(th);

    }

    //añadimos el tr a la tabla
    tabla.appendChild(trTitulos);
    //por cada elemento, vamos generando una fila
    for (let fila of array) {
        //Generamos una fila por conjunto de datos que tengamos
        let trDatos = document.createElement("tr");
        //iteramos sobre los valores de cada fila, puesto que cn for of recorremos tanto clave como valor
        for (let valor in fila) {
            //Por cada dato, tendremos un td
            let td = document.createElement("td");
            //Añadimos el contenido al td, por cada valor dentro del conjunto de atributos que estamos iterando lo metemos en la celda
            td.innerHTML = fila[valor];
            //Le damos estilos a las celdas
            td.style.border="1px solid black";
            td.style.textAlign="center";
            td.style.padding="5px"
            //Metemos la celda en la fila
            trDatos.append(td);
        }
        //Incluimos la fila a la tabla
        tabla.append(trDatos);
    }
    //Alojamos la tabla en el elemento del dom que hayamos indicado
    main.append(tabla);
    document.body.append(main);
}

