import React, { Component } from 'react';
import ReactDOM from 'react-dom';

type Props = { message: string };

class App extends Component<Props> {
  render() {
    const { message } = this.props;
    return <div>{message}</div>;
  }
}

ReactDOM.render(
  <App message="Hello, world!" />,
  document.getElementById('root'),
);
