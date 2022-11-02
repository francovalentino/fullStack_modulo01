/* Objetos */
// declaracion de un objeto literal
/*
const producto1 = {
    id: 1,
    nombre: "tallarines",
    precio: 80.5
}
console.log( producto1 . id );
console.log( producto1 . nombre ) 
console.log( producto1 . precio )
//como cambiar el contenido de un atributo
//producto1["nombre"]= "tirabuzon";
//producto1.nombre = "tirabuzon";
//console.log (producto1.nombre)
// Se puede acceder al contenido de los atributos de dos maneras :
// Utilizando la notacion PUNTO ( . ) ---> producto1.id como 
alert (
    'el producto id: ' + producto1.id +
    '\nNombre :' + producto1.nombre +
    '\nPrecio :$' +producto1.precio
);

// Utilizando la notacion CORCHETE (  [ ]  ) ----> producto1['id']
alert (
    'el producto id: ' + producto1['id'] +
    '\nNombre :' + producto1['nombre'] +
    '\nPrecio :$' +producto1['precio']
);

//EJEMPLO de funcion constructora

function Producto (id,nombre,precio){
    this.id = parseInt(id);
    this.nombre = nombre;
    this.precio = parseFloat(precio);
    //Metodo
    this.descuento = function (valor){
        this.precio -= valor ;    }
}

// Instanciar objetos con funcion constructora 
const producto2 = new Producto(1,'Tallarines',80.5);
const producto3 = new Producto(2,'Pan',80.5);
const producto4 = new Producto(3,'Arroz',90.5);

console.log (producto2)
console.log (producto3)
console.log (producto4)

producto4.descuento(10);
console.log(producto4.precio);

// ejemplo
// si quisiera que el usuario ingrese los valores por prompt
const producto5 = new Producto (parseInt(prompt('ingrese id : ')),
prompt('ingrese un producto :'),
prompt ('ingrese precio :'));

console.log (producto5);

producto5.descuento(100);

console.log(producto5.precio);

function Persona(nombre, edad, calle) {
    this.nombre = nombre;
    this.edad   = edad;
    this.calle  = calle;
    this.hablar = function(){ console.log("HOLA SOY "+ this.nombre)}
}
const persona1 = new Persona("Homero", 39, "Av. Siempreviva 742");
const persona2 = new Persona("Marge", 36, "Av. Siempreviva 742");
persona1.hablar();
persona2.hablar();
*/

