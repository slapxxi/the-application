import * as _ from 'lodash';
import styled from 'react-emotion';

const Input = styled('input')`
  appearance: none;
  display: block;
  padding: ${(p) => _.get(p, 'theme.sizes.padding')}px;
  border: 1px solid lightgrey;
  border-radius: 2px;
  line-height: 0;
  margin: 0;
  font-size: ${(p) => _.get(p, 'theme.sizes.text')}px;
`;

export default Input;
