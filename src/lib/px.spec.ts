import px from './px';

it('returns string representation in pixels', () => {
  const result = px(10);
  expect(result).toEqual('10px');
});

it('returns negative pixels', () => {
  const result = px(-10);
  expect(result).toEqual('-10px');
});

it('returns empty string if undefined', () => {
  const result = px(undefined);
  expect(result).toEqual('');
});
