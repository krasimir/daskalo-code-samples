const { useEffect, useState, useReducer } = React;

const GET_USER_URL = 'https://jsonplaceholder.typicode.com/users';

function usersReducer(users, action) {
  let idx;
  switch (action.type) {
    case 'init':
      return action.data;
    case 'up':
      idx = users.findIndex(user => user.id === action.id);
      if (idx !== -1 && idx !== 0) {
        const tmp = users[idx];
        users[idx] = users[idx - 1];
        users[idx - 1] = tmp;
      }
      return [...users];
    case 'down':
      idx = users.findIndex(user => user.id === action.id);
      if (idx !== -1 && idx !== users.length - 1) {
        const tmp = users[idx];
        users[idx] = users[idx + 1];
        users[idx + 1] = tmp;
      }
      return [...users];
  }
  return users;
}

function App() {  
  const [users, updateUsers] = useReducer(usersReducer, []);

  useEffect(() => {
    fetch(GET_USER_URL)
      .then(response => response.json())
      .then(data => {
        updateUsers({ type: 'init', data });
      });
  }, []);

  return (
    <>
      <ul>
        {users.map(user => (
          <li key={user.id}>
            {user.name}
            <button onClick={() => updateUsers({ type: 'up', id: user.id })}>up</button>
            <button onClick={() => updateUsers({ type: 'down', id: user.id })}>down</button>
          </li>
        ))}
      </ul>
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);