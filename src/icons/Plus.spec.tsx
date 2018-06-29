import React from 'react';
import { render } from 'react-testing-library';
import Plus from './Plus';

it('renders', () => {
  const { container } = render(<Plus />);
  expect(container.firstChild).toMatchSnapshot();
});

it('accepts "size" prop', () => {
  const { container } = render(<Plus size={32} />);
  expect(container.firstChild).toMatchSnapshot();
});
