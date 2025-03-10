console.log("Script is running...");
document.addEventListener('DOMContentLoaded', function() {

    let nombres = [];
    const nombreInput = document.getElementById('nombreInput');
    const agregarNombre = document.getElementById('agregarNombre');
    const listaNombres = document.getElementById('listaNombres');

    const sortearAmigoButton = document.getElementById('sortearAmigo');

    console.log("Agregando nombre..."); 

    agregarNombre.addEventListener('click', function() {
    const nombre = nombreInput.value.trim();
    console.log("Captured input value:", nombre); // Debugging statement to log the captured input value

        if (nombre) {
            console.log("Nombre being added:", nombre); // Debugging statement to log the name being added
            nombres.push(nombre);
            console.log("Nombres array after adding:", JSON.stringify(nombres)); // Debugging statement to log the nombres array after adding

            actualizarLista();
            nombreInput.value = '';
        } else {
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

    console.log("Nombres array:", nombres); // Debugging statement to log the nombres array
    console.log("Sortear amigo function called"); // Debugging statement to confirm function call
    console.log("Nombres array before selection:", JSON.stringify(nombres)); // Debugging statement to log the nombres array before selection

    // Función para sortear un amigo
    function sortearAmigo() {
        if (nombres.length === 0) {
            alert("No hay nombres en la lista.");
            return;
        }
        const amigo = nombres[Math.floor(Math.random() * nombres.length)];
        alert(`Tu amigo secreto es: ${amigo}`);
    }

    // Agregar evento para el botón de sortear
    sortearAmigoButton.addEventListener('click', sortearAmigo);
});
