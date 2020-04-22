const path = require('path');
const fs = require('fs');

/**
 * Export
 * @param {*} router express.Router()
 * @param {*} method 如 'GET'/'POST'等
 * @param {*} uri 如 '/export'
 * @returns
 */
function Export(router, method, uri) {
  return router[method](uri, (req, res) => {
    const file = fs.readFileSync(
      path.resolve(process.cwd(), './public/images/bg.gif')
    );
    // res.setHeader('Content-Type', 'application/x-download');
    res.setHeader('Content-Disposition', 'inline; filename=bg.gif');
    res.send(file);
  });
}

module.exports = Export;
