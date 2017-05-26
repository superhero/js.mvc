module.exports =
{
  routes :
  [
    {
      policy     : '/',
      view       : __dirname + '/../lib/view/json',
      dispatcher : __dirname + '/api/index',
    },

    {
      policy     : '/resource',
      view       : __dirname + '/../lib/view/json',
      dispatcher : __dirname + '/api/resource',
    },

    // fallback...
    {
      view       : __dirname + '/../lib/view/json',
      dispatcher : __dirname + '/api/404',
    },
  ]
}
