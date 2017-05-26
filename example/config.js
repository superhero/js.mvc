module.exports =
{
  routes :
  [
    {
      policy     : '/',
      view       : __dirname + '/../lib/view/json',
      dispatcher : __dirname + '/../lib/api/index',
    },

    // fallback...
    {
      view       : __dirname + '/../lib/view/json',
      dispatcher : __dirname + '/../lib/api/404',
    },
  ]
}
