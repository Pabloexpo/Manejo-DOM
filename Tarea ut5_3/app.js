import { muestraTabla } from './utilidades.js';
window.onload = () => {
    let datos = [
        { juego: 'Baldur`s Gate III', año: '2023', plataforma: "PS5" },
        { juego: 'Elden Ring', año: '2022', plataforma: "PS5" },
        { juego: 'It Takes Two', año: '2021', plataforma: "XBOX SERIES" },
        { juego: 'The Lat of Us Part II', año: '2020', plataforma: "PS4" },
        { juego: 'Sekiro: Shadows Die Twice', año: '2019', plataforma: "PS4" },

    ]
    //Generamos el elemnto html donde va a ir nuestra tabla
    let main = document.createElement("main");
    muestraTabla(main, datos);

}

