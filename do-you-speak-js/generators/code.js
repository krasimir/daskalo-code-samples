function * test() {
  const result = (yield 'AAA') + 10;
  console.log(result);
}

const iterator = test();
console.log(iterator.next());
console.log(iterator.next(22));