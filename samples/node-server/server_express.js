const express = require('express');
const app = express();
const port = 3000;

app.get('/data', function(req, res) {
  res.json({ express: 'server' });
});
app.get('/', function(req, res) {
  res.send(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <title>Testing server</title>
      <script>
        function getData() {
          fetch('/data')
            .then(res => res.json())
            .then(data => {
              console.log(data);
            });
        }
      </script>
    </head>
    <body>
      <button onclick="getData()">click here</button>
    </body>
    </html>
  `)
});

app.listen(port, function () {
  console.log('The server is listening on port 3000.');
});