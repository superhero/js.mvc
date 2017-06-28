module.exports = class Router
{
  constructor(routes)
  {
    this.routes = routes;
  }

  findRoute(request)
  {
    let route = {};
    request.url && request.url.path
    && this.routes.some((_route) =>
    {
      route = Object.assign(route, _route);
      return request.url.path.match(route.policy || false);
    });

    return { dispatcher : route.dispatcher,
             view       : route.view };
  }
}
