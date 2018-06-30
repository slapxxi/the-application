import React from 'react';
import renderer from 'react-test-renderer';
import { render } from 'react-testing-library';
import Heading from './Heading';

const theme = {
  colors: {
    heading: 'black',
  },
};

it('renders', () => {
  const component = renderer.create(<Heading />).toJSON();
  expect(component).toMatchSnapshot();
});

it('accepts `theme` prop', () => {
  const component = renderer
    .create(<Heading theme={theme} />)
    .toJSON();
  expect(component).toMatchSnapshot();
});

it('does not throw if `theme` is malformed', () => {
  expect(() =>
    render(<Heading theme={{}}>text</Heading>),
  ).not.toThrow();
});
