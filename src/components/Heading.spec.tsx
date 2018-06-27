import * as React from 'react';
import { render } from 'react-testing-library';
import Heading from './Heading';

const theme = {
  colors: {
    heading: 'black',
  },
};

it('renders', () => {
  const { container } = render(<Heading>heading</Heading>);
  expect(container.firstChild).toMatchSnapshot();
});

it('accepts `theme` prop', () => {
  const { container } = render(<Heading theme={theme}>text</Heading>);
  expect(container.firstChild).toMatchSnapshot();
});

it('does not throw if `theme` is malformed', () => {
  expect(() =>
    render(<Heading theme={{}}>text</Heading>),
  ).not.toThrow();
});
