const { useState, useEffect } = React;

const USERS_URL = 'https://jsonplaceholder.typicode.coma/users';

function useUsers() {
  const [ users, setUsers ] = useState([]);
  const [ isLoading, setIsLoading ] = useState(false);
  const [ error, setError ] = useState(null);

  useEffect(() => {
    setIsLoading(true);
    fetch(USERS_URL)
      .then(response => response.json())
      .then(data => {
        setUsers(data);
        setIsLoading(false);
      })
      .catch(error => {
        setError(error);
        setIsLoading(false);
      })
  }, []);

  return [users, isLoading, error];
}

function App() {
  const [users, isLoading, error] = useUsers();

  if (isLoading) {
    return (
      <div>Loading...</div>
    );
  }

  if (error) {
    return (
      <div>Error: {error.message}</div>
    );
  }
 
  return (
    <div>Users: {users.length}</div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);