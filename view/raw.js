module.exports = class RawView
{
  constructor(vm)
  {
    this.vm = vm;
  }

  compose(cb)
  {
    cb(this.vm.body);
  }
}
