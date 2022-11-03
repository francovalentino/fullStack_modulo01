const productos = [
    {
        name: "Celeron",
        modelo: "J192",
        precio: 4000,
        thumbnail: "https://www.muycomputer.com/wp-content/uploads/2021/05/Intel.jpg"
    },
    {
        name: "Pentium",
        modelo: "X4",
        precio: 10000,
        thumbnail: "https://www.muycomputer.com/wp-content/uploads/2021/05/Intel.jpg"
    },
    {
        name: "I5",
        modelo: "10000Gen",
        precio: 50000,
        thumbnail: "https://www.muycomputer.com/wp-content/uploads/2021/05/Intel.jpg"
    },
    {
        name: "I3",
        modelo: "10000Gen",
        precio: 50000,
        thumbnail: "https://www.muycomputer.com/wp-content/uploads/2021/05/Intel.jpg"
    },
    {
        name: "I9",
        modelo: "10000Gen",
        precio: 50000,
        thumbnail: "https://www.muycomputer.com/wp-content/uploads/2021/05/Intel.jpg"
    },
]
// LLAMO A ELEMENTOS DE HTML DESDE JS. MEDIANTE EL DOM (objeto document)
const contenedorDeProductosHTML = document.getElementById("contenedorDeProductos")
const formulario = document.getElementById("formulario")

formulario.addEventListener("submit", (e)=>{
    // prevenir el comportamiento por defecto del formulario
    e.preventDefault()
    const newProduct = {
        name: formulario.name.value,
        modelo: formulario.modelo.value,
        precio: parseFloat(formulario.precio.value),
        thumbnail: formulario.thumbnail.value,
    }
    productos.push(newProduct);
    formulario.name.value = formulario.modelo.value = formulario.precio.value = formulario.thumbnail.value = "";
    renderizarCartas()
})

//Template strings
const crearPlantilla = (producto) =>{
    return `<div class="carta">
                <h2>${producto.name}</h2>
                <img src="${producto.thumbnail}" class="imgCard" >
                <p>Modelo: ${producto.modelo}</p>
                <p>Precio: ${producto.precio}</p>
            </div>`
}
for( let producto of productos ){
    contenedorDeProductosHTML.innerHTML += crearPlantilla(producto)
}

const renderizarCartas = () => {
    for (let producto of  productos){
        contenedorDeProductosHTML.innerHTML += crearPlantilla(producto)
    }
}
renderizarCartas()