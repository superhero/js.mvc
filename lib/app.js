module.exports =
{
  http : (root_dir, routes) =>
  {
    const
    HttpServer  = require('./controller/http-server'),
    Router      = require('./controller/router'),
    router      = new Router(root_dir, routes),
    server      = new HttpServer(router);

    return server;
  }

  https : (root_dir, routes) =>
  {
    const
    HttpsServer = require('./controller/https-server'),
    Router      = require('./controller/router'),
    router      = new Router(root_dir, routes),
    server      = new HttpsServer(router);

    return server;
  }
}
