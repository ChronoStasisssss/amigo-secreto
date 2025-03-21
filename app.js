document.addEventListener('DOMContentLoaded', function() {

    let nombres = [];
    const nombreInput = document.getElementById('nombreInput');
    const agregarNombre = document.getElementById('agregarNombre');
    const listaNombres = document.getElementById('listaNombres');

    const sortearAmigoButton = document.getElementById('sortearAmigo');
    const reiniciarJuegoButton = document.getElementById('reiniciarJuego');

    agregarNombre.addEventListener('click', function() {
        const nombre = nombreInput.value.trim();

        if (nombre) {
            console.log("Nombre agregado:", nombre);
            nombres.push(nombre);
            console.log("Nombres despues de agregar a la lista:", JSON.stringify(nombres));

            actualizarLista();
            nombreInput.value = '';
        } else {
            alert("Por favor, ingresa un nombre.");
        }
    });

    // Función para actualizar la lista
    function actualizarLista() {
        listaNombres.innerHTML = '';

        nombres.forEach(function(nombre) {
            const li = document.createElement('li');
            li.textContent = nombre;
            listaNombres.appendChild(li);
        });
    }

    // Función para sortear
    function sortearAmigo() {
        if (nombres.length === 0) {
            alert("No hay nombres en la lista.");
            return;
        }
        const amigo = nombres[Math.floor(Math.random() * nombres.length)];
        alert(`Tu amigo secreto es: ${amigo}`);
    }

    // Función para reiniciar
    function reiniciarJuego() {
        nombres = []; 
        actualizarLista();
        alert("El juego ha sido reiniciado.");
    }

    sortearAmigoButton.addEventListener('click', sortearAmigo);
    reiniciarJuegoButton.addEventListener('click', reiniciarJuego);
});
