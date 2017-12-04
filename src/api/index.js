import fastify from 'fastify';

const app = fastify();

app.get('/', (req, res) => res.send({ hello: 'world' }));

app.listen(3000, (err) => {
  if (err) {
    throw err;
  }
  console.log(`Server listening on ${app.server.address().port}`);
});
