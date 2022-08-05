/*
const carrito = []

const iva = X => X * 0.21

let pagar = 0

let Productos = [
    {producto: " aceite ", precio: 240},
    {producto: " Coca Cola ", precio: 300},
    {producto: " Fideos ", precio: 200}]

console.log(Productos)
let nombre = prompt("Ingrese un nombre de usuario")

alert ("Bienvenido al MercadoOnline " + nombre)

let compra = prompt("ingrese lo que quiera comprar (1 para aceite , 2 para Coca Cola de 3L, 3 para Fideos, 4 seguir con la compra)")
while(compra != "4"){
    switch(compra){
        case "1":
            alert("Has comprado una botella de" + Productos[0].producto + "del precio siguiente " + Productos[0].precio)
            carrito.push(Productos[0].precio)
            break
        case "2":
            alert("Has comprado una botella de" + Productos[1].producto + "del precio siguiente " + Productos[1].precio)
            carrito.push(Productos[1].precio)
            break
        case "3":
            alert("Has comprado un paquete de" + Productos[2].producto + "del precio siguiente " + Productos[2].precio)
            carrito.push(Productos[2].precio)
            break
        default:
            alert("Intenta con alguna de las opciones dichas")
            break
        
    }
   
    compra = prompt("ingrese lo que quiera comprar (1 para aceite , 2 Coca Cola de 3L, 3 Fideos, 4 para salir)")
}
console.log(carrito)

const total = carrito.reduce((acumulador, precio) => acumulador + precio)

const pagofinal = total + iva(total)

console.log(pagofinal)

alert("Su pago final es de " + pagofinal)

let MetodoDePago = prompt("Ingrese su forma de pago (1 para transferencia bancaria, 2 para tarjeta de credito y 3 para cancelar la compra)")
while ((MetodoDePago != "1") && (MetodoDePago != "2") && (MetodoDePago != "3") ) {
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
    MetodoDePago = prompt("Ingrese su forma de pago (1 para transferencia bancaria, 2 para tarjeta de credito y 3 para cancelar la compra)")
}
alert("Gracias por la compra adios")
*/
let cartas = document.getElementById("conteiner__cards")
let carritoaparecer = document.getElementById("carritoaparecer")
let carritodesaparecer = document.getElementById("carritodesaparecer")
let carritoestado = document.getElementById("carrito")
console.log(carritodesaparecer)



const iva = X => X * 0.21

let pagar = 0

//Carrito Despegable

carritoaparecer.onclick = () =>{
    carritoestado.style.right= 0
}
carritodesaparecer.onclick = () =>{
    carritoestado.style.right= -100 + "%"
}




function mostrarCards(){
    Inventario.forEach(prod =>{
        let div = document.createElement("div")
        div.className = "cards"
        div.innerHTML = `<img class="cards__img" src=./img/${prod.img}>
                            <div class="cards_body">
                                <h4 class="cards__titulo">${prod.producto}</h4>
                                <p class="cards__descripcion">Descripcion: ${prod.desc}</p>
                                <p class="cards__precio">$${prod.precio}</p>
                                <button id="botonComprar${prod.id}" class="cards__button">Agregar al Carro</button>
                            </div>`
    cartas.appendChild(div)
    let botonComprar = document.getElementById(`botonComprar${prod.id}`)
    botonComprar.onclick = ()=>{
        cart(prod.id)
        Toastify({
            text: `Agregaste ${prod.producto} al carrito`,
            position: 'center',
            backgroundColor: "#9f9fdd",
            className: "alert"
            
          }).showToast()
    } 
  })
}
mostrarCards()

//Agregar al carrito

const carrito = JSON.parse(localStorage.getItem("productos")) || []


let cartconteiner = document.getElementById("agregar__productos")

function cart (prodId){
    let prod = Inventario.find( prod => prod.id == prodId)
    carrito.push(prod)
    agregarCarrito()   
    CarritoPagar()
    console.log(carrito)
}   

let agregarCarrito = () =>{
    cartconteiner.innerHTML = ""
    carrito.forEach(prod =>{
    let div = document.createElement("div")
        div.className = "carrito__formulario"
        div.innerHTML += `<p>${prod.producto}</p>
                        <p>Cant: 1</p>
                        <p>Precio: $${prod.precio}</p>
                        <button class="boton__eliminar" onClick=deleteProduct(${carrito.indexOf(prod)})><span class= "jam jam-trash-f trash"></span>
                        `
    cartconteiner.appendChild(div)
    localStorage.setItem("productos", JSON.stringify(carrito))

    
    
    })
}
    

function deleteProduct(prod){

    carrito.splice(prod, 1)
    console.log(carrito)
    agregarCarrito()
    CarritoPagar()
    
}

// Suma total

let totalText = document.getElementById("Total")

function CarritoPagar (){

    let precios = carrito.map((prod) => prod.precio)
    let pagar = precios.reduce((acumulador, precio) => acumulador + precio,0)
    let totalIva = iva(pagar)
    let totalPagar = pagar + totalIva
    totalText.textContent = "Total(iva) =" + "$" + totalPagar
    console.log(totalPagar)
    
}
