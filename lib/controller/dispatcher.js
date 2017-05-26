module.exports = class Dispatcher
{
  constructor(request, view)
  {
    this.request = request;
    this.view    = view;
  }

  dispatch(o)
  {
    o({ status : 500,
        body   : this.view.compose({ error : 'abstract dispatcher' }) });
  }
}
