const Mixin = {
  log() {
    console.log(`My name is ${this.name}`);
  }
}

function User(n) {
  this.name = n;
}

Object.assign(User.prototype, Mixin);

const u = new User('Krasimir');
u.log();