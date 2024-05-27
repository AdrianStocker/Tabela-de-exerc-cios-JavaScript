let valorDolar = document.querySelector("#valorDolar");
let btCalcular = document.querySelector("#btCalcular");
let h3Resultado = document.querySelector("#h3Resultado");

function calcularDolar(){

    let vlr = Number(valorDolar.value);
    let resultado1 = vlr + ((1/100) * vlr);
    let resultado2 = vlr + ((2/100) * vlr) ;
    let resultado3 = vlr + ((5/100) * vlr) ;
    let resultado4 = vlr + ((10/100) * vlr) ;

    h3Resultado.innerHTML = String(
        "Valor dolar =" + vlr + "<br>" +
        "Valor ajustado 1% ="+ resultado1 + "<br>" +
        "Valor ajustado 2% ="+ resultado2 + "<br>" +
        "Valor ajustado 5% ="+ resultado3 + "<br>" +
        "Valor ajustado 10% ="+ resultado4);
}

btCalcular.onclick = function(){ 
    calcularDolar();
}
