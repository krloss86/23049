/*dar de alta un alumno:
obtener los datos desde el html
mostrar por consola
*/
function guardarAlumno() {
    
    //capturo los elementos html
    const apellido = get('apellido');
    const valueApellido = apellido.value;

    const nombre = get('nombre');
    const valueNombre = nombre.value;

    const dni = get('dni');
    const valueDni = dni.value;

    const curso = get('curso');
    const valueCurso = curso.value;//???

    const horario = get('horario');
    const valueHorario = horario.value;

    //creo un objeto usando los valores
    const alumno = {
        apellido: valueApellido,
        nombre: valueNombre,
        dni: valueDni,
        curso: valueCurso,
        horario: valueHorario
    };

    console.log('alumno v1', alumno);
}
function guardarAlumnoV2() {
    
    //capturo los elementos html
    const valueApellido = getValue('apellido');
    const valueNombre = getValue('nombre');
    const valueDni = getValue('dni');
    const valueCurso = getValue('curso');
    const valueHorario = getValue('horario');

    //creo un objeto usando los valores
    const alumno = {
        apellido: valueApellido,
        nombre: valueNombre,
        dni: valueDni,
        curso: valueCurso,
        horario: valueHorario
    };

    //console.log('alumno v2', alumno);
    guardarDato('alumno', alumno);

}
function guardarDato(nombre,dato) {
    localStorage.setItem(nombre, JSON.stringify(dato));
}

function get(id) {
    //retorna el objeto que esta en el html
    return document.getElementById(id);
}
function getValue(id) {
    //retorna el objeto que esta en el html
    return document.getElementById(id).value;
}

//apunto al boton
const apuntadorAButonGuardar = document.getElementById('grabar');
//asociar el evento 'click'
apuntadorAButonGuardar.addEventListener('click',guardarAlumno);
apuntadorAButonGuardar.addEventListener('click',guardarAlumnoV2);

function load() {
    
    //acá voy mirar si existe el alumnos gurdado en el localstorage
    const alumnoGuardadoEnLocalStorage = localStorage.getItem('alumno');

    if(typeof alumnoGuardadoEnLocalStorage !== undefined)  {
        const obj = JSON.parse(alumnoGuardadoEnLocalStorage);        
        //capturo los elementos html
        const apellido = get('apellido');
        apellido.value = obj.apellido;

        const nombre = get('nombre');
        nombre.value = obj.nombre;

        const dni = get('dni');
        dni.value = obj.dni;

        const curso = get('curso');
        curso.value = obj.curso;

        const horario = get('horario');
        horario.value = obj.horario; 
    }
}

load();