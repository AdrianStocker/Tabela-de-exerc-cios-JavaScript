let numero1 = document.querySelector("#numero1");
let numero2 = document.querySelector("#numero2");
let btCalcular = document.querySelector("#btCalcular");
let resultado = document.querySelector("#resultado");



function compararNumeros() {
    let vlr1 =Number(numero1.value);
    let vlr2 =Number(numero2.value);

    let mensagem;

    if (vlr1 > vlr2) {
        mensagem = "O primeiro número é maior que o segundo.";
    } else if (vlr1 < vlr2) {
        mensagem = "O primeiro número é menor que o segundo.";
    } else {
        mensagem = "Os números são iguais.";
    }

    resultado.textContent = String(mensagem);
}

btCalcular.onclick = function(){
    compararNumeros();
}