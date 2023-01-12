function test() {
  console.log(a);
  const name = "Krasimir";
  const foo = () => {
    console.log(name);
  }
  if (true) {
    var a = 'b';
  }
  console.log(a);
  foo();
}

test();