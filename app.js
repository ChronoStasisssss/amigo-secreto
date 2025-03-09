// Inicializamos un array vacío para almacenar los nombres
let nombres = [];

// Seleccionamos el input y el botón
const nombreInput = document.getElementById('nombreInput');
const agregarBtn = document.getElementById('agregarBtn');
const listaNombres = document.getElementById('listaNombres');

// Función para agregar un nombre al array y actualizar la lista en el HTML
agregarBtn.addEventListener('click', function() {
    const nombre = nombreInput.value.trim(); // Tomamos el valor del input y eliminamos espacios

    if (nombre) { // Verificamos que no esté vacío
        nombres.push(nombre); // Agregamos el nombre al array
        actualizarLista(); // Actualizamos la lista en el HTML
        nombreInput.value = ''; // Limpiamos el input
    } else {
        alert("Por favor, ingresa un nombre."); // Mensaje de error si el input está vacío
    }
});

// Función para actualizar la lista en el HTML
function actualizarLista() {
    listaNombres.innerHTML = ''; // Limpiamos la lista actual
    nombres.forEach(function(nombre) {
        const li = document.createElement('li'); // Creamos un nuevo elemento de lista
        li.textContent = nombre; // Establecemos el texto del elemento
        listaNombres.appendChild(li); // Agregamos el elemento a la lista
    });
}
