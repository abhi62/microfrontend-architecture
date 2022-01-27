import faker from 'faker';

const mount = (el) => {
  let cartText = `<div>Tou have ${faker.datatype.number()} items in your cart</div>`;
  console.log(el, 'cart+>');
  el.innerHTML = cartText;
};

if (process.env.NODE_ENV === 'development') {
  const el = document.querySelector('#cart-dev');
  if (el) {
    mount(el);
  }
}

export { mount };
