import React from 'react';
import styled from 'styled-components';
import { colors, sizes } from '../../../theme/constants';
import Main from '../../layout/Main';
import Top from './Top';
import Nav from './Nav';

const Header = styled.header`
  background: ${colors.header_bg};
  height: ${sizes.header_height};
  width: ${sizes.header_width};
`;


export default () => (
  <Header>
    <Main>
      <Top />
      <Nav />
    </Main>
  </Header>
);
