import React from 'react';
import { render } from 'react-testing-library';
import PassProps from './PassProps';

it('passes a single prop down', () => {
  const { container } = render(
    <PassProps className="test">
      <span>hello</span>
    </PassProps>,
  );
  expect(container.firstChild.getAttribute('class')).toEqual('test');
});

it('passes all props down', () => {
  const { container } = render(
    <PassProps className="test" id="unique">
      <span>hello</span>
    </PassProps>,
  );
  expect(container.firstChild.getAttribute('class')).toEqual('test');
  expect(container.firstChild.getAttribute('id')).toEqual('unique');
});

it('preserves children props', () => {
  const { container } = render(
    <PassProps className="test">
      <span id="unique">hello</span>
    </PassProps>,
  );
  expect(container.firstChild.getAttribute('id')).toEqual('unique');
});

it('passes props to all children', () => {
  const { container } = render(
    <PassProps className="test">
      <span>first</span>
      <span>second</span>
      <span>third</span>
    </PassProps>,
  );
  container.childNodes.forEach((c) =>
    expect(c.getAttribute('class')).toEqual('test'),
  );
});
