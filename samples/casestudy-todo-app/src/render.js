import Storage from './storage';

export default function render() {
  const todos = Storage.getTodos();
  const root = document.querySelector('#container');
  let html = [`<ul>`];
  todos.forEach((todo, i) => {
    html.push(`
      <li style="${todo.done ? 'background:#009f00;color:#fff;' : ''}">
        <span>${todo.text}</span>
        <button data-action="done" data-index="${i}">Done</button>
        <button data-action="delete" data-index="${i}">Delete</button>
      </li>
    `);
  });
  html.push('</ul>');

  // form
  html.push(`
    <form>
      <label>
        <input type="text" name="todo-text" placeholder="your text here"/>
        <button>New task</button>
      </label>
    </form>
  `)
  root.innerHTML = html.join('');
}

/*
<ul>
  <li>
    <span>Task 1</span>
    <button>Done</button>
    <button>Delete</button>
  </li>
  <li>Task 2</li>
  <li>Task 3</li>
  <li>Task 4</li>
</ul>
<form>
  <label>
    <input type="text" name="todo-text" placeholder="your text here"/>
    <button>New task</button>
  </label>
</form>
*/