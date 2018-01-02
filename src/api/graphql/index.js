import { makeExecutableSchema } from 'graphql-tools';
import Post from '../models/post';
import { NotFoundError, wrapErrorClientReadable } from '../../www/lib/error';

const typeDefs = [`
  type Query {
    post(_id: ID!): Post
    posts(after: String, count: Int): [PostSummary]
  }
  type Post {
    _id: ID!
    title: String!
    content: [MarkdownBlockOutput!]
    created: String
    slug: String!
  }
  type PostSummary {
    _id: ID!
    title: String!
    excerpt: String!
    created: String
    slug: String!
  }
  type MarkdownBlockOutput {
    type: String!
    body: String!
  }
  input MarkdownBlockInput {
    type: String!
    body: String!
  }
  type Mutation {
    createPost(title: String!, content: [MarkdownBlockInput!]): Post
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
        throw wrapErrorClientReadable(new NotFoundError());
      }
      return new Post(post).buildBaseView();
    },
    posts: async (root, {after, count}, ctx) => {
      const q = after ? {_id: {$gt: after}} : {};
      const c = count || 20;
      return (await ctx
        .Posts
        .find(q)
        .limit(c)
        .sort({ $natural: -1 })
        .toArray()
      ).map(post => new Post(post).buildSummary());
    },
  },
  Mutation: {
    createPost: async (root, {title, content}, ctx, info) => {
      const post = new Post({title, content});
      const res = await ctx.Posts.insert(post);
      return await ctx.Posts.findOne({_id: res.insertedIds[0]});
    },
  },
};

export default makeExecutableSchema({
  typeDefs,
  resolvers,
});
