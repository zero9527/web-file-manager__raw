const path = require('path');
const fs = require('fs');

/**
 * Export1
 * @param {*} router express.Router()
 * @param {*} method 如 'GET'/'POST'等
 * @param {*} uri 如 '/export1'
 * @returns
 */
function Export1(router, method, uri) {
  return router[method](uri, (req, res) => {
    res.setHeader('Content-Type', 'application/x-download');
    res.setHeader('Content-Disposition', 'attachment; filename=bg.gif');
    const rs = fs.createReadStream(
      path.resolve(process.cwd(), './public/images/bg.gif')
    );
    rs.pipe(res);
    // .on('data', (chunk) => {
    //   res.write(chunk);
    // })
    // .on('end', () => {
    //   res.end();
    // });
  });
}

module.exports = Export1;
