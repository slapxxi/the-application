import React from 'react';
import ButtonGroup from './ButtonGroup';
import renderer from 'react-test-renderer';

it('renders', () => {
  const component = renderer
    .create(<ButtonGroup>hello</ButtonGroup>)
    .toJSON();
  expect(component).toMatchSnapshot();
});
