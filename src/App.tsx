import * as React from 'react';
import styled from 'styled-components';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Header } from './components';
import { HomePage, LoginPage } from './pages';
import { Theme } from './context';
import { theme } from './design-system';

class App extends React.Component<{}, {}> {
  public render() {
    return (
      <Theme.Provider value={theme}>
        <Router>
          <Container>
            <Header />
            <Route exact path="/" render={() => <HomePage />} />
            <Route path="/login" render={() => <LoginPage />} />
          </Container>
        </Router>
      </Theme.Provider>
    );
  }
}

const Container = styled.div`
  padding: 20px;
`;

export default App;
