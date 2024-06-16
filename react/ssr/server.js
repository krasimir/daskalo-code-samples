import fs from 'fs';
import express from 'express';
import path from 'path';
import React from 'react';
import ReactDOMServer from 'react-dom/server';

import App from './dist/App.js';

const app = express();
const PAGE = fs.readFileSync('./index.html', 'utf8');
const __dirname = path.resolve();

app.use('/lib', express.static(__dirname + '/../lib'));
app.use('/public', express.static(__dirname + '/public'));

async function getUsers() {
  const result = await fetch('https://jsonplaceholder.typicode.com/users');
  return await result.json();
}

app.get('/', async (req, res) => {
  const users = await getUsers();
  const appHTML = ReactDOMServer.renderToString(
    React.createElement(App, { users })
  );
  res.send(PAGE.replace(`<div id="root"></div>`, `<div id="root">${appHTML}</div>`));
});

app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});