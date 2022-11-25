const paragraphs = document.querySelectorAll('p');
paragraphs.forEach(p => {
  // console.log(p);
});

const body = document.querySelector('body');
const container = document.createElement('div');
const underlineElement = document.createElement('u');

underlineElement.innerText = 'Daskalo.dev';
container.append(underlineElement);

body.append(container);

setTimeout(function () {
  // body.removeChild(container);
}, 3000);

const u = document.querySelector('u');
u.setAttribute('style', 'color: green;');
console.log(u.getAttribute('style'));










