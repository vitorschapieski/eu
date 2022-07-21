let fechar = document.querySelector('.fechar')
let photos = document.querySelector('.photos')
let modal = document.querySelector('.modal')
let jaja = document.querySelector('.jaja')
let skillButton = document.querySelector('.skills')
let skillPage = document.querySelector('.skill')
let pagePosts = document.querySelector('.Posts')

function toggle(){
    skillPage.classList.toggle('ativar');
    pagePosts.classList.toggle('ativar')
}

skillButton.addEventListener('click', toggle);
