let nota = document.querySelector("#nota");
let btCalcualr = document.querySelector("#btCalcular");
let h3Resultado = document.querySelector("#resultado");


function verificarNota() {

    let vlr1 = Number(nota.value);
    let mensagem;

    if (vlr1 >= 6) {
        mensagem = "Aprovado";
    } else if (vlr1 > 4) {
        mensagem = "Precisa fazer prova substitutiva";
    } else {
        mensagem = "Reprovado";
    }

    h3Resultado.textContent = String(mensagem) ;
}

btCalcular.onclick = function(){
    verificarNota();
}