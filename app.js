const http = require('http');
http.createServer(function (request, response) {
  //发送HTTP头部 
  //HTTP状态 200 OK 
  //内容类型 text/plain 
  response.writeHead(200, { 'Content-Type': 'text/plain' });
  //发送响应数据”hello world” 
  response.end('Hello World');
}).listen(8888);
