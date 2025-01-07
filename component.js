const menu = document.querySelector('#menu-bar');
const navbarEl = document.querySelector('.navbar-menu');
const btnLogo = document.querySelector('.navbar-logo');
const body = document.querySelector('body')
const btnService = document.querySelector('.service-button');
const btnProject = document.querySelector('.project-button');

btnService.addEventListener('click', () => {
    window.location.href = '/Sheppy/service.html';
});

btnProject.addEventListener('click', () => {
    window.location.href = '/Sheppy/project.html';
});


btnLogo.addEventListener('click', ()=> {
    navbarEl.classList.toggle('active');
    body.classList.toggle('active');
})