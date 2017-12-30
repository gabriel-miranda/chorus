import React from 'react';
import PropTypes from 'prop-types';
import Post from '../components/Post';
import withData from '../utils/withData';
import Container from '../components/layout/Container';

const PostSingle = ({url}) => (
  <Container>
    <Post id={url.query.id} />
  </Container>
);

PostSingle.propTypes = {
  url: PropTypes.shape({
    query: PropTypes.shape({
      id: PropTypes.string,
    }),
  }).isRequired,
};

export default withData(props => <PostSingle {...props} />);
