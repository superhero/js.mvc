const RestDispatcher = require('../../lib/controller/rest-dispatcher');

module.exports = class extends RestDispatcher
{
  get(o)
  {
    o({ body : this.view.compose({ msg : 'retrieved' }) });
  }

  post(o)
  {
    o({ body : this.view.compose({ msg : 'created' }) });
  }

  put(o)
  {
    o({ body : this.view.compose({ msg : 'updated' }) });
  }

  delete(o)
  {
    o({ body : this.view.compose({ msg : 'deleted' }) });
  }
}
