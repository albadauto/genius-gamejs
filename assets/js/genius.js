

var sequence = [];
var sequenceUser = [];
var userPoints = 0;
var restart = false;
const vermelho = document.getElementById("vermelho");
const amarelo = document.getElementById("amarelo");
const azul = document.getElementById("azul");
const verde = document.getElementById("verde");

//COMEÇA O JOGO
function handleStartGame(){
    console.log("Starting...");
    restartGame();
    handleGenerateNewSequence();
    handleUnlockAllPads();

    for (let i in sequence){
        ledAnimation(sequence[i], Number(i) + 1);
    }
}

function handleAddPoint(){
    userPoints++;
    document.getElementById("points").innerHTML = userPoints + " Pontos";
}

//GERA UMA NOVA SEQUENCIA DE CORES
function handleGenerateNewSequence(){
    let randomSequence = ['azul', 'verde', 'amarelo', 'vermelho'];
    sequence.push(randomSequence[Math.floor(Math.random() * randomSequence.length)]);
}   

//LE A RESPOSTA DO USUARIO
function handleClickUser(e){
    sequenceUser.push(e.value);
    ledAnimation(e.value);
    for (let i = 1; i <= sequenceUser.length; i++){
        if (sequenceUser.length === sequence.length){
            if (arrayEquals(sequenceUser, sequence)){
                handleAddPoint();
                setTimeout(() => handleStartGame(), 500);
                sequenceUser = [];
            }else{
                alert("Você errou! Tente novamente.")
                restart = true;
                userPoints = 0
                points.innerHTML = userPoints + " Pontos";
                sequence, sequenceUser = [];
                return;
            }
        }

    }
}

//VERIFICA AS RESPOSTAS
function arrayEquals(a, b) {
    return Array.isArray(a) &&
      Array.isArray(b) &&
      a.length === b.length &&
      a.every((val, index) => val === b[index]);
  }


function ledAnimation(color, number){
    number = number * 500;
    setTimeout(() => {
        document.getElementById(color).src = `./public/img/${color}_aceso.png`;
        setTimeout(() => {
            document.getElementById(color).src = `./public/img/${color}.png`;
        }, 400)
    }, number - 250)   

}

//Habilitar todos os pads
function handleUnlockAllPads(){
    btn_vermelho.disabled = false;
    btn_verde.disabled = false;
    btn_azul.disabled = false;
    btn_amarelo.disabled = false;

}

//Resetar o jogo
function resetAll(){
    sequence = [];
    sequenceUser = []
}

//Reiniciar o jogo
function restartGame(){
    if (restart){
        restart = false;
        resetAll();
    }
}
