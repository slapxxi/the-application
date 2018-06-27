import * as React from 'react';

interface Props {
  size?: number;
}

function Plus({ size = 16 }: Props) {
  return (
    <svg width={size} height={size} viewBox="0 0 100 100">
      <title>Plus Icon</title>
      <polygon points="100 38.19 61.81 38.19 61.81 0 38.19 0 38.19 38.19 0 38.19 0 61.81 38.19 61.81 38.19 100 61.81 100 61.81 61.81 100 61.81 100 38.19" />
    </svg>
  );
}

export default Plus;
