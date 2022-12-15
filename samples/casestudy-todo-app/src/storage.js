
let ToDos = [];
const fromStorage = localStorage.getItem('todoapp');

if (fromStorage) {
  ToDos = JSON.parse(fromStorage);
}

function save() {
  localStorage.setItem('todoapp', JSON.stringify(ToDos));
}

const API = {
  getTodos() {
    return ToDos;
  },
  addTodo(text) {
    ToDos.push({
      text,
      done: false
    });
    save();
    return ToDos;
  },
  markAsDone(idx) {
    ToDos = ToDos.map((todo, i) => {
      if (i === idx) {
        return {
          text: todo.text,
          done: true
        }
      }
      return todo;
    })
    save();
    return ToDos;
  },
  deleteTodo(idx) {
    ToDos = ToDos.filter((todo, i) => {
      return i !== idx;
    })
    save();
    return ToDos;
  }
};

export default API;