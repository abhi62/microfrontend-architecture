import faker from 'faker';

const mount = (el) => {
  const cartText = `<div>Tou have ${faker.datatype.number()} items in your cart</div>`;
  console.log(el);
  el.innerHTML = cartText;
};

if (process.env.NODE_ENV === 'development') {
  const el = document.querySelector('#cart-dev');
  mount(el);
}

export { mount };
