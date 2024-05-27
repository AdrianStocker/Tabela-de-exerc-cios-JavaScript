let quantPss = document.querySelector("#quantPss");
let btCalcular = document.querySelector("#btCalcular");
let h3Resultado = document.querySelector("#h3Resultado");

function verficarQtd (){

    let vlr = Number(quantPss.value);
    let ovos = Number(2);
    let queijo = Number(50);
    let totalOvos = vlr * ovos;
    let totalQueijo = vlr * queijo;

    h3Resultado.innerHTML = String( vlr + " pessoas vão consumir " + totalOvos + " ovos e " +
    totalQueijo+"g de queijo" );
    
}

btCalcular.onclick = function(){
    verficarQtd();
}