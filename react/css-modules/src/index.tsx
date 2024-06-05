import React from 'react';
import ReactDOM from 'react-dom';
import styles from './styles.module.css';

function App() {
  console.log(styles);
  return (
    <h1>Hello, <span className={styles.title}>user</span></h1>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);