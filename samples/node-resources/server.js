const http = require('http');
const fs = require('fs');

const server = http.createServer(function(req, res) {
  fs.readFile('./people.jpg', (err, data) => {
    res.writeHead(200, { 'Content-Type': 'image/jpeg' });
    res.end(data);
  });
});

server.listen('3000', () => {
  console.log('The server is running');
});