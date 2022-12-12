const http = require('http');

const server = http.createServer((req, res) => {
  if (req.url === '/create') {
    let body = '';
    req.on('readable', () => {
      const data = req.read();
      if (data !== null) {
        body += data;
      }
    });
    req.on('end', () => {
      console.log(body);
      res.writeHead(200, { 'Content-type': 'text/html' });
      res.end('Data is received');
    });
    return;
  }
  res.writeHead(200, { 'Content-type': 'text/html' });
  res.end(`
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
  `);
});

server.listen(3000, () => {
  console.log('The server is running.')
})