//**Clase 15: Manipulacion del DOM **/
/*
console.log(document) //Vemos el OBJETO DOCUMENT //Muestra el DOM por consola
console.dir(document) //MUestra la informacion del DOM mas detalladamente

console.log (document.head)// solo muestra el head
console.dir (document.head)// muestra solo el head detalladamente

//--------Metodos para acceder a nodos (etiquetas del HTML)

let titulo = document.getElementById('titulo')
console.log(titulo);
console.log(titulo.innerHTML) // muestra el contenido del NODO HTML

let nombre = "Cosme Fulanito";
titulo.innerHTML = 'Hola ' + nombre; // modifico el contenido original del DOM con innerHTML


let parrafos = document.getElementsByClassName("parrafos");
console.log (parrafos)

let parrafosTag = document.getElementsByTagName ('p');
console.log(parrafosTag)

//------------------------------   COMO CREAR UNA LISTA DE OPCIONES DESDE EL USUARIO USANDO JS ---------------------------------

// Crear el array que va a contener la lista
const categorias = [];

// Solicitar al usuario q ingrese una categoria
let entrada = prompt ('Ingresar categoria \n (Escribir "ESC" para salir)');

// Guardar cada categoria en el array usando push hasta que ingresemos 'ESC'
while (entrada.toLocaleUpperCase() != "ESC"){
        //incluir la categoria en el array
    categorias.push(entrada.toLocaleUpperCase())
        //solicitamos una nueva categoria
    entrada = prompt ("Ingresar categoria \n (Escribir 'ESC' para salir)");
}
//mostramos x consola las categorias guardadas
console.log (categorias);

// Obtenemos el nodo HTML que contiene la lista (en este caso un select)
let miSelect = document.getElementById("select");
console.log (miSelect);

// Recorremos el array y escribimos las opciones dentro del NODO 
for (const categoria of categorias){
    miSelect.innerHTML += "<option>" + categoria + "</option>";
}

//------------CREACION DE UN NUEVO NODO

let titulo1 = document.createElement("h2");// creo el nodo
titulo1.innerHTML = "Hola desde JS";//defino el contenido

document.body.appendChild(titulo1);
*/
// ejemplo de creacion dinamica de nodos

class Producto {
    constructor (id,nombre,precio){
        this.id = parseInt(id);
        this.nombre = nombre;
        this.precio = parseFloat(precio);
    }
}
const productos = [];
productos.push(new Producto(1,"DONA",60));
productos.push(new Producto(2,"PAN",460));
productos.push(new Producto(3,"TORTA",560));
productos.push(new Producto(4,"LECHE",760));

// Recorro el array para crear un nodo por valor en el array

for (const producto of productos){
    let divProducto = document.createElement("div");

    divProducto.innerHTML = `<h3> Nombre: ${producto.nombre} </h3>
    <h4> Precio: ${producto.precio}</h4> <h5> ID del Producto : ${producto.id}</h4>`

    document.body.appendChild(divProducto); // Agrego un nuevo hijo al body para que lo muestre en el HTML 

}
