import React from 'react';
import renderer from 'react-test-renderer';
import { render } from 'react-testing-library';
import Button from './Button';

const theme = {
  colors: {
    button: 'pink',
    buttonText: 'hotpink',
  },
};

it('renders', () => {
  const component = renderer.create(<Button />).toJSON();
  expect(component).toMatchSnapshot();
});

it('accepts `disabled` prop', () => {
  const component = renderer.create(<Button disabled />).toJSON();
  expect(component).toMatchSnapshot();
});

it('accepts `theme` prop', () => {
  const component = renderer
    .create(<Button theme={theme} />)
    .toJSON();
  expect(component).toMatchSnapshot();
});

it('does not throw if `theme` is malformed', () => {
  expect(() =>
    render(<Button theme={{}}>button</Button>),
  ).not.toThrow();
});
