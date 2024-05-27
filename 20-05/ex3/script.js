let valor1 = document.querySelector("#valor1");
let valor2 = document.querySelector("#valor2");
let btCalcular = document.querySelector("#btCalcular");
let h3Resultado = document.querySelector("#h3Resultado");

function calculo(){

    let vlr1 = Number(valor1.value);
    let vlr2 = Number(valor2.value);

    let adicao = vlr1 + vlr2;
    let subtracao = vlr1 - vlr2;
    let mult = vlr1 * vlr2;
    let divisao = vlr1 / vlr2

    h3Resultado.innerHTML = String(
        "Soma = " + adicao + "<br>" + 
        "subtração = " + subtracao + "<br>" + 
        "Multiplicação = " + mult + "<br>" +
        "Divisão =" + divisao
    );

}

btCalcular.onclick = function(){
    calculo();
}