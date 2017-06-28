const RestDispatcher = require('../../controller/rest-dispatcher');

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
