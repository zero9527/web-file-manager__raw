const _map = require('./_map');

/**
 * Routes
 * @param {} router: express.Router()
 */
function Routes(router) {
  // 页面路由
  _map.forEach((item) => {
    require(`./${item.controller}`)(router, item.uri);
  });

  router.get('*', (req, res, next) => {
    const services = require(`${process.cwd()}/src/services/_map`);
    const servicesGET = services.filter((i) => i.method === 'GET');
    const isRequest = servicesGET.some((i) => req.url.includes(i.uri));

    if (isRequest) return next(); // 请求
    res.render('Error/404.html'); // 页面 404
  });
}

module.exports = Routes;
