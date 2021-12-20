import { mount as productsMounts } from 'products/ProductsIndex';
import { mount as cartMounts } from 'cart/CartShow';
console.log('Container!');

productsMounts(document.querySelector('#prod_id'));
cartMounts(document.querySelector('#my-cart'));
