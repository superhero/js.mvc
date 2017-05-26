const Dispatcher = require('../../lib/controller/dispatcher');

module.exports = class extends Dispatcher
{
  dispatch(o)
  {
    o({ body : this.view.compose({ msg : 'Hello world!' }) });
  }
}
