// @flow
import _ from 'lodash';
import styled from 'react-emotion';

const Button = styled('button')`
  padding: ${15 / 1.5}px 15px;
  border: 0;
  border-radius: 2px;
  text-transform: uppercase;
  font-size: 14px;
  font-weight: bold;
  background: ${(p) => _.get(p, 'theme.colors.button')};
  color: ${(p) => _.get(p, 'theme.colors.buttonText')};
  cursor: pointer;

  &:active {
    transform: translateY(1px);
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
