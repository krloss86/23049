/*
    quiero sumar los valores que estan en el html
*/
const apuntadorAA = document.getElementById('a');

const apuntadorAB = document.getElementById('b');

const apuntadorARes = document.getElementById('res');

const apuntadorAlSumador = document.getElementById('sumador');

//al boton sumar le asocio una funcion
apuntadorAlSumador.addEventListener('click',sumar);

function sumar() {
    //dentro puede ver las variables que estan afuera
    // de la linea 15 hacia arriba
    
    apuntadorARes.innerText = parseFloat(apuntadorAA.value) + parseFloat(apuntadorAB.value);
}