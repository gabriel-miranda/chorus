import React from 'react';
import gql from 'graphql-tag';
import PropTypes from 'prop-types';
import { graphql } from 'react-apollo';
import { Link } from '../routes';
import Well from './ui/Well';

const Post = post => (
  <Well key={post._id}>
    <div>
      <Link route={`/post/${post._id}`}>
        <a>
          <h3>{post.title}</h3>
          <p>{post.content}</p>
        </a>
      </Link>
    </div>
  </Well>
);

function PostList({
  data: {
    loading,
    error,
    posts,
  },
}) {
  if (error) {
    return (
      <div>Error loading posts</div>
    );
  }
  if (posts && posts.length) {
    return (
      <section>
        {posts.map(Post)}
      </section>
    );
  }
  return <div>Loading</div>;
}

PostList.propTypes = {
  data: PropTypes.object.isRequired,
};

export const posts = gql`
  query posts {
    posts {
      _id
      title
      content
    }
  }
`;

// The `graphql` wrapper executes a GraphQL query and makes the results
// available on the `data` prop of the wrapped component (PostList)
export default graphql(posts, {
  props: ({ data }) => ({
    data,
  }),
})(PostList);
