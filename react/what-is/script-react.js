const { useState } = React;

function App() {
  const [ count, setCount ] = useState(0);
  const p  = React.createElement('p', null, 'React is a JavaScript library for building user interfaces.');
  const button = React.createElement('button', { onClick: () => setCount(count+1) }, 'Click me');
  return (
    <div>
      <h1>What is React? {count}</h1>
      {p}
      {button}
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));