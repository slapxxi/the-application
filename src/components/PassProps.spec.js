import React from 'react';
import { render } from 'react-testing-library';
import PassProps from './PassProps';

it('passes a single prop to a child', () => {
  const { container } = render(
    <PassProps className="test">
      <span>hello</span>
    </PassProps>,
  );
  expect(container.firstChild.getAttribute('class')).toEqual('test');
});

it('passes all props down to a child', () => {
  const { container } = render(
    <PassProps className="test" id="id">
      <span>hello</span>
    </PassProps>,
  );
  expect(container.firstChild.getAttribute('id')).toEqual('id');
  expect(container.firstChild.getAttribute('class')).toEqual('test');
});

it('preserves children props', () => {
  const { container } = render(
    <PassProps className="test">
      <span id="id">hello</span>
    </PassProps>,
  );
  expect(container.firstChild.getAttribute('id')).toEqual('id');
});

it('passes props to all children', () => {
  const { container } = render(
    <PassProps className="test">
      <span>first</span>
      <span>second</span>
      <span>third</span>
    </PassProps>,
  );
  const children = Array.from(container.children);
  expect(children.map((c) => c.getAttribute('class'))).toEqual([
    'test',
    'test',
    'test',
  ]);
});

it('handles nesting', () => {
  const { container } = render(
    <PassProps className="test">
      <PassProps id="test">
        <span data-testid="child">test</span>
      </PassProps>
    </PassProps>,
  );
  expect(container.firstChild.getAttribute('id')).toEqual('test');
  expect(container.firstChild.getAttribute('class')).toEqual('test');
});
