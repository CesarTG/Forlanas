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
//let listeame = document.getElementById("listar");
let listeame = $("#listar");
listeame[0].addEventListener("click", listar)
function listar() {
    for (const numeral of prendas) {
        let elemento = document.createElement("div");
        elemento.classList = "bg-warning";
        elemento.innerHTML = `<h3 id="tal"> Tipo de Prenda: ${numeral.prenda1}</h3>;
                          <p>Precio: ${numeral.costo}</p>`
        totalico.appendChild(elemento);
    }
}

//objeto 1 para darle valor a las prendas, un precio  para multiplicar por la cantidad que introduzca el cliente
const precio = { sweter: 1200, pantalon: 1500, remera: 1000, pollera: 800, bermuda: 1600 };
//-------------------------------------------------- Eventos ----------------------------------------------

let boton = $("#btn-1");
//const span = document.getElementById("span");
const span = $("#span");
let aumento = 0

boton[0].addEventListener("click", clip)
function clip() {
    aumento++;
    span[0].textContent = aumento;
}

let boton2 = $("#btn-2");
boton2[0].addEventListener("click", clip2)

function clip2() {
    aumento--;
    span[0].textContent = aumento;
}
//--------------------sweter descripcion card-------------------
//let sweter = document.getElementById("sweter");
let sweter = $("#sweter");
sweter[0].addEventListener("click", agregar)

function agregar() {
    console.log("agregaste una descripcion del sweter");
    let agregado = document.createElement("div");
    agregado.innerHTML = `<h3> Tipo de Prenda: sweter</h3>;
    <p>Sweter de lana de color marron, comodo y abrigado!</p>
                          <p>Precio: 1200 </p>`
    totalico.appendChild(agregado);
}

// mostrando el total sin el alert
//let div = document.getElementById("totalico");//div
//document.getElementById("sumatoria") -----------boton traido con jQuery
let boton3 = $(".botonn"); 
let ptotal = document.createElement("p")//parrafo
//ptotal.innerHTML = "Tu total es de: " + span.textContent * 1200;

boton3[0].addEventListener("click", clip3)

function clip3() {
    ptotal.innerHTML = "<strong>Tu total seria de: </stronf>" + span[0].textContent * 1200;
    //console.log(span[0].textContent);
    console.log(ptotal.textContent);
    totalico.appendChild(ptotal);
}