/* 12. Importar funcion para agregar coder (http-post) */
import { newCoder } from "../apiConnection/API.js";

/* 4. Selector de formulario */
const formulario = document.querySelector('#formulario');


/* 5. Listener para formulario */

formulario.addEventListener('submit', validateCoder);


function validateCoder(e) {
    e.preventDefault();

    /* 6. Captura de los values de los inputs o selects del formulario */
    const nombre = document.querySelector('#nombre').value;
    const promedio = document.querySelector('#promedio').value;
    const edad = document.querySelector('#edad').value;
    const nivelIngles = document.querySelector('#nivelIngles').value;
    const especialidad = document.querySelector('#especialidad').value;
    const expertoTecnologia = document.querySelector('#expertoTecnologia').value;
    const imagen = '../img/alejoymanu.jpg'

    /* 7. Literal Object Enhancment */

    const coder = {
        nombre,
        promedio,
        edad,
        imagen,
        nivelIngles,
        especialidad,
        expertoTecnologia
    }

    /* 8. /10. Validar campos no vacios */
    if (validate(coder)) {
        alert('TODOS LOS CAMPOS SON OBLIGATORIOS');
        return
    }

    newCoder(coder);
}

/* 9. Declaracion de funcion de validacion */

function validate(objeto) {
    return !Object.values(objeto).every(elem => elem !== '');
}
