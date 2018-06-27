import * as React from 'react';
import styled from 'react-emotion';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Header } from './components/index';
import { HomePage, LoginPage } from './pages/index';
import { Theme } from './context/index';
import { theme } from './design-system/index';

class App extends React.Component<any, any> {
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

const Container = styled('div')`
  padding: 20px;
`;

export default App;
