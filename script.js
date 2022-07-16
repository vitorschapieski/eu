//Criado por Vitor Schapieski :D

let botaoInicio = document.querySelector('.inicio');
let botaoQuemSouEu = document.querySelector('.quemSouEu');
let botaoProjetos = document.querySelector('.projetos');

let conteinerInicio = document.querySelector('.conteinerInicio');
let conteinerQuem = document.querySelector('.conteinerQuem');
let conteinerProjetos = document.querySelector('.conteinerProjetos');

function clicarInicio(){
    conteinerInicio.classList.toggle('ativar');
    conteinerQuem.classList.remove('ativar');
    conteinerProjetos.classList.remove('ativar');
};
function clicarQuemSouEu(){
    conteinerQuem.classList.toggle('ativar');
    conteinerInicio.classList.remove('ativar');
    conteinerProjetos.classList.remove('ativar');
};
function clicarProjetos(){
    conteinerProjetos.classList.toggle('ativar');
    conteinerQuem.classList.remove('ativar');
    conteinerInicio.classList.remove('ativar');
};

botaoInicio.addEventListener('click', clicarInicio);
botaoQuemSouEu.addEventListener('click', clicarQuemSouEu);
botaoProjetos.addEventListener('click', clicarProjetos);


