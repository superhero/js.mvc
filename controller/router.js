module.exports = class Router
{
  constructor(routes)
  {
    this.routes = routes;
  }

  findRoute(request)
  {
    let _route = {};
    request.url && request.url.path
    && this.routes.some((route) =>
    {
      if(route.policy && !request.url.path.match(route.policy))
        return;

      _route = Object.assign(_route, route);
      return !!route.policy;
    });

    return { dispatcher : _route.dispatcher,
             view       : _route.view };
  }
}
