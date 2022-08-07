const http = require('http');

const PORT = 8081;
const STATUS_CODE = 200;

const requestHandler = (request, response) => {
  if (request.url.indexOf('/home') >= 0) {
    response.writeHead(STATUS_CODE, { 'Content-type': 'text/json' });
    return response.end('{"url":"homepage"}');
  }
  response.writeHead(STATUS_CODE, { 'Content-type': 'text/json' });
  //   response.write('<h1>First Server</h1>');
  //   response.write('<h2>Next title</h2>');
  //   response.end(); // вызов всего, что написали в командах response.write
  response.end('{"url":"other"}');
};

const server = http.createServer(requestHandler);
server.listen(PORT, err => {
  if (err) {
    console.log('Error at server launch', err);
  }
  console.log(`Server works at port ${PORT}!`);
});
