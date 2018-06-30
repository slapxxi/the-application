import React from 'react';
import renderer from 'react-test-renderer';
import { render } from 'react-testing-library';
import Text from './Text';

const theme = {
  colors: {
    text: 'hotpink',
  },
};

it('renders', () => {
  const component = renderer.create(<Text>sample text</Text>);
  expect(component).toMatchSnapshot();
});

it('accepts `theme` prop', () => {
  const component = renderer.create(
    <Text theme={theme}>sample text</Text>,
  );
  expect(component).toMatchSnapshot();
});

it('does not throw if `theme` is malformed', () => {
  expect(() => render(<Text theme={{}}>text</Text>)).not.toThrow();
});
