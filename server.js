const http = require('http');

const server = http.createServer((request, response) => {
  response.end('My name is Nirmalya Sengupta');
});

server.listen(4000, () => {
  console.log('Server is listening on port 4000');
});
