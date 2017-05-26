const Dispatcher = require('./controller/dispatcher');
module.exports   = class RestDispatcher extends Dispatcher
{
  dispatch(o)
  {
    switch(this.request.method.toLowerCase())
    {
      case 'get'    : return this.get(o);
      case 'post'   : return this.post(o);
      case 'put'    : return this.put(o);
      case 'delete' : return this.delete(o);

      default : o({ status : 400,
                    body   : this.view.compose(
                              { error  : 'unsupported method',
                                method : this.request.method }) });
    }
  }

  get(o)
  {
    o({ status : 404,
        body   : this.view.compose({ error : 'Page Not Found' }) });
  }

  post(o)
  {
    o({ status : 404,
        body   : this.view.compose({ error : 'Page Not Found' }) });
  }

  put(o)
  {
    o({ status : 404,
        body   : this.view.compose({ error : 'Page Not Found' }) });
  }

  delete(o)
  {
    o({ status : 404,
        body   : this.view.compose({ error : 'Page Not Found' }) });
  }
}
