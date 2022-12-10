const http = require('http');

const server = http.createServer(function(req, res) {
  if (req.url === '/data') {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end('{"ok": "message"}');
    return;
  }
  res.writeHead(200, { 'Content-Type': 'text/html' });
  res.end(`
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
  `);
});

server.listen(3000, () => {
  console.log('The server is listening on port 3000.');
})