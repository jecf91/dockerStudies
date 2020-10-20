const http = require('http');

http.createServer((req,res) => {
  res.write('Hello World from docker!');
  res.end();
}).listen(8080);

