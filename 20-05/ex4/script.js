let sabor1 = document.querySelector("#sabor1");
let sabor2 = document.querySelector("#sabor2");
let sabor3 = document.querySelector("#sabor3");
let sabor4 = document.querySelector("#sabor4");
let Refri = document.querySelector("#refrigerante");
let btPedido = document.querySelector("#btPedido");
let resultadoPedido = document.querySelector("#resultadoPedido");


function vlTotal(){
    let sbr1 = String(sabor1.value);
    let sbr2 = String(sabor2.value);
    let sbr3 = String(sabor3.value);
    let sbr4 = String(sabor4.value);
    let qtdRefri = Number(Refri.value);
    let valorSabor = 12;
    let valorRefri = 7;
    let totalPizza = valorSabor * 4;
    let totalRefrigerantes = valorRefri * qtdRefri;
    let totalPedido = totalPizza + totalRefrigerantes;

    resultadoPedido.innerHTML = String("Sabores pedidos : " + sbr1 + " , " + sbr2 + " , " + sbr3 + " , " + sbr4 +
    "<br>" + "Valor total do pedido : r$" + totalPedido )

}

btPedido.onclick = function(){
    vlTotal();
}