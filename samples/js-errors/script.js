console.log('Start');

try {
  setTimeout(() => {
    // test();
  }, 200);
} catch(error) {
  console.log('There is error');
}

console.log('End');

function print(user) {
  if (user) {
    console.log(user.name);
  } else {
    throw new Error('User is not defined.');
  }
}

const p = new Promise((resolve, reject) => {
  print();
});

p.catch(error => {
  console.log(error.message);
});