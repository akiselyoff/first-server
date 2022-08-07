const http = require('http');
const fs = require('fs/promises');

const PORT = 8081;
const STATUS_CODE = 200;

const requestHandler = async (request, response) => {
  const manifest = await fs.readFile('./package.json', 'utf-8');
  response.writeHead(STATUS_CODE, { 'Content-type': 'text/json' });
  return response.end(manifest);
};
const server = http.createServer(requestHandler);
server.listen(PORT, err => {
  if (err) {
    console.log('Error at server launch', err);
  }
  console.log(`Server works at port ${PORT}!`);
});
