import products from './products.js';
import renderProducts from './renderProducts.js';
import './script.js';

const best_sellingTemplate = document.querySelector('#best-selling-productList').content;
const best_selling_productsList = document.querySelector('.best-selling__products');

renderProducts(products, best_sellingTemplate, best_selling_productsList, true, 'product__item');

