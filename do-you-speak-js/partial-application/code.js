
const settings = {
  url: 'https://dummyjson.com/products/'
}

async function getProductFactory(url, id) {
  const res = await fetch(url + id);
  const data = await res.json();
  return data.title;
}

function partial(func, ...initialArgs) {
  return (...args) => {
    return func(...initialArgs, ...args);
  }
}

const getProduct = partial(
  getProductFactory,
  settings.url
);
const getProduct2 = getProductFactory.bind({}, settings.url);

(async () => {
  console.log(await getProduct(3));
  console.log(await getProduct2(7));
})();