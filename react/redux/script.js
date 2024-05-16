const { useEffect, useState } = React;
const { configureStore, createSlice } = RTK;
const { Provider, useSelector, useDispatch } = ReactRedux;

const GET_USER_URL = 'https://jsonplaceholder.typicode.com/users';

const usersSlice = createSlice({
  name: 'users',
  initialState: [],
  reducers: {
    setUsers: (state, action) => action.payload,
    up: (users, action) => {
      console.log(action);
      const idx = users.findIndex(user => user.id === action.payload);
      if (idx !== -1 && idx !== 0) {
        const tmp = users[idx];
        users[idx] = users[idx - 1];
        users[idx - 1] = tmp;
      }
    },
    down: (users, action) => {
      const idx = users.findIndex(user => user.id === action.payload);
      if (idx !== -1 && idx !== users.length - 1) {
        const tmp = users[idx];
        users[idx] = users[idx + 1];
        users[idx + 1] = tmp;
      }
    }
  }
});

const store = configureStore({
  reducer: {
    users: usersSlice.reducer
  }
});

function App() {  
  const users = useSelector(state => state.users);
  const { up, down, setUsers } = usersSlice.actions;
  const dispatch = useDispatch();

  useEffect(() => {
    fetch(GET_USER_URL)
      .then(response => response.json())
      .then(data => {
        dispatch(setUsers(data));
      });
  }, []);

  return (
    <>
      <ul>
        {users.map(user => (
          <li key={user.id}>
            {user.name}
            <button onClick={() => dispatch(up(user.id))}>up</button>
            <button onClick={() => dispatch(down(user.id))}>down</button>
          </li>
        ))}
      </ul>
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Provider store={store}><App /></Provider>);