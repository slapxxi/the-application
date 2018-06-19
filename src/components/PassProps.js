// @flow
import React from 'react';
import type { Node } from 'react';

type Props = { children: Node };

function PassProps({ children, ...props }: Props) {
  return React.Children.map(children, (c) =>
    React.cloneElement(c, props),
  );
}

export default PassProps;
