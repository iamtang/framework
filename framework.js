const http = require('http');


class Framework {
  constructor() {
    this.context = Object.create({});
  }

  use(fn) {

  }

  listen(...argu) {
    const server = http.createServer(this.callback());
    return server.listen.apply(server, argu);
  }

  callback(){
    // const fn = compose(this.middleware);

    // if (!this.listeners('error').length) this.on('error', this.onerror);

    return (req, res) => {
      res.statusCode = 404;
      res.end('test');
      // onFinished(res, ctx.onerror);
      // fn(ctx).then(() => respond(ctx)).catch(ctx.onerror);
    };
  }
}

module.exports = Framework;