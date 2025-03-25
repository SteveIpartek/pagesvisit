//Duda se puede hacer que cuando entres por primera vez



// Obtiene el valor de "visitas" del almacenamiento local del navegador.
let visitas = localStorage.getItem("visitas");

// Verifica si el valor obtenido no es un número (NaN).
if (isNaN(visitas)) {
    // Si no es un número, significa que el valor es inválido.
    // Inicializa "visitas" a 0.
    visitas = 0;
} else {
    // Si es un número, lo convierte a un entero.
    visitas = parseInt(visitas);
}

// Incrementa el contador de visitas en 1.
visitas += 1;

// Guarda el nuevo valor de "visitas" en el almacenamiento local.
localStorage.setItem("visitas", visitas);

// Obtiene una referencia al elemento HTML con el ID "contadorVisitas".
// Este elemento muestra el número de visitas.
const capNumVis = document.getElementById("contadorVisitas");

// Actualiza el contenido de texto del elemento con el número de visitas actual.
capNumVis.textContent = visitas;

// Obtiene una referencia al botón de reinicio con el ID "btnReestablecer".
const reset = document.getElementById("btnReestablecer");

// Agrega un escuchador de eventos al botón de reinicio.
// Cuando se hace clic en el botón, se ejecuta la función siguiente.
reset.addEventListener("click", function() {
    // Reinicia el valor de "visitas" en el almacenamiento local a 0.
    localStorage.setItem("visitas", 0);

    // Actualiza el contenido de texto del elemento "contadorVisitas" a 0.
    capNumVis.textContent = 0;
});
