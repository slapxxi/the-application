import React from 'react';
import { render } from 'react-testing-library';
import Text from './Text';

const theme = {
  colors: {
    text: 'black',
  },
};

it('renders', () => {
  const { container } = render(<Text>sample text</Text>);
  expect(container.firstChild).toMatchSnapshot();
});

it('accepts `theme` prop', () => {
  const { container } = render(<Text theme={theme}>text</Text>);
  expect(container.firstChild).toMatchSnapshot();
});

it('does not throw if `theme` is malformed', () => {
  expect(() => render(<Text theme={{}}>text</Text>)).not.toThrow();
});
