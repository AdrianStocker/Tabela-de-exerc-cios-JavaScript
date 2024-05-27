function calcularMetas() {
    var valorVendido = parseFloat(document.getElementById('valorVendido').value);
    var meta = parseFloat(document.getElementById('meta').value);
    var metaMinima = parseFloat(document.getElementById('metaMinima').value);

    var percentualMeta = (valorVendido / meta) * 100;
    var percentualMetaMinima = (valorVendido / metaMinima) * 100;

    var resultado = document.getElementById('resultado');

    if (valorVendido >= meta) {
        resultado.innerHTML = "Parabéns! Você atingiu a meta.<br>";
    } else {
        resultado.innerHTML = "Você não atingiu a meta.<br>";
    }

    if (valorVendido >= metaMinima) {
        resultado.innerHTML += "Você atingiu a meta mínima.<br>";
    } else {
        resultado.innerHTML += "Você não atingiu a meta mínima.<br>";
    }

    resultado.innerHTML += "Percentual de atingimento da meta: " + percentualMeta.toFixed(2) + "%<br>";
    resultado.innerHTML += "Percentual de atingimento da meta mínima: " + percentualMetaMinima.toFixed(2) + "%";
}




