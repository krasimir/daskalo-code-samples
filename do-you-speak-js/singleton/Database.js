let instance;

export default class Database {
  connection = null;
  constructor() {
    if (instance) {
      return instance;
    }
    instance = this;
  }
  getData() {
    if (!this.connection) {
      this.connection = {};
      console.log('connecting ...');
    }
    return 'foo';
  }
}