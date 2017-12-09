import React from 'react';
import withData from '../utils/withData';
import PostList from '../components/PostList';

const Home = () => (
  <div>
    Hello Chorus!
    <PostList />
  </div>
);

export default withData(props => <Home />);
