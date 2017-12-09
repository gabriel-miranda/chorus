import React from 'react';
import Link from 'next/link';
import withData from '../utils/withData';
import PostList from '../components/PostList';

const Home = () => (
  <div>
    Hello Chorus!
    <Link href="/about">
      <a>About</a>
    </Link>
    <PostList />
  </div>
);

export default withData(props => <Home />);
