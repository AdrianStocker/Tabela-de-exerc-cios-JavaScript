let nome1 = document.querySelector("#nome1");
let idade1 = document.querySelector("#idade1");
let nome2 = document.querySelector("#nome2");
let idade2 = document.querySelector("#idade2");
let nome3 = document.querySelector("#nome3");
let idade3 = document.querySelector("#idade3");
let btcalcular = document.querySelector("#btcalcular");
let resultado = document.querySelector("#resultado");


function verificarIdade(){

    let pessoa1Nome = String(nome1.value);
    let pessoa1Idade = Number(idade1.value);

    let pessoa2Nome = String(nome2.value);
    let pessoa2Idade = Number(idade2.value);

    let pessoa3Nome = String(nome3.value);
    let pessoa3Idade = Number(idade3.value);

    let maisVelha, segundaMaisVelha, maisNova;

    if (pessoa1Idade > pessoa2Idade && pessoa1Idade > pessoa3Idade) {
        maisVelha = pessoa1Nome + " - " + pessoa1Idade + " anos";
        if (pessoa2Idade > pessoa3Idade) {
            segundaMaisVelha = pessoa2Nome + " - " + pessoa2Idade + " anos";
            maisNova = pessoa3Nome + " - " + pessoa3Idade + " anos";
        } else {
            segundaMaisVelha = pessoa3Nome + " - " + pessoa3Idade + " anos";
            maisNova = pessoa2Nome + " - " + pessoa2Idade + " anos";
        }
    } else if (pessoa2Idade > pessoa1Idade && pessoa2Idade > pessoa3Idade) {
        maisVelha = pessoa2Nome + " - " + pessoa2Idade + " anos";
        if (pessoa1Idade > pessoa3Idade) {
            segundaMaisVelha = pessoa1Nome + " - " + pessoa1Idade + " anos";
            maisNova = pessoa3Nome + " - " + pessoa3Idade + " anos";
        } else {
            segundaMaisVelha = pessoa3Nome + " - " + pessoa3Idade + " anos";
            maisNova = pessoa1Nome + " - " + pessoa1Idade + " anos";
        }
    } else {
        maisVelha = pessoa3Nome + " - " + pessoa3Idade + " anos";
        if (pessoa1Idade > pessoa2Idade) {
            segundaMaisVelha = pessoa1Nome + " - " + pessoa1Idade + " anos";
            maisNova = pessoa2Nome + " - " + pessoa2Idade + " anos";
        } else {
            segundaMaisVelha = pessoa2Nome + " - " + pessoa2Idade + " anos";
            maisNova = pessoa1Nome + " - " + pessoa1Idade + " anos";
        }
    }
    resultado.innerHTML = "<p>Pessoa mais velha: " + maisVelha + "</p>" + 
                             "<p>Segunda pessoa mais velha: " + segundaMaisVelha + "</p>" +
                             "<p>Pessoa mais nova: " + maisNova + "</p>";
}

btcalcular.onclick = function(){

    verificarIdade();
}