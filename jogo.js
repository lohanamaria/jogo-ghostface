const NUM_GHOSTFACE = 40;
const TEMPO_INICIAL = 15;
let pontos = 0;
let tempo = 0;
let timer = null;

function iniciaJogo() {

    pontos = 0;
    tempo = TEMPO_INICIAL;
    let tela = document.getElementById("tela");
    tela.innerHTML = "";

    for(let i = 0; i < NUM_GHOSTFACE; ++i) {
        let ghostface = document.createElement("img");
    ghostface.src = "gt1.jpg";
    ghostface.id = "m" + i;
    ghostface.onclick = function(){
        pegaGhost(this);
    }
    tela.appendChild(ghostface);
    }

    timer = setInterval(contaTempo, 1000);

}

function pegaGhost(ghostface){
if (tempo <= 0) return;  //early return

    ghostface.onclick = null;
    ghostface.src = "gt2.jpg"

    ++pontos;
    let contadorPontos = document.getElementById("pontos");
    contadorPontos.innerText = pontos;
}

function contaTempo(){

    --tempo;
    let contadorTempo = document.getElementById("tempo");
    contadorTempo.innerText = tempo;

    if(tempo <= 0) {
        clearInterval(timer);
        alert("Parabéns, voce perdeu o ghostface de vista " + pontos + " vezes! Pontos para ele, boa sorte na próxima (ou não" );
        iniciaJogo()
    };
}