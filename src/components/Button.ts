import { get } from 'lodash';
import { darken, invert, lighten } from 'polished';
import { px } from '../lib';
import styled from 'styled-components';

const Button = styled.button`
  border-radius: 4px;
  font-weight: 500;
  line-height: 0;
  vertical-align: middle;
  cursor: pointer;

  &:disabled {
    background: 'lightgrey';
    color: #bbb;
    cursor: not-allowed;
  }

  ${({ theme }) => {
    const font = get(theme, 'sizes.text');
    const padding = get(theme, 'sizes.padding', 10) / 1.5;
    const background = get(theme, 'colors.button', 'black');
    return {
      border: `1px solid ${background}`,
      color: invert(background),
      fill: invert(background),
      fontSize: px(font),
      padding: px(padding),
      '&:hover': {
        background,
        color: lighten(0.9, invert(background)),
      },
      '&:active': {
        borderColor: darken(0.1, background),
        background: darken(0.1, background),
        color: lighten(0.1, invert(background)),
      },
    };
  }};
`;

export default Button;
