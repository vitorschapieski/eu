let skillButton = document.querySelector('.skills')
let skillPage = document.querySelector('.skill')
let pagePosts = document.querySelector('.Posts')

function toggle(){
    skillPage.classList.toggle('ativar');
    pagePosts.classList.toggle('ativar');
}

skillButton.addEventListener('click', toggle);
