// @flow
import _ from 'lodash';
import styled from 'react-emotion';

const Button = styled('button')`
  display: inline-block;
  padding: 15px;
  border: 0;
  border-radius: 2px;
  background: ${(p) => _.get(p, 'theme.colors.button')};
  font-size: 15px;
  font-weight: 500;
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
