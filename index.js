class Producto{
    constructor(nombre, precio){
        this.nombre = nombre
        this.precio = precio
        
    }
}

let productos = [
    new Producto("Rainbow Six Siege", 1000),
    new Producto("Fornite", 2000),
    new Producto("Apex", 3000),
    new Producto("Moto GP", 4000),
    new Producto("Fifa 23", 5000)
]

let comprar = prompt("Quieres comprar productos? ")
let juegosElegidos = []
let costo = 0

while (comprar == "si"){
    let nombreJuego = prompt("Ingrese el nombre del juego que quiere llevar: Rainbow Six Siege,Fornite,Apex,Moto GP,")
    let resultado = productos.find((el) => el.nombre == nombreJuego)
    if (resultado == undefined){
        alert("El juego que ingreso no se encuentra.")
    }else {
        console.log(resultado)
        juegosElegidos.push(resultado)
    }
    comprar = prompt("Quieres agregar otros productos? ")
}
juegosElegidos.forEach((el) => costo += el.precio)
alert("El total de lo que debera pagar es: " + costo)