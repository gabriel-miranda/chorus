import React from 'react';
import styled from 'styled-components';
import { sizes, colors } from '../../../theme/constants';
import { Link } from '../../../routes';

const Nav = styled.nav`
  display: flex;
  align-items: center;
  height: ${sizes.nav};
`;

const NavItem = styled.a`
  color: ${colors.nav_item};
  padding: 0 ${sizes.nav_item_padding};
  font-size: ${sizes.nav_item_font};
  &:hover {
    color: ${colors.nav_item_hover};
  }
`;

export default () => (
  <Nav>
    <Link route="/">
      <NavItem>
        Home
      </NavItem>
    </Link>
  </Nav>
);

