const
Dispatcher    = require('./controller/dispatcher'),
PageNotFound  =
{
  status : 404,
  body   : { status  : 'failed',
             message : 'Page Not Found',
             reason  : 'dispatcher action has not been filled' }
};

module.exports = class RestDispatcher extends Dispatcher
{
  dispatch(o)
  {
    const method = this.request.method.toLowerCase();

    switch(method)
    {
      case 'get'    :
      case 'post'   :
      case 'put'    :
      case 'delete' : return this[method](o);

      default : o({ status : 400,
                    body   : { status  : 'failed',
                               message : 'unsupported method',
                               method  : this.request.method } });
    }
  }

  get(o)    { o(PageNotFound) }
  post(o)   { o(PageNotFound) }
  put(o)    { o(PageNotFound) }
  delete(o) { o(PageNotFound) }
}
