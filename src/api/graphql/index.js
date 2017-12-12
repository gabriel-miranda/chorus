import HttpStatus from 'http-status-codes';
import { ObjectId } from 'mongodb';
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
    post: async (root, {_id}, ctx) => {
      const post = await ctx.Posts.findOne(ObjectId(_id));
      if (!post) {
        throw HttpStatus.NOT_FOUND;
      }
      return prepare(post);
    },
    posts: async (root, {after, count}, ctx) => {
      const q = after ? {_id: {$gt: ObjectId(after)}} : {};
      const c = count || 20;
      return (await ctx.Posts.find(q).limit(c).toArray()).map(prepare);
    },
    comment: async (root, {_id}, ctx) =>
      prepare(await ctx.Comments.findOne(ObjectId(_id))),
  },
  Post: {
    comments: async ({_id}, ctx) =>
      await (ctx.Comments.find({postId: _id}).toArray()).map(prepare),
  },
  Comment: {
    post: async ({postId}, ctx) =>
      prepare(await ctx.Posts.findOne(ObjectId(postId))),
  },
  Mutation: {
    createPost: async (root, args, ctx, info) => {
      const res = await ctx.Posts.insert({
        _id: shortid.generate(),
        ...args,
      });
      return prepare(await ctx.Posts.findOne({_id: res.insertedIds[0]}));
    },
    createComment: async (root, args, ctx) => {
      const res = await ctx.Comments.insert({
        _id: shortid.generate(),
        ...args,
      });
      return prepare(await ctx.Comments.findOne({_id: res.insertedIds[0]}));
    },
  },
};

export default makeExecutableSchema({
  typeDefs,
  resolvers,
});
