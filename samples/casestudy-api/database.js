let users = [
  {
    name: 'Krasimir Tsonev',
    email: 'me@krasimir.dev'
  },
  {
    name: 'Ivan Petrov',
    email: 'ivan_petrov@gmail.com'
  }
];

module.exports = {
  getData() {
    return users;
  },
  addUser(name, email) {
    users.push({ name, email });
  },
  updateUser(email, name) {
    const user = users.find(u => u.email === email);
    if (user) {
      user.name = name;
    } else {
      throw new Error(`There is no user with email ${email}`);
    }
  },
  deleteUser(email) {
    const user = users.find(u => u.email === email);
    if (user) {
      users = users.filter(u => u.email !== email);
    } else {
      throw new Error(`There is no user with email ${email}`);
    }
  }
}
