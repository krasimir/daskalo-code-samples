const URL = 'https://dummyjson.com/products';

const IDLE = 'IDLE';
const LOADING = 'LOADING';
const SUCCESS = 'SUCCESS';
const ERROR = 'ERROR';

const state = {
  currentState: IDLE,
  products: null
};

const machine = {
  [IDLE]: {
    [LOADING]: async () => {
      try {
        state.products = await loadData();
        machine.transitionTo(SUCCESS);
      } catch(error) {
        machine.transitionTo(ERROR);
      }
    }
  },
  [LOADING]: {
    [SUCCESS]: () => {
      render();
    },
    [ERROR]: () => {
      render();
    }
  },
  transitionTo(newState) {
    if (machine[state.currentState][newState]) {
      const func = machine[state.currentState][newState];
      state.currentState = newState;
      render();
      func();
    } else {
      throw new Error(`${newState} doesn't make sense`);
    }
  }
}

function render() {
  let html = '';

  if (state.currentState === LOADING) {
    html = '<p>Loading ...</p>';
  } else if (state.currentState === ERROR) {
    html = '<p>Sorry. There is an error.</p>';
  } else if (state.currentState === SUCCESS) {
    html = state.products.map(({ title }) => {
      return `<p>${title}</p>`;
    }).join('');
  } else {
    html = '<p>There is no data yet.</p>';
  }

  document.querySelector('#container').innerHTML = html;
}

window.addEventListener('load', async () => {
  render();
  machine.transitionTo(LOADING);
});

function loadData() {
  return new Promise((done, reject) => {
    setTimeout(async () => {
      try {
        const res = await fetch(URL);
        const data = await res.json();
        done(data.products);
      } catch(err) {
        reject(err);
      }
    }, 2000);
  });
}