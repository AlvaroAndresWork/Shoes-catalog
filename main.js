// Importamos los datos (Separation of Concerns)
import { productos } from './data.js';

document.addEventListener("DOMContentLoaded", () => {
    
    // 1. Identificamos los contenedores en el DOM
    const gridNike = document.getElementById("grid-nike");
    const gridAdidas = document.getElementById("grid-adidas");

    // 2. Verificamos que estamos en index.html antes de ejecutar
    if (!gridNike || !gridAdidas) return;

    // 3. Función para generar el HTML de una tarjeta aplicando BEM estricto
    const crearTarjetaHTML = (producto) => {
        return `
            <article class="card">
                <img class="card__img" src="${producto.imageUrl}" alt="${producto.nombre}">
                <div class="card__overlay">
                    <h3 class="card__title">${producto.nombre}</h3>
                </div>
            </article>
        `;
    };

    // 4. Mapeo y filtrado de datos para inyectar en el DOM
    const renderizarCatalogos = () => {
        // Filtrar y renderizar Nike
        const zapatosNike = productos.filter(p => p.marca === "nike");
        const htmlNike = zapatosNike.map(crearTarjetaHTML).join('');
        gridNike.innerHTML = htmlNike;

        // Filtrar y renderizar Adidas
        const zapatosAdidas = productos.filter(p => p.marca === "adidas");
        const htmlAdidas = zapatosAdidas.map(crearTarjetaHTML).join('');
        gridAdidas.innerHTML = htmlAdidas;
    };

    // Ejecutamos el renderizado
    renderizarCatalogos();
});