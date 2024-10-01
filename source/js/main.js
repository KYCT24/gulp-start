import './test.js';
import './script.js';
import renderProducts from './renderProducts.js';
import { fetchParams } from './api.js';

const best_sellingTemplate = document.querySelector('#best-selling-productList').content;
const best_selling_productsList = document.querySelector('.best-selling__products');


const dataProduct = fetchParams('https://zsa-studio.ru/catalog.php');

dataProduct.then((products) => renderProducts(products, best_sellingTemplate, best_selling_productsList, true, 'product__item')) ;
