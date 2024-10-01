import {openModal, closeModal} from './script.js';

export default (products, template, target, isTargetList = false, templateClass = '') => {
    const fragment = document.createDocumentFragment();
    
    let productE1 = template.querySelector('.product__item');
    
    if (isTargetList) {
        const node = document.createElement('li');
        node.innerHTML = productE1.innerHTML;
        
        Array.prototype.forEach.call(productE1.attributes, function( attr ) {
            node.setAttribute( attr.name, attr.value );
        });
        node.classList.add(templateClass);
        
        productE1 = node;
    }
    
    products.forEach(product => {
        const itemE1 = productE1.cloneNode(true);
        const titleE1 = itemE1.querySelector('.product__name');
        const imageE1 = itemE1.querySelector('.product__image');
        const priceE1 = itemE1.querySelector('.product__price');
        const priceNewE1 = itemE1.querySelector('.product__price-new');
        const priceOldE1 = itemE1.querySelector('.product__price-old');
        const buttonE1 = itemE1.querySelector('.product__button');
        const { id, name, status, isBig, image, price, oldPrice } = product;

        itemE1.dataset.productId = id;
        titleE1.texContent = name;
        imageE1.src = image;
        priceNewE1.texContent =`${price} ₽`;
        priceOldE1.texContent =`${oldPrice} ₽`;
        
        const buttonCloseModal = document.querySelector('.modal-product__close');
        buttonE1.addEventListener('click',openModal);
        buttonCloseModal.addEventListener('click', closeModal);
        
        if(status?.length) {
            itemE1.classList.add(`product__item--${status}`);
        } 
        if(isBig) {
            itemE1.classList.add(`product__item--big`);
        }
        fragment.appendChild(itemE1);
    });
    
    target.innerHTML = '';
    target.append(fragment);
}
