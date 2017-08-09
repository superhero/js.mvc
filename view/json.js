module.exports = class Json
{
  constructor(vm)
  {
    this.vm = vm;
  }

  compose(cb)
  {
    cb(JSON.stringify(this.vm.body));
  }
}
