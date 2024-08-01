function alterarStatus(gameId) {
    let botao = document.getElementById(gameId).querySelector('.dashboard__item__button');
    let imagem = document.getElementById(gameId).querySelector('.dashboard__item__img');

    if (botao.classList.contains('dashboard__item__button--return')) {
        if (confirm('Você tem certeza que deseja devolver este jogo?')) {
            botao.classList.remove('dashboard__item__button--return');
            botao.textContent = 'Alugar';
            imagem.classList.remove('dashboard__item__img--rented');
            imprimirJogosAlugados();
        }
    } else {
        botao.classList.add('dashboard__item__button--return');
        botao.textContent = 'Devolver';
        imagem.classList.add('dashboard__item__img--rented');
        imprimirJogosAlugados();
    }
}

function imprimirJogosAlugados() {
    let alugados = document.querySelectorAll('.dashboard__item__img--rented').length;
    console.log(`Total de jogos alugados: ${alugados}`);
}

// function ordenarNumeros(a, b, c) {
//     let numeros = [a, b, c];
//     numeros.sort((x, y) => x - y);
//     return numeros;
// }

// function exibirNumerosOrdenados() {
//     const num1 = parseFloat(document.getElementById('num1').value);
//     const num2 = parseFloat(document.getElementById('num2').value);
//     const num3 = parseFloat(document.getElementById('num3').value);

//     const numerosOrdenados = ordenarNumeros(num1, num2, num3);
//     document.getElementById('resultado').textContent = `Números ordenados: ${numerosOrdenados.join(', ')}`;
// }