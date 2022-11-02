//PRACTICA MATIAS 
const productos = [
    {
        name: 'Celeron',
        modelo: 'J192',
        precio: 4000,
        thumbnail: 'https://http2.mlstatic.com/D_NQ_NP_638203-MLA43388110492_092020-O.webp'
    },
    {
        name: 'Pentium',
        modelo: 'X4',
        precio: 10000,
        thumbnail: 'https://http2.mlstatic.com/D_NQ_NP_638203-MLA43388110492_092020-O.webp'
    },
    {
        name: 'I3',
        modelo: '10000Gen',
        precio: 50000,
        thumbnail: 'https://http2.mlstatic.com/D_NQ_NP_638203-MLA43388110492_092020-O.webp'
    },
    {
        name: 'I5',
        modelo: '10000Gen',
        precio: 50000,
        thumbnail: 'https://http2.mlstatic.com/D_NQ_NP_638203-MLA43388110492_092020-O.webp'
    },
    {
        name: 'I7',
        modelo: '10000Gen',
        precio: 50000,
        thumbnail: 'https://http2.mlstatic.com/D_NQ_NP_638203-MLA43388110492_092020-O.webp'
    },
    {
        name: 'I9',
        modelo: '10000Gen',
        precio: 50000,
        thumbnail: 'https://http2.mlstatic.com/D_NQ_NP_638203-MLA43388110492_092020-O.webp'
    },
];

//Como acceder con un metodo al DOM (HTML) con ID
const contenedorDeProductosHTML = document.getElementById
    ("contenedorDeProductos")
/*
// Template Strings
let plantilla = `<div class="carta">
                    <h2>${productos[0].name}</h2>
                    <p>Modelo:${productos[0].modelo}</p>
                    <p>Precio:${productos[0].precio}</p>
                </div>`
let plantilla2 = `<div class="carta">
                    <h2>${productos[1].name}</h2>
                    <p>Modelo:${productos[1].modelo}</p>
                    <p>Precio:${productos[1].precio}</p>
                </div>`
//como escribir directamente sobre el DOM (HTML) y mostrar lo escrito

contenedorDeProductosHTML.innerHTML = plantilla;
contenedorDeProductosHTML.innerHTML += plantilla2;
*/

const crearPlantilla = (producto) =>{
    return `<div class="carta">
    <h2>${producto.name}</h2>
    <img src="${producto.thumbnail}" class = "imgCard"> 
    <p>Modelo:${producto.modelo}</p>
    <p>Precio:${producto.precio}</p>
</div>`
}

for (let producto of productos) {
    contenedorDeProductosHTML.innerHTML += crearPlantilla(producto);
}
