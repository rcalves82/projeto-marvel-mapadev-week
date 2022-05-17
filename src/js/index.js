// alert('Olá Mundo') -> Testando pra validar se o JS esta se comunicando com o HTML

/*
    PARA INICIANTE
const homemDeFerro = document.getElementById('homem-de-ferro');

homemDeFerro.addEventListener('mouseenter', () => {
   homemDeFerro.classList.add('selecionado');
});

const hulk = document.getElementById('hulk');

hulk.addEventListener('mouseenter', () => {
   hulk.classList.add('selecionado');
});
*/

const personagens = document.querySelectorAll('.personagem');

personagens.forEach((personagem) => {
    
    const idSelecionado = personagem.attributes.id.value;

    if(idSelecionado === 'ultron') return;

    personagem.addEventListener('mouseenter', () => {
        /* 
            OBJETIVO 1 - quando passar o mouse em cima do personagem personagem temos que:

                - colocar a classe selecionado no personagem que passamos o mouse em cima, 
                para adicionar a animação nele,

                - retirar a classe selecionando do personagem que esta selecionado. 
        */
        const personagemSelecionado = document.querySelector('.selecionado');
        personagemSelecionado.classList.remove('selecionado');

        personagem.classList.add('selecionado');

         /* 
            OBJETIVO 2 - quando passar o mouse em cima do personagem da listagem, trocar a imagem 
            e nome do personagem grande a esquerda

                - alterar a imagem do jogador 1,
                - alterar o nome do jogador 1. 
        */
        
        const imangemJogador1 = document.getElementById('personasgem-jogador-1');
        imangemJogador1.src = `./src/iamgens/${idSelecionado}.png`;

        const nomeJogador1 = document.getElementById('nome-jogador-1');
        const nomeSelecionado = personagem.getAttribute('data-name');

        nomeJogador1.innerHTML = nomeSelecionado;
        

    });
});
