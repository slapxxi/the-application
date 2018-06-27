import * as React from 'react';

interface Props {
  size?: number;
  direction?: 'up' | 'down' | 'left' | 'right';
}

function Arrow({ size = 16, direction = 'down' }: Props) {
  const transform = directionToTransform(direction);
  return (
    <svg width={size} height={size} viewBox="0 0 100 100">
      <title>Arrow Icon</title>
      <path
        d="M50,81.73,3.51,35.24A8,8,0,0,1,14.82,23.93L50,59.1,85.17,23.93A8,8,0,1,1,96.49,35.24Z"
        transform={transform}
      />
    </svg>
  );
}

function directionToTransform(direction) {
  switch (direction) {
    case 'up':
      return 'rotate(180, 50, 50)';
    case 'right':
      return 'rotate(-90, 50, 50)';
    case 'down':
      return undefined;
    case 'left':
      return 'rotate(90, 50, 50)';
    default:
      return undefined;
  }
}

export default Arrow;
