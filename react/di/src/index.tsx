import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from './dependencies';
import Users from './Users';

async function getUsers() {
  const result = await fetch('https://jsonplaceholder.typicode.com/users');
  return await result.json();
}

function App() {
  return (
    <Provider value={{ getUsers }}>
      <Users />
    </Provider>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);