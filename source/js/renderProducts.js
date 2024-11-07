import {openModal, closeModal} from './modal.js';
import { renderCart } from './productCart.js';
import { addToStorage, getStorage } from './localstorage.js';
import formatPrice from './formatPrice.js';

export default (products, template, target, isTargetList = false, templateClass = '') => {
    const fragment = document.createDocumentFragment();
    
    let productEl = template.querySelector('.product__item');
    
    if (isTargetList) {
        const node = document.createElement('li');
        node.innerHTML = productEl.innerHTML;
        
        Array.prototype.forEach.call(productEl.attributes, function( attr ) {
            node.setAttribute( attr.name, attr.value );
        });
        node.classList.add(templateClass);
        
        productEl = node;
    }
    
    products.forEach(product => {
        const itemEl = productEl.cloneNode(true);
        const titleEl = itemEl.querySelector('.product__name');
        const imageEl = itemEl.querySelector('.product__image');
        const priceNewEl = itemEl.querySelector('.product__price-new'); 
        const priceOldEl = itemEl.querySelector('.product__price-old');
        const buttonEl = itemEl.querySelector('.product__button');
        const { id, isBig, status, image, name, price, oldPrice } = product;
        
        buttonEl.addEventListener('click', () => {
            addToStorage(product, 'cartKyct');
            renderCart(true);
        });
        
        itemEl.dataset.productId = id;
        titleEl.textContent = name;
        imageEl.src = image;
        priceNewEl.textContent = formatPrice(price);
        priceOldEl.textContent = formatPrice(oldPrice);
        
        if(status?.length) {
            itemEl.classList.add(`product__item--${status}`);
        } 
        if(isBig) {
            itemEl.classList.add(`product__item--big`);
        }
        fragment.appendChild(itemEl);
    });
    
    target.innerHTML = '';
    target.append(fragment);
}
