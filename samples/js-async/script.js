function calculate(a, b, done) {
  setTimeout(function () {
    const result = a + b;
    done(result);
  }, 1000);
}

calculate(2, 3, function(result) {
  // console.log('Result: ' + result);
});

// -------------------------------

function calculate2(a, b, done) {
  return new Promise((resolve, reject) => {
    setTimeout(function () {
      const result = a + b;
      if (result > 10) {
        reject(new Error('Ops!'))
      } else {
        resolve(result);
      }
    }, 1000);
  });
}

const myPromiseObject = calculate2(5, 10);
myPromiseObject.then(
  function (result) {
    // console.log(result);
  },
  function (error) {
    // console.log('There is an error!');
  }
);

// -------------------------------

function calculate3(a, b) {
  return new Promise((resolve, reject) => {
    setTimeout(function () {
      const result = a + b;
      resolve(result);
    }, 1000);
  });
}

async function test() {
  const result = await calculate3(10, 23);
  console.log(result);
}

// test();

// -------------------------------

async function getData() {
  const result = await fetch('./data.json');
  const data = await result.json();
  console.log(data);
}

// getData();