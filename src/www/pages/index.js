import React from 'react';
import withData from '../utils/withData';
import PostList from '../components/PostList';
import Container from '../components/layout/Container';
import Feed from '../components/layout/Feed';
import Sidebar from '../components/layout/Sidebar';

const Home = () => (
  <Container>
    <Feed>
      <PostList />
    </Feed>
    <Sidebar />
  </Container>
);

export default withData(props => <Home />);
