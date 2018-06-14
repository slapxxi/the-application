import React from 'react';
import { render } from 'react-testing-library';
import App from './App';

it('renders', () => {
  const { debug } = render(<App />);
  debug();
});
