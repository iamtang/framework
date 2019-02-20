const http = require('http');
const compose = require('koa-compose');

class Framework {
  constructor() {
    this.context = Object.create({});
    this.middleware = [];
  }

  use(fn) {
    this.middleware.push(fn);
  }

  listen(...argu) {
    const server = http.createServer(this.callback());
    return server.listen.apply(server, argu);
  }

  createContext(req, res) {
    const context = new Proxy(this.context, {
      get: function (target, key, receiver) {
        return Reflect.get(target, key, receiver);
      },
      set: function (target, key, value, receiver) {
        if(key == 'body' && value){
          value = value.toString();
          res.end(value);
        }
        return Reflect.set(target, key, value, receiver);
      }
    });
    context.req = req;
    context.res = res;
    

    return context;
  }

  callback() {
    // const fn = compose(this.middleware);

    // if (!this.listeners('error').length) this.on('error', this.onerror);

    return (req, res) => {
      res.statusCode = 404;
      const ctx = this.createContext(req, res);
      // onFinished(res, ctx.onerror);
      this.middleware[0](ctx)
    };
  }
}

module.exports = Framework;