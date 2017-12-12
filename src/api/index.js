import fastify from 'fastify';
import { graphqlFastify, graphiqlFastify } from 'apollo-server-fastify';
import { connect, collections } from './db';
import schema from './graphql';

const GRAPH_QL_ROUTE = '/graphql';
const GRAPH_QL_ENDPOINT = context => graphqlFastify({ schema, context });

(async () => {
  try {
    const db = await connect();

    const app = fastify();

    const ctx = collections(db);

    app.post(GRAPH_QL_ROUTE, GRAPH_QL_ENDPOINT(ctx));

    app.get(GRAPH_QL_ROUTE, GRAPH_QL_ENDPOINT(ctx));

    app.get('/graphiql', graphiqlFastify({
      endpointURL: GRAPH_QL_ROUTE,
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

