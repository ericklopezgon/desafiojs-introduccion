const precio = 400000

document.querySelector(".precio-inicial").innerHTML = precio


function sumar(){
    let plus = document.querySelector(".cantidad");
    let amountplus = parseInt(plus.innerHTML);
    plus.innerHTML = amountplus +1

    // usar la cantidad resultante despues de la suma
    totalamount++;
    total.innerHTML = totalamount * value;
}

function restar(){
    let minus = document.querySelector(".cantidad");
    let amountminus = parseInt(minus.innerHTML);
    minus.innerHTML = amountminus -1

    // usar la cantidad resultante ddespues de la resta
    totalamount--;
    total.innerHTML = totalamount * value;
}

let total = document.querySelector(".valor-total");
let totalamount = parseInt(document.querySelector(".cantidad").innerHTML);
let value = parseInt(precio);












