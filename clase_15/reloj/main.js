//Ejemplo setInterval

function mostrarHora (){
    let reloj = document.getElementById('reloj');
    let hora = new Date();
    reloj.innerHTML = hora.toLocaleTimeString();

}
let cronometro = setInterval(mostrarHora,1000);


