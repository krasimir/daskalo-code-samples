const container = document.getElementById('root');
const h1 = document.createElement('h1');
const p = document.createElement('p');
const button = document.createElement('button');
let count = 0;
button.addEventListener('click', () => {
  count++;
  h1.textContent = `What is React? ${count}`;
});
h1.textContent = `What is React? ${count}`;
p.textContent = 'React is a JavaScript library for building user interfaces.';
button.textContent = 'Click me';
container.appendChild(h1);
container.appendChild(p);
container.appendChild(button);
