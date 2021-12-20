import faker from 'faker';

//taking html elem reference
const mount = (el) => {
  let products = 'initial product';

  for (let i = 0; i < 5; i++) {
    const name = faker.commerce.productName();
    products += `<div>${name}</div>`;
  }
  console.log(el + 'products');

  el.innerHTML = products;
};

//for isolation check
//first check if its running in development mode

if (process.env.NODE_ENV === 'development') {
  const el = document.querySelector('#prod_id-dev');

  //assuming that container doesnt have id prod_id-dev
  if (el) {
    //running in isolation
    mount(el);
  }
}

//for container to use this
export { mount };
