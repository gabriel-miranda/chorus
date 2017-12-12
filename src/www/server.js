import fastify from 'fastify';
import next from 'next';
import routes from './routes';

const port = 8081;
const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });

const handle = routes.getRequestHandler(app);

app.prepare()
  .then(() => {
    const server = fastify();

    server.get('/*', (req, res) => handle(req.req, res.res));

    server.listen(port, (err) => {
      if (err) {
        throw err;
      }
      console.log(`> Ready on http://localhost:${port}`);
    });
  })
  .catch(e => console.error(e));
