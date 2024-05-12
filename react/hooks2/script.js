const { useEffect, useState } = React;

const GET_USER_URL = 'https://jsonplaceholder.typicode.com/users';
const GET_USER_POSTS = (id) => `https://jsonplaceholder.typicode.com/posts?userId=${id}`;

function App() {  
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch(GET_USER_URL)
      .then(response => response.json())
      .then(data => {
        setUsers(data);
      });
  }, []);
  useEffect(() => {
    if (!selectedUser) return;
    fetch(GET_USER_POSTS(selectedUser))
      .then(response => response.json())
      .then(data => setPosts(data));
    return () => {
      // console.log('cleanup');
    }
  }, [selectedUser]);

  return (
    <>
      <h1>Users</h1>
      {selectedUser && <p>Selected user: {selectedUser}</p>}
      {selectedUser && <p>Selected posts: {posts.length}</p>}
      <ul>
        {users.map(user => (
          <li key={user.id}>
            <button onClick={() => {
              setSelectedUser(user.id);
            }}>{user.name}</button>
          </li>
        ))}
      </ul>
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);