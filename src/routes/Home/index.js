// Home
module.exports = function Home(router, uri) {
  return router.get(uri, (req, res, next) => {
    res.render('Home/index.html', {
      title: 'Home',
      list: [
        { id: 1, label: 'item1' },
        { id: 2, label: 'item2' },
        { id: 3, label: 'item3' },
      ],
    });
  });
};
