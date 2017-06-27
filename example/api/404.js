const Dispatcher = require('../../lib/controller/dispatcher');

module.exports = class extends Dispatcher
{
  dispatch(o)
  {
    o({ status : 404,
        body   : { status : 'failed', 
                   message : 'Page Not Found' } });
  }
}
