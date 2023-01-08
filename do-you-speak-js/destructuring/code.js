const products = [
  { name: 'Apple', price: 0.99, quantity: 10 },
  { name: 'Orange', price: 1.49, quantity: 20 },
  { name: 'Banana', price: 0.79, quantity: 15 }
];

products.forEach(({ name, price, quantity }) => {
  console.log(name);
});

const [ first, ...rest ] = products;

console.log(first);
console.log(rest);