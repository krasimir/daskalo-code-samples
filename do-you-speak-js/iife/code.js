const arr = ['a', 'b', 'c'];

for(var i=0; i<arr.length; i++) {
  ((index) => {
    setTimeout(() => {
      console.log(arr[index]);
    }, 300);
  })(i);
}