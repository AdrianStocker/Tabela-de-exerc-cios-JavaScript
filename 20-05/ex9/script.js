let alunosTotais = document.querySelector('#alunosTotais');
let numTurmas = document.querySelector('#numTurmas');
let btcalcular = document.querySelector('#btCalcular');
let resultado = document.querySelector('#resultado');

function verificarTurma(){

    let vlrAlunos = Number(alunosTotais.value);
    let vlrTurma = Number(numTurmas.value);

    let alunosPorTurma = Math.floor(vlrAlunos / vlrTurma);
    let alunosSemTurma = vlrAlunos % vlrTurma;

    resultado.innerHTML = String("Serão " + alunosPorTurma + " pessoas por turma." + "<br>"+
    alunosSemTurma + "  pessoas ficarão sem turma.");

}

btcalcular.onclick = function(){
    verificarTurma();
}