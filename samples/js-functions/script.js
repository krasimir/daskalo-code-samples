var userA = {
  name: 'Krasimir',
  age: 24,
  registered: true,
  skills: ['html', 'css', 'javascript', 'nodejs']
}
var userB = {
  name: 'Ivan',
  age: 32,
  registered: false,
  skills: ['html', 'css']
}

function sayHi(data, formatText, message = "Hey") {
  let text = '';
  if (data.registered) {
    text = message + ' ' + data.name;
  } else {
    text = message;
  }
  let result = function () {
    console.log(formatText(text));
  }
  return result;
}

function formatter(text) {
  return text.toUpperCase();
}

const a = sayHi(userA, formatter);
const b = sayHi(userB, formatter);

a(); b();