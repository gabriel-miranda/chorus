import styled from 'styled-components';
import { sizes, borders } from '../../theme/constants';

export default styled.article`
  padding: ${sizes.post_padding};
  margin-bottom: ${sizes.post_margin};
  border: ${borders.light_grey};
  border-radius: ${sizes.post_radius};
`;
