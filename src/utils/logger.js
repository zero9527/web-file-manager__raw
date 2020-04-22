const log = require('./log');
const { getTime } = require('./index');

function logger(req, res, next) {
  const { url, method, query, body } = req;
  log.info(`[===== LOGGER ===== ${getTime()}]`);
  console.log(
    'url: %o, method: %o, query: %o, body: %o\n',
    url,
    method,
    query,
    body
  );
  next();
}

module.exports = logger;
