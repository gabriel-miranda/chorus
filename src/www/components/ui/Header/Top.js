import React from 'react';
import styled from 'styled-components';
import { Link } from '../../../routes';
import { sizes, borders, colors, LOGO_URL } from '../../../theme/constants';

const Top = styled.div`
  display: flex;
  align-items: center;
  height: ${sizes.header};
  border-bottom: ${borders.header};
`;

const Logo = styled.img`
  height: ${sizes.logo};
  margin: 0 ${sizes.logo_margin};
`;

const Title = styled.h1`
  font-size: ${sizes.logo_title};
  color: ${colors.logo_title};
`;

export default () => (
  <Top>
    <Logo src={LOGO_URL} alt="logo" />
    <Title>
      <Link route="/">
        <a>chorus</a>
      </Link>
    </Title>
  </Top>
);
