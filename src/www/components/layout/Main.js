import styled from 'styled-components';
import { sizes, mediaQueries } from '../../theme/constants';

export default styled.div`
  margin: 0 auto;
  width: 100%;
  max-width: 100%;
  ${mediaQueries.desktop}  {
    width: ${sizes.main_width};
  }
`;
