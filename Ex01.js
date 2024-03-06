function diasAteDataAlvo(dataAlvo) {
    const hoje = new Date();
    const diferencaEmMilissegundos = dataAlvo - hoje;
    const diferencaEmDias = Math.ceil(diferencaEmMilissegundos / (1000 * 60 * 60 * 24));
    return diferencaEmDias;
}

function ferias() {
    const dataFerias = new Date("Nov 22 2023");
    const diasRestantes = diasAteDataAlvo(dataFerias);
    window.alert("Faltam " + diasRestantes + " dias para as férias");
}

function aniversario() {
    const hoje = new Date();
    const anoAtual = hoje.getFullYear();
    const proximoAniversario = new Date(`Apr 21 ${anoAtual}`);
    
    // Se o aniversário já passou este ano, calcular para o próximo ano
    if (hoje > proximoAniversario) {
        proximoAniversario.setFullYear(anoAtual + 1);
    }

    const diasRestantes = diasAteDataAlvo(proximoAniversario);
    window.alert("Faltam " + diasRestantes + " dias para o meu aniversário");
}