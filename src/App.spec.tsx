import React from 'react';
import { render } from 'react-testing-library';
import App from './App';

it('renders', () => {
  const { container } = render(<App />);
  expect(container).not.toBeUndefined();
});
