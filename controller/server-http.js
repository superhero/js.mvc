const
fs   = require('fs'),
url  = require('url'),
http = require('http'),
path = require('path'),
root = path.dirname(require.main.filename);

module.exports = class HttpServer
{
  constructor(router)
  {
    this.router = router;
    this.server = http.createServer(this.dispatch.bind(this));
  }

  listen(port)
  {
    this.server.listen(port);
  }

  dispatch(i, o)
  {
    const
    router  = this.router,
    request =
    {
      headers : i.headers,
      method  : i.method,
      url     : url.parse(i.url, true),
      body    : ''
    };

    i.on('data', (data) => request.body += data);
    i.on('end', () =>
    {
      const
      route      = router.findRoute(request),
      Dispatcher = fetchDispatcher(route.dispatcher);

      switch(i.headers['content-type'])
      {
        case 'application/json':
          request.body = JSON.parse(request.body);
          break;
          
        case 'application/x-www-form-urlencoded':
        case 'multipart/form-data':
          request.body = require('querystring').parse(request.body);
          break;
          
        default:
          //request.body not parsed
          break;
      }

      new Dispatcher(request, route).dispatch((vm) =>
      {
        vm = vm || {};
        const View = fetchView(vm.view || route.view);
        new View(vm, route).compose((html) =>
        {
          o.writeHead(vm.status || 200, vm.headers);
          o.end(html);
        });
      });
    });
  }
}

// will attempt to fetch the view defined and defaults to a fallback if one can
// not be found
function fetchView(view)
{
  return view && fs.existsSync(`${root}/${view}.js`)
  ? require.main.require(view)
  : view && fs.existsSync(`${__dirname}/../view/${view}.js`)
    ? require(`../view/${view}`)
    : require(`../view/json`)
}
// -.-
function fetchDispatcher(dispatcher)
{
  return dispatcher && fs.existsSync(`${root}/${dispatcher}.js`)
  ? require.main.require(dispatcher)
  : class extends require('./dispatcher')
    {
      dispatch(o)
      {
        o({ status : 500,
            body   : { dispatcher,
                       status  : 'failed',
                       message : dispatcher
                               ? 'the defined dispatcher does not exist'
                               : 'the route does not define a dispatcher' } });
      }
    }
}
