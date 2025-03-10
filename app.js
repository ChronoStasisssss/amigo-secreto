let nombres = [];
const nombreInput = document.getElementsById('nombreInput');
const agregarNombre = document.getElementById('agregarNombre');
const listaNombres = document.getElementById('listaNombres');
console.log(listaNombres);

//comprobacion de campos vacios
agregarNombre.addEventListener('click', function() {
    const nombre = nombreInput.value.trim();
        if (nombre) {
        nombres.push(nombre);
        actualizarLista();
        nombreInput.value = '';
     }  else {
        alert("Por favor, ingresa un nombre.");
    }
});

// Función para actualizar la lista en el HTML
function actualizarLista() {
    listaNombres.innerHTML = '';
    nombres.forEach(function(nombre) {
        const li = document.createElement('li');
        li.textContent = nombre;
        listaNombres.appendChild(li);
    });
}
function sortearAmigo(){
    const amigo = nombres[Math.floor(Math.random() * nombres.length)];
    if (amigo === nombreInput.value) {
    alert(`Tu amigo secreto es: ${amigo}`);
}