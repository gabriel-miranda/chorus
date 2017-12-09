import React from 'react';
import { graphql } from 'react-apollo';
import PropTypes from 'prop-types';
import gql from 'graphql-tag';

function PostList({
  data: {
    loading,
    error,
    post,
  },
}) {
  if (error) {
    return (
      <div>Error loading post</div>
    );
  }
  if (post) {
    return (
      <section>
        <h1>{post.title}</h1>
        <p>{post.content}</p>
      </section>
    );
  }
  return <div>Loading</div>;
}

PostList.propTypes = {
  data: PropTypes.object.isRequired,
};

export const post = gql`
  query Post($id: String) {
    post(_id: $id) {
      _id
      title
      content
    }
  }
`;

// The `graphql` wrapper executes a GraphQL query and makes the results
// available on the `data` prop of the wrapped component (PostList)
export default graphql(post, {
  options: ({ id }) => ({ variables: { id } }),
  props: ({ data }) => ({
    data,
  }),
})(PostList);
