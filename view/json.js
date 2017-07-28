module.exports = class Json
{
  compose(data, cb)
  {
    cb(JSON.stringify(data));
  }
}
