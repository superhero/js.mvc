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
      if(route.policy && !request.url.path.match(route.policy))
        return;

      route = Object.assign(route, _route);
      return !!route.policy;
    });

    return { dispatcher : route.dispatcher,
             view       : route.view };
  }
}
