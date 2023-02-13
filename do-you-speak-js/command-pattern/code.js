const me = {
  firstName: 'Krasimir',
  lastName: 'Tsonev',
  age: 38
}

function commander(user, generator) {
  let step, result;
  while(step = generator.next(result), !step.done) {
    const [ what, param ] = step.value;
    if (what === 'get') {
      if (param === 'fullname') {
        result = `${user.firstName} ${user.lastName}`;
      } else if (param === 'age') {
        result = user.age;
      } else {
        throw new Error('Wrong param');  
      }
    } else {
      throw new Error('Wrong command');
    }
  }
}

function * logic() {
  const name = yield ['get', 'fullname'];
  const age = yield ['get', 'age'];
  console.log(name, age);
}

commander(me, logic());