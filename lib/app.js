module.exports =
{
  http : (routes) =>
  {
    const
    HttpServer  = require('./controller/http-server'),
    Router      = require('./controller/router'),
    router      = new Router(routes),
    server      = new HttpServer(router);

    return server;
  }

  https : (routes) =>
  {
    const
    HttpsServer = require('./controller/https-server'),
    Router      = require('./controller/router'),
    router      = new Router(routes),
    server      = new HttpsServer(router);

    return server;
  }
}
