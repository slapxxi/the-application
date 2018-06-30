import { get } from 'lodash';
import styled from 'styled-components';

const Input = styled.input`
  appearance: none;
  display: block;
  padding: ${(p) => get(p, 'theme.sizes.padding')}px;
  border: 1px solid lightgrey;
  border-radius: 2px;
  line-height: 0;
  margin: 0;
  font-size: ${(p) => get(p, 'theme.sizes.text')}px;
`;

export default Input;
