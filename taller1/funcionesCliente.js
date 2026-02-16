const menu = [
    { id: 1, nombre: "Caldo de pollo", categoria: "entrada", precio: 10000, descripcion: "Caldo de pollo con papa y mucho cilantro", imagen: "imagenes/caldo.jpeg" },
    { id: 2, nombre: "Sopa de pasta", categoria: "entrada", precio: 20000, descripcion: "Sopa de pasta con vegetales y pan", imagen: "imagenes/sopa.jpeg" },
    { id: 3, nombre: "Changua", categoria: "entrada", precio: 18000, descripcion: "Tradicional changua santafereña", imagen: "imagenes/changua.jpeg" },
    { id: 4, nombre: "Pollo agridulce", categoria: "plato fuerte", precio: 20000, descripcion: "Pollo agridulce con papas y ensalada", imagen: "imagenes/pollo.jpeg" },
    { id: 5, nombre: "Chuleta", categoria: "plato fuerte", precio: 15000, descripcion: "Chuleta con salsa de la casa y papas", imagen: "imagenes/carne.jpeg" },
    { id: 6, nombre: "Camarones", categoria: "plato fuerte", precio: 25000, descripcion: "Camarones con salsa de la casa y arroz de coco", imagen: "imagenes/camaron.jpeg" },
    { id: 7, nombre: "Flan", categoria: "postre", precio: 10000, descripcion: "Flan de huevo con caramelo", imagen: "imagenes/flan.jpeg" },
    { id: 8, nombre: "Tarta de frutas", categoria: "postre", precio: 12000, descripcion: "Tarta de frutas con crema", imagen: "imagenes/cake.jpeg" },
    { id: 9, nombre: "Pastel de chocolate", categoria: "postre", precio: 8000, descripcion: "Pastel de chocolate con crema", imagen: "imagenes/chocolate.jpeg" },
];

function filtrarMenu(nombre, categoria) {
    return menu.filter(plato => {
        const coincideNombre = plato.nombre.toLowerCase().includes(nombre.toLowerCase().trim());
        const coincideCategoria = categoria === "todas" || plato.categoria === categoria;
        return coincideNombre && coincideCategoria;
    });
}

function mostrarMensaje(idElemento, texto, tipo) {
    const elemento = document.getElementById(idElemento);
    if (!elemento) return;
    elemento.textContent = texto;
    elemento.className = "mensaje mensaje-" + tipo;
    elemento.style.display = "block";
}

function limpiarMensaje(idElemento) {
    const elemento = document.getElementById(idElemento);
    if (!elemento) return;
    elemento.textContent = "";
    elemento.style.display = "none";
}

function renderizarResultados(platos) {
    const contenedor = document.getElementById("resultadosMenu");
    if (!contenedor) return;

    // Limpiar resultados anteriores
    contenedor.innerHTML = "";

    if (platos.length === 0) {
        const mensaje = document.createElement("p");
        mensaje.className = "sin-resultados";
        mensaje.textContent = "No se encontraron platos con esos criterios.";
        contenedor.appendChild(mensaje);
        return;
    }


    platos.forEach(plato => {
        const tarjeta = document.createElement("div");
        tarjeta.className = "tarjeta-plato";

        const img = document.createElement("img");
        img.src = plato.imagen;
        img.alt = plato.nombre;

        const info = document.createElement("div");
        info.className = "tarjeta-info";

        const nombre = document.createElement("h3");
        nombre.textContent = plato.nombre;

        const categoria = document.createElement("span");
        categoria.className = "badge-categoria";
        categoria.textContent = plato.categoria;

        const descripcion = document.createElement("p");
        descripcion.textContent = plato.descripcion;

        const precio = document.createElement("strong");
        precio.className = "precio-plato";
        precio.textContent = formatearPrecio(plato.precio);

        // Ensamblar la tarjeta con appendChild
        info.appendChild(nombre);
        info.appendChild(categoria);
        info.appendChild(descripcion);
        info.appendChild(precio);
        tarjeta.appendChild(img);
        tarjeta.appendChild(info);
        contenedor.appendChild(tarjeta);
    });
}
function iniciarBuscadorMenu() {
    const inputNombre = document.getElementById("buscarNombre");
    const selectCategoria = document.getElementById("filtroCategoria");
    const btnBuscar = document.getElementById("btnBuscar");

    if (!inputNombre || !selectCategoria || !btnBuscar) return;

    // Mostrar todo el menú al cargar
    renderizarResultados(menu);

    // Evento click en el botón buscar
    btnBuscar.addEventListener("click", function () {
        const nombre = inputNombre.value;
        const categoria = selectCategoria.value;
        const resultados = filtrarMenu(nombre, categoria);
        renderizarResultados(resultados);
    });

    // Filtrar en tiempo real mientras se escribe
    inputNombre.addEventListener("input", function () {
        const nombre = inputNombre.value;
        const categoria = selectCategoria.value;
        const resultados = filtrarMenu(nombre, categoria);
        renderizarResultados(resultados);
    });

    // Filtrar al cambiar la categoría
    selectCategoria.addEventListener("change", function () {
        const nombre = inputNombre.value;
        const categoria = selectCategoria.value;
        const resultados = filtrarMenu(nombre, categoria);
        renderizarResultados(resultados);
    });
}   

