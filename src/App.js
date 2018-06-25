// @flow
import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import styled from 'react-emotion';
import { Header } from './components';
import { HomePage, LoginPage } from './pages';

type Props = {};

class App extends React.Component<Props> {
  render() {
    return (
      <Router>
        <Container>
          <Header />
          <Route exact path="/" render={() => <HomePage />} />
          <Route path="/login" render={() => <LoginPage />} />
        </Container>
      </Router>
    );
  }
}

const Container = styled('div')`
  padding: 20px;
`;

export default App;
