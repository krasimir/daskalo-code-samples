const store = {
  data: {
    name: null,
    email: null,
    count: 0    
  },
  dispatch(action) {
    [
      registration,
      increment
    ].forEach(reducer => {
      this.data = reducer(this.data, action);
    })    
  },
  getState() {
    return this.data;
  }
}

function registration(state, action) {
  if (action.field && action.value) {
    return {
      ...state,
      [action.field]: action.value
    }
  }
  return state;
}
function increment(state, action) {
  if (typeof action.increment !== 'undefined') {
    return {
      ...state,
      count: state.count + action.increment
    }
  }
  return state;
}

store.dispatch({ field: 'name', value: 'Krasimir'});
store.dispatch({ increment: 10 });
store.dispatch({ field: 'email', value: 'me@krasimir.dev'});
store.dispatch({ increment: 20 });

console.log(store.getState());