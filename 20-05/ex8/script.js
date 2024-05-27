let numero = document.querySelector("#numero");
let btCalcular = document.querySelector("#btCalcular");
let resultado = document.querySelector("#resultado");


function verificarParOuImpar() {

    let vlr = Number(numero.value);
    let mensagem;

    if (vlr % 2 == 0) {
        mensagem = "O número digitado é par.";
    } else {
        mensagem = "O número digitado é ímpar.";
    }

    resultado.textContent = String(mensagem);
}

btCalcular.onclick = function(){
    verificarParOuImpar()
}