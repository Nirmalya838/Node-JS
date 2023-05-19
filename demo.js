const http = require('http');
const fs = require('fs');

const server = http.createServer((request, response) => {
  const method = request.method;
  const url = request.url;

  if (url === "/") {
    // Read messages from file
    const messages = fs.readFileSync('messages.txt', 'utf8').split('\n').filter(Boolean);

    response.write('<html>');
    response.write('<head><title>Message App</title></head>');
    
    // Display existing messages
    if (messages.length > 0) {
      response.write('<h2>Existing Messages:</h2>');
      response.write('<ul>');
      messages.forEach((message) => {
        response.write('<li>' + message + '</li>');
      });
      response.write('</ul>');
    }

    response.write('<form action="/messege" method="POST"><input type="text" name="messege"/><button type="submit">send</button></form>');
    response.write('</html>');
    response.end();
  }

  if (url === "/messege" && method === "POST") {
    const body = [];
    request.on('data', (chunk) => {
      body.push(chunk);
    });
    request.on('end', () => {
      const message = Buffer.concat(body).toString();
      console.log(message);

      // Append new message to the file
      fs.appendFileSync('messages.txt', message + '\n');

      // Redirect to the root URL
      response.statusCode = 302;
      response.setHeader('Location', "/");
      response.end();
    });
  }
});

server.listen(4000, () => {
  console.log('Server is listening on port 4000');
});
