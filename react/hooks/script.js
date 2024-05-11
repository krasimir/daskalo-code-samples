const { useState } = React;

function App() {
  const [ count, setCount ] = useState({ value: 0 });
  return (
    <>
      <p>You clicked {count.value} times</p>
      <button onClick={() => {
        count.value = count.value + 1;
        setCount({ ...count })
      }}>Click me</button>
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);