const { isXHR } = require('./');

function auth(req, res, next) {
  if (!isXHR(req)) return next();
  if (req.header('token') || req.query.token) {
    next();
    return;
  }
  res.send({
    code: -1,
    data: null,
    msg: '没有权限',
  });
}

module.exports = auth;
