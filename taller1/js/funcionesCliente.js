//valores del menu 
const menu = [
    { id: 1, nombre: "Caldo de pollo", categoria: "entrada", precio: 10000, descripcion: "Caldo de pollo con papa y mucho cilantro", imagen: "imagenes/caldo.jpeg" },
    { id: 2, nombre: "Sopa de pasta", categoria: "entrada", precio: 20000, descripcion: "Sopa de pasta con vegetales y pan", imagen: "imagenes/sopa.jpeg" },
    { id: 3, nombre: "Changua", categoria: "entrada", precio: 18000, descripcion: "Tradicional changua santafereña", imagen: "imagenes/changua.jpeg" },
    { id: 4, nombre: "Pollo agridulce", categoria: "plato fuerte", precio: 20000, descripcion: "Pollo agridulce con papas y ensalada", imagen: "imagenes/pollo.jpeg" },
    { id: 5, nombre: "Chuleta", categoria: "plato fuerte", precio: 15000, descripcion: "Chuleta con salsa de la casa y papas", imagen: "imagenes/carne.jpeg" },
    { id: 6, nombre: "Camarones", categoria: "plato fuerte", precio: 25000, descripcion: "Camarones con salsa de la casa y arroz de coco", imagen: "imagenes/camaron.jpeg" },
    { id: 7, nombre: "Flan", categoria: "postre", precio: 10000, descripcion: "Flan de huevo con caramelo", imagen: "imagenes/flan.jpeg" },
    { id: 8, nombre: "Tarta de frutas", categoria: "postre", precio: 12000, descripcion: "Tarta de frutas con crema", imagen: "imagenes/cake.jpeg" },
    { id: 9, nombre: "Pastel de chocolate", categoria: "postre", precio: 8000, descripcion: "Pastel de chocolate con crema", imagen: "imagenes/chocolate.jpeg" }
];

//filtro del menu

function filtrarMenu(nombre, categoria) {

    return menu.filter(plato => {

        const nombreBuscado = nombre.toLowerCase().trim();
        const categoriaBuscada = categoria.toLowerCase().trim();

        const coincideNombre =
            nombreBuscado === "" ||
            plato.nombre.toLowerCase().includes(nombreBuscado);

        const coincideCategoria =
            categoriaBuscada === "" ||
            categoriaBuscada === "todas" ||
            plato.categoria.toLowerCase().trim() === categoriaBuscada;

        return coincideNombre && coincideCategoria;
    });
}


//buscar en el menu

const buscarBtn = document.getElementById("buscarBtn");
const buscarNombre = document.getElementById("buscarNombre");
const buscarCategoria = document.getElementById("buscarCategoria");
const resultadosMenu = document.getElementById("resultadosMenu");

buscarBtn.addEventListener("click", function () {

    const nombre = buscarNombre.value;
    const categoria = buscarCategoria.value;

    const resultados = filtrarMenu(nombre, categoria);
    mostrarResultados(resultados);
});

//resultados del filtro

function mostrarResultados(platos) {

    resultadosMenu.innerHTML = "";

    if (platos.length === 0) {
        resultadosMenu.innerHTML = "<p>No se encontraron platos.</p>";
        return;
    }

    platos.forEach(plato => {

        const contenedor = document.createElement("div");

        contenedor.innerHTML = `
            <h3>${plato.nombre}</h3>
            <img src="${plato.imagen}" width="150">
            <p>${plato.descripcion}</p>
            <p><strong>$${plato.precio}</strong></p>
            <hr>
        `;

        resultadosMenu.appendChild(contenedor);
    });
}