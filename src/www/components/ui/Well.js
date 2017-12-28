import styled from 'styled-components';
import { sizes, colors } from '../../theme/constants';

export default styled.article`
  padding: ${sizes.post_padding};
  margin-bottom: ${sizes.post_margin};
  border-radius: ${sizes.post_radius};
  background: ${colors.well};
`;
