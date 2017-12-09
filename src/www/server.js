const fastify = require('fastify');
const Next = require('next');
const routes = require('./routes');

const port = 8081;
const dev = process.env.NODE_ENV !== 'production';
const app = Next({ dev });

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
