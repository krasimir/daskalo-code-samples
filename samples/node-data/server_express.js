const express = require('express');
const app = express();

app.use(express.urlencoded());

app.post('/create', (req, res) => {
  console.log(req.body);
  res.send('Request received.');
});

app.get('/', (req, res) => {
  res.send(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <title>Page</title>
    </head>
    <body>
      <form method="post" action="/create">
        <input type="text" name="foobar"/>
        <button type="submit">click me</button>
      </form>
    </body>
    </html>
  `)
});

app.listen(3000, () => {
  console.log('Server is running.');
})