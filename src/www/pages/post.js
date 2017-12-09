import React from 'react';
import Link from 'next/link';
import PropTypes from 'prop-types';
import Post from '../components/Post';
import withData from '../utils/withData';

const PostSingle = ({url}) => (
  <div>
    Hello Chorus!
    <Link href="/">
      <a>Home</a>
    </Link>
    <Post id={url.query.id} />
  </div>
);

PostSingle.propTypes = {
  url: PropTypes.shape({
    query: PropTypes.shape({
      id: PropTypes.string,
    }),
  }).isRequired,
};

export default withData(props => <PostSingle {...props} />);
