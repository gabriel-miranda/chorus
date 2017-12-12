import fastify from 'fastify';
import { graphqlFastify, graphiqlFastify } from 'apollo-server-fastify';
import { connect, collections } from './db';
import schema from './graphql';

(async () => {
  try {
    const db = await connect();

    const app = fastify();

    const context = collections(db);

    app.get('/', (req, res) => res.send({ hello: 'world' }));

    app.get('/data', (req, res) => res.send({ data: 'Data from the server' }));

    app.post('/graphql', graphqlFastify({ schema, context }));

    app.get('/graphql', graphqlFastify({ schema, context }));

    app.get('/graphiql', graphiqlFastify({
      endpointURL: '/graphql',
    }));

    app.listen(3001, (err) => {
      if (err) {
        throw err;
      }
      console.log(`Server listening on ${app.server.address().port}`);
    });
  } catch (e) {
    console.log('There was an error getting up the chorus api:', e);
  }
})();

