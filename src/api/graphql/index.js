import HttpStatus from 'http-status-codes';
import { makeExecutableSchema } from 'graphql-tools';
import shortid from 'shortid';

const prepare = (o) => {
  o._id = o._id.toString();
  return o;
};

const typeDefs = [`
  type Query {
    post(_id: String): Post
    posts(after: String, count: Int): [Post]
  }
  type Post {
    _id: String
    title: String
    content: String
  }
  type Mutation {
    createPost(title: String, content: String): Post
  }
  schema {
    query: Query
    mutation: Mutation
  }
`];

const resolvers = {
  Query: {
    post: async (root, {_id}, ctx) => {
      const post = await ctx.Posts.findOne({_id});
      if (!post) {
        throw HttpStatus.NOT_FOUND;
      }
      return prepare(post);
    },
    posts: async (root, {after, count}, ctx) => {
      const q = after ? {_id: {$gt: after}} : {};
      const c = count || 20;
      return (await ctx.Posts.find(q).limit(c).toArray()).map(prepare);
    },
  },
  Mutation: {
    createPost: async (root, args, ctx, info) => {
      const res = await ctx.Posts.insert({
        _id: shortid.generate(),
        ...args,
      });
      return prepare(await ctx.Posts.findOne({_id: res.insertedIds[0]}));
    },
  },
};

export default makeExecutableSchema({
  typeDefs,
  resolvers,
});
