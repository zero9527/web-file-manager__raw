/**
 * GetInfo
 * @param {*} router
 * @param {*} method 如 'GET'/'POST'等
 * @param {*} uri 如 '/getInfo'
 * @returns
 */
function GetInfo(router, method, uri) {
  return router[method](uri, (req, res) => {
    res.send({
      code: 0,
      data: {
        name: 'haha',
        age: 18,
      },
      msg: 'ok',
    });
  });
}

module.exports = GetInfo;
