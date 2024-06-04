const myStyle = {
  backgroundColor: 'lightblue',
  color: '#000'
}

function App() {
  return (
    <h1 className="title">Hello, <span style={myStyle}>user</span></h1>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);