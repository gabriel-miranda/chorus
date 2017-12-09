const router = require('next-routes');

const routes = router();
routes
  .add('post', '/post/:id');

module.exports = routes;
module.exports.Link = routes.Link;
