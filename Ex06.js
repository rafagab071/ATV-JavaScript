let numeroAleatorio;
let tentativas = 3;
let tentativaAtual = 1;

document.addEventListener("DOMContentLoaded", function (){
    iniciarJogo();
});

function iniciarJogo(){
    numeroAleatorio = gerarNumeroAleatorio();
    tentativas = 3;
    tentativaAtual = 1;
    atualizarMensagem("");
    limparCampos();
}

function gerarNumeroAleatorio(){
    return Math.floor(Math.random() * 10) + 1;
}

function jogar(){
    const inputn1 = document.getElementById("n1");
    const inputn2 = document.getElementById("n2");
    const inputn3 = document.getElementById("n3");
    const mensagemElemento = document.getElementById("mensagem");

    let chute;

    switch (tentativaAtual) {
        case 1:
            chute = parseInt(inputn1.value);
            break;
        case 2:
            chute = parseInt(inputn2.value);
            break;
        case 3:
            chute = parseInt(inputn3.value);
            break;
    }

    if (chute === numeroAleatorio){
        mensagemElemento.innerText = `Número ${numeroAleatorio}! Parabéns, acertou!`;
        mensagemElemento.style.color = "green";
        colorirCampo(tentativaAtual, "green");
        return;
    }   else {
        colorirCampo(tentativaAtual, "red");
    }

    tentativas--;

    if (tentativas === 0){
        mensagemElemento.innerText = `Número errado: ${numeroAleatorio}. Você perdeu. Tente novamente!`;
        mensagemElemento.style.color = "red";
        atualizarMensagem("Tentativas esgotadas. Tente novamente!");
        limparCampos();
        
        if (tentativas < 0) {
            iniciarJogo();
        }
        
        return;
    }

    tentativaAtual++;
    atualizarMensagem(`Você errou! Tente novamente. Tentativas restantes: ${tentativas}`);
}

function colorirCampo(numeroTentativa, cor){
    const inputCampo = document.getElementById(`n${numeroTentativa}`);
    inputCampo.style.backgroundColor = cor;
}

function limparCampos(){
    const inputs = document.querySelectorAll("input[type=number]");
    inputs.forEach(input => {
        input.value = "";
        input.style.backgroundColor = "white";
    });
}

function atualizarMensagem(mensagem){
    const mensagemElemento = document.getElementById("mensagem");
    mensagemElemento.innerText = mensagem;
    mensagemElemento.style.color = "black";
}