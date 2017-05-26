const config = require('./config');

require('../lib/app').http(config.routes).listen(80);
