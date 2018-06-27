import * as React from 'react';
import { isElement } from 'react-dom/test-utils';

function PassProps({ children, ...props }) {
  return React.Children.map(children, (c) => {
    if (isElement(c)) {
      return React.cloneElement(c, props);
    }
    return c;
  });
}

export default PassProps;
