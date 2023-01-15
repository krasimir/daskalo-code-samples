
function calculate(a, b) {
  return new Promise(done => {
    setTimeout(() => {
      done(a * b);
    }, 2000);
  })
}

function memoize(func) {
  const cache = {};
  return async (...args) => {
    console.log(cache);
    const key = args.toString();
    if (cache[key]) {
      return cache[key];
    }
    cache[key] = await func(...args);
    return cache[key];
  }
}

const calculateMemoized = memoize(calculate);

(async () => {

  console.log(await calculateMemoized(2, 3));
  console.log(await calculateMemoized(2, 3));
  console.log(await calculateMemoized(2, 3));
  console.log(await calculateMemoized(5, 10));

})();