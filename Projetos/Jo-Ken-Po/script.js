let jogada, opcaoMaquina, placarCont = 0, placarContPC = 0;
let numJogada = null;

const pedraBtn = document.getElementById("Pedra");
const papelBtn = document.getElementById("Papel");
const tesouraBtn = document.getElementById("Tesoura");

function jogar(opcao) {
    if (opcao == "PEDRA") {
        numJogada = 0;
    } else if (opcao == "PAPEL") {
        numJogada = 1;
    } else if (opcao == "TESOURA") {
        numJogada = 2;
    }
    
    jogada = opcao;
    document.getElementById("escolhaP1").textContent = jogada;
    
    jogadaMaquina = Math.floor((Math.random() * 3))

    if (jogadaMaquina == 0){        
        opcaoMaquina = "PEDRA";
        document.getElementById("Jogada1").textContent = "Player: " + jogada + " | Máquina: PEDRA";
    }else if (jogadaMaquina == 1){
        document.getElementById("Jogada1").textContent = "Player 1 (Pessoa): " + jogada + "\nPlayer 2 (Máquina): PAPEL";
        opcaoMaquina = "PAPEL";
    }else if (jogadaMaquina == 2){
        document.getElementById("Jogada1").textContent = "Player 1 (Pessoa): " + jogada + "\nPlayer 2 (Máquina): TESOURA";
        opcaoMaquina = "TESOURA";
    }

    document.getElementById("escolhaPC").textContent = opcaoMaquina;
    
    if ((jogadaMaquina == 0 && numJogada == 0) || (jogadaMaquina == 1 && numJogada == 1) || (jogadaMaquina == 2 && numJogada == 2)){
        document.getElementById("placarPC").textContent = "EMPATE";
        document.getElementById("placarP1").textContent = "EMPATE";
        document.getElementById("placar1").style.backgroundColor = "#4682B4";
        document.getElementById("placar2").style.backgroundColor = "#4682B4";
        document.getElementById("Jogada2").textContent = "Empate";
    } else if ((jogadaMaquina == 0 && numJogada == 2) || (jogadaMaquina == 2 && numJogada == 0)){
        document.getElementById("Jogada2").textContent = "Pedra quebra Tesoura.";        
    } else if ((jogadaMaquina == 2 && numJogada == 1) || (jogadaMaquina == 1 && numJogada == 2)){
        document.getElementById("Jogada2").textContent = "Tesoura corta Papel";        
    } else if ((jogadaMaquina == 1 && numJogada == 0) || (jogadaMaquina == 0 && numJogada == 1)){
        document.getElementById("Jogada2").textContent = "Papel cobre a Pedra";        
    }
    
    if (jogadaMaquina == 0 && numJogada == 2 || jogadaMaquina == 2 && numJogada == 1 || jogadaMaquina == 1 && numJogada == 0){
        document.getElementById("placarPC").textContent = "VITÓRIA";
        document.getElementById("placarCont2").textContent = "Computador [" + (placarContPC += 1) +"]";
        document.getElementById("placarP1").textContent = "DERROTA";
        document.getElementById("placar2").style.backgroundColor = "#008000";
        document.getElementById("placar1").style.backgroundColor = "#FF0000";       
        
    } else if (jogadaMaquina == 2 && numJogada == 0|| jogadaMaquina == 1 && numJogada == 2 || jogadaMaquina == 0 && numJogada == 1){
        document.getElementById("placarPC").textContent = "DERROTA";
        document.getElementById("placarP1").textContent = "VITÓRIA";
        document.getElementById("placarCont1").textContent = "Placar [" + (placarCont += 1) +"]";
        document.getElementById("placar1").style.backgroundColor = "#008000";
        document.getElementById("placar2").style.backgroundColor = "#FF0000";
    }
}