let photo = document.querySelector('.photo');

function abrirModal(){
    let modal = document.querySelector('.modal');
    modal.classList.toggle('ativar');
};

photo.addEventListener('click', abrirModal)