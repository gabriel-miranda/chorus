import React from 'react';
import { graphql } from 'react-apollo';
import PropTypes from 'prop-types';
import gql from 'graphql-tag';
import Well from './ui/Well';


function PostSingle({
  data: {
    loading,
    error,
    post,
  },
}) {
  if (error) {
    return (
      <Well fullwidth>
        Error loading post
      </Well>
    );
  }
  if (post) {
    return (
      <Well fullwidth>
        <h1>{post.title}</h1>
        <p>{post.content[0].body}</p>
      </Well>
    );
  }
  return (
    <Well fullwidth>
      Loading
    </Well>
  );
}

PostSingle.propTypes = {
  data: PropTypes.object.isRequired,
};

export const post = gql`
  query Post($id: ID!) {
    post(_id: $id) {
      _id
      title
      created
      slug
      content {
        type
        body
      }
    }
  }
`;

// The `graphql` wrapper executes a GraphQL query and makes the results
// available on the `data` prop of the wrapped component (PostSingle)
export default graphql(post, {
  options: ({ id }) => ({ variables: { id } }),
  props: ({ data }) => ({
    data,
  }),
})(PostSingle);
