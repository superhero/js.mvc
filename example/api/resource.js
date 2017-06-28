const RestDispatcher = require('../../controller/dispatcher-rest');

module.exports = class extends RestDispatcher
{
  get(o)
  {
    o({ body : { status  : 'success',
                 message : 'retrieved' } });
  }

  post(o)
  {
    o({ body : { status  : 'success',
                 message : 'created' } });
  }

  put(o)
  {
    o({ body : { status  : 'success',
                 message : 'updated' } });
  }

  delete(o)
  {
    o({ body : { status  : 'success',
                 message : 'deleted' } });
  }
}
