import React, { Component } from 'react';
import glamorous from 'glamorous';

type Props = {};

class App extends Component<Props> {
  ref: Object;

  constructor(props) {
    super(props);
    this.ref = React.createRef();
  }

  componentDidMount() {
    const node: HTMLElement = this.ref.current;
    console.log(node.getBoundingClientRect());
  }

  render() {
    return <Container innerRef={this.ref}>Hello, World!</Container>;
  }
}

const Container = glamorous.div({
  padding: 10,
});

export default App;
