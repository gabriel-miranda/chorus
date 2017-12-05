import fastify from 'fastify';

const app = fastify();

app.get('/', (req, res) => res.send({ hello: 'world' }));

app.get('/data', (req, res) => res.send({ data: 'Data from the server' }));

app.listen(3001, (err) => {
  if (err) {
    throw err;
  }
  console.log(`Server listening on ${app.server.address().port}`);
});
