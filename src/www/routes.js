import router from 'next-routes';

const routes = router();
routes
  .add('post', '/:slug([a-zA-Z0-9-]+)_:id');

export const { Link, Router } = routes;
export default routes;
