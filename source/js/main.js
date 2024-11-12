import './script.js';
import './slider.js';
import renderProducts from './renderProducts.js';
import { fetchParams } from './api.js';
import products from './products.js';
import './productCart.js';


const best_sellingTemplate = document.querySelector('#best-selling-productList').content;
const best_selling_productsList = document.querySelector('.best-selling__products');
const dataProduct = fetchParams('https://zsa-studio.ru/catalog.php');



const isDataProductFromSite = true;
if (isDataProductFromSite === false) {
    renderProducts(products, best_sellingTemplate, best_selling_productsList, true, 'product__item')
} else {
    await dataProduct.then((products) => renderProducts(products, best_sellingTemplate, best_selling_productsList, true, 'product__item')) ;
}

