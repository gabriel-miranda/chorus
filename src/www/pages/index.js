import React from 'react';
import withData from '../utils/withData';
import PostList from '../components/PostList';
import Container from '../components/layout/Container';

const Home = () => (
  <Container>
    <PostList />
  </Container>
);

export default withData(props => <Home />);
