import styled from 'styled-components';
import { sizes, mediaQueries } from '../../theme/constants';

export default styled.aside`
  display: none;
  width: ${sizes.sidebar};
  ${mediaQueries.desktop}  {
    display: flex;
  }
`;
