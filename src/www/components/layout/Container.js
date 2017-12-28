import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { sizes } from '../../theme/constants';
import Header from '../ui/Header';
import LoadingBar from '../ui/LoadingBar';
import Main from './Main';

const StyledMain = styled(Main)`
  display: flex;
  justify-content: space-between;
  padding-top: ${sizes.main_padding};
`;

const Container = ({children}) => (
  <div>
    <LoadingBar />
    <Header />
    <StyledMain>
      {children}
    </StyledMain>
  </div>
);

Container.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Container;
