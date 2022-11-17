const user = {
  id: '39029092'
}
const car = {
  id: '2-4829'
}

function printId(prefix) {
  console.log(prefix + ' ID is ' + this.id);
}

// printId.apply(user, ['USER']);
// printId.apply(car, ['CAR']);

const myFunction = printId.bind(user, 'XXX');

// myFunction();


function sum(a, b, c) {
  return a + b + c;
}

const sum10 = sum.bind({}, 10);

console.log(sum10(2, 2));




