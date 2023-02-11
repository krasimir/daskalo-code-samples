const Bus = {
  _listeners: {},
  addListener(channel, listener) {
    if (!this._listeners[channel]) {
      this._listeners[channel] = [];
    }
    this._listeners[channel].push(listener);
    return () => {
      this._listeners[channel] =
      this._listeners[channel].filter(l => {
        return l !== listener;
      })
    }
  },
  dispatch(channel, event) {
    if (this._listeners[channel]) {
      this._listeners[channel].forEach(l => {
        l(event);
      })
    }
  }
}

const unsubscribeA = Bus.addListener('YYY', (event) => {
  console.log('a', event.name);
});
Bus.addListener('XXX', (event) => {
  console.log('b', event.name);
});
Bus.dispatch('XXX', { name: 'foobar' });
unsubscribeA();
Bus.dispatch('XXX', { name: 'hello' });



