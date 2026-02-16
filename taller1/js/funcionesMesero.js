
// DATOS DEL MENÚ

const menu = [
    { id: 1, nombre: "Caldo de pollo", precio: 10000 },
    { id: 2, nombre: "Sopa de pasta", precio: 20000 },
    { id: 3, nombre: "Changua", precio: 18000 },
    { id: 4, nombre: "Pollo agridulce", precio: 20000 },
    { id: 5, nombre: "Chuleta", precio: 15000 },
    { id: 6, nombre: "Camarones", precio: 25000 },
    { id: 7, nombre: "Flan", precio: 10000 },
    { id: 8, nombre: "Tarta de frutas", precio: 12000 },
    { id: 9, nombre: "Pastel de chocolate", precio: 8000 }
];

// REALIZAR PEDIDO

const botonEnviar = document.getElementById("botonEnviar");
const totalSpan = document.getElementById("total");

botonEnviar.addEventListener("click", function () {

    let total = 0;
    let haySeleccion = false;
    let errorCantidad = false;

    const filas = document.querySelectorAll(".fila-plato");

    filas.forEach(fila => {

        const checkbox = fila.querySelector("input[type='checkbox']");
        const cantidadInput = fila.querySelector("input[type='number']");

        if (checkbox.checked) {

            const id = parseInt(checkbox.dataset.id);
            const cantidad = parseInt(cantidadInput.value);

            if (!cantidad || cantidad <= 0) {
                errorCantidad = true;
                return;
            }

            const plato = menu.find(p => p.id === id);

            if (plato) {
                total += plato.precio * cantidad;
                haySeleccion = true;
            }
        }
    });

    if (!haySeleccion) {
        alert("Debe seleccionar al menos un plato.");
        return;
    }

    if (errorCantidad) {
        alert("Todas las cantidades deben ser mayores a 0.");
        return;
    }

    totalSpan.textContent = total;
});
