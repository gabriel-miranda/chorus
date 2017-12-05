import fastify from 'fastify';
import { MongoClient, ObjectId } from 'mongodb';
import { makeExecutableSchema } from 'graphql-tools';
import { graphqlFastify, graphiqlFastify } from 'apollo-server-fastify';

const MONGO_URL = 'mongodb://database:27017/chorus';

const prepare = (o) => {
  o._id = o._id.toString();
  return o;
};

(async () => {
  try {
    const db = await MongoClient.connect(MONGO_URL);

    const Posts = db.collection('posts');
    const Comments = db.collection('comments');

    const typeDefs = [`
      type Query {
        post(_id: String): Post
        posts: [Post]
        comment(_id: String): Comment
      }
      type Post {
        _id: String
        title: String
        content: String
        comments: [Comment]
      }
      type Comment {
        _id: String
        postId: String
        content: String
        post: Post
      }
      type Mutation {
        createPost(title: String, content: String): Post
        createComment(postId: String, content: String): Comment
      }
      schema {
        query: Query
        mutation: Mutation
      }
    `];

    const resolvers = {
      Query: {
        post: async (root, {_id}) =>
          prepare(await Posts.findOne(ObjectId(_id))),
        posts: async () =>
          (await Posts.find({}).toArray()).map(prepare),
        comment: async (root, {_id}) =>
          prepare(await Comments.findOne(ObjectId(_id))),
      },
      Post: {
        comments: async ({_id}) =>
          await (Comments.find({postId: _id}).toArray()).map(prepare),
      },
      Comment: {
        post: async ({postId}) =>
          prepare(await Posts.findOne(ObjectId(postId))),
      },
      Mutation: {
        createPost: async (root, args, context, info) => {
          const res = await Posts.insert(args);
          return prepare(await Posts.findOne({_id: res.insertedIds[0]}));
        },
        createComment: async (root, args) => {
          const res = await Comments.insert(args);
          return prepare(await Comments.findOne({_id: res.insertedIds[0]}));
        },
      },
    };

    const schema = makeExecutableSchema({
      typeDefs,
      resolvers,
    });

    const app = fastify();

    app.get('/', (req, res) => res.send({ hello: 'world' }));

    app.get('/data', (req, res) => res.send({ data: 'Data from the server' }));

    app.post('/graphql', graphqlFastify({ schema }));

    app.get('/graphql', graphqlFastify({ schema }));

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

