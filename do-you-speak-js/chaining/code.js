const Car = function () {
  let model = '';
  const api = {
    setModel(text) {
      model = text;
      return api;
    },
    movingForward() {
      console.log('The car is moving forwards');
      return api;
    },
    printModel() {
      console.log(`The model of the car is ${api.model}`);
    }
  }

  return api;
}

Car()
  .setModel('Testla S')
  .movingForward()
  .printModel();
