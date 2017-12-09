import React from 'react';
import { graphql } from 'react-apollo';
import PropTypes from 'prop-types';
import gql from 'graphql-tag';

const Post = post => (
  <li key={post.id}>
    <div>
      <h3>{post.title}</h3>
      <p>{post.content}</p>
    </div>
  </li>
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
        <ul>
          {posts.map(Post)}
        </ul>
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
