export const openModal = (modal) => {
    const modalCloseButtons = modal.querySelectorAll('.modal__close');
    modal.classList.add('modal--showed');
    
    if(modalCloseButtons.length === 0){
        return;
    }
    
    modalCloseButtons.forEach(modalCloseButton => {
        modalCloseButton.addEventListener('click', () => {
            closeModal(modal);
        });
    });
    
    // const close = (event) => {
    //     closeModal(modal);
    //     modalCloseButton.removeEventListener('click', close);
    // };
    
    // modalCloseButton.addEventListener('click', () => {
    //     closeModal(modal);
    // });
    
    // modalCloseButtons.forEach(modalCloseButton => {
    //     modalCloseButton.addEventListener('click', close);
    // });
};

export const closeModal = (modal) => {
    modal.classList.remove('modal--showed');
};


