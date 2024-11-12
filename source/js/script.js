const buttonOpened = document.querySelector('.main-nav__burger');
const buttonClosed = document.querySelector('.main-nav__close');
const menu = document.querySelector('.main-nav__menu');

buttonOpened.addEventListener('click', () => {
    menu.classList.add('main-nav__menu--showed');
    buttonClosed.addEventListener('click', closeMenu);
});

const closeMenu = () => {
    menu.classList.remove("main-nav__menu--showed");
    buttonClosed.removeEventListener('click', closeMenu);
};
