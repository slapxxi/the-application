import React from 'react';
import { render } from 'react-testing-library';
import Arrow from './Arrow';

it('renders', () => {
  const { container } = render(<Arrow />);
  expect(container.firstChild).toMatchSnapshot();
});

it('accepts "size" prop', () => {
  const { container } = render(<Arrow size={32} />);
  expect(container.firstChild).toMatchSnapshot();
});

it('accepts "up" direction', () => {
  const { container } = render(<Arrow direction="up" />);
  expect(container.firstChild).toMatchSnapshot();
});

it('accepts "right" direction', () => {
  const { container } = render(<Arrow direction="right" />);
  expect(container.firstChild).toMatchSnapshot();
});

it('accepts "down" direction', () => {
  const { container } = render(<Arrow direction="down" />);
  expect(container.firstChild).toMatchSnapshot();
});

it('accepts "left" direction', () => {
  const { container } = render(<Arrow direction="left" />);
  expect(container.firstChild).toMatchSnapshot();
});
