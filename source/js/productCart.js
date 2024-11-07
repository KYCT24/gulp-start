import { addToStorage, removeFromStorage, getStorage } from './localstorage.js';
import { openModal, closeModal } from './modal.js';
import formatPrice from './formatPrice.js';
import { createOrder } from './api.js';
import { testPhone } from './testPhone.js';

const modalCart = document.querySelector('#modal_cart');
const modalCartSuccess = document.querySelector('#modal_success');
const modalCartError = document.querySelector('#modal_error');
const modalCartOrder = document.querySelector('#modal_order');
const blockMenu = document.querySelector('.main-nav__basket');
const cart = blockMenu.querySelector('.shopping-cart');
const cartList = cart.querySelector('.shopping-cart__products');
const cartOpenedButton = blockMenu.querySelector('.main-nav__shop');
const cartCount = blockMenu.querySelector('.main-nav__pin');
const cartProductTemplate = document.querySelector('#shopping-cart__productList').content;
import { fetchParams } from './api.js';

const orderButton = document.querySelector('#order-button');
const orderConfirm = document.getElementById('order-confirm');

orderButton.addEventListener('click', () => {
    const data = getStorage('cartKyct');

    openModal(modalCartOrder);
    cart.classList.remove('shopping-cart--active');
    const newArr = [];
    
    const arr = data?.reduce((acc, item) => {
        acc.push({ id: item.id, amount: item.amount });
        return acc;
    }, []);
    
    for(let id in arr){
        let newObj = {};
        newObj['id'] = id;
        newObj['amount'] = arr[id].amount;
        newArr.push(newObj);
    }
    // createOrder(newArr)
});

orderConfirm.addEventListener('click', () => {
    const userPhone = document.querySelector('.order__phone');
    const checkBox = document.querySelector('.order__checkbox');
    
    if(testPhone(userPhone.value) && checkBox.checked) {
        const userData = {
            'phone': userPhone.value,
        };
        closeModal(modalCartOrder);
        openModal(modalCartSuccess);
    } else {
        closeModal(modalCartOrder);
        openModal(modalCartError);
    }
    
});

export const renderCart = (isClick = false) => {
        const editProductCount = (clone, cart, product, totalPriceEl, operation = 'plus') => {
        const productIndex = uniqueData.findIndex(item => item.id === product.id);
        const input = clone.querySelector ('.shopping-cart__input');
        const cartAmountEl = cart.querySelector ('.shopping-cart__amount');
    
        if (operation === 'plus') {
          if (productIndex !== -1) {
            uniqueData[productIndex].amount++;
          } else {
            uniqueData.push({ id: product.id, amount: 1});
          };
            localStorage.setItem('cartKyct', JSON.stringify(uniqueData));
            cartAmountEl.textContent = Number(cartAmountEl.textContent) + 1;
    
        } else if (operation === 'minus') {
            uniqueData[productIndex].amount--;
            cartAmountEl.textContent = Number(cartAmountEl.textContent) - 1;
            if (uniqueData[productIndex].amount <= 0) {
                uniqueData.splice(productIndex, 1);
                removeFromCart(product.id);
                localStorage.setItem('cartKyct', JSON.stringify(uniqueData));
            }
        }
        
        input.value = uniqueData.find(item => item.id === product.id).amount;
        totalPriceEl.textContent = formatPrice(uniqueData.reduce((total, item) => total + item.price * item.amount, 0));
      }

        const dataCart = getStorage('cartKyct');
        
        if (!dataCart?.length) {
            return;
        }
        
        let uniqueData = [...new Set(dataCart.map(JSON.stringify))].map(JSON.parse).sort((a, b) => a.id - b.id);
        
        const fragment = document.createDocumentFragment();
        cartList.innerHTML = '';
        
        uniqueData.forEach(product => {
            const clone = cartProductTemplate.querySelector('.shopping-cart__item').cloneNode(true);
            clone.dataset.productId = product.id;
            clone.querySelector('.shopping-cart__input').value = product.amount;
            clone.querySelector('.shopping-cart__link').href = product.link;
            clone.querySelector('.shopping-cart__link img').src = product.image;
            clone.querySelector('.shopping-cart__link span').textContent = product.name;
            clone.querySelector('.shopping-cart__price').textContent = formatPrice(product.price);
            
            clone.querySelector('.shopping-cart__minus').addEventListener('click', () => {
                editProductCount(clone, cart, product, totalPriceEl, 'minus');
            });
            
            clone.querySelector('.shopping-cart__plus').addEventListener('click', () => {
                editProductCount(clone, cart, product, totalPriceEl, 'plus');
            });
            fragment.append(clone);
        });

        if(isClick) {
            openModal(modalCart);
        }
        
        cartList.append(fragment);
        cartCount.textContent = cartList.childElementCount;
        
        const cartAmountEl = cart.querySelector('.shopping-cart__amount');
        const totalPriceEl = cart.querySelector('.shopping-cart__total');
        
        cartAmountEl.textContent = uniqueData.reduce((total, item) => total + item.amount, 0);
        totalPriceEl.textContent = formatPrice(uniqueData.reduce((total, item) => total + item.price * item.amount, 0));
};

export const removeFromCart = (productId) => {
    const clone = cartList.querySelector(`[data-product-id="${productId}"]`);
    clone.remove()
    cartCount.textContent = cartList.childElementCount;
};

const openCart = (event) => {
    event.preventDefault();

    if(!cartList.childElementCount){
        return;
    }
    cart.classList.add('shopping-cart--active');
};

const closeCart = (event) => {
    if(blockMenu.contains(event.target)) {
        return;
    }
    if(cart.classList.contains('shopping-cart--active')) {
        event.preventDefault();
    }
    cart.classList.remove('shopping-cart--active');
};

document.addEventListener('click', closeCart);
cartOpenedButton.addEventListener('click', openCart);

if(getStorage('cartKyct')?.length) {
    renderCart();
}

