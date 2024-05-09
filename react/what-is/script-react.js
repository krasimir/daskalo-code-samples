const { useState } = React;
function App() {
  const [ count, setCount ] = useState(0);
  return (
    <div>
      <h1>What is React? {count}</h1>
      <p>React is a JavaScript library for building user interfaces.</p>
      <button onClick={() => setCount(count+1)}>Click me</button>
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));