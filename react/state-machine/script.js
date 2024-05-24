const { useEffect, useState } = React;

const GET_USER_URL = 'https://jsonplaceholder.typicode.com/users';

const machineStates = {
  IDLE: {
    on: {
      fetch: 'LOADING'
    }
  },
  LOADING: {
    on: {
      success: 'SUCCESS',
      error: 'ERROR'
    }
  },
  SUCCESS: {},
  ERROR: {
    on: {
      retry: 'LOADING'
    }
  }
}

function createMachine(states, initialState) {
  let currentState = initialState;
  let listener = () => {};
  let context = {};

  return {
    getState() {
      return currentState;
    },
    getContext() {
      return context;
    },
    send(eventName, newContext = {}) {
      const nextState = states[currentState].on[eventName];
      if (nextState) {
        currentState = nextState;
        context = newContext;
        listener(currentState);
      } else {
        throw new Error(`Invalid event: ${eventName} for state ${currentState}`);
      }
    },
    onChange(callback) {
      listener = callback;
    }
  }
}

const machine = createMachine(machineStates, 'IDLE');

function App() {
  const [ state, setState ] = useState(machine.getState());
  
  useEffect(() => {
    machine.onChange(newState => {
      setState(newState);
      if (newState === 'LOADING') {
        fetch(GET_USER_URL)
          .then(response => response.json())
          .then(data => {
            setTimeout(() => {
              machine.send('success', data);
            }, 1000);
          })
          .catch(() => {
            machine.send('error');
          });
      }
    });
  }, []);

  if (state === 'IDLE') {
    return (
      <button onClick={() => machine.send('fetch')}>Fetch Users</button>
    )
  }

  if (state === 'LOADING') {
    return <div>Loading...</div>;
  }

  if (state === 'ERROR') {
    return (
      <div>
        <div>Something went wrong</div>
        <button onClick={() => machine.send('retry')}>Retry</button>
      </div>
    );
  }

  if (state === 'SUCCESS') {
    const users = machine.getContext();
    return (
      <ul>
        {users.map(user => (
          <li key={user.id}>
            {user.name}
          </li>
        ))}
      </ul>
    );
  }

  return null;
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);