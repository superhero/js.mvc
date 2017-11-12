module.exports = class JsonView
{
  constructor(vm)
  {
    this.vm = vm;
  }

  compose(cb)
  {
    if('headers' in this.vm)
      this.vm.headers['Content-Type'] = 'application/json';

    else
      this.vm.headers = {'Content-Type' : 'application/json'};

    cb(JSON.stringify(this.vm.body));
  }
}
