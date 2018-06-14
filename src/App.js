// @flow
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

type Props = {};

class App extends React.Component<Props> {
  render() {
    return (
      <Router>
        <div>noop</div>
      </Router>
    );
  }
}

export default App;
