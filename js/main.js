/*
const suma = (a,b) => a + b
const iva = X => X * 0.21

let pagar = 0

let Productos = [
    {producto: " aceite ", precio: 240},
    {producto: " Coca Cola ", precio: 300},
    {producto: " Fideos ", precio: 200}]

console.log(Productos)
let nombre = prompt("Ingrese un nombre de usuario")

alert ("Bienvenido al MercadoOnline " + nombre)

let compra = prompt("ingrese lo que quiera comprar (1 para aceite , 2 para Coca Cola de 3L, 3 para Fideos, 4 para salir)")
while(compra != "4"){
    switch(compra){
        case "1":
            alert("Has comprado una botella de" + Productos[0].producto + "del precio siguiente " + Productos[0].precio)
            break
        case "2":
            alert("Has comprado una botella de" + Productos[1].producto + "del precio siguiente " + Productos[1].precio)
            break
        case "3":
            alert("Has comprado un paquete de" + Productos[2].producto + "del precio siguiente " + Productos[2].precio)
            break
        default:
            alert("Intenta con alguna de las opciones dichas")
            break
    }
    compra = prompt("ingrese lo que quiera comprar (1 para aceite , 2 Coca Cola de 3L, 3 Fideos, 4 para salir)")
}
let MetodoDePago = prompt("Ingrese forma de pago (1 para transferencia bancaria, 2 para tarjeta de credito y 3 para cancelar la compra)")
while((MetodoDePago == "1") || (MetodoDePago == "2") || (MetodoDePago == "3")) {
    switch(MetodoDePago){
        case "1":
            alert("Gracias por su compra")
            break
        case "2":
            alert("Gracias por su compra")
            break
        case "3":
            alert("Has cancelado tu compra con exito")
            break
        default:
            alert("Elegi alguna de las opciones")
            break
    }
}
alert("Adios")
*/
let total = 0
for ( let i= 1; i <= 10; i++){
    total += i
}
console.log(total)
