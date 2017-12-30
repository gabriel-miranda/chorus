import styled from 'styled-components';
import { sizes, mediaQueries } from '../../theme/constants';

export default styled.main`
  max-width: 100%;
  width: 100%;
  ${mediaQueries.desktop} {
    width: ${sizes.feed};
  }
`;
