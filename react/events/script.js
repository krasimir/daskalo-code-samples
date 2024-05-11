function Button({ onClickButton }) {
  return (
    <button onClick={onClickButton}>Click me</button>
  );
}

function App() {
  const handleClick = (e) => {
    e.stopPropagation();
    console.log('Button clicked');
  };
  const onSubmitForm = (e) => {
    e.preventDefault();
    console.log('Form submitted')
  }
  return (
    <form onSubmit={onSubmitForm}>
      <input type="text" onChange={(e) => console.log(e.target.value)}/>
      <div onClick={() => console.log('Div clicked')}>
        <Button onClickButton={handleClick} />
      </div>
    </form>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);