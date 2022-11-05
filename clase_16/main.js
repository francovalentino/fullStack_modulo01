/*Clase 16: DOM - EVENTOS */
/*
//---COMO--DEFINIR--EVENTOS

// OPCION -1 USANDO Event Handlers / Manejadores de eventos 

// 1. Seleccionar elementos del DOM

let miBoton = document.getElementById("boton");
console.log(miBoton);

// 2. Determinar el evento a escuchar sobre el Elemento

miBoton.addEventListener('click',respuestaClick); // Respuesta Click es el Event Handler

//Respuesta al evento

function respuestaClick(){
    console.log("Manejador de EVENTO / EVENT HANDLER");
}

// OPCION -2 USANDO PROPIEDADES ON 

let miBoton2 = document.getElementById("boton2");
console.log(miBoton2);
// Utilizar la Propiedad ON
miBoton2.onclick = () => {
    console.log("Evento con propiedad onclick");
}

// Reciclamos codigo de la clase 15 para mostrar como funcionan los botones generados desde JS
// Linea 57 generamos los botones para cada objeto del ARRAY productos
*/
// Declaracion de class Producto
class Producto {
    constructor (id,nombre,precio){
        this.id = parseInt(id);
        this.nombre = nombre;
        this.precio = parseFloat(precio);
    }
}
//INstanciar objetos y asociar array
const productos = [];

productos.push(new Producto(1,"DONA",60));
productos.push(new Producto(2,"PAN",460));
productos.push(new Producto(3,"TORTA",560));
productos.push(new Producto(4,"LECHE",760));

// Recorro el array para crear un nodo por valor en el array

for (const producto of productos){
    let divProducto = document.createElement("div");
    divProducto.innerHTML = `<h3> Nombre: ${producto.nombre} </h3>
                            <h4> Precio: ${producto.precio}</h4> 
                            <h5> ID del Producto : ${producto.id}</h5>
                            <button id ='${producto.id}' class= 'btnCompra'> Comprar </button>
                            `;
    document.body.appendChild(divProducto); // Agrego un nuevo hijo al body para que lo muestre en el HTML 
}
// Seleccionar botones generados por JS llamados por clase
// Seleccionamos el button que se encuentra dentro de productos por su clase
let botones = document.getElementsByClassName('btnCompra');
console.log(botones)

// recorremos la variable botones que contiene el elemento button generado desde JS
for (const boton of botones){
    boton.addEventListener('click',function(){   
// addEventListener  "escucha" cada vez q hagamos click en alguno de los botones y ejecutara la función de nombre : function
        let seleccion = productos.find(producto => producto.id == this.id);
// Utilizando el metodo .find cada vez que hagamos click, la variable seleccion buscara el id del boton clickeado y lo guarda dentro suyo
        console.log ('Seleccionaste :' + seleccion.nombre + ' cuesta :' + seleccion.precio);
//Sabiendo el id sabemos que producto es por lo tanto podemops extraer el resto de las propiedades tambien
    }
    )
}
// Como agregar un objeto a un array desde un formulario
// Obtener el formulario

let miFormulario = document.getElementById("registroProducto");

miFormulario.onsubmit = (e) => {
//empleamos este metodo para prevenir el comportamiento por defecto del submit
    e.preventDefault();
//Si usamos THIs en la ARROW function no obtenemos el objeto del evento, obtenemos el contexto global del objeto (Windows) 
    console.log(this)
// podemos usar e.target para obtener el objeto asociado al evento
    console.log(e.target)
// con e.target obtenemos el evento id de forma equivalente a this.id
    console.log(e.target.id)
//Obtenemos los input hijos del formulario
    const inputs = miFormulario.children;
// Instanciamos un objeto usando los values de cada input
    productos.push(new Producto (0, inputs[0].value, inputs[1].value));
    console.log(productos)
}

