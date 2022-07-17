let fechar = document.querySelector('.fechar')
let photos = document.querySelector('.photos')
let modal = document.querySelector('.modal')

function toggle(){
    modal.classList.toggle('ativar');
}

fechar.addEventListener('click', toggle);
photos.addEventListener('click', toggle);
