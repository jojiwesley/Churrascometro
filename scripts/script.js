let inputAdultos = document.getElementById("adultos");
let inputCriancas = document.getElementById("criancas");
let inputDuracao = document.getElementById("duracao");

let resultado = document.getElementById("resultado");

function calcular(){
    console.log("calculando");

    let adultos = inputAdultos.value;
    let criancas = inputCriancas.value;
    let duracao = inputDuracao.value;

    let qdTotalCarne = carnePP(duracao) * adultos + ( carnePP(duracao) / 2 * criancas );
    let qdTotalCerveja = cervejaPP(duracao) * adultos;
    let qdTotalBebidas = bebidaPP(duracao) * adultos + ( bebidaPP(duracao) / 2 * criancas );
    
    resultado.innerHTML=`<p>${qdTotalCarne / 1000} kg de Carne</p>`
    resultado.innerHTML +=`<p>${Math.ceil(qdTotalCerveja / 355)} latas  de Cerveja</p>`
    resultado.innerHTML +=`<p>${Math.ceil(qdTotalBebidas / 2000)} garrafas de Bebidas</p>`
}
function carnePP(duracao){
    if(duracao >= 6) {
        return 650;
    } else {
        return 400;
    }
}
function cervejaPP(duracao){
    if(duracao >= 6) {
        return 2000;
    } else {
        return 1200;
    }
}
function bebidaPP(duracao){
    if(duracao >= 6) {
        return 1500;
    } else {
        return 1000;
    }
}