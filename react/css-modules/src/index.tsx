import React from 'react';
import ReactDOM from 'react-dom/client';
import stylesA from './a.module.css';

function App() {
  return (
    <h1 className={stylesA.title}>Hello, <span>user</span></h1>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);