let http = require('http');
let request = require('./request');
let response = require('./response');
let context = require('./context');
class Application {
  constructor() {
    this.callbackFunc;
    this.request = request;
    this.response = response;
    this.context = context;
  }

  createContext(req, res) {
    let ctx = Object.create(this.context);
    ctx.request = Object.create(this.request);
    ctx.response = Object.create(this.response);
    ctx.req = ctx.request.req = req;
    ctx.res = ctx.response.res = res;
    return ctx;
  }

  listen(port) {
    let server = http.createServer(this.callback());
    server.listen(port);
  }

  use(fn) {
    this.callbackFunc = fn;
  }

  callback() {
    return (req, res) => {
      this.callbackFunc(this.createContext(req, res));
    };
  }

}
module.exports = Application;
