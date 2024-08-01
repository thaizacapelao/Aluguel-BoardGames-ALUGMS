function alterarStatus(gameId) {
    let botao = document.getElementById(gameId).querySelector('.dashboard__item__button');
    let imagem = document.getElementById(gameId).querySelector('.dashboard__item__img');

    if (botao.classList.contains('dashboard__item__button--return')) {
        if (confirm('Você tem certeza que deseja devolver este jogo?')) {
            botao.classList.remove('dashboard__item__button--return');
            botao.textContent = 'Alugar';
            imagem.classList.remove('dashboard__item__img--rented');
        }
    } else {
        botao.classList.add('dashboard__item__button--return');
        botao.textContent = 'Devolver';
        imagem.classList.add('dashboard__item__img--rented');
    }
}

