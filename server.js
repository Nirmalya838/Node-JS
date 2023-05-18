const http = require('http');

const server = http.createServer((request, response) => {
  const url = request.url;
  if (request.url === "/home") {
    response.write("<html>");
    response.write("<head></head>");
    response.write("<body><h1>Welcome Home</h1></body>");
    response.write("</html>");
    response.end();
  } else if (request.url === "/about") {
    response.write("<html>");
    response.write("<head></head>");
    response.write("<body><h1>Welcome to About Us page</h1></body>");
    response.write("</html>");
    response.end();
  } 
  else if (request.url === "/node") {
    response.write("<html>");
    response.write("<head></head>");
    response.write("<body><h1>Welcome to my Node Js project</h1></body>");
    response.write("</html>");
    response.end();
  }
    else 
    {
    response.writeHead(404, { 'Content-Type': 'text/plain' });
    response.end('Not found');
    }
});

server.listen(4000, () => {
  console.log('Server is listening on port 4000');
});
