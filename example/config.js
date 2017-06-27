module.exports =
{
  routes :
  [
    // default view deliverer
    {
      view : 'json',
    },
    {
      policy     : '/',
      dispatcher : '/api/index',
    },
    {
      policy     : '/resource',
      dispatcher : '/api/resource',
    },
    // fallback...
    {
      dispatcher : '/api/404',
    },
  ]
}
