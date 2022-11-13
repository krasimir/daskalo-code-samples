const user = {
  name: 'Krasimir'
}

function printName() {
  const age = 30;
  console.log('printName age = ' + age);

  function printAge() {
    console.log(user.name + ' is ' + age + ' years old');
  }
  printAge();
  
  const lastName = 'Tsonev';
  if (true) {
    console.log(lastName);
  }
  console.log(lastName);
  for(let i=0; i<10; i++) {
    
  }
}

printName();