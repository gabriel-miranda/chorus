import styled from 'styled-components';
import { colors, shadows, sizes } from '../../theme/constants';

export default styled.header`
  background: ${colors.header_bg};
  box-shadow: ${shadows.header_shadow};
  height: ${sizes.header_height};
  width: ${sizes.header_width};
`;
