const user = {
  name: 'Krasimir Tsonev'
}

Object.freeze(user);
enhancedUser(user);

console.log(user.getLastName);

function enhancedUser(user) {
  user.getFirstName = function () {
    return user.name.split(' ').shift();
  }
  user.getLastName = function () {
    return user.name.split(' ').pop();
  }
}