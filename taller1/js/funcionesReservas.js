const numPersonasInput = document.getElementById("numPersonas");
const contenedorEdades = document.getElementById("contenedorEdades");
const btnReservar = document.getElementById("btnReservar");
const mensaje = document.getElementById("mensaje");


//GENERA EDADES PARA CADA PERSONA

numPersonasInput.addEventListener("change", function () {

    const cantidad = Number(numPersonasInput.value);

    contenedorEdades.innerHTML = "";

    if (cantidad > 0) {

        for (let i = 1; i <= cantidad; i++) {

            const texto = document.createElement("p");
            texto.textContent = "Edad persona " + i;

            const inputEdad = document.createElement("input");
            inputEdad.type = "number";
            inputEdad.min = "1";
            inputEdad.max = "100";
            inputEdad.className = "edad";

            contenedorEdades.appendChild(texto);
            contenedorEdades.appendChild(inputEdad);
        }
    }
});


//VALIDACIOENS DE RESERVA

btnReservar.addEventListener("click", function () {

    const numPersonas = parseInt(numPersonasInput.value);
    const edadesInputs = document.querySelectorAll(".edad");
    const fecha = document.getElementById("fechaReserva").value;

    // validar numero de personas
    if (!numPersonas || numPersonas <= 0) {
        alert("El número de personas debe ser mayor a 0.");
        return;
    }

    // validar edad
    for (let input of edadesInputs) {
        const edad = parseInt(input.value);

        if (!edad || edad < 1 || edad > 100) {
            alert("Las edades deben estar entre 1 y 100 años.");
            return;
        }
    }

    // validar fecha de reserva
    const fechaActual = new Date();
    const fechaReserva = new Date(fecha);

    fechaActual.setHours(0,0,0,0);

    if (!fecha || fechaReserva < fechaActual) {
        alert("La fecha debe ser igual o posterior a la fecha actual.");
        return;
    }

    mensaje.textContent = "Reserva realizada con éxito";
    mensaje.style.color = "green";
});
