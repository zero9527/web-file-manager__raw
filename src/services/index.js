const fs = require('fs');
const path = require('path');
const auth = require('../utils/auth');
const _map = require('./_map');
const log = require('../utils/log');
const { getTime } = require('../utils');

/**
 * Services
 * @param {} router express.Router()
 */
function Services(router) {
  router.use(auth);

  try {
    _map.forEach((item) => {
      const method = item.method.toLocaleLowerCase();
      if (router[method]) {
        require(`./${item.controller}`)(router, method, item.uri);
      } else {
        log.warn(
          `[router.${method.toUpperCase()}] is undefined! at ${__filename}:22`
        );
      }
    });
  } catch (err) {
    log.error(err);
    if (process.env.NODE_ENV === 'production') {
      console.log('production');
      // const logFile = path.resolve(__dirname, `../log/${getTime('date')}.log`);
      // fs.appendFile(logFile, `time: ${getTime()}\n${err} =====\n\n`, (error) => {
      //   log.error(error);
      // });
    }
  }
}

module.exports = Services;
