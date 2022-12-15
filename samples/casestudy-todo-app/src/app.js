import Storage from './storage';
import render from './render';

window.addEventListener('load', () => {
  render();

  const root = document.querySelector('#container');

  root.addEventListener('submit', (event) => {
    event.preventDefault();
    const text = document.querySelector('input').value;
    Storage.addTodo(text);
    render();
  });
  root.addEventListener('click', (event) => {
    if (event.target.getAttribute('data-action')) {
      const action = event.target.getAttribute('data-action');
      const index = Number(event.target.getAttribute('data-index'));
      if (action === 'delete') {
        Storage.deleteTodo(index);
        render();
      } else if (action === "done") {
        Storage.markAsDone(index);
        render();
      }
    }
  });
});