const Dispatcher = require('../../controller/dispatcher');

module.exports = class extends Dispatcher
{
  dispatch(o)
  {
    o({ body : { status  : 'success',
                 message : 'Hello world!' } });
  }
}
