const Dispatcher = require('./controller/dispatcher');

module.exports = class extends Dispatcher
{
  dispatch(o)
  {
    o({ body : this.view.compose({ status : 404, msg : 'Page Not Found' }) });
  }
}
