module.exports = class Dispatcher
{
  constructor(request, route)
  {
    this.request = request;
    this.route   = route;
  }

  dispatch(o)
  {
    o({ status : 404,
        body   : { status  : 'failed',
                   message : 'Page Not Found',
                   reason  : 'dispatcher has not been filled' } });
  }
}
