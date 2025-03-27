let visitas = localStorage.getItem("visitas");// Obtiene el valor de "visitas" del almacenamiento local del navegador.
// Obtiene una referencia al elemento HTML con el ID "contadorVisitas".
const capNumVis = document.getElementById("contadorVisitas");// Este elemento muestra el número de visitas.
const reset = document.getElementById("btnReestablecer");// Obtiene una referencia al botón de reinicio con el ID "btnReestablecer".

function program (){//Funcion Principal del programa.
    visitas ++;// Incrementa el contador de visitas en 1.
    localStorage.setItem("visitas", visitas);// Guarda el nuevo valor de "visitas" en el almacenamiento local.
    capNumVis.textContent = visitas;// Actualiza el contenido de texto del elemento con el número de visitas actual.
    }

if (isNaN(visitas)) {// Verifica si el valor obtenido no es un número (NaN).

    visitas = 0;// Inicializa "visitas" a 0.
} else {
    
    visitas = parseInt(visitas);// Si es un número, lo convierte a un entero.
    program();
}

// Agrega un escuchador de eventos al botón de reinicio.
reset.addEventListener("click", function() {// Cuando se hace clic en el botón, se ejecuta la función siguiente.
    
    localStorage.setItem("visitas", 0);// Reinicia el valor de "visitas" en el almacenamiento local a 0.
    capNumVis.textContent = 0;// Actualiza el contenido de texto del elemento "contadorVisitas" a 0.
});
