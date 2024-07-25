function alterarStatus(elementId) {
    let botao = document.getElementById(elementId);

    if(botao.classList.contains('dashboard__item__button--return')) {
        botao.classList.remove('dashboard__item__button--return');
        document.getElementById(elementId).innerHTML = 'Alugar';
    } else{
        botao.classList.add('dashboard__item__button--return');
        document.getElementById(elementId).innerHTML = 'Devolver';
    }
}