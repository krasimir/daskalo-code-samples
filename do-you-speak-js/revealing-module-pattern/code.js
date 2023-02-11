function User(n) {
  const name = n;
  const sayHi = () => console.log(`${name}: hello`);
  const secret = 'foobar';
  
  return {
    name,
    sayHi
  }
};

const a = User('Krasimir');
const b = User('John');

a.sayHi(); b.sayHi();

/*
const user = {
  name: 'Krasimir',
  sayHi() {
    console.log('Hello');
  },
  secret: 'foobar'
}
*/