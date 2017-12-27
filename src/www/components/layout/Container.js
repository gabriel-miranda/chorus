import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Header from '../ui/Header';
import { sizes } from '../../theme/constants';
import LoadingBar from '../ui/LoadingBar';

const Main = styled.main`
  margin: 0 auto;
  width: ${sizes.main_width};
  padding-top: ${sizes.main_padding};
`;

const Container = ({children}) => (
  <div>
    <LoadingBar />
    <Header />
    <Main>
      {children}
    </Main>
  </div>
);

Container.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Container;
