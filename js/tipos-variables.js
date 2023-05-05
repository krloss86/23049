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

/*
    - operadores artimeticos (+ - * /)
    - logicos &&: izq  && der  
*/

const a = 10;//number
const b = '10';//string
const c = 50;

console.log(a === b);

//quiero saber si c > 30 y si a es igual a b?

console.log(a === b &&  c > 30);


const usuario = 'pepe';
const password = '1234';

//si usuario es carlos y password es 1234 mostrar un alerta

//condicional!!!!!!
if(usuario === 'carlos' && password === '1234') {
    alert('acceso correcto');
} 