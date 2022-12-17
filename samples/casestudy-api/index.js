const express = require('express');
const app = express();
const database = require('./database');

app.use(express.json());

function authorize(req, res, next) {
  if (req.headers['daskalo'] === 'ok') {
    next();
  } else {
    res.status(401);
    res.send({ error: 'Not authorised' })
  }
}

app.get('/users', (req, res) => {
  res.status(200);
  res.send(database.getData());
});
app.post('/users', (req, res) => {
  try {
    database.addUser(req.body.name, req.body.email);
  } catch(error) {
    console.error(error.message);
    res.status(500);
    res.send({ error: 'There is problem with the server' });
    return;
  }
  res.status(200);
  res.send({ ok: true });
});
app.put('/users/:email', authorize, (req, res) => {
  const email = req.params.email;
  const newName = req.body.name;
  try {
    database.updateUser(email, newName);
  } catch(error) {
    res.status(404);
    res.send({ error: error.message });
    return;
  }
  res.send({ ok: true });
});
app.delete('/users/:email', authorize, (req, res) => {
  const email = req.params.email;
  try {
    database.deleteUser(email);
  } catch(error) {
    res.status(404);
    res.send({ error: error.message });
    return;
  }
  res.send({ ok: true });
});

app.listen(3000, () => {
  console.log('The server is running.');
});