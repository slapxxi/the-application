import * as React from 'react';
import { render } from 'react-testing-library';
import PassProps from './PassProps';

it('passes a single prop to a child', () => {
  const { container } = render(
    <PassProps id="test">
      <span>hello</span>
    </PassProps>,
  );
  expect(container.firstChild.getAttribute('id')).toEqual('test');
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
    <PassProps id="id">
      <span className="test">hello</span>
    </PassProps>,
  );
  expect(container.firstChild.getAttribute('class')).toEqual('test');
});

it('passes props to all children', () => {
  const { container } = render(
    <PassProps id="test">
      <span>first</span>
      <span>second</span>
      <span>third</span>
    </PassProps>,
  );
  const children = Array.from(container.children);
  expect(children.map((c) => c.getAttribute('id'))).toEqual([
    'test',
    'test',
    'test',
  ]);
});

it('handles nesting', () => {
  const { container } = render(
    <PassProps id="test">
      <PassProps className="test">
        <span data-testid="child">test</span>
      </PassProps>
    </PassProps>,
  );
  expect(container.firstChild.getAttribute('id')).toEqual('test');
  expect(container.firstChild.getAttribute('class')).toEqual('test');
});

it('ignores non element children', () => {
  const { container } = render(
    <PassProps id="test">
      text
      <span>test</span>
    </PassProps>,
  );
  expect(container.lastChild.getAttribute('id')).toEqual('test');
});
