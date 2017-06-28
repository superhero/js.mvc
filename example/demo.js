const config = require('./config');

require('../app').http(config.routes).listen(80);
