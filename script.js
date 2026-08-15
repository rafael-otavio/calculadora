const visor = document.getElementById('visor');

// Adiciona o valor do botão ao visor
function adicionar(valor) {
    visor.value += valor;
}

// Limpa todo o visor
function limpar() {
    visor.value = '';
}

// Apaga o último caractere digitado
function apagar() {
    visor.value = visor.value.slice(0, -1);
}

// Realiza o cálculo matemático usando eval
function calcular() {
    try {
        visor.value = eval(visor.value);
    } catch (erro) {
        visor.value = 'Erro';
    }
}
