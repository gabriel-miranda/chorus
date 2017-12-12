import router from 'next-routes';

const routes = router();
routes
  .add('post', '/post/:id');

export const { Link, Router } = routes;
export default routes;
