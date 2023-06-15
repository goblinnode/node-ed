const http = require('http');
const fs = require('fs');

const hostname = '0.0.0.0';
const port = 5050;

const home = fs.readFileSync('index.html');

const server = http.createServer((_req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/html' });
  res.write(home);
  res.end();
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});