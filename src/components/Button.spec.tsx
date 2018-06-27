import * as React from 'react';
import { render } from 'react-testing-library';
import Button from './Button';

const theme = {
  colors: {
    button: 'black',
    buttonActive: 'white',
    buttonText: 'white',
    buttonTextActive: 'black',
  },
};

it('renders', () => {
  const { container } = render(<Button>button</Button>);
  expect(container.firstChild).toMatchSnapshot();
});

it('accepts `disabled` prop', () => {
  const { container } = render(<Button disabled>button</Button>);
  expect(container.firstChild).toMatchSnapshot();
});

it('accepts `theme` prop', () => {
  const { container } = render(<Button theme={theme}>button</Button>);
  expect(container.firstChild).toMatchSnapshot();
});

it('does not throw if `theme` is malformed', () => {
  expect(() =>
    render(<Button theme={{}}>button</Button>),
  ).not.toThrow();
});
