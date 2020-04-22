const fs = require('fs');

// Galary
module.exports = function Galary(router, uri) {
  return router.get(uri, (req, res, next) => {
    const dir = fs.readdirSync(`${process.cwd()}/public/_upload`);

    const galary = dir.map((item) => ({
      src: `_upload/${item}`,
      title: item,
    }));

    res.render('Galary/index.html', {
      title: 'Galary',
      galary,
    });
  });
};
