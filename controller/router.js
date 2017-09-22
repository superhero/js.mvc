module.exports = class Router
{
  constructor(routes)
  {
    this.routes = routes;
  }

  findRoute(request)
  {
    let _route = {};
    request.url && request.url.pathname
    && this.routes.some((route) =>
    {
      const policy = route.policy instanceof RegExp
                   ? route.policy
                   : new RegExp(`^${route.policy}$`);

      if(route.policy && !request.url.pathname.match(policy))
        return;

      _route = Object.assign(_route, route);
      return !!route.policy;
    });

    return { dispatcher : _route.dispatcher,
             view       : _route.view };
  }
}
