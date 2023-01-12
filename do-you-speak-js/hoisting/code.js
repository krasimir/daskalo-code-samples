// const test = () => {
//   console.log('Hey');
// }
// test();

// console.log(a);
// var a = 10;
// console.log(a);

function code() {
  return a() + b();
  function a() {
    return 11;
  }
  function b() {
    return 2;
  }
}

console.log(code());