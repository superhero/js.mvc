const
https       = require('https'),
HttpServer  = require('./http-server');

module.exports = class HttpsServer extends HttpServer
{
  constructor(router)
  {
    this.router = router;
    this.server = https.createServer(this.dispatch);
  }
}
