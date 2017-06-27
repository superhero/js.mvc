module.exports = class Dispatcher
{
  constructor(request)
  {
    this.request = request;
  }

  dispatch(o)
  {
    o({ status : 404,
        body   : { status  : 'failed',
                   message : 'Page Not Found',
                   reason  : 'dispatcher has not been filled' } });
  }
}
