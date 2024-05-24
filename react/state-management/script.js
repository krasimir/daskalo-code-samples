const { useEffect, useState, useContext, createContext } = React;

const USER = { first: 'Krasimir', last: 'Tsonev' }

const User = createContext(USER);

function App() {
  return (
    <User.Provider value={USER}>
      <UserForm />
    </User.Provider>
  );
}

// ------------------------------------------------------------
function UserForm() {
  const user = useContext(User);
  const [ first, setFirstName ] = useState(user.first);
  const [ last, setLastName ] = useState(user.last);

  function onSubmit(e) {
    e.preventDefault();
    console.log({ first, last });
  }

  return (
    <form onSubmit={onSubmit}>

      <label>First name</label>
      <Input defaultValue={first} onChange={setFirstName} />
      <Description text="This is the first name of the user." />

      <label>Name</label>
      <Input defaultValue={last} onChange={setLastName} />
      <Description text="This is the last name of the user." />

      <button type="submit">Save</button>
    </form>
  )
}

// ------------------------------------------------------------
function Input({ onChange, defaultValue }) {
  const [ value, setValue ] = useState(defaultValue);

  return (
    <input type="text" value={value}
      onChange={e => setValue(e.target.value)}
      onBlur={() => onChange(value)}/>
  )
}

// ------------------------------------------------------------
function Description({ text }) {
  const [ fullText, setFullTextFlag ] = useState(false);
  return (
    <small onClick={() => setFullTextFlag(!fullText)}>
      {fullText ? text : text.substr(0, 20) + '...'}
    </small>
  );
}














const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);