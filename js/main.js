///-------------------------------------------- Carrito ---------------------------------------------------

//Declaro como variable global a total.
let total = 0;

//Array de la lista de los productos con sus precios
const prendas = [{ prenda1: "sweter", costo: 1200 },
{ prenda1: "pantalon", costo: 1500 },
{ prenda1: "remera", costo: 1000 },
{ prenda1: "pollera", costo: 800 },
{ prenda1: "bermuda", costo: 1600 }];

//mostrar lista de precios
let listeame = document.getElementById("listar");
listeame.addEventListener("click", listar)
function listar() {
    for (const numeral of prendas) {
        let elemento = document.createElement("div");
        elemento.classList = "bg-warning";
        elemento.innerHTML = `<h3 id="tal"> Tipo de Prenda: ${numeral.prenda1}</h3>;
                          <p>Precio: ${numeral.costo}</p>`
        document.body.appendChild(elemento);
    }
}

//objeto 1 para darle valor a las prendas, un precio  para multiplicar por la cantidad que introduzca el cliente
const precio = { sweter: 1200, pantalon: 1500, remera: 1000, pollera: 800, bermuda: 1600 };
//-------------------------------------------------- Eventos ----------------------------------------------

let boton = document.getElementById("btn-1");
const span = document.getElementById("span");
let aumento = 0

boton.addEventListener("click", clip)
function clip() {
    aumento++;
    span.textContent = aumento;
}

let boton2 = document.getElementById("btn-2");
boton2.addEventListener("click", clip2)

function clip2() {
    aumento--;
    span.textContent = aumento;
}
//--------------------sweter descripcion card-------------------
let sweter = document.getElementById("sweter");
sweter.addEventListener("click", agregar)

function agregar() {
    console.log("agregaste una descripcion del sweter");
    let agregado = document.createElement("div");
    agregado.innerHTML = `<h3> Tipo de Prenda: sweter</h3>;
    <p>Sweter de lana de color marron, comodo y abrigado!</p>
                          <p>Precio: 1200 </p>`
    document.body.appendChild(agregado);
}


// mostrando el total sin el alert
let div = document.getElementById("totalico");//div
let boton3 = document.getElementById("sumatoria")//boton
let ptotal = document.createElement("p")//parrafo
//let psueter = 1200;
//ptotal.innerHTML = "Tu total es de: " + span.textContent * 1200;

boton3.addEventListener("click", clip3)

function clip3() {
    ptotal.innerHTML = "<strong>Tu total seria de: </stronf>" + span.textContent * 1200;
    console.log(span.textContent);
    console.log(ptotal.textContent);
     document.body.appendChild(ptotal);
}