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

// const buttonCloseModal = document.querySelector('.modal__close');
// const modal = document.querySelector('.modal-product');

// const openModal = () => {
//     modal.classList.add('modal--showed');
//     buttonClosed.addEventListener('click', closeModal);
// };

// const closeModal = () => {
//     modal.classList.remove("modal--showed");
//     buttonClosed.removeEventListener('click', closeModal);
// };

// const buttonAll = document.querySelectorAll('button');
// buttonAll.forEach(
//     (button) => {
//         if (button.classList.contains('most__button')){
//             button.addEventListener('click',openModal);
//             buttonCloseModal.addEventListener('click', closeModal);
//             return;
//         };
//     }
// );

// export {openModal, closeModal};