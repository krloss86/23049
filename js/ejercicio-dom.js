calcularEdad = () => {
    //obtengo la referencia al input con id="anioNacimiento"
    const anioNacimiento = document.getElementById("anioNacimiento");
    if(!isAnioValido(anioNacimiento.value)) {//si ! es valido
        actualizarEdad('');
        return;
    }

    //convertir en funcion
    const edad = calcular(anioNacimiento.value);

    actualizarEdad(edad);
}

actualizarEdad = (nuevaEdad) => {
    //obtengo la referencia al span con id="edad"
    const spanEdad = document.getElementById("edad");
    //tambien
    spanEdad.innerText = `${nuevaEdad}`;//alt+96
}

calcular = (anioNacimiento) => {
    const hoy = new Date(); // llamamos al objeto, viene de fabrica
    const edad = hoy.getFullYear() - parseInt(anioNacimiento); // o number
    return edad;
}

//creo otra funcion de validacion
isAnioValido = (anioNacimiento) => {
    //si anio de nacimiento es vacio o nulo o undefined 0 cero
    if(!anioNacimiento) {
        return false;
    } 

    //verifico que sea un numero
    if(Number(anioNacimiento) < 0) {
        return false;
    }
    
    return true;
}

//asociar evento al boton calcular edad
const boton = document.getElementById('btnCalcularEdad');
//asocio al boton el evento click: addEventListener
boton.addEventListener('click', calcularEdad);

calcularEdad();//invoca una funcion