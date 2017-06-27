const config = require('./config');

require('../lib/app').http(__dirname, config.routes).listen(80);
