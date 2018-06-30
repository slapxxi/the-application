import { get } from 'lodash';
import styled from 'styled-components';

const Text = styled.p`
  text-overflow: ellipsis;
  font-size: 15px;
  line-height: 1.6;

  ${({ theme }) => {
    const color = get(theme, 'colors.text', 'black');
    return { color };
  }};
`;

export default Text;
