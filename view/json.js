module.exports = class JsonView
{
  constructor(vm)
  {
    this.vm = vm;
  }

  compose(cb)
  {
    vm.headers['Content-Type'] = 'application/json';
    cb(JSON.stringify(this.vm.body));
  }
}
