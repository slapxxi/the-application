import * as _ from 'lodash';
import styled from 'react-emotion';

const Button = styled('button')`
  padding: ${(p) => _.get(p, 'theme.sizes.padding')}px;
  border: 1px solid ${(p) => _.get(p, 'theme.colors.button')};
  background: ${(p) => _.get(p, 'theme.colors.button')};
  border-radius: 4px;
  font-size: ${(p) => _.get(p, 'theme.sizes.text')}px;
  font-weight: 500;
  color: ${(p) => _.get(p, 'theme.colors.buttonText')};
  fill: ${(p) => _.get(p, 'theme.colors.buttonText')};
  line-height: 0;
  vertical-align: middle;
  cursor: pointer;

  &:active {
    transform: translateY(1px);
    border-color: ${(p) => _.get(p, 'theme.colors.buttonActive')};
    background: ${(p) => _.get(p, 'theme.colors.buttonActive')};
    color: ${(p) => _.get(p, 'theme.colors.buttonTextActive')};
  }

  &:disabled {
    background: lightgrey;
    color: #bbbbbb;
    cursor: not-allowed;
  }
`;

export default Button;
